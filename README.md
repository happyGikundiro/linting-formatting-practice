# Angular Code Quality Enforcer

This project demonstrates the setup and configuration of ESLint and Prettier in an Angular project to improve code quality and consistency.

[Live Demo](https://lintingformating-practice.netlify.app/)

## Project Description

This Angular application serves as a practical example of integrating and using linting and formatting tools in an Angular environment. It includes:

- ESLint configuration with custom rules
- Prettier integration for consistent code formatting
- npm scripts for linting and formatting
- Pre-commit hooks using husky
- A sample Angular component adhering to the established linting and formatting rules

## Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/happyGikundiro/linting-formatting-practice.git
   cd linting-formatting-practice
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Run the development server:

   ```
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200/`

## ESLint and Prettier Configurations

### ESLint

The `.eslintrc.json` extends the recommended Angular ESLint configuration and includes two custom rules:

1. `no-console`: Warns about the use of console.log statements
2. `no-unused-vars`: Warns when there is unused variables
3. `semi`: Warns when there is no semi colon

### Prettier

The `.prettierrc` file contains our Prettier configuration, which includes:

- Single quotes for strings
- 2 space indentation

## npm Scripts

- `npm run lint`: Run ESLint on the entire project
- `npm run format`: Run Prettier on all files
- `npm run prepare`: Run linting and formatting before each commit.
