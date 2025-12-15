import { v2 as cloudinary } from 'cloudinary';
import fs from 'node:fs'

// Configuration
cloudinary.config({
    cloud_name: 'dl77ftllk',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})
    
    
const uploaderToCloudinary = async (fileLink) => {

   

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            fileLink, {
            resource_type:"auto"
        }
        )
        .catch((error) => {
            console.log(error);
            // if failes remove from our server
            fs.unlinkSync(fileLink)
        });


    return uploadResult

   
}

export default uploaderToCloudinary