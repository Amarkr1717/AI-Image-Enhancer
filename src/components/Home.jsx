import React, { useState } from 'react'
import ImageUpload from "./ImageUpload";
import ImagePreview from "./ImagePreview";

const Home = () => {

    const [uploadImage , setUploadImage] = useState(null);
    const [enhancedImage, setEnhancedImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const UploadImageHandler = (file) => {
        console.log(URL.createObjectURL(file));
      setUploadImage(URL.createObjectURL(file));
      
      
      setLoading(true);

      //call api to enhance image
    }


  return (
    <>
      
   <ImageUpload UploadImageHandler={UploadImageHandler}/>
   <ImagePreview
   loading = {loading}
   uploaded = {uploadImage}
   enhanced = {enhancedImage}
   />

   </>
    
  )
}

export default Home
