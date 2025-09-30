# 📈 Value Recorder App 📈

A single-page application built with the MERN stack (React, Node.js, Express) designed for logging numerical data over timed intervals.

---

## 🚀 Live Demo

A live version of this project can be viewed here: **[View Live Demo](link.will.go.here)**

---

## ✨ Features

* [x] **Decimal Value Control:** An input field to set a number, with "Up" and "Down" buttons to adjust the value by 0.1.
* [x] **Live Clock:** A real-time display of the current date and time that is always visible.
* [x] **Session-Based Recording:** A "Start/Stop" button to control the logging process.
* [x] **Custom Intervals:** A setting to define how often the current number is recorded (e.g., every 5 seconds).
* [x] **Timestamped Data:** Each recorded value is saved with the precise date and time of capture (`DD.MM.YYYY; HH:MM:SS; value`).
* [x] **Data Export:** The current set of recorded numbers can be downloaded as a `.csv` file.
* [x] **Session Management:** Stop a recording and it is saved on the server without being overwritten. Users can start a new recording and the previous one is kept.
* [x] **Saved Session List:** View, rename, and download previously recorded sessions.
* [ ] **Reminder Banner:** A non-intrusive banner appears after 61 data points have been recorded to notify the user, while recording continues.
* [ ] **Keyboard Shortcuts:**
    * `ArrowUp` / `ArrowDown`: Adjust the number.
    * `Shift + Space`: Start or stop the recording.

---

## 🗺️ Future Ideas

* [ ] **Persistent Storage:** Integrate a database (like MongoDB or PostgreSQL) or use browser local storage to save sessions permanently.
* [ ] **Data Visualization:** Add a simple chart to visualize the recorded data over time.
* [ ] **User Accounts:** Allow users to sign up and save their recording sessions to an account.
* [ ] **Add Notes:** Implement a feature to add a text note or label to each recording session.
* [ ] **Desktop Notifications:** Provide browser notifications when a certain number of recordings has been reached.

---

## 🛠️ Tech Stack

* **React:** Used for building the component-based UI and managing frontend state with Hooks (`useState`, `useEffect`).
* **Node.js & Express:** Serves as the backend for saving session data and generating CSV files for download.
* **Vite:** Serves as the modern, fast frontend build tool.
* **Bootstrap 5:** Used for its responsive styling utilities and pre-built components.
* **HTML5 & CSS3:** The foundational languages for the structure and final presentation.

---

## 🧑‍💻 Getting Started

To get a local copy up and running, follow these simple steps. This project contains a frontend (root folder) and a backend (`/server`), which must be run in separate terminals.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1.  Clone the repo:
    ```bash
    git clone [https://github.com/gapn/value-recorder-app.git](https://github.com/gapn/value-recorder-app.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd value-recorder-app
    ```
3.  **Set up the Frontend:**
    ```bash
    # In the root project folder
    npm install
    ```
4.  **Set up the Backend:**
    ```bash
    # Navigate to the server folder
    cd server

    # Install NPM packages
    npm install
    ```

### Running the Application

You will need two terminals open simultaneously.

1.  **Start the Backend Server:**
    ```bash
    # In the /server directory
    npm start
    ```
    The server will be running at `http://localhost:3001`.

2.  **Start the Frontend Development Server:**
    ```bash
    # In the root value-recorder-app directory
    npm run dev
    ```
    The application will open in your browser, usually at `http://localhost:5173`.

---

## License

This project is licensed under the [MIT License](./LICENSE.txt).