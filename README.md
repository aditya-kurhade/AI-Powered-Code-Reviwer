# AI-Powered Code Reviewer

![AI-Powered Code Reviewer Banner](images/AI-Powered-Code-Reviewer-screenshot.png)

This project is an AI-powered code review tool with a React frontend and a Node.js/Express backend using Google Gemini for code analysis.

## Features

- Paste or write code in the editor
- Click "Review" to get an AI-generated code review
- Syntax highlighting and markdown support for responses

## Project Structure

```
Backend/
  server.js
  src/
    app.js
    controllers/
    routes/
    services/
Frontend/
  src/
    App.jsx
    main.jsx
    App.css
    ...
images/
  AI-Powered-Code-Reviewer-screenshot.png
```

## Getting Started

### Backend

1. Install dependencies:
   ```sh
   cd Backend
   npm install
   ```
2. Create a `.env` file in `Backend/` with your Google Gemini API key:
   ```
   GOOGLE_GEMINI_API_KEY=your_api_key_here
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```

### Frontend

1. Install dependencies:
   ```sh
   cd Frontend
   npm install
   ```
2. Start the frontend dev server:
   ```sh
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Enter your code in the left editor pane.
- Click the **Review** button.
- View the AI-generated review on the right.
