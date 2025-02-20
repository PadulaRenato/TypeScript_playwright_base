# Playwright-JS Project Setup

## Requirements

1. Node.js
2. Java Development Kit (JDK) (and JAVA_HOME on PATH)
3. Git

## Setup Steps

### 1. Install Node.js

Download and install Node.js from the official website: https://nodejs.org/

### 2. Install Java Development Kit (JDK)

Download and install the JDK from the official Oracle website or from an open-source distribution like AdoptOpenJDK: https://adoptopenjdk.net/

After installation, set the `JAVA_HOME` environment variable:

#### Windows

1. Open Control Panel.
2. Go to System and Security > System > Advanced system settings.
3. Click on "Environment Variables".
4. In "System variables", click "New" and add a new variable named `JAVA_HOME` with the path to the Java installation directory.
5. Find the `Path` variable in "System variables", select it, and click "Edit". Add `%JAVA_HOME%\bin` to the end of the list of paths.

### 3. Clone the Repository

Clone the project repository to your local machine:

```bash
git clone <repository-URL>

### 4. Navigate to the Project Directory

Navigate to the cloned project directory:
cd <project-directory-name>

### 5. Install Dependencies

Run the following command to install all dependencies listed in the package.json file:

npm install

### 6. Run the Tests

Run the tests to generate the Allure reports:

Note: The allure-results and screenshots folders are automatically deleted before each test run to ensure a clean test environment.

### 7. Generate and Open the Allure Report

After running the tests, generate and open the Allure report:

npm run report

Available Scripts
npm run test: Runs the tests using Playwright.
npm run report: Generates the Allure report from the test results and opens the report in the browser.
Contact
For more information, contact the project author.
