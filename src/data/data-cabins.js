import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "Himalayan Retreat",
    maxCapacity: 2,
    regularPrice: 9500,
    discount: 0,
    image: imageUrl + "cabin-001.jpg",
    description:
      "A cozy Himalayan cabin for couples, featuring panoramic mountain views, a fireplace, and a private hot tub.",
  },
  {
    name: "Royal Deodar",
    maxCapacity: 2,
    regularPrice: 13500,
    discount: 1500,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Luxury retreat nestled among deodar trees, perfect for romantic getaways with a king-size bed and spa shower.",
  },
  {
    name: "Family Pine Haven",
    maxCapacity: 4,
    regularPrice: 18000,
    discount: 2000,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Spacious family cabin with modern amenities, two bedrooms, and a private deck overlooking pine forests.",
  },
  {
    name: "Oakwood Grandeur",
    maxCapacity: 4,
    regularPrice: 22000,
    discount: 2500,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Elegant cabin for families, featuring oak interiors, gourmet kitchen, and a luxurious hot tub.",
  },
  {
    name: "Cedar Comfort",
    maxCapacity: 6,
    regularPrice: 16500,
    discount: 0,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Comfortable group cabin with cedar wood interiors, fireplace, and en-suite bathrooms for all rooms.",
  },
  {
    name: "Mountain Majesty",
    maxCapacity: 6,
    regularPrice: 20000,
    discount: 4000,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Lavish mountain-view cabin for large families, featuring a grand living area and private outdoor jacuzzi.",
  },
  {
    name: "Forest King Suite",
    maxCapacity: 8,
    regularPrice: 18000,
    discount: 3500,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Spacious suite for big groups, with multiple bedrooms, living areas, and a large deck for gatherings.",
  },
  {
    name: "Grand Valley Villa",
    maxCapacity: 10,
    regularPrice: 21000,
    discount: 0,
    image: imageUrl + "cabin-008.jpg",
    description:
      "Ultimate luxury villa for large groups, featuring grand interiors, formal dining, and a private hot tub.",
  },
  {
    name: "Maple Leaf Cottage",
    maxCapacity: 2,
    regularPrice: 10500,
    discount: 1000,
    image: imageUrl + "cabin-001.jpg",
    description:
      "Charming cottage for couples, with maple wood accents and a cozy reading nook.",
  },
  {
    name: "Sunrise Chalet",
    maxCapacity: 3,
    regularPrice: 12000,
    discount: 0,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Bright chalet with sunrise views, perfect for small families or friends.",
  },
  {
    name: "Riverstone Lodge",
    maxCapacity: 5,
    regularPrice: 21000,
    discount: 2500,
    image: imageUrl + "cabin-003.jpg",
    description:
      "Lodge by the river, featuring stone accents, a fire pit, and a large outdoor seating area.",
  },
  {
    name: "Birchwood Escape",
    maxCapacity: 4,
    regularPrice: 17000,
    discount: 2000,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Modern escape with birchwood interiors, spa-inspired bathrooms, and a private balcony.",
  },
  {
    name: "Willow Winds",
    maxCapacity: 6,
    regularPrice: 26000,
    discount: 3000,
    image: imageUrl + "cabin-005.jpg",
    description:
      "Spacious cabin for groups, with willow wood decor and a large entertainment area.",
  },
  {
    name: "Summit Serenity",
    maxCapacity: 8,
    regularPrice: 5000,
    discount: 500,
    image: imageUrl + "cabin-006.jpg",
    description:
      "Serene summit cabin with breathtaking views, multiple bedrooms, and a private hot tub.",
  },
  {
    name: "Evergreen Palace",
    maxCapacity: 12,
    regularPrice: 6000,
    discount: 800,
    image: imageUrl + "cabin-007.jpg",
    description:
      "Palatial cabin for large gatherings, featuring evergreen wood, banquet hall, and luxury amenities.",
  },
];
