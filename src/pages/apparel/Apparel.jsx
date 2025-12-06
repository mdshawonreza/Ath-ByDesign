import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Truck, Shield, Star, TrendingUp } from 'lucide-react';

const Apparel = () => {
  // const products = [
  //   {
  //     category: 'Performance Tees',
  //     items: ['Moisture-wicking fabric', 'Athletic fit', 'Breathable design', 'UV protection'],
  //     price: '$35',
  //     gradient: 'from-blue-400 to-purple-500'
  //   },
  //   {
  //     category: 'Premium Hoodies',
  //     items: ['Cotton-poly blend', 'Kangaroo pocket', 'Ribbed cuffs', 'Embroidered logo'],
  //     price: '$85',
  //     gradient: 'from-green-400 to-teal-500'
  //   },
  //   {
  //     category: 'Training Shorts',
  //     items: ['4-way stretch fabric', 'Quick-dry technology', 'Side pockets', 'Compression liner'],
  //     price: '$45',
  //     gradient: 'from-orange-400 to-red-500'
  //   },
  //   {
  //     category: 'Lifestyle Caps',
  //     items: ['Structured crown', 'Adjustable strap', 'Premium embroidery', 'Curved visor'],
  //     price: '$30',
  //     gradient: 'from-purple-400 to-pink-500'
  //   },
  //   {
  //     category: 'Athletic Socks',
  //     items: ['Cushioned sole', 'Arch support', 'Moisture management', 'Seamless toe'],
  //     price: '$20',
  //     gradient: 'from-cyan-400 to-blue-500'
  //   },
  //   {
  //     category: 'Track Pants',
  //     items: ['Tapered fit', 'Zip pockets', 'Elastic waistband', 'Reflective details'],
  //     price: '$65',
  //     gradient: 'from-yellow-400 to-orange-500'
  //   }
  // ];

  // const features = [
  //   {
  //     icon: Truck,
  //     title: 'Free Shipping',
  //     description: 'Free delivery on orders over $75'
  //   },
  //   {
  //     icon: Shield,
  //     title: '30-Day Returns',
  //     description: 'Hassle-free returns and exchanges'
  //   },
  //   {
  //     icon: Star,
  //     title: 'Premium Quality',
  //     description: 'Athlete-tested materials and construction'
  //   },
  //   {
  //     icon: TrendingUp,
  //     title: 'Exclusive Designs',
  //     description: 'Limited edition drops and athlete collaborations'
  //   }
  // ];

  const collections = [
    {
      name: 'Training Essentials',
      description: 'Core pieces for your daily workouts',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?w=400&h=500',
      items: '12 pieces'
    },
    {
      name: 'Street Culture',
      description: 'Urban-inspired lifestyle apparel',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?w=400&h=500',
      items: '8 pieces'
    },
    {
      name: 'Competition Ready',
      description: 'Professional-grade performance wear',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=400&h=500',
      items: '15 pieces'
    }
  ];

  return (
    <div className="">

      {/* 
      <HeroSlider />

      

      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen">
       
        <FeaturedSlider />
      </div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen">
       
      <TopProducts />
      </div> */}

     
      <div className="w-full h-screen">
        <iframe
          src="https://athletebydesign.myshopify.com/"
          title="Apparels"
          className="w-full h-full border-0"
        ></iframe>
      </div>



    </div>

  );
};

export default Apparel;