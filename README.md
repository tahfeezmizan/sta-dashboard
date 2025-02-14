# User Authentication and Verification System

This project implements a user authentication and verification system with full responsiveness across all devices. The system includes user registration, login, email verification, OTP-based password reset, and password reset functionalities.

## Features

- **User Authentication**
  - User Registration
  - Login
  - Email Verification
  - OTP Verification
  - Password Reset
  - API Integration

## Design Implementation

- Fully responsive across all devices.
- Utilizes **Ant Design** and **TailwindCSS** for UI components and styling.

## Issues Faced & Solutions

### 1. CORS Error on OTP Verification API
- **Problem:** Encountered CORS issues when calling the verify OTP API.
- **Solution:** Configured the backend server to allow proper CORS handling.

### 2. Verification Code Resend Issue
- **Problem:** The resend OTP feature was not functioning properly.
- **Solution:** Updated API request headers and ensured correct email parsing.

### 3. Full Name Not Adding During Registration
- **Problem:** User's full name was not being stored.
- **Solution:** Fixed API payload structure and ensured that `fullName` was correctly passed in the request.

## Project Setup

### Install Dependencies
```sh
npm install
```

### Run the Project
```sh
npm start
```

## Live Link
[STA Dashboard](https://sta-dashboard-nine.vercel.app/)

## GitHub Repository
[GitHub Repo](https://github.com/tahfeezmizan/sta-dashboard.git)
