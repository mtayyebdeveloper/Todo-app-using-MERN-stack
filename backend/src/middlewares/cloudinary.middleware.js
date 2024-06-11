import { v2 as cloudinary } from "cloudinary";
// import fs from "fs";

cloudinary.config({
  cloud_name: "dyrnc1z2s",
  api_key: "351585889764763",
  api_secret: "5aRJzEPtXRJkm3974K0oSFTa-BY",
});

const cloudinaryUpload = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    return response;
  } catch (error) {
    // fs.unlinkSync(localfilepath);
    console.log("error", error);
    return null;
  }
};

export { cloudinaryUpload };
