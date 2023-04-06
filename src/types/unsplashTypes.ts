export interface SearchData {
  total: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: string;
  urls: Urls;
  links: ResultLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: object;
  user: User;
  tags: Tag[];
}

export interface ResultLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface Tag {
  type: Type;
  title: string;
  source?: Source;
}

export interface Source {
  ancestry: Ancestry;
  title: string;
  subtitle: string;
  description: string;
  meta_title: string;
  meta_description: string;
  cover_photo: CoverPhoto;
}

export interface Ancestry {
  type: Category;
  category: Category;
  subcategory: Category;
}

export interface Category {
  slug: string;
  pretty_slug: string;
}

export interface CoverPhoto {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date | null;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: null | string;
  alt_description: null | string;
  urls: Urls;
  links: ResultLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: CoverPhotoTopicSubmissions;
  premium: boolean;
  plus: boolean;
  user: User;
}

export interface CoverPhotoTopicSubmissions {
  'textures-patterns'?: TexturesPatterns;
  wallpapers?: TexturesPatterns;
}

export interface TexturesPatterns {
  status: string;
  approved_on: Date;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null | string;
  portfolio_url: null | string;
  bio: null | string;
  location: null | string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null | string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null | string;
  portfolio_url: null | string;
  twitter_username: null | string;
  paypal_email: null;
}

export enum Type {
  LandingPage = 'landing_page',
  Search = 'search',
}

export interface PhotoData {
  id: string;
  likes: number;
  alt: string;
  color: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    username: string;
    name: string;
    avatar: {
      large: string;
      small: string;
    };
    bio: string | null;
    location: string | null;
    instagram: string | null;
    twitter: string | null;
  };
}
