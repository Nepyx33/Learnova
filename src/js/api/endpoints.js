// Topic 5 – Online IT Courses (json-server routes, see api/API_MAP.md)
export const endpoints = {
  courses: "/topic5/courses",
  course: (id) => `/topic5/courses/${id}`,
  courseReviews: (id) => `/topic5/courses/${id}/reviews`,
  instructors: "/topic5/instructors",
  categories: "/topic5/categories",
  reviews: "/topic5/reviews",
  enrollments: "/topic5/enrollments"
};
