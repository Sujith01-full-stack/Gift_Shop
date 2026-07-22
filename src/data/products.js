import img12x18 from "../assets/images/12x18.jpg";
import img10x15 from "../assets/images/10x15.jpg";
import img12x8 from "../assets/images/12x8.jpg";
import img6x8 from "../assets/images/6x8 4.jpg";
import img6x6 from "../assets/images/6x6 2.jpg";
import img6x4 from "../assets/images/6x4.jpg";
import img4x4 from "../assets/images/4x4.jpg";

import cup from "../assets/images/cup.jpg";
import hotCup from "../assets/images/hot cup.jpg";

import keychain from "../assets/images/keychain.jpg";
import keychainRound from "../assets/images/keychain round.jpg";
import keychainHeart from "../assets/images/kc heat.jpg";

import wallet from "../assets/images/wallet.jpg";
import walletName from "../assets/images/wallet name.jpg";

import mobileCase from "../assets/images/case.jpg";

import resin8 from "../assets/images/resin.jpg";
import resin10 from "../assets/images/resin 10x10.jpg";
import resin12 from "../assets/images/resin 12x12.jpg";
import resin18 from "../assets/images/resin 12x18.jpg";
import resinKey from "../assets/images/resin keychain.jpg";

import pillow from "../assets/images/pillow.jpg";

import clock1 from "../assets/images/clock 1.jpg";
import clock2 from "../assets/images/clock 2.jpg";

import money from "../assets/images/money.jpg";

import acrylic12x8 from "../assets/images/Acrylic Frames.jpg";
import acrylic12x18 from "../assets/images/AG.jpg";

import mr1 from "../assets/images/mr 1.jpg";
import heart from "../assets/images/ml.jpg";
import heart1 from "../assets/images/moon light.jpg";
import round1 from "../assets/images/round l.jpg";
import heart2 from "../assets/images/heatrt l.jpg";

import card from "../assets/images/wallet card.jpg";

import bottle from "../assets/images/bottle.jpg";
import bottlename from "../assets/images/bottle name.jpg";

import stand from "../assets/images/stand.jpg";

import polaroid from "../assets/images/Polaroid.jpg";

import Eyes from "../assets/images/eyes.jpg";

import Label from "../assets/images/label.jpg";

import pen from "../assets/images/pen.jpg";

const products = [
    {
    id: 1,
    name: "12x18 Photo Frame",
    category: "Photo Frames",
    price: 799,
    oldPrice: 899,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 20,
    image: img12x18,
    description: "Premium Customized 12x18 Photo Frame",
  },
  {
    id: 2,
    name: "10x15 Photo Frame",
    category: "Photo Frames",
    price: 599,
    oldPrice: 699,
    discount: 10,
    rating: 4.2,
    ratingCount: 100,
    stock: 20,
    image: img10x15,
    description: "Customized 10x15 Frame",
  },
  {
    id: 3,
    name: "12x8 Photo Frame",
    category: "Photo Frames",
    price: 349,
    oldPrice: 399,
    discount: 20,
    rating: 4.6,
    ratingCount: 150,
    stock: 20,
    image: img12x8,
    description: "Customized 12x8 Frame",
  },
  {
    id: 4,
    name: "6x8 Photo Frame",
    category: "Photo Frames",
    price: 249,
    oldPrice: 299,
    discount: 10,
    rating: 4.4,
    ratingCount: 110,
    stock: 20,
    image: img6x8,
    description: "Customized 6x8 Frame",
  },
  {
    id: 5,
    name: "6x6 Photo Frame",
    category: "Photo Frames",
    price: 169,
    oldPrice: 199,
    discount: 25,
    rating: 4.6,
    ratingCount: 140,
    stock: 20,
    image: img6x6,
    description: "Customized 6x6 Frame",
  },
  {
    id: 6,
    name: "6x4 Photo Frame",
    category: "Photo Frames",
    price: 149,
    oldPrice: 179,
    discount: 25,
    rating: 4.8,
    ratingCount: 115,
    stock: 20,
    image: img6x4,
    description: "Customized 6x4 Frame",
  },
  {
    id: 7,
    name: "4x4 Photo Frame",
    category: "Photo Frames",
    price: 99,
    oldPrice: 129,
    discount: 22,
    rating: 4.1,
    ratingCount: 120,
    stock: 20,
    image: img4x4,
    description: "Customized 4x4 Frame",
  },     
  
  {
    id: 8,
    name: "Cup Print (Magic Mug)",
    category: "Cup Print",
    price: 349,
    oldPrice: 499,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 30,
    image: cup,
    description:
      "Personalized magic mug that reveals your photo when hot coffee or tea is poured.",
  },

  {
    id: 9,
    name: "Cup Print (Hot Water Mug)",
    category: "Cup Print",
    price: 449,
    oldPrice: 599,
    discount: 20, 
    rating: 4.5,
    ratingCount: 120,
    stock: 30,
    image: hotCup,
    description:
      "Personalized Magic Hot Water Mug that reveals your photo when hot coffee or tea is poured.",
  },
  {
    id: 10,
    name: "Photo Keychain Rectangle",
    category: "Keychains",
    price: 149,
    oldPrice: 199,
    discount: 20,
    rating: 4.8,
    ratingCount: 125,
    stock: 45,
    image:keychain,
    description:
      "Double-sided customized acrylic photo keychain with premium finish.",
  },
  {
    id: 11,
    name: "Photo Keychain Round",
    category: "Keychains",
    price: 149,
    oldPrice: 199,
    discount: 15,
    rating: 4.7,
    ratingCount: 100,
    stock: 45,
    image:keychainRound,
    description:
      "Double-sided customized acrylic photo keychain with premium finish.",
  },
  {
    id: 12,
    name: "Photo Keychain Heart",
    category: "Keychains",
    price: 149,
    oldPrice: 199,
    discount: 25,
    rating: 4.8,
    ratingCount: 125,
    stock: 45,
    image: keychainHeart,
    description:
      "Double-sided customized acrylic photo keychain with premium finish.",
  },

  {
    id: 13,
    name: "Customized Wallet Pic",
    category: "Wallets",
    price: 799,
    oldPrice: 999,
    discount: 10,
    rating: 4.8,
    ratingCount: 75,
    stock: 18,
    image: wallet,
    description:
      "Premium leather wallet with customized name and photo engraving.",
  },
  {
    id: 14,
    name: "Customized Wallet Name",
    category: "Wallets",
    price: 799,
    oldPrice: 999,
    discount: 17,
    rating: 4.2,
    ratingCount: 105,
    stock: 18,
    image: walletName,
    description:
      "Premium leather wallet with customized name and photo engraving.",
  },
  {
    id: 15,
    name: "Mobile Case print",
    category: "Mobile Cases",
    price: 349,
    oldPrice: 499,
    discount: 24,
    rating: 4.4,
    ratingCount: 114,
    stock: 50,
    image: mobileCase,
    description:
      "High-quality personalized mobile back case with your favorite photo.",
  },
  {
    id: 16,
    name: "Resin Art (8X8)",
    category: "Resin Art",
    price: 1199,
    oldPrice: 1299,
    discount: 10,
    rating: 4.8,
    ratingCount: 125,
    stock: 12,
    image: resin8,
    description:
      "Beautiful handmade resin art piece for home decoration.",
  },

  {
    id: 17,
    name: "Resin Art (10x10)",
    category: "Resin Art",
    price: 1599,
    oldPrice: 1799,
    discount: 10,
    rating: 4.8,
    ratingCount: 125,
    stock: 12,
    image: resin10,
    description:
      "Beautiful handmade resin art piece for home decoration.",
  },
  {
    id: 18,
    name: "Resin Art (12x12)",
    category: "Resin Art",
    price: 1799,
    oldPrice: 1999,
    discount: 25,
    rating: 4.6,
    ratingCount: 100,
    stock: 12,
    image: resin12,
    description:
      "Beautiful handmade resin art piece for home decoration.",
  },
  {
    id: 19,
    name: "Resin Art (12x18)",
    category: "Resin Art",
    price: 3799,
    oldPrice: 3999,
    discount: 18,
    rating: 4.8,
    ratingCount: 97,
    stock: 12,
    image: resin18,
    description:
      "Beautiful handmade resin art piece for home decoration.",
  },
  {
    id: 20,
    name: "Resin key chain",
    category: "Resin Art",
    price: 199,
    oldPrice: 249,
    discount: 22,
    rating: 4.8,
    ratingCount: 120,
    stock: 12,
    image: resinKey,
    description:
      "Beautiful handmade resin art piece for home decoration.",
  },
  
  {
    id: 21,
    name: "Customized Pillow",
    category: "Home Decor",
    price: 499,
    oldPrice: 699,
    discount: 19,
    rating: 4.8,
    ratingCount: 109,
    stock: 35,
    image: pillow,
    description:
      "Soft customized pillow printed with your favorite memories.",
  },
  {
    id: 22,
    name: "Photo Clock (10x10)",
    category: "Wall Clock",
    price: 1199,
    oldPrice: 1299,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 20,
    image: clock1,
    description:
      "Customized wall clock with HD photo printing and silent movement.",
  },

  {
    id: 23,
    name: "Photo Clock (12x12)",
    category: "Wall Clock",
    price: 1199,
    oldPrice: 1299,
    discount: 20,
    rating: 4.8,
    ratingCount: 196,
    stock: 20,
    image: clock2,
    description:
      "Customized wall clock with HD photo printing and silent movement.",
  },

  
  {
    id: 24,
    name: "Money Saving Box",
    category: "Money Box",
    price: 399,
    oldPrice: 499,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 28,
    image: money,
    description:
      "Personalized wooden money saving box with engraved name.",
  },
  {
    id: 25,
    name: "Acrylic Frames (12x8)",
    category: "Acrylic Frames",
    price: 799,
    oldPrice: 999,
    discount: 15,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: acrylic12x8,
    description:
      "Romantic customized LED acrylic lamp with couple photo and names.",
  },
  
  {
    id: 26,
    name: "Acrylic Frames (12x18)",
    category: "Acrylic Frames",
    price: 1799,
    oldPrice: 1999,
    discount: 25,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: acrylic12x18,
    description:
      "Romantic customized LED acrylic lamp with couple photo and names.",
  },

   {
    id: 27,
    name: "Mirror (round)",
    category: "Mirror light",
    price: 399,
    oldPrice: 449,
    discount: 20,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: mr1,
    description: "Stylish LED mirror light crafted with high-quality acrylic and energy-efficient lighting. Ideal for makeup rooms, bedrooms, and personalized gifts."
  },

  {
    id: 28,
    name: "Mirror (heart)",
    category: "Mirror light",
    price: 399,
    oldPrice: 449,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: heart,
    description: "Stylish LED mirror light crafted with high-quality acrylic and energy-efficient lighting. Ideal for makeup rooms, bedrooms, and personalized gifts."
  },

  {
    id: 29,
    name: "Customized LED Mirror Light (moon)",
    category: " LED Mirror light",
    price: 1199,
    oldPrice: 1299,
    discount: 21,
    rating: 4.8,
    ratingCount: 150,
    stock: 10,
    image: heart1,
    description: "Premium customized LED mirror light with bright illumination and a modern finish. A perfect gift for birthdays, anniversaries, weddings, and home décor."
  },

  {
    id: 30,
    name: "Customized LED Mirror Light (round)",
    category: " LED Mirror light",
    price: 1199,
    oldPrice: 1299,
    discount: 10,
    rating: 4.0,
    ratingCount: 125,
    stock: 10,
    image: round1,
    description: "Premium customized LED mirror light with bright illumination and a modern finish. A perfect gift for birthdays, anniversaries, weddings, and home décor."
  },

  {
    id: 31,
    name: "Customized LED Mirror Light (heart)",
    category: " LED Mirror light",
    price: 1199,
    oldPrice: 1299,
    discount: 11,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: heart2,
    description: "Premium customized LED mirror light with bright illumination and a modern finish. A perfect gift for birthdays, anniversaries, weddings, and home décor."
  },

  {
    id: 32,
    name: "Wallet Card",
    category: " Wallet Card",
    price:199,
    oldPrice:299,
    discount: 18,
    rating: 4.8,
    ratingCount: 120,
    stock: 10,
    image: card,
    description: "Customized wallet card engraved with your favorite photo or heartfelt message. A thoughtful gift for birthdays, anniversaries, Valentine's Day, and special occasions."
  },

  {
    id: 33,
    name: "Customized Bottle (pic)",
    category: " Customized Bottle",
    price:699,
    oldPrice:899,
    discount: 16,
    rating: 4.8,
    ratingCount: 125,
    stock: 10,
    image: bottle,
    description: "Customized sports water bottle with a leak-proof design and premium finish. Ideal for gym, travel, office, school, and outdoor activities."
  },

  {
    id: 34,
    name: "Customized Bottle (name)",
    category: " Customized Bottle",
    price:699,
    oldPrice:899,
    discount: 16,
    rating: 4.3,
    ratingCount: 127,
    stock: 10,
    image: bottlename,
    description: "Customized sports water bottle with a leak-proof design and premium finish. Ideal for gym, travel, office, school, and outdoor activities."
  },

  {
    id: 35,
    name: "Customized stand (pic)",
    category: " Customized Stand",
    price:599,
    oldPrice:799,
    discount: 12,
    rating: 4.4,
    ratingCount: 100,
    stock: 10,
    image: stand,
    description: "Premium customized stand featuring your favorite photo, name, or message. A perfect keepsake for your desk, home, or office."
  },

  {
    id: 36,
    name: "Polaroid print ( 1 pic)",
    category: " polaroid",
    price:12,
    oldPrice:15,
    discount: 10,
    rating: 4.8,
    ratingCount: 80,
    stock: 10,
    image: polaroid,
    description: "Customized Polaroid photo prints made using premium photo paper with sharp image quality and a stylish vintage border. Perfect for gifting, decorating, and preserving unforgettable moments."
  },
  {
    id: 37,
    name: "Custom Eyes Print",
    category: " Custom Eyes Print",
    price:799,
    oldPrice:899,
    discount: 10,
    rating: 4.8,
    ratingCount: 80,
    stock: 10,
    image: Eyes,
    description: "Premium personalized stainless steel bar pendant necklace with custom photo engraving. Elegant silver finish, lightweight, waterproof, and perfect for birthdays, anniversaries, Valentine's Day, weddings, and special gifts."
  },
  {
    id: 38,
    name: "School Label Stickers(30 pie)",
    category: " School Label Sticker",
    price:129,
    oldPrice:149,
    discount: 10,
    rating: 4.2,
    ratingCount: 80,
    stock: 10,
    image: Label,
    description: "Premium personalized Spider Man school name stickers with custom photo and student details. Waterproof, tear-resistant, high-quality print, and perfect for books, notebooks, lunch boxes, water bottles, and school supplies."
  },
  {
    id: 39,
    name: "Personalized Engraved Metal Pen",
    category: " Pen",
    price:499,
    oldPrice:699,
    discount: 10,
    rating: 4.2,
    ratingCount: 80,
    stock: 10,
    image: pen,
    description: "Premium personalized engraved metal pen with custom name printing. Elegant black finish with smooth writing performance, making it a perfect gift for students, teachers, professionals, office staff, birthdays, corporate events, and special occasions."
  },
];

export default products;