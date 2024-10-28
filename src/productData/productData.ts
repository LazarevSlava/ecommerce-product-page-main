import img1Main from '../assets/images/image-product-1.jpg';
import img1Thumb from '../assets/images/image-product-1-thumbnail.jpg';
import img2Main from '../assets/images/image-product-2.jpg';
import img2Thumb from '../assets/images/image-product-2-thumbnail.jpg';
import img3Main from '../assets/images/image-product-3.jpg';
import img3Thumb from '../assets/images/image-product-3-thumbnail.jpg';
import img4Main from '../assets/images/image-product-4.jpg';
import img4Thumb from '../assets/images/image-product-4-thumbnail.jpg';

export interface ImagePair {
  main: string;
  thumbnail: string;
}

export interface Product {
  id: number;
  name: string;
  images: ImagePair[];
  price:number;
}

export const products: Product [] = [{
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  images: [
    { main: img1Main, thumbnail: img1Thumb },
    { main: img2Main, thumbnail: img2Thumb },
    { main: img3Main, thumbnail: img3Thumb },
    { main: img4Main, thumbnail: img4Thumb },
  ],
  price:125,
},
{
  id: 2,
  name: 'Product 2',
  images: [
    { main: img1Main, thumbnail: img1Thumb },
    { main: img2Main, thumbnail: img2Thumb },
    { main: img3Main, thumbnail: img3Thumb },
    { main: img4Main, thumbnail: img4Thumb },
  ],
  price:90,
}];
