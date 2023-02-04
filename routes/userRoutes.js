import express from 'express';
import { addToPlaylist, ChangePassword, deleteMyProfile, deleteUser, forgotPassword, getAllUsers, getMyProfile, login, logout, register, removeFromPlaylist, resetPassword, updateProfile, updateProfilePicture, UpdateUserRole } from '../controllers/userController.js';
import { authorizeAdmin, isAuthenticated } from '../middlewares/auth.js';
import singleUpload from "../middlewares/multer.js"
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile").get(isAuthenticated, getMyProfile);
router.route("/profile").delete(isAuthenticated, deleteMyProfile);
router.route("/change-password").put(isAuthenticated, ChangePassword);
router.route("/update-profile").put(isAuthenticated, updateProfile);
router.route("/update-profile-picture").put(singleUpload ,isAuthenticated, updateProfilePicture);
router.route("/addtoplaylist").post(isAuthenticated, addToPlaylist);
router.route("/remove-from-playlist").delete(isAuthenticated, removeFromPlaylist);

// not working 
router.route("/forgot-password").post(forgotPassword);
router.route("/reset-password/:token").put(resetPassword);

// logout
//Get my profile
//Change password
// Update Profile + pic
// Forget password 
// Reset Password
// add to playlist
// remove from playlist 


router.route("/admin/users").get(isAuthenticated, authorizeAdmin, getAllUsers);
router.route("/admin/user/:id").put(isAuthenticated,authorizeAdmin,  UpdateUserRole).delete(isAuthenticated,authorizeAdmin, deleteUser);


export default router;
