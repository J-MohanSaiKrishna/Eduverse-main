const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'Mohan',
    password: '2210',
    database: 'eduverse',
    multipleStatements: true
});

const courses = [
    // ===== PYTHON =====
    {
        title: 'Python for Beginners — Full Course',
        description: 'Learn Python from scratch. Covers variables, data types, loops, functions, OOP, file handling, and more. Perfect for absolute beginners.',
        url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
        video_url: 'https://www.youtube.com/watch?v=rfscVS0vtbw',
        image_url: 'https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg',
        category: 'Python Programming'
    },
    {
        title: 'Python Data Structures & Algorithms',
        description: 'Master data structures like arrays, linked lists, trees, graphs, and sorting algorithms in Python. Essential for coding interviews.',
        url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA',
        video_url: 'https://www.youtube.com/watch?v=pkYVOmU3MgA',
        image_url: 'https://img.youtube.com/vi/pkYVOmU3MgA/maxresdefault.jpg',
        category: 'Python Programming'
    },
    {
        title: 'Django Web Framework — Full Tutorial',
        description: 'Build modern web applications with Django. Learn models, views, templates, authentication, REST APIs, and deployment.',
        url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4',
        video_url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4',
        image_url: 'https://img.youtube.com/vi/F5mRW0jo-U4/maxresdefault.jpg',
        category: 'Web Development'
    },

    // ===== JAVASCRIPT =====
    {
        title: 'JavaScript Full Course for Beginners',
        description: 'Complete JavaScript tutorial covering ES6+, DOM manipulation, events, async/await, promises, and modern JS patterns.',
        url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        video_url: 'https://www.youtube.com/watch?v=PkZNo7MFNFg',
        image_url: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg',
        category: 'JavaScript'
    },
    {
        title: 'React JS Full Course 2024',
        description: 'Learn React from zero to hero. Covers components, hooks, state management, routing, context API, and building real projects.',
        url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        video_url: 'https://www.youtube.com/watch?v=bMknfKXIFA8',
        image_url: 'https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg',
        category: 'JavaScript'
    },
    {
        title: 'Node.js & Express.js Full Course',
        description: 'Build backend applications with Node.js and Express. Learn REST APIs, middleware, authentication, database integration, and deployment.',
        url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        video_url: 'https://www.youtube.com/watch?v=Oe421EPjeBE',
        image_url: 'https://img.youtube.com/vi/Oe421EPjeBE/maxresdefault.jpg',
        category: 'Web Development'
    },

    // ===== WEB DEVELOPMENT =====
    {
        title: 'HTML & CSS Full Course — Build a Website',
        description: 'Learn HTML5 and CSS3 from scratch. Build responsive websites with flexbox, grid, animations, and modern design techniques.',
        url: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
        video_url: 'https://www.youtube.com/watch?v=mU6anWqZJcc',
        image_url: 'https://img.youtube.com/vi/mU6anWqZJcc/maxresdefault.jpg',
        category: 'Web Development'
    },
    {
        title: 'Tailwind CSS Full Course',
        description: 'Master Tailwind CSS utility-first framework. Build beautiful, responsive UIs rapidly with utility classes, components, and custom themes.',
        url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ',
        video_url: 'https://www.youtube.com/watch?v=dFgzHOX84xQ',
        image_url: 'https://img.youtube.com/vi/dFgzHOX84xQ/maxresdefault.jpg',
        category: 'Web Development'
    },
    {
        title: 'Full Stack Web Development Bootcamp',
        description: 'Complete full-stack course: HTML, CSS, JavaScript, Node.js, React, MongoDB. Build and deploy real-world projects from scratch.',
        url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
        video_url: 'https://www.youtube.com/watch?v=nu_pCVPKzTk',
        image_url: 'https://img.youtube.com/vi/nu_pCVPKzTk/maxresdefault.jpg',
        category: 'Web Development'
    },

    // ===== JAVA =====
    {
        title: 'Java Programming Full Course',
        description: 'Comprehensive Java tutorial. Learn OOP, collections, exception handling, multithreading, file I/O, and build Java applications.',
        url: 'https://www.youtube.com/watch?v=grEKMHGYyns',
        video_url: 'https://www.youtube.com/watch?v=grEKMHGYyns',
        image_url: 'https://img.youtube.com/vi/grEKMHGYyns/maxresdefault.jpg',
        category: 'Java Programming'
    },
    {
        title: 'Spring Boot Tutorial for Beginners',
        description: 'Learn Spring Boot framework to build enterprise Java applications. Covers REST APIs, JPA, security, microservices architecture.',
        url: 'https://www.youtube.com/watch?v=9SGDpanrc8U',
        video_url: 'https://www.youtube.com/watch?v=9SGDpanrc8U',
        image_url: 'https://img.youtube.com/vi/9SGDpanrc8U/maxresdefault.jpg',
        category: 'Java Programming'
    },

    // ===== AI & MACHINE LEARNING =====
    {
        title: 'Machine Learning Full Course',
        description: 'Learn machine learning algorithms: linear regression, decision trees, neural networks, clustering. Hands-on with Python and scikit-learn.',
        url: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        video_url: 'https://www.youtube.com/watch?v=GwIo3gDZCVQ',
        image_url: 'https://img.youtube.com/vi/GwIo3gDZCVQ/maxresdefault.jpg',
        category: 'Artificial Intelligence'
    },
    {
        title: 'Deep Learning & Neural Networks',
        description: 'Understand deep learning fundamentals. Build neural networks with TensorFlow and Keras. Covers CNNs, RNNs, GANs, and transformers.',
        url: 'https://www.youtube.com/watch?v=VyWAvY2CF9c',
        video_url: 'https://www.youtube.com/watch?v=VyWAvY2CF9c',
        image_url: 'https://img.youtube.com/vi/VyWAvY2CF9c/maxresdefault.jpg',
        category: 'Artificial Intelligence'
    },
    {
        title: 'ChatGPT & Generative AI Crash Course',
        description: 'Explore generative AI, large language models, prompt engineering, and practical applications of ChatGPT and AI tools for productivity.',
        url: 'https://www.youtube.com/watch?v=mEsleV16qdo',
        video_url: 'https://www.youtube.com/watch?v=mEsleV16qdo',
        image_url: 'https://img.youtube.com/vi/mEsleV16qdo/maxresdefault.jpg',
        category: 'Artificial Intelligence'
    },

    // ===== DATA SCIENCE =====
    {
        title: 'Data Science Full Course — 12 Hours',
        description: 'Complete data science roadmap. Learn Python, statistics, pandas, NumPy, data visualization, machine learning, and real-world projects.',
        url: 'https://www.youtube.com/watch?v=ua-CiDNNj30',
        video_url: 'https://www.youtube.com/watch?v=ua-CiDNNj30',
        image_url: 'https://img.youtube.com/vi/ua-CiDNNj30/maxresdefault.jpg',
        category: 'Data Science'
    },
    {
        title: 'SQL Tutorial — Full Database Course',
        description: 'Master SQL from basics to advanced. Learn queries, joins, subqueries, indexing, stored procedures, and database design principles.',
        url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        video_url: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
        image_url: 'https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg',
        category: 'Data Science'
    },

    // ===== DIGITAL MARKETING =====
    {
        title: 'Digital Marketing Full Course',
        description: 'Learn SEO, SEM, social media marketing, email marketing, Google Ads, content marketing, analytics, and build a marketing strategy.',
        url: 'https://www.youtube.com/watch?v=hiEb1m7f5JE',
        video_url: 'https://www.youtube.com/watch?v=hiEb1m7f5JE',
        image_url: 'https://img.youtube.com/vi/hiEb1m7f5JE/maxresdefault.jpg',
        category: 'Digital Marketing'
    },
    {
        title: 'Social Media Marketing Strategy 2024',
        description: 'Master social media platforms: Instagram, Facebook, LinkedIn, TikTok. Learn content creation, audience growth, and monetization strategies.',
        url: 'https://www.youtube.com/watch?v=I2pwcAVonKI',
        video_url: 'https://www.youtube.com/watch?v=I2pwcAVonKI',
        image_url: 'https://img.youtube.com/vi/I2pwcAVonKI/maxresdefault.jpg',
        category: 'Digital Marketing'
    },

    // ===== GRAPHIC DESIGN =====
    {
        title: 'Graphic Design Masterclass — Canva & Photoshop',
        description: 'Learn professional graphic design principles. Create logos, posters, social media graphics, and branding materials using Canva and Photoshop.',
        url: 'https://www.youtube.com/watch?v=fZe8ORMntbg',
        video_url: 'https://www.youtube.com/watch?v=fZe8ORMntbg',
        image_url: 'https://img.youtube.com/vi/fZe8ORMntbg/maxresdefault.jpg',
        category: 'Design & Graphics'
    },
    {
        title: 'UI/UX Design Course — Figma Tutorial',
        description: 'Master UI/UX design with Figma. Learn wireframing, prototyping, design systems, user research, and create stunning app interfaces.',
        url: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
        video_url: 'https://www.youtube.com/watch?v=c9Wg6Cb_YlU',
        image_url: 'https://img.youtube.com/vi/c9Wg6Cb_YlU/maxresdefault.jpg',
        category: 'Design & Graphics'
    },

    // ===== CYBERSECURITY =====
    {
        title: 'Cybersecurity Full Course for Beginners',
        description: 'Learn cybersecurity fundamentals: network security, ethical hacking, cryptography, firewalls, penetration testing, and security best practices.',
        url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
        video_url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
        image_url: 'https://img.youtube.com/vi/U_P23SqJaDc/maxresdefault.jpg',
        category: 'Cybersecurity'
    },
    {
        title: 'Ethical Hacking — Penetration Testing',
        description: 'Become an ethical hacker. Learn Kali Linux, network scanning, vulnerability assessment, exploitation, and security auditing techniques.',
        url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        video_url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
        image_url: 'https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg',
        category: 'Cybersecurity'
    },

    // ===== PHOTOGRAPHY =====
    {
        title: 'Photography for Beginners — Complete Guide',
        description: 'Learn photography basics: exposure, composition, lighting, camera settings. Master landscape, portrait, and street photography techniques.',
        url: 'https://www.youtube.com/watch?v=V7z7BAZdt2M',
        video_url: 'https://www.youtube.com/watch?v=V7z7BAZdt2M',
        image_url: 'https://img.youtube.com/vi/V7z7BAZdt2M/maxresdefault.jpg',
        category: 'Photography'
    },

    // ===== EXCEL & FINANCE =====
    {
        title: 'Microsoft Excel — Beginner to Advanced',
        description: 'Master Excel: formulas, pivot tables, VLOOKUP, charts, data analysis, macros, VBA, and advanced spreadsheet techniques for professionals.',
        url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
        video_url: 'https://www.youtube.com/watch?v=Vl0H-qTclOg',
        image_url: 'https://img.youtube.com/vi/Vl0H-qTclOg/maxresdefault.jpg',
        category: 'Finance & Business'
    },
    {
        title: 'Financial Accounting Fundamentals',
        description: 'Understand accounting principles, balance sheets, income statements, cash flow, financial ratios, and business financial analysis.',
        url: 'https://www.youtube.com/watch?v=yYX4bvQSqbo',
        video_url: 'https://www.youtube.com/watch?v=yYX4bvQSqbo',
        image_url: 'https://img.youtube.com/vi/yYX4bvQSqbo/maxresdefault.jpg',
        category: 'Finance & Business'
    },

    // ===== PERSONAL DEVELOPMENT =====
    {
        title: 'Public Speaking & Communication Skills',
        description: 'Build confidence in public speaking. Learn storytelling, body language, presentation skills, and techniques to captivate any audience.',
        url: 'https://www.youtube.com/watch?v=tShavGuo0_E',
        video_url: 'https://www.youtube.com/watch?v=tShavGuo0_E',
        image_url: 'https://img.youtube.com/vi/tShavGuo0_E/maxresdefault.jpg',
        category: 'Personal Development'
    },

    // ===== MUSIC =====
    {
        title: 'Music Production in FL Studio — Full Course',
        description: 'Learn music production from scratch using FL Studio. Cover beat-making, mixing, mastering, sound design, and creating professional tracks.',
        url: 'https://www.youtube.com/watch?v=pDIsEZsalAo',
        video_url: 'https://www.youtube.com/watch?v=pDIsEZsalAo',
        image_url: 'https://img.youtube.com/vi/pDIsEZsalAo/maxresdefault.jpg',
        category: 'Music & Audio'
    },

    // ===== MOBILE DEVELOPMENT =====
    {
        title: 'Flutter & Dart — Complete App Development',
        description: 'Build cross-platform mobile apps with Flutter. Learn Dart, widgets, state management, Firebase integration, and publish to app stores.',
        url: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
        video_url: 'https://www.youtube.com/watch?v=VPvVD8t02U8',
        image_url: 'https://img.youtube.com/vi/VPvVD8t02U8/maxresdefault.jpg',
        category: 'Mobile Development'
    },
    {
        title: 'Android Development with Kotlin',
        description: 'Learn Android app development with Kotlin. Build real apps using Jetpack Compose, MVVM architecture, Room database, and material design.',
        url: 'https://www.youtube.com/watch?v=EExSSotojVI',
        video_url: 'https://www.youtube.com/watch?v=EExSSotojVI',
        image_url: 'https://img.youtube.com/vi/EExSSotojVI/maxresdefault.jpg',
        category: 'Mobile Development'
    },

    // ===== CLOUD & DEVOPS =====
    {
        title: 'Oracle Integration Cloud (OIC) Full Course',
        description: 'Master Oracle Integration Cloud (OIC). Learn application integration, process automation, visual builder, connections, and real-time integrations from scratch.',
        url: 'https://youtube.com/playlist?list=PL3X62LScvI_LhjsD2OXJg5jP98P5cao_u&si=mzNpTwZkAF65SU0L',
        video_url: 'https://youtube.com/playlist?list=PL3X62LScvI_LhjsD2OXJg5jP98P5cao_u&si=mzNpTwZkAF65SU0L',
        image_url: 'https://img.youtube.com/vi/AUZIYQE54U3f94tvXNf-GUU33fCrtF6Iw8G7YenW-O-FpEHD-r_ikX_-XYuab3rFDztOzmO7oHs9QCUpOrgy8FyS6MYmhtXzcM0CwUruwJpUNebARiTnc6z3LFwmVJzLdQ3GTLx3Fg08M90/maxresdefault.jpg',
        category: 'Cloud Computing'
    },
    {
        title: 'AWS Cloud Practitioner — Full Course',
        description: 'Prepare for AWS Cloud Practitioner certification. Learn cloud computing, EC2, S3, Lambda, IAM, and core AWS services.',
        url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        video_url: 'https://www.youtube.com/watch?v=SOTamWNgDKc',
        image_url: 'https://img.youtube.com/vi/SOTamWNgDKc/maxresdefault.jpg',
        category: 'Cloud Computing'
    },
    {
        title: 'Docker & Kubernetes Full Tutorial',
        description: 'Master containerization with Docker and orchestration with Kubernetes. Learn images, containers, pods, deployments, and CI/CD pipelines.',
        url: 'https://www.youtube.com/watch?v=kTp5xUtcalw',
        video_url: 'https://www.youtube.com/watch?v=kTp5xUtcalw',
        image_url: 'https://img.youtube.com/vi/kTp5xUtcalw/maxresdefault.jpg',
        category: 'Cloud Computing'
    },
    {
        title: 'Git & GitHub Complete Course',
        description: 'Learn version control with Git. Master branches, merging, rebasing, pull requests, GitHub workflows, and collaborative development.',
        url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        video_url: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
        image_url: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg',
        category: 'Cloud Computing'
    },

    // ===== C & C++ =====
    {
        title: 'C Programming Full Course',
        description: 'Learn C programming language fundamentals. Covers pointers, memory management, structs, file handling, and building C applications.',
        url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0',
        video_url: 'https://www.youtube.com/watch?v=KJgsSFOSQv0',
        image_url: 'https://img.youtube.com/vi/KJgsSFOSQv0/maxresdefault.jpg',
        category: 'Programming'
    },
    {
        title: 'C++ Object Oriented Programming',
        description: 'Master C++ with OOP concepts: classes, inheritance, polymorphism, templates, STL, smart pointers, and modern C++ features.',
        url: 'https://www.youtube.com/watch?v=wN0x9eZLix4',
        video_url: 'https://www.youtube.com/watch?v=wN0x9eZLix4',
        image_url: 'https://img.youtube.com/vi/wN0x9eZLix4/maxresdefault.jpg',
        category: 'Programming'
    },
];

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        process.exit(1);
    }
    console.log('Connected to MySQL');

    // Clear existing courses
    db.query('DELETE FROM courses', (err) => {
        if (err) {
            console.error('Error clearing courses:', err);
            db.end();
            process.exit(1);
        }
        console.log('Cleared existing courses');

        // Insert all courses
        const insertQuery = 'INSERT INTO courses (title, description, url, video_url, image_url, category) VALUES ?';
        const values = courses.map(c => [c.title, c.description, c.url, c.video_url, c.image_url, c.category]);

        db.query(insertQuery, [values], (err, result) => {
            if (err) {
                console.error('Error inserting courses:', err);
                db.end();
                process.exit(1);
            }
            console.log(`✅ Successfully inserted ${result.affectedRows} courses!`);
            console.log('Categories seeded:');
            const cats = [...new Set(courses.map(c => c.category))];
            cats.forEach(c => console.log(`  📚 ${c}`));
            db.end();
        });
    });
});
