import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, ShoppingBag, Truck, Shield, Star, TrendingUp } from 'lucide-react';
import HeroSlider from '../../components/sliders/HeroSlider';
import FeaturedSlider from '../../components/sliders/FeaturedSlider';
import SectionsHead from '../../components/common/SectionsHead';
import TopProducts from '../../components/product/TopProducts';
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
      {/* Hero Section */}
      {/* <section className="py-24 md:pt-36 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="inline-flex items-center space-x-2 bg-indigo-400/20 border border-indigo-400/30 rounded-full px-6 py-2 mb-8"
            >
              <Shirt className="h-5 w-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium">Premium Sportswear</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                ABD
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Sportswear
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Premium performance and lifestyle apparel designed for athletes who demand 
              both function and style in their everyday wear.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-indigo-400/25 transition-all duration-300 flex items-center space-x-2"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Collection</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-indigo-400/50 text-indigo-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-400/5 transition-all duration-300"
              >
                Size Guide
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <HeroSlider />

      {/* Features Section */}
      {/* <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-indigo-400 to-purple-500 p-3 rounded-xl w-fit mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen">
       
        <FeaturedSlider />
      </div>
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen">
       
      <TopProducts />
      </div>

      {/* Products Grid */}
      {/* <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Product <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Range</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every piece designed with the athlete's lifestyle in mind
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300 group"
              >
                <div className={`bg-gradient-to-r ${product.gradient} p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Shirt className="h-8 w-8 text-white" />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">
                    {product.category}
                  </h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                    {product.price}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-2 text-gray-400">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`} />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Collections Section */}
      {/* <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Collections</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Curated collections for every aspect of the athletic lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300">
                  <div className="relative h-64">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-indigo-400 text-sm font-medium">
                        {collection.items}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-gray-400 mb-4">
                      {collection.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-indigo-400 font-semibold hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2"
                    >
                      <span>Explore Collection</span>
                      <ShoppingBag className="h-4 w-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Brand Story Section */}
      {/* <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Built for</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                  Athletes
                </span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                ABD Sportswear functions as both a high-visibility revenue channel and a strategic
                engine for brand growth, delivering utility, identity, and cultural relevance.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  'Direct-to-consumer model for better margins',
                  'Data-driven insights into consumer behavior',
                  'Premium materials and construction',
                  'Athlete-tested designs and fits',
                  'Limited edition drops and collaborations'
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full" />
                    <span className="text-gray-300">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-400 to-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full -translate-y-16 translate-x-16 blur-2xl" />

                <div className="relative z-10 text-center">
                  <Shirt className="h-20 w-20 text-indigo-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Quality Promise
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Every piece tested by professional athletes for performance and durability
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-indigo-400/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-indigo-400">100%</div>
                      <div className="text-sm text-gray-400">Satisfaction</div>
                    </div>
                    <div className="bg-purple-400/10 rounded-lg p-4">
                      <div className="text-2xl font-bold text-purple-400">30</div>
                      <div className="text-sm text-gray-400">Day Returns</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-24 bg-gradient-to-r from-indigo-400 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Elevate Your Style
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join the ABD community and represent excellence both on and off the field.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
            >
              Shop ABD Sportswear
            </motion.button>
          </motion.div>
        </div>
      </section> */}
    </div>

  );
};

export default Apparel;