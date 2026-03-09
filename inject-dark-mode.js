const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const files = fs.readdirSync(viewsDir).filter(file => file.endsWith('.ejs'));

const ALPINE_SCRIPT = '<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>';
const HTML_TAG = `<html lang="en" x-data="{ darkMode: localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) }" x-init="$watch('darkMode', val => localStorage.setItem('darkMode', val)); darkMode ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')" :class="{ 'dark': darkMode }">`;

// The standard dark mode body string from courses.ejs
const BODY_TAG = `<body class="bg-gray-50 dark:bg-[#0f0c29] text-gray-800 dark:text-white transition-colors duration-300 min-h-screen" :style="darkMode ? 'background: linear-gradient(180deg, #0f0c29 0%, #1a1440 30%, #1e1848 60%, #24243e 100%);' : 'background: #f8fafc;'">`;

const DARK_TOGGLE = `
                <!-- Dark Mode Toggle -->
                <div @click="darkMode = !darkMode" class="dark-mode-toggle text-gray-600 dark:text-gray-300 cursor-pointer p-2 rounded-full hover:bg-violet-500/10 transition-colors" title="Toggle Dark/Light Mode">
                    <svg x-show="!darkMode" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                    <svg x-show="darkMode" x-cloak class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                </div>`;


files.forEach(file => {
    if (file === 'courses.ejs') return; // already done

    let filePath = path.join(viewsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // 1. Replace <html>
    content = content.replace(/<html[^>]*>/i, HTML_TAG);

    // 2. Add AlpineJS
    if (!content.includes('unpkg.com/alpinejs')) {
        content = content.replace('</head>', `    ${ALPINE_SCRIPT}\n</head>`);
    }

    // 3. Replace <body ...>
    // We want to handle views that have specialized classes (like login.ejs which has flex center stuff)
    // but give them all the global transition/colors.
    // For simplicity of a universal pass, let's keep their existing flex classes but append our colors
    const bodyMatch = content.match(/<body[^>]*>/i);
    if (bodyMatch) {
        let oldBody = bodyMatch[0];
        // strip out any existing bg- or text- utility classes so they don't fight
        let newBodyProps = 'class="' +
            (oldBody.match(/class="([^"]*)"/) ? oldBody.match(/class="([^"]*)"/)[1].replace(/bg-[a-zA-Z0-9-/#\[\]]+/g, '').replace(/text-[a-zA-Z0-9-/#\[\]]+/g, '') : '') +
            ' bg-gray-50 dark:bg-[#0f0c29] text-gray-800 dark:text-white transition-colors duration-300 min-h-screen" :style="darkMode ? \'background: linear-gradient(180deg, #0f0c29 0%, #1a1440 30%, #1e1848 60%, #24243e 100%);\' : \'background: #f8fafc;\'"';

        content = content.replace(oldBody, `<body ${newBodyProps}>`);
    }

    // 4. Inject Navbar Toggle (Look for Contacts/Courses/Logout area)
    if (content.includes('href="/logout"')) {
        if (!content.includes('dark-mode-toggle')) {
            // insert before logout button
            content = content.replace(/<a href="\/logout"/, DARK_TOGGLE + '\n                <a href="/logout"');
        }
    } else if (content.includes('href="/login"')) {
        if (!content.includes('dark-mode-toggle')) {
            content = content.replace(/<a href="\/login"/, DARK_TOGGLE + '\n                <a href="/login"');
        }
    }

    // 5. Cleanup hardcoded CSS Body backgrounds
    content = content.replace(/body\s*{[^}]*background:[^}]*}/gi, '/* Hardcoded body background removed for dark mode */');


    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${file}`);
});
