const getCourses = require('../models/courseModel');

exports.renderCoursesPage = async (req, res) => {
    try {
        const coursesData = await getCourses();
        console.log('Courses data received:', JSON.stringify(coursesData).substring(0, 200));
        console.log('Number of courses:', coursesData.courses ? coursesData.courses.length : 0);
        const courses = coursesData.courses || [];
        res.render('courses', {
            courses,
            user: req.session.user || { id: req.session.userId, name: 'User', role: 'user' }
        });
    } catch (error) {
        console.error("Error loading courses:", error);
        res.status(500).send("Error loading courses");
    }
};