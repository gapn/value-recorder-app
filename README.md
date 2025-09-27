# 📈 Value Recorder App 📈

A single-page application built with the MERN stack (React, Node.js, Express) designed for logging numerical data over timed intervals.

---

## 🚀 Live Demo

A live version of this project can be viewed here: **[View Live Demo](link.will.go.here)**

---

## ✨ Features

* [x] **Decimal Value Control:** An input field to set a number, with "Up" and "Down" buttons to adjust the value by 0.1.
* [x] **Live Clock:** A real-time display of the current date and time that is always visible.
* [ ] **Session-Based Recording:** A "Start/Stop" button to control the logging process.
* [ ] **Custom Intervals:** A setting to define how often the current number is recorded (e.g., every 5 seconds).
* [ ] **Timestamped Data:** Each recorded value is saved with the precise date and time of capture (`DD.MM.YYYY; HH:MM:SS; value`).
* [ ] **Data Export:** The current set of recorded numbers can be downloaded as a `.csv` file.
* [ ] **Session Management:** Stop a recording and it is saved on the server without being overwritten. Users can start a new recording and the previous one is kept.
* [ ] **Saved Session List:** View, rename, and download previously recorded sessions.
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

Comming soon...

---

## License

This project is licensed under the [MIT License](./LICENSE.txt).