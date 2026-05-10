import React from "react";
import { motion } from "framer-motion";
import { FaBolt, FaCheckCircle, FaStar, FaPlay } from "react-icons/fa";

const FloatingCard = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`absolute bg-slate-800 px-4 py-3 rounded-xl shadow-xl ring-1 ring-blue-500/20 backdrop-blur-md ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: [0, -10, 0] }}
      transition={{
        duration: 0.5,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
        rotate: 2,
      }}
      style={{
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
      }}
    >
      {children}
    </motion.div>
  );
};

const Banner = () => {
  return (
    <section className="bg-slate-900 text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    
        <div>
          <span className=" border border-blue-200 border-shadow inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full text-sm mb-6">
            <FaBolt className="text-blue-400" />
            Trusted by 750+ Companies
          </span>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Launch Your Product <br /> Faster Than Ever
          </h1>

          <p className="text-gray-300 mb-6 max-w-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>

          <div className="flex flex-wrap gap-6 text-md text-gray-300 mb-8">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-sky-400 text-xl" /> Instant Setup
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-sky-400 text-xl" /> Advanced Analytics
            </span>
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-sky-400 text-xl" /> 24/7 Support
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 shadow-2xl hover:bg-blue-700 px-6 py-3 rounded-lg transition flex items-center gap-2">
              Start Free Trial →
            </button>

            <button className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-slate-800 transition flex items-center gap-2">
              <FaPlay /> Watch Demo
            </button>
          </div>

          <p className="text-md text-gray-400 flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            <FaStar className="text-yellow-400" />
            4.9/5 from 1,200+ reviews
          </p>
        </div>

        <div className="relative">
          <img src="/hero.webp" alt="Hero" className="w-full" />

          <FloatingCard className="top-10 left-10">
            <p className="text-lg font-bold">+145%</p>
            <p className="text-xs text-gray-400">Growth Rate</p>
          </FloatingCard>

          <FloatingCard className="bottom-10 left-10">
            <p className="text-green-400 text-sm flex items-center gap-2">
              <FaCheckCircle /> Deployment Successful
            </p>
          </FloatingCard>

          <FloatingCard className="top-20 right-0">
            <p className="text-lg font-bold">12.5k</p>
            <p className="text-xs text-gray-400">Active Users</p>
          </FloatingCard>
        </div>
      </div>
    </section>
  );
};

export default Banner;