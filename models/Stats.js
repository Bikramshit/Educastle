import mongoose from "mongoose";

const schema = mongoose.Schema({
    users: {
        type:Number,
        default:0,
    },
    subscription: {
        type:Number,
        default:0,
    },
    views: {
        type:Number,
        default:0,
    },
    createdAt: {
        type:Number,
        default:0,
    },

})


export const Stats = mongoose.model("Stats", schema);