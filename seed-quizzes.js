const mysql = require('mysql2/promise');

const dbConfig = {
    host: 'localhost',
    user: 'Mohan',
    password: '2210',
    database: 'eduverse',
    multipleStatements: true
};

const questionsBank = {
    'Python Programming': [
        { q: "What is a correct syntax to output 'Hello World' in Python?", a: "print('Hello World')", b: "echo 'Hello World'", c: "p('Hello World')", d: "printf('Hello World')", ans: "a" },
        { q: "Which of these collections defines a LIST?", a: "{\"name\": \"apple\", \"color\": \"green\"}", b: "[\"apple\", \"banana\", \"cherry\"]", c: "(\"apple\", \"banana\", \"cherry\")", d: "{\"apple\", \"banana\", \"cherry\"}", ans: "b" },
        { q: "What is the correct way to create a function in Python?", a: "function myfunction():", b: "create myfunction():", c: "def myfunction():", d: "fun myfunction():", ans: "c" }
    ],
    'JavaScript': [
        { q: "Inside which HTML element do we put the JavaScript?", a: "<js>", b: "<javascript>", c: "<scripting>", d: "<script>", ans: "d" },
        { q: "How do you define a variable in ES6 that shouldn't be reassigned?", a: "var", b: "let", c: "const", d: "def", ans: "c" },
        { q: "Which symbol is used for strict equality comparison?", a: "==", b: "===", c: "=", d: "=>", ans: "b" }
    ],
    'Web Development': [
        { q: "What does HTML stand for?", a: "Hyperlinks and Text Markup Language", b: "Home Tool Markup Language", c: "Hyper Text Markup Language", d: "Hyper Tool Markup Language", ans: "c" },
        { q: "Which property is used to change the background color in CSS?", a: "bgcolor", b: "color", c: "background-color", d: "bg-image", ans: "c" },
        { q: "What does API stand for?", a: "Application Programming Interface", b: "Apple Programming Interface", c: "Advanced Program Integration", d: "Automated Program Interface", ans: "a" }
    ],
    'Java Programming': [
        { q: "In Java, what keyword is used to inherit a class?", a: "implements", b: "inherits", c: "extends", d: "super", ans: "c" },
        { q: "Which of the following is NOT a primitive data type in Java?", a: "int", b: "boolean", c: "String", d: "double", ans: "c" },
        { q: "What is the size of int variable?", a: "8 bit", b: "16 bit", c: "32 bit", d: "64 bit", ans: "c" }
    ],
    'Artificial Intelligence': [
        { q: "What is Machine Learning?", a: "A machine that cleans", b: "A subset of AI that uses statistical methods to give systems the ability to learn", c: "A type of database", d: "A programming language", ans: "b" },
        { q: "What does CNN stand for in Deep Learning?", a: "Cable News Network", b: "Convoluted Neural Network", c: "Convolutional Neural Network", d: "Computer Neural Network", ans: "c" },
        { q: "Which of these is a popular Generative AI model?", a: "MySQL", b: "ChatGPT", c: "Apache", d: "Node.js", ans: "b" }
    ],
    'Data Science': [
        { q: "Which Python library is heavily used for data manipulation and analysis?", a: "Django", b: "Flask", c: "Pandas", d: "Requests", ans: "c" },
        { q: "What does SQL stand for?", a: "Structured Query Language", b: "Strong Question Language", c: "Structured Question Language", d: "Simple Query Language", ans: "a" },
        { q: "Which algorithm is used for Classification in Machine Learning?", a: "Linear Regression", b: "K-Means", c: "Logistic Regression", d: "PCA", ans: "c" }
    ],
    'Digital Marketing': [
        { q: "What does SEO stand for?", a: "Search Engine Optimization", b: "Search Engine Order", c: "Site Engine Optimization", d: "Social Evaluation Optimization", ans: "a" },
        { q: "Which platform is primarily used for B2B marketing?", a: "TikTok", b: "Snapchat", c: "LinkedIn", d: "Pinterest", ans: "c" },
        { q: "What is the purpose of A/B testing?", a: "To test the alphabet", b: "To compare two versions of a webpage to see which performs better", c: "To test server speed", d: "To find broken links", ans: "b" }
    ],
    'Design & Graphics': [
        { q: "What does UX stand for?", a: "User Exploration", b: "User Experience", c: "Universal Experience", d: "Unified Experience", ans: "b" },
        { q: "Which tool is considered industry standard for UI/UX design?", a: "Notepad++", b: "Figma", c: "VLC Player", d: "Excel", ans: "b" },
        { q: "In color theory, what are complementary colors?", a: "Colors next to each other", b: "Colors opposite each other on the color wheel", c: "Black and White", d: "Primary colors only", ans: "b" }
    ],
    'Cybersecurity': [
        { q: "What is Phishing?", a: "A type of fishing sport", b: "A technique to gain personal information for the purpose of identity theft", c: "A firewall configuration", d: "A type of antivirus", ans: "b" },
        { q: "Which of the following describes a 'White Hat' hacker?", a: "A malicious hacker", b: "An ethical hacker who helps secure systems", c: "A government spy", d: "Someone who wears white hats", ans: "b" },
        { q: "What does VPN stand for?", a: "Virtual Private Network", b: "Visual Private Network", c: "Virtual Public Network", d: "Verified Personal Network", ans: "a" }
    ],
    'Photography': [
        { q: "What does ISO control in a camera?", a: "Shutter speed", b: "Aperture size", c: "Sensor's sensitivity to light", d: "Focus point", ans: "c" },
        { q: "A lower f-stop number (e.g., f/1.8) means:", a: "Less light enters the lens", b: "More light enters the lens, creating a shallower depth of field", c: "Everything is in focus", d: "The battery lasts longer", ans: "b" },
        { q: "What is the 'Rule of Thirds'?", a: "Taking 3 photos at once", b: "A compositional guideline dividing an image into nine equal parts", c: "Using 3 flashes", d: "A printing technique", ans: "b" }
    ],
    'Finance & Business': [
        { q: "What does ROI stand for?", a: "Return on Investment", b: "Rate of Income", c: "Return on Interest", d: "Ratio of Income", ans: "a" },
        { q: "Which Excel function is used to find a value in a column and return a value in the same row?", a: "SUM()", b: "AVERAGE()", c: "VLOOKUP()", d: "CONCATENATE()", ans: "c" },
        { q: "What is a 'Balance Sheet'?", a: "A sheet of paper that balances", b: "A financial statement showing assets, liabilities, and equity", c: "An employee attendance record", d: "A marketing plan", ans: "b" }
    ],
    'Personal Development': [
        { q: "What is the key to effective public speaking?", a: "Reading directly from slides", b: "Avoiding eye contact", c: "Engaging the audience with storytelling and eye contact", d: "Speaking as fast as possible", ans: "c" },
        { q: "What is 'Active Listening'?", a: "Listening while running", b: "Fully concentrating, understanding, responding and then remembering what is being said", c: "Hearing background noise", d: "Interrupting frequently", ans: "b" },
        { q: "Which of the following is a time-management technique?", a: "The Pomodoro Technique", b: "The Pareto String", c: "The Pasta Method", d: "The Procrastination Principle", ans: "a" }
    ],
    'Music & Audio': [
        { q: "What is FL Studio?", a: "A video editing software", b: "A Digital Audio Workstation (DAW)", c: "A 3D modeling tool", d: "A flight simulator", ans: "b" },
        { q: "What does BPM stand for in music?", a: "Beats Per Minute", b: "Bass Per Minute", c: "Bands Per Month", d: "Basic Pitch Modulator", ans: "a" },
        { q: "What is the purpose of 'mastering' a track?", a: "Writing the lyrics", b: "Creating the album art", c: "The final step of audio post-production to balance sonic elements and optimize playback", d: "Selling the track", ans: "c" }
    ],
    'Mobile Development': [
        { q: "Which language is primarily used with Flutter?", a: "Java", b: "Swift", c: "Dart", d: "Kotlin", ans: "c" },
        { q: "What company developed Android?", a: "Apple", b: "Google", c: "Microsoft", d: "Facebook", ans: "b" },
        { q: "What is 'State Management' in mobile apps?", a: "Managing political borders", b: "Handling data changes inside an application over time", c: "Managing hardware battery", d: "Saving files to disk", ans: "b" }
    ],
    'Cloud Computing': [
        { q: "What does AWS stand for?", a: "Advanced Web Services", b: "Amazon Web Services", c: "Automated Web Systems", d: "American Web Standards", ans: "b" },
        { q: "What is Docker primarily used for?", a: "Photo editing", b: "Containerization of applications", c: "Database administration", d: "Hardware monitoring", ans: "b" },
        { q: "Which command is used to pull a git repository to your local machine?", a: "git push", b: "git commit", c: "git clone", d: "git status", ans: "c" }
    ],
    'Programming': [ // C & C++
        { q: "Who is the creator of the C programming language?", a: "Bjarne Stroustrup", b: "James Gosling", c: "Dennis Ritchie", d: "Guido van Rossum", ans: "c" },
        { q: "Which symbol is used for a pointer in C/C++?", a: "&", b: "*", c: "#", d: "@", ans: "b" },
        { q: "What is a major feature that C++ added to C?", a: "Functions", b: "Pointers", c: "Object-Oriented Programming (Classes)", d: "Loops", ans: "c" }
    ],
};

const defaultQuestions = questionsBank['Web Development'];

async function seedQuizzes() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log("Connected to the database successfully.");

        // Clear existing to avoid dupes while testing
        await connection.query('DELETE FROM questions');
        await connection.query('DELETE FROM quizzes');
        console.log("Cleared existing quizzes and questions.");

        // Fetch all courses
        const [courses] = await connection.query('SELECT id, title, category FROM courses');
        if (courses.length === 0) {
            console.log("No courses found. Please run seed-courses.js first.");
            return;
        }

        let quizzesAdded = 0;
        let questionsAdded = 0;

        for (const course of courses) {
            // Create a quiz for this course
            const quizName = `${course.title} - Mastery Quiz`;
            const quizDesc = `Test your knowledge on the concepts covered in ${course.title}.`;

            const [result] = await connection.query(
                'INSERT INTO quizzes (quiz_name, description, send_email, reattempt) VALUES (?, ?, 0, 1)',
                [quizName, quizDesc]
            );

            const quizId = result.insertId;
            quizzesAdded++;

            // Get relevant questions for this category
            let questions = questionsBank[course.category] || defaultQuestions;

            // Insert questions
            const questionValues = questions.map(q => [
                quizId, q.q, q.a, q.b, q.c, q.d, q.ans
            ]);

            const [qResult] = await connection.query(
                'INSERT INTO questions (quiz_id, question, option_a, option_b, option_c, option_d, correct_answer) VALUES ?',
                [questionValues]
            );

            questionsAdded += qResult.affectedRows;
        }

        console.log(`✅ Seeded ${quizzesAdded} Quizzes successfully!`);
        console.log(`✅ Seeded ${questionsAdded} Questions total!`);

    } catch (error) {
        console.error("Error seeding quizzes:", error);
    } finally {
        if (connection) {
            await connection.end();
            console.log("Database connection closed.");
        }
    }
}

seedQuizzes();
