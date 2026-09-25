# Eduverse 🎓

Eduverse is a modern, full-stack educational web application designed to offer courses, interactive quizzes, and seamless user experiences.

## 🚀 Features

- **User Authentication:** Secure signup, login, and session management using `express-session`, `bcrypt`, and CSRF protection.
- **Course Management:** Browse and enroll in various educational courses.
- **Interactive Quizzes:** Test your knowledge with dynamically loaded quizzes.
- **Contact Inquiries:** Easy-to-use contact forms for user queries.
- **Modern UI:** Responsive and modern user interface built with EJS templates and Tailwind CSS.
- **Secure:** Integrated CSRF protection and secure cookie management.

## 🛠️ Technology Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Templating Engine:** EJS (Embedded JavaScript templates)
- **Styling:** Tailwind CSS
- **Security:** `bcrypt` (password hashing), `csurf` (CSRF tokens)

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-url>
   cd eduverse-main
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up the Database:**
   - Ensure you have MySQL installed and running.
   - Execute the SQL commands provided in `setup-database.sql` to initialize the tables.
   - You can run `node setup-db.js` and `node seed-courses.js` if you have automated seed files.

4. **Environment Variables:**
   - Create a `.env` file in the root directory (optional, but recommended for production secrets like `SESSION_SECRET`).

5. **Build CSS (Tailwind):**
   ```bash
   npm run build
   ```

6. **Start the server:**
   ```bash
   node app.js
   ```

## 🌐 Usage

Once the server is running, navigate to `http://localhost:3000` in your browser. You can register a new account, browse through available courses, and take quizzes!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the ISC License.
