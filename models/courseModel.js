const db = require('../config/db');

const getCourses = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM courses ORDER BY category, title';
        db.query(query, (err, results) => {
            if (err) {
                console.error('Error fetching courses:', err);
                return reject(err);
            }
            // Map DB fields to format expected by the view
            const courses = results.map(row => ({
                id: row.id,
                name: row.title,
                description: row.description || '',
                url: row.url,
                video_url: row.video_url || '',
                image: row.image_url || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
                category: row.category || 'General',
                actual_price_usd: (Math.floor(Math.random() * 80) + 20).toFixed(2),
                sale_price_usd: '0.00',
                sale_end: 'Limited Time'
            }));
            resolve({ courses });
        });
    });
};

module.exports = getCourses;