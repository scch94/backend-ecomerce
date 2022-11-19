import dotenv from 'dotenv'

dotenv.config({path:'../.env'})

export const MONGODB_URI=process.env.MONGODB_URI || "mongodb+srv://cluster0.r0dqfle.mongodb.net/myFirstDatabase" ;

export const PORT=process.env.PORT || 4000

export const CLOUDINARY_NAME=process.env.CLOUDINARY_NAME || 'santiagocanal'

export const CLOUDINARY_API_KEY=process.env.CLOUDINARY_API_KEY || '626361669696184'

export const CLOUDINARY_API_SECRET=process.env.CLOUDINARY_API_SECRET || 'DSP7M2QLSHyFFn-fcXa6DlSApSE'


