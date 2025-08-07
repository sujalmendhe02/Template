import React from 'react';
import { ArrowRight, Truck, Shield, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Fashion
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Redefined
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-lg">
              Discover our exclusive collection of premium clothing designed for the modern lifestyle. 
              Quality craftsmanship meets contemporary style.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                View Lookbook
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Free Shipping</p>
                  <p className="text-sm text-gray-300">On orders over ₹999</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Secure Payment</p>
                  <p className="text-sm text-gray-300">100% protected</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-6 h-6 text-yellow-400" />
                <div>
                  <p className="font-semibold">Easy Returns</p>
                  <p className="text-sm text-gray-300">30-day policy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Fashion Model"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <p className="font-bold text-2xl">50+</p>
              <p className="text-gray-600">Premium Brands</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;