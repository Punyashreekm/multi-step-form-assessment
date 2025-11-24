# Multi-Step Form Application

This project is a multi-step form application built with React. It utilizes React Context for state management to ensure that form data persists across multiple steps. The application is designed to be user-friendly and responsive, leveraging Tailwind CSS for styling.

## Features

- Multi-step form with navigation
- Form data persistence across steps
- Validation for each step

🌐 Live Demo

You can preview the deployed version here: https://bounty-creation-form.netlify.app/

## Project Structure

/components

Contains all UI components used in the form flow, including the Sidebar, Confirmation screen, Result screen, and individual step components under /steps.

/context

Includes the React Context and Provider that manage global form data, ensuring all step inputs persist across navigation.

/utils

Holds helper functions such as validation.js, which provides step-wise input validation and reusable logic for form checks.

App.jsx

Serves as the main routing/flow controller for the application, switching between Step One, Step Two, Step Three, Confirmation, and Result pages.


## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Punyashreekm/multi-step-form-assessment
   ```
2. Navigate to the project directory:
   ```
   cd multi-step-form
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the development server, run:
```
npm run dev
```

Open your browser and go to `http://localhost:3000` to view the application.
