const {images} = require('../assets/images');

// select poster image as per condition
export const getPoster = image => {
  switch (image) {
    case 'poster1.jpg':
      return images.poster1;
    case 'poster2.jpg':
      return images.poster2;
    case 'poster3.jpg':
      return images.poster3;
    case 'poster4.jpg':
      return images.poster4;
    case 'poster5.jpg':
      return images.poster5;
    case 'poster6.jpg':
      return images.poster6;
    case 'poster7.jpg':
      return images.poster7;
    case 'poster8.jpg':
      return images.poster8;
    case 'poster9.jpg':
      return images.poster9;
    default:
      return images.missing;
  }
};
