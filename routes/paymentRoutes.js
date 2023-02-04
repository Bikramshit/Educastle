import express from 'express';
import { buySubscription, cancelSubscription, getRazorPayKey, paymentVerification } from '../controllers/paymentController.js';
import { isAuthenticated  } from '../middlewares/auth.js';
const router = express.Router();

// Buy Subscription

router.route("/subscribe").get(isAuthenticated, buySubscription);
router.route("/subscribe/cancel").get(isAuthenticated, cancelSubscription);


// verify payment and save reference in database 
router.route("/payment-verification").get(isAuthenticated, paymentVerification);

// razor pay key 
router.route("/razorpay-key").get(getRazorPayKey);



export default router;