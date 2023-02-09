import axios from 'axios';

const cloudName = process.env.CLOUD_NAME;
const cloudApiKey = process.env.CLOUD_APIKEY;

export const uploadFile = async (data) => {
  const cloudinaryResponse = await axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, data, {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress(e) {
      console.log(e.loaded / e.total);
    },
  });
  console.log(cloudinaryResponse.data);
};
