# Software Requirements Specification (SRS) for Decentralized "College Notices" Project

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the requirements and specification for the "College Notices" platform, a decentralized application (dApp) designed to securely and transparently disseminate official notices within an educational institution.

### 1.2 Scope
This project entails a web-based dashboard for students and staff, and a blockchain-based backend for immutable notice storage and verification. It will feature varying levels of access to ensure only authorized personnel can broadcast notices, while ensuring those notices are publicly verifiable and permanently recorded without incurring costs for the readers.

## 2. Overall Description

### 2.1 User Classes and Characteristics
*   **Public / Student View (Read-Only):**
    *   No login or authentication required.
    *   Can seamlessly browse the dashboard, view notices, and search for specific updates.
*   **Faculty Access (Write-Access):**
    *   Authenticate using a Web3 wallet (e.g., MetaMask).
    *   Authorized to draft and publish notices to the blockchain.
*   **Super Admin (Project Head/HOD):**
    *   The wallet that deployed the smart contract.
    *   Has exclusive rights to grant or revoke posting permissions for faculty wallets.

### 2.2 Operating Environment
*   **Frontend:** Web browser (Chrome, Firefox, Safari, Edge) supporting modern web standards (HTML5, CSS3, JavaScript ES6+).
*   **Backend / Blockchain:** EVM-compatible blockchain network (e.g., Ethereum, Polygon, or an L2 testnet) for smart contract deployment.
*   **Integration:** Designed to be compatible with legacy systems, specifically the PHP-based `gbpuat-tech.ac.in` website via iframe or script injection.

## 3. System Features and Requirements

### 3.1 User Roles & Authentication
*   **REQ-1.1:** The system shall allow public, unauthenticated read access to all notices.
*   **REQ-1.2:** The system shall authenticate Faculty and Super Admin users via a Web3 wallet connection.
*   **REQ-1.3:** The system shall restrict notice creation functionality to wallets explicitly authorized by the Super Admin.
*   **REQ-1.4:** The Super Admin shall have the ability to authorize and de-authorize specific Web3 wallet addresses for faculty access.

### 3.2 Frontend Interface (UI/UX)
*   **REQ-2.1 Responsive Design:** The interface shall be mobile-friendly and utilize Tailwind CSS for responsive layouts.
*   **REQ-2.2 Branding:** The UI shall feature the official College of Technology (COT) logo and institutional blue color palette.
*   **REQ-2.3 Landing/About Page:** The application shall include an introduction page crediting the development team and project guides.
*   **REQ-2.4 Notice Dashboard:** Notices shall be displayed as clean, readable cards showing the title, date, department tag, and a content snippet.
*   **REQ-2.5 Theme Toggle:** A user-accessible switch shall be provided to toggle between Dark and Light UI modes.
*   **REQ-2.6 Search Engine:** A search bar shall allow users to filter notices by keywords, dates, or specific departments.
*   **REQ-2.7 Loading States:** UI skeletons shall be displayed during blockchain data fetching to ensure a smooth user experience.

### 3.3 Blockchain Backend (Smart Contracts)
*   **REQ-3.1 Immutable Storage:** Notices shall be permanently and securely stored on the blockchain.
*   **REQ-3.2 Role-Based Access Control (RBAC):** Smart contracts shall implement `onlyOwner` and `onlyAuthorized` modifiers to strictly prevent unauthorized posting.
*   **REQ-3.3 Timestamping:** Each notice shall automatically generate a Unix timestamp upon block mining, proving its time of issuance.
*   **REQ-3.4 Gas-Free Reading:** The smart contract shall utilize optimized `view` functions (e.g., `getNotices`) to ensure users do not pay gas fees to read updates.

### 3.4 Middleware & Integration
*   **REQ-4.1 Ethers.js Bridge:** Ethers.js shall be used to connect the frontend UI to the blockchain network for reading and writing data.
*   **REQ-4.2 Legacy Compatibility:** The architecture shall support embedding into the existing PHP-based legacy website via iframe or lightweight script injection.

### 3.5 Web2 "Quality of Life" Features
*   **REQ-5.1 Email Subscriptions:** The frontend shall include a UI component allowing students to opt-in for email alerts when new notices are published (backend implementation deferred or handled via third-party API).
