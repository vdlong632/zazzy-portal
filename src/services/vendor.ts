export type VendorRating = {
  stars: number;
  average: number;
  totalReviews: number;
};

export type Vendor = {
  id: number;
  logo: string;
  name: string;
  category: string;
  area: string;
  responseTime: string;
  rating: VendorRating;
  badges: string[];
  certifications: string[];
};
