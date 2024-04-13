export interface HomeDisplayedProductsTYPE {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
  category: string;
  stock: number;
  rating: number;
  reviews: productReviewTYPE[];
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
