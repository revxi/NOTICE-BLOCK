import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs.js";
import { expect } from "chai";
import hre from "hardhat";

describe("NoticeBoard", function () {
  let NoticeBoard;
  let noticeBoard;
  let owner;
  let faculty1;
  let faculty2;
  let publicUser;

  beforeEach(async function () {
    [owner, faculty1, faculty2, publicUser] = await hre.ethers.getSigners();
    NoticeBoard = await hre.ethers.getContractFactory("NoticeBoard");
    noticeBoard = await NoticeBoard.deploy();
    await noticeBoard.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await noticeBoard.owner()).to.equal(owner.address);
    });
  });

  describe("Role-Based Access Control", function () {
    it("Should allow the owner to authorize a faculty", async function () {
      await expect(noticeBoard.authorizeFaculty(faculty1.address))
        .to.emit(noticeBoard, "FacultyAuthorized")
        .withArgs(faculty1.address);

      expect(await noticeBoard.authorizedFaculty(faculty1.address)).to.be.true;
    });

    it("Should not allow a non-owner to authorize a faculty", async function () {
      await expect(noticeBoard.connect(faculty1).authorizeFaculty(faculty2.address))
        .to.be.revertedWith("Only the Super Admin can perform this action");
    });

    it("Should allow the owner to revoke a faculty", async function () {
      await noticeBoard.authorizeFaculty(faculty1.address);
      await expect(noticeBoard.revokeFaculty(faculty1.address))
        .to.emit(noticeBoard, "FacultyRevoked")
        .withArgs(faculty1.address);

      expect(await noticeBoard.authorizedFaculty(faculty1.address)).to.be.false;
    });
  });

  describe("Publishing Notices", function () {
    it("Should allow the owner to publish a notice", async function () {
      await expect(noticeBoard.publishNotice("Test Notice", "CS Dept", "This is a test snippet"))
        .to.emit(noticeBoard, "NoticePublished")
        .withArgs(0, "Test Notice", owner.address, anyValue);
    });

    it("Should allow an authorized faculty to publish a notice", async function () {
      await noticeBoard.authorizeFaculty(faculty1.address);
      await expect(noticeBoard.connect(faculty1).publishNotice("Faculty Notice", "Math Dept", "Faculty snippet"))
        .to.emit(noticeBoard, "NoticePublished")
        .withArgs(0, "Faculty Notice", faculty1.address, anyValue);
    });

    it("Should not allow an unauthorized user to publish a notice", async function () {
      await expect(noticeBoard.connect(publicUser).publishNotice("Hacked", "Any Dept", "Hacker snippet"))
        .to.be.revertedWith("Not authorized to publish notices");
    });
  });

  describe("Reading Notices", function () {
    it("Should allow anyone to read notices without gas (view function)", async function () {
      await noticeBoard.publishNotice("Notice 1", "Dept 1", "Snippet 1");
      await noticeBoard.publishNotice("Notice 2", "Dept 2", "Snippet 2");

      const notices = await noticeBoard.connect(publicUser).getNotices();
      expect(notices.length).to.equal(2);
      expect(notices[0].title).to.equal("Notice 1");
      expect(notices[1].title).to.equal("Notice 2");
    });
  });
});
