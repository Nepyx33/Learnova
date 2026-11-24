// Static content used by the EJS partials (Lab 2).
// In Lab 4 the same entities come from json-server (api/db.json, /topic5/*).

export const IMG = "./src/assets/images";

export const nav = [
  { id: "home", label: "Home", href: "./index.html", i18n: "nav.home" },
  { id: "courses", label: "Courses", href: "./courses.html", i18n: "nav.courses" },
  { id: "course", label: "Course details", href: "./course-details.html", i18n: "nav.courseDetails" },
  { id: "enrollment", label: "Enrollment", href: "./enrollment.html", i18n: "nav.enrollment" }
];

export const categories = [
  { name: "Frontend", slug: "frontend", count: 42 },
  { name: "Backend", slug: "backend", count: 36 },
  { name: "Data Science", slug: "data-science", count: 28 },
  { name: "DevOps", slug: "devops", count: 19 },
  { name: "Mobile", slug: "mobile", count: 17 },
  { name: "Design", slug: "design", count: 22 }
];

export const courses = [
  { id: 1, title: "Modern JavaScript from Zero to Pro", category: "Frontend", cat: "frontend", level: "Beginner", instructor: "Olena Kovalenko", rating: 4.9, reviews: 2341, hours: 32, lessons: 186, price: 49, oldPrice: 89, tag: "Bestseller" },
  { id: 2, title: "React & Redux: Build Real Apps", category: "Frontend", cat: "frontend", level: "Intermediate", instructor: "Maksym Bondar", rating: 4.8, reviews: 1920, hours: 28, lessons: 142, price: 59, oldPrice: null, tag: null },
  { id: 3, title: "Python for Data Analysis", category: "Data Science", cat: "data-science", level: "Beginner", instructor: "Iryna Shevchenko", rating: 4.8, reviews: 2876, hours: 30, lessons: 160, price: 45, oldPrice: 75, tag: "Bestseller" },
  { id: 4, title: "Docker & Kubernetes in Practice", category: "DevOps", cat: "devops", level: "Advanced", instructor: "Taras Hnatiuk", rating: 4.9, reviews: 870, hours: 20, lessons: 98, price: 69, oldPrice: null, tag: "New" },
  { id: 5, title: "Node.js REST API Development", category: "Backend", cat: "backend", level: "Intermediate", instructor: "Andrii Melnyk", rating: 4.7, reviews: 1104, hours: 24, lessons: 120, price: 55, oldPrice: null, tag: null },
  { id: 6, title: "UI/UX Design Fundamentals", category: "Design", cat: "design", level: "Beginner", instructor: "Kateryna Moroz", rating: 4.8, reviews: 1530, hours: 18, lessons: 84, price: 0, oldPrice: null, tag: "Free" },
  { id: 7, title: "Flutter: Cross-platform Mobile Apps", category: "Mobile", cat: "mobile", level: "Intermediate", instructor: "Sofiia Lysenko", rating: 4.6, reviews: 640, hours: 26, lessons: 130, price: 52, oldPrice: null, tag: null },
  { id: 8, title: "SQL & PostgreSQL Mastery", category: "Backend", cat: "backend", level: "Beginner", instructor: "Dmytro Savchuk", rating: 4.7, reviews: 990, hours: 16, lessons: 76, price: 39, oldPrice: 59, tag: null },
  { id: 9, title: "Machine Learning with scikit-learn", category: "Data Science", cat: "data-science", level: "Advanced", instructor: "Iryna Shevchenko", rating: 4.9, reviews: 1210, hours: 34, lessons: 172, price: 79, oldPrice: null, tag: "New" }
];

export const features = [
  { title: "Project-based learning", text: "Every course ends with a portfolio project reviewed by a mentor." },
  { title: "Mentors from the industry", text: "Learn from engineers who work at product companies and startups." },
  { title: "Certificate of completion", text: "Share a verified certificate on LinkedIn and in your CV." }
];

export const course = {
  ...courses[0],
  description: "Master the language of the web: from variables and functions to async code, modules and the DOM. Build 12 real projects and get ready for React.",
  students: 12480,
  language: "English",
  updated: "2026-11-01",
  updatedLabel: "November 2026",
  learn: [
    "Write clean, modern JavaScript (ES2024)",
    "Work with the DOM and browser events",
    "Fetch data from REST APIs with async/await",
    "Organize code with ES modules and classes",
    "Debug efficiently with browser DevTools",
    "Build and publish 12 portfolio projects"
  ],
  includes: [
    "32 hours of on-demand video",
    "186 lessons and 40 quizzes",
    "12 coding projects",
    "Certificate of completion",
    "Access on mobile and desktop"
  ],
  skills: ["JavaScript", "ES2024", "DOM", "Async/await", "Fetch API", "ES modules", "Git", "DevTools"],
  requirements: ["A computer with internet access", "Basic HTML and CSS knowledge", "No prior programming experience"],
  modules: [
    { title: "JavaScript fundamentals", duration: "2h 40m", lessons: [["Welcome to the course", "04:12", true], ["Variables, types and operators", "12:30"], ["Conditions and loops", "15:05"], ["Functions and scope", "18:47"]] },
    { title: "Arrays and objects", duration: "3h 55m", lessons: [["Array methods you will use daily", "16:20"], ["Objects and destructuring", "14:10"], ["Project: shopping list", "32:00"]] },
    { title: "The DOM and events", duration: "4h 20m", lessons: [["Selecting and creating elements", "13:45"], ["Event delegation", "11:30"], ["Project: interactive quiz", "41:00"]] },
    { title: "Asynchronous JavaScript", duration: "4h 05m", lessons: [["Promises explained", "17:05"], ["async/await and error handling", "19:40"], ["Fetching data from an API", "22:15"]] },
    { title: "Modules, classes and patterns", duration: "3h 30m", lessons: [["ES modules", "12:00"], ["Classes and inheritance", "18:25"], ["Small patterns: store and pub/sub", "20:10"]] },
    { title: "Final project: course catalog app", duration: "3h 10m", lessons: [["Planning the app", "10:30"], ["Filters, search and pagination", "48:00"], ["Publishing to GitHub Pages", "14:20"]] }
  ],
  instructorInfo: {
    name: "Olena Kovalenko",
    role: "Senior Frontend Engineer, 9 years in web development",
    rating: 4.9,
    students: 24600,
    courses: 6,
    bio: "Olena has built web applications for product companies for 9 years and has mentored more than 300 junior developers. Her lessons focus on practical skills: every module ends with code you can reuse in real projects."
  },
  reviewsList: [
    { author: "Andrii P.", date: "2026-11-10", dateLabel: "2 weeks ago", rating: 5, text: "The best structured JS course I have taken. Projects are close to real tasks at work, and the mentor feedback is detailed." },
    { author: "Mariia S.", date: "2026-10-24", dateLabel: "1 month ago", rating: 5, text: "I started with zero experience and now I build interactive pages on my own. The async module is explained brilliantly." },
    { author: "Oleh T.", date: "2026-09-20", dateLabel: "2 months ago", rating: 4, text: "Lots of practice and no fluff. I would like a bit more about testing, but overall it is excellent value." }
  ]
};

export const footerLinks = [
  { title: "Courses", i18n: "footer.courses", links: [["Frontend", "./courses.html?category=frontend"], ["Backend", "./courses.html?category=backend"], ["Data Science", "./courses.html?category=data-science"], ["DevOps & Cloud", "./courses.html?category=devops"]] },
  { title: "Learn", i18n: "footer.learn", links: [["All courses", "./courses.html"], ["Featured course", "./course-details.html"], ["Enroll", "./enrollment.html"]] },
  { title: "Support", i18n: "footer.support", links: [["Why Learnova", "./index.html#why"], ["Contact us", "mailto:hello@learnova.example"]] }
];

export const formatPrice = (p) => (p === 0 ? "Free" : `$${p}`);
export const formatNumber = (n) => n.toLocaleString("en-US");

export const site = { IMG, nav, categories, courses, features, course, footerLinks, formatPrice, formatNumber };
