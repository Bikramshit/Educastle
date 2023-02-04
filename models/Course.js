import mongoose from "mongoose";

const schema = mongoose.Schema({
    title: {
        type:String,
        minLength:[4,"Title must be 4 characters"],
        maxLength:[80,"Title can exceed 80 characters"],
        required:[true, "Please enter course name"],
    },
    description: {
        type:String,
        required:[true, "Please enter course description"],
        minLength:[20,"Title must be 20 characters"],
    },
    lectures:[
        {
            title:{
                type:String,
                required:true,
            },
            description:{
                type:String,
                required:true,
            },
            video:{
                public_id:{
                    type:String,
                    required:true,
                },
                url:{
                    type:String,
                    required:true,
                },
            },
        }
    ],
    poster:{
        public_id:{
            type:String,
            required:true,
        },
        url:{
            type:String,
            required:true,
        },
    },
    views:{
        type:String,
        default:0,
    },
    numOfVideos:{
        type:String,
        default:0
    },
    category:{
        type:String,
        required:true
    },
    createdBy:{
        type:String,
        required:true
    },
    createdAt:{
        type:String,
        default:Date.now,
    },   
    

    
})


export const Course= mongoose.model("Course", schema);