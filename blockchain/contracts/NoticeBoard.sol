// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract NoticeBoard {
    address public owner;

    struct Notice {
        string title;
        string department;
        string contentSnippet;
        uint256 timestamp;
        address author;
    }

    Notice[] public notices;

    mapping(address => bool) public authorizedFaculty;

    event NoticePublished(uint256 indexed noticeId, string title, address indexed author, uint256 timestamp);
    event FacultyAuthorized(address indexed faculty);
    event FacultyRevoked(address indexed faculty);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the Super Admin can perform this action");
        _;
    }

    modifier onlyAuthorized() {
        require(authorizedFaculty[msg.sender] || msg.sender == owner, "Not authorized to publish notices");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function authorizeFaculty(address faculty) public onlyOwner {
        authorizedFaculty[faculty] = true;
        emit FacultyAuthorized(faculty);
    }

    function revokeFaculty(address faculty) public onlyOwner {
        authorizedFaculty[faculty] = false;
        emit FacultyRevoked(faculty);
    }

    function publishNotice(string memory _title, string memory _department, string memory _contentSnippet) public onlyAuthorized {
        notices.push(Notice({
            title: _title,
            department: _department,
            contentSnippet: _contentSnippet,
            timestamp: block.timestamp,
            author: msg.sender
        }));

        emit NoticePublished(notices.length - 1, _title, msg.sender, block.timestamp);
    }

    function getNotices() public view returns (Notice[] memory) {
        return notices;
    }
}
