
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: 'dkwbh6ri7',
  api_key: '532191727763865',
  api_secret: 'owMHXRa3DHJj6FrBHenOkmLQVug',
});


const uploadTest = async () => {
  try {
    const result = await cloudinary.uploader.upload('path_to_your_test_image.jpg', {
      folder: 'images',
    });
    console.log(result);
  } catch (error) {
    console.error('Error uploading test image:', error);
  }
};

uploadTest();
