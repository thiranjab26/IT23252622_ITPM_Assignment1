# SwiftTranslator Playwright Test Automation

This repository contains Playwright test automation scripts for the website **SwiftTranslator** (https://www.swifttranslator.com/).  
The tests include **positive** and **negative** scenarios to validate the translation functionality.

---

##  Project Overview

This project is created for a campus assignment to validate the **Singlish to Sinhala** translation feature.  
It includes:

- 24 Positive Test Scenarios
- 10 Negative Test Scenarios 
- Playwright configuration
- HTML test report

---

##  Prerequisites

Before running the tests, make sure you have installed:

- Node.js (Recommended: v18 or higher)
- npm (comes with Node.js)
- Git

---

## Installation

1. Open your project folder in VS Code.
2. Open Terminal.
3. Install dependencies:

bash
npm install

## install playwright Browsers

bash
npx playwright install

## Running Test

bash
npx playwright test

## Generate HTML Report

bash
npx playwright show-report

 ## Folder Structure
project-root/
├── tests/
│   ├── positive/
│   │   └── pos_fun1.spec.ts
│   ├── negative/
│   │   └── Neg_Fun1.spec.ts
├── playwright.config.ts
├── package.json
├── package-lock.json
