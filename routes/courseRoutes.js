import express from 'express';
import {addLecture, createCourse, deleteCourse, getAllCourses, getCourseLectures} from '../controllers/courseController.js';
import { authorizeAdmin, authorizeSubscribers, isAuthenticated } from '../middlewares/auth.js';
import singleUpload from '../middlewares/multer.js';

const router = express.Router();

// Get all courses without lectures 
router.route("/courses").get(getAllCourses);

// create new course - only admnin 

// add Lectures,Delete Courses Get Course Details 
router.route("/create-course").post(isAuthenticated, authorizeAdmin , singleUpload , createCourse);
router.route("/course/:id").get( authorizeSubscribers, isAuthenticated,getCourseLectures).post(isAuthenticated,authorizeAdmin, singleUpload, addLecture).delete(isAuthenticated, authorizeAdmin, deleteCourse);


//  Delete Lectures, 
router.route("/lecture").delete(isAuthenticated, authorizeAdmin, deleteCourse);

export default router;
