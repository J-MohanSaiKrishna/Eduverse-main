const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Mohan',
    password: '2210',
    multipleStatements: true
});

const setupSQL = `
-- Create EduVerse Database
CREATE DATABASE IF NOT EXISTS eduverse;
USE eduverse;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NULL,
    location VARCHAR(255) NULL,
    gender VARCHAR(20) NULL,
    role VARCHAR(20) DEFAULT 'user',
    dob DATE
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NULL,
    url VARCHAR(255) NOT NULL,
    category VARCHAR(255) NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Quizzes Table
CREATE TABLE IF NOT EXISTS quizzes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quiz_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NULL,
    send_email TINYINT(1) NOT NULL DEFAULT 0,
    reattempt TINYINT(1) NOT NULL DEFAULT 1
);

-- Questions Table
CREATE TABLE IF NOT EXISTS questions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quiz_id INT NULL,
    question TEXT NOT NULL,
    option_a TEXT NULL,
    option_b TEXT NULL,
    option_c TEXT NULL,
    option_d TEXT NULL,
    correct_answer CHAR(1) NULL
);

-- Quiz Attempts Table
CREATE TABLE IF NOT EXISTS quiz_attempts (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    quiz_id INT NULL,
    score DECIMAL(5,2) NULL,
    attempt_date TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

-- Contacts Table
CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');

    db.query(setupSQL, (err, results) => {
        if (err) {
            console.error('Error setting up database:', err);
            db.end();
            process.exit(1);
        }
        console.log('✅ Database setup completed successfully!');
        console.log('All tables have been created.');
        db.end();
    });
});
