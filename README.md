# Around The U.S.

## About the Project

Around The U.S. is a React migration of an existing HTML, CSS, and Vanilla JavaScript travel gallery application. This version preserves the original user interface and design while restructuring the code into reusable React components.

The migration was completed as part of the TripleTen Full Stack Web Development program and emphasizes component architecture, state-driven dialogs, and dynamic rendering.

## Features

- Reusable React components for the page layout and UI sections
- Functional components using modern React patterns
- Dynamic card rendering with `props` and `Array.prototype.map`
- Popup dialogs managed with `useState`
- Shared `Popup` component used across multiple dialog windows
- Responsive layout and scalable component organization

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- Vite
- JSX
- Functional Components
- Props
- useState
- Responsive Design

## Project Structure

The project is organized into clear source folders for components, styles, and utilities.

- `src/components` — reusable UI components such as `Header`, `Footer`, and main page sections
- `src/components/Main/components` — dialog and popup components for editing and viewing content
- `src/blocks` — CSS files for individual page sections and layout styles
- `src/images` — static image assets used in the interface
- `src/utils` — shared utilities and helper logic

## Future Improvements

Future sprints will expand the application with data persistence and interactive features, including:

- API integration for loading and saving data
- User profile updates
- Avatar updates
- Creating and deleting cards
- Like functionality
- Form validation
- Backend communication for persistent state

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Build the production version:

```bash
npm run build
```
