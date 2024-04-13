export interface ProductsTYPE {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  brand: string;
  stock: number;
  rating: number;
  reviews: productReviewTYPE[];
  images: string[];
  light_thumbnail: string;
  stringPrice: string;
}

interface productReviewTYPE {
  id: number;
  name: string;
  avatar: string;
  comment: string;
  rating: number;
}

export interface smartPhoneBrandListTYPE {
  id: number;
  name: string;
  isChecked: boolean;
}
