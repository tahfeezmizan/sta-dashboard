Project Overview

This project implements a user authentication and verification system with full responsiveness across all devices. The system includes user registration, login, email verification, OTP-based password recovery, and password reset functionalities.

Completed Features

User Registration, Login, Email Verification, OTP Verification, Password Reset, and API Integration.

Design Implementation

The application is fully responsive and adapts to different screen.

Issues Faced & Solutions

1. CORS Error on OTP Verification API

Problem: Encountered CORS issues when calling the verify OTP API.

Solution: Configured the backend server to allow proper CORS handling.

2. Verification Code Resend Issue

Problem: The resend OTP feature was not functioning properly.

Solution: Updated API request headers and ensured correct email parsing.

3. Full Name Not Adding During Registration

Problem: User's full name was not being stored.

Solution: Fixed API payload structure and ensured that fullName was correctly passed in the request.