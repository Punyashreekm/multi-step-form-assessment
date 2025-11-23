# Multi-Step Form Application

This project is a multi-step form application built with React. It utilizes React Context for state management to ensure that form data persists across multiple steps. The application is designed to be user-friendly and responsive, leveraging Tailwind CSS for styling.

## Features

- Multi-step form with navigation
- Form data persistence across steps
- Validation for each step
- Responsive design

## Project Structure

```
multi-step-form
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── Sidebar.jsx
│   │   └── steps
│   │       ├── StepOne-Basics.jsx
│   │       ├── StepTwo-Rewards.jsx
│   │       └── StepThree-Backer.jsx
│   ├── context
│   │   ├── FormContext.jsx
│   │   └── FormProvider.jsx
│   ├── hooks
│   │   └── useForm.js
│   ├── utils
│   │   └── validation.js
│   ├── index.css
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
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

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.