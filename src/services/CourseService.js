let baseURL = "https://webdev-cms-server-mysql-jpa.herokuapp.com/api/user/";

class CourseService {
    static courseService = null;

    static getInstance() {
        if (CourseService.courseService === null) {
            CourseService.courseService = new CourseService();
        }
        return CourseService.courseService;
    }

    constructor() {
        this.widgets = [];
    }

    createCourse = (userId, newCourse) =>
        fetch(baseURL + userId + "/course", {
            method: 'POST',
            body: JSON.stringify(newCourse),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    findAllCourses = userId =>
        fetch(baseURL + userId + "/courses", {
            credentials: 'include'
        }).then(response => response.json());

    findCourseById = (userId, courseId) =>
        fetch(baseURL + userId + "/course/" + courseId, {
            credentials: 'include'
        }).then(response => response.json());

    updateCourse = (userId, courseId, updatedCourse) =>
        fetch(baseURL + userId + "/course/" + courseId, {
            method: 'PUT',
            body: JSON.stringify(updatedCourse),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json());

    deleteCourse = (userId, courseId) =>
        fetch(baseURL + userId + "/course/" + courseId, {
            method: 'DELETE',
            credentials: 'include'
        });
}

export default CourseService;
