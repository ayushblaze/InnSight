import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/`;

export const cabins = [
  {
    name: "Shivalik Haven",
    maxCapacity: 2,
    regularPrice: 9200,
    discount: 500,
    image: imageUrl + "cabin-001.jpg",
    description:
      "A quiet hillside cabin for couples with a warm fireplace, pine interiors, and valley-facing windows.",
  },
  {
    name: "Deodar Crown",
    maxCapacity: 3,
    regularPrice: 11800,
    discount: 1000,
    image: imageUrl + "cabin-002.jpg",
    description:
      "A premium compact cabin surrounded by deodar trees, ideal for small families and weekend stays.",
  },
  {
    name: "Pinecrest Family Lodge",
    maxCapacity: 4,
    regularPrice: 15400,
    discount: 1200,
    image: imageUrl + "cabin-003.jpg",
    description:
      "A practical family cabin with two sleeping zones, a scenic deck, and modern washrooms.",
  },
  {
    name: "Snowline Retreat",
    maxCapacity: 4,
    regularPrice: 16800,
    discount: 1500,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Designed for comfort in all seasons with underfloor heating and panoramic mountain views.",
  },
  {
    name: "Cedar Breeze",
    maxCapacity: 5,
    regularPrice: 18600,
    discount: 1700,
    image: imageUrl + "cabin-005.jpg",
    description:
      "A spacious cedar-themed stay with an indoor lounge and private sit-out for evening bonfires.",
  },
  {
    name: "Valley View Manor",
    maxCapacity: 6,
    regularPrice: 21200,
    discount: 2200,
    image: imageUrl + "cabin-006.jpg",
    description:
      "A large manor-style unit for families, featuring a dining area and sunrise-facing balcony.",
  },
  {
    name: "Summit Vista Chalet",
    maxCapacity: 6,
    regularPrice: 22800,
    discount: 2000,
    image: imageUrl + "cabin-007.jpg",
    description:
      "An alpine-style chalet with generous living space, perfect for long holiday stays.",
  },
  {
    name: "Evergreen Grand",
    maxCapacity: 8,
    regularPrice: 26500,
    discount: 3000,
    image: imageUrl + "cabin-008.jpg",
    description:
      "A premium group cabin with multiple bedrooms, an entertainment lounge, and forest-facing patio.",
  },
  {
    name: "Riverstone Cottage",
    maxCapacity: 2,
    regularPrice: 10200,
    discount: 700,
    image: imageUrl + "cabin-001.jpg",
    description:
      "A romantic riverside cottage with handcrafted interiors and cozy ambient lighting.",
  },
  {
    name: "Himalayan Nest",
    maxCapacity: 3,
    regularPrice: 12600,
    discount: 900,
    image: imageUrl + "cabin-002.jpg",
    description:
      "Compact yet luxurious, this cabin includes a reading corner and misty morning views.",
  },
  {
    name: "Maple Ridge Residence",
    maxCapacity: 5,
    regularPrice: 19600,
    discount: 1600,
    image: imageUrl + "cabin-003.jpg",
    description:
      "A modern mountain residence with warm wood textures and large windows for natural light.",
  },
  {
    name: "Tranquil Peaks Villa",
    maxCapacity: 10,
    regularPrice: 31200,
    discount: 3500,
    image: imageUrl + "cabin-004.jpg",
    description:
      "Our largest villa for events and reunions, with multiple bedrooms and a private lawn.",
  },
];