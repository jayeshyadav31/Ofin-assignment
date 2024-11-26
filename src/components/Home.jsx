import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { bicycles as newArrivals } from "../db/database";

const HeroSection = () => (
  <section className="relative text-white h-screen">
    <div className="relative w-full h-full">
      <img
        src="/assets/bicycle-1.webp"
        className="absolute inset-0 w-full h-full object-cover -z-10"
        alt="Premium Mountain Bike"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.7) 40%, rgba(220, 38, 38, 0.6) 100%)",
        }}
      />
    </div>
    <div className="absolute inset-0 flex items-center">
      <div className="container mx-auto px-6 space-y-8">
        <div className="max-w-2xl">
          <span className="text-red-400 text-xl font-medium tracking-wide">Premium Collection</span>
          <h1 className="text-6xl font-bold mt-4 font-racingOneSans leading-tight">
            Adventure Series<br/>
            <span className="text-red-500">Pro Elite 2024</span>
          </h1>
          <div className="mt-8 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="border bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Frame</h3>
                <p className="text-gray-200">Carbon Fiber Ultralight</p>
              </div>
              <div className="border  bg-black/30 p-4 rounded-lg backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Suspension</h3>
                <p className="text-gray-200">Dual Progressive</p>
              </div>
            </div>
            <Link
              to="/shop"
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full hover:bg-red-700 transition-all transform hover:scale-105"
            >
              Explore Now
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ProductCard = ({ bike }) => (
  <div className="group hover:shadow-xl transition-all duration-300 rounded-2xl p-4">
    <Link to={`/product/${bike.id}`}>
      <div className="relative aspect-square mb-4 overflow-hidden rounded-xl bg-gray-100">
        <img
          src={bike.image}
          alt={bike.name}
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2">
          <Star className="h-5 w-5 text-red-500" />
        </div>
      </div>
      <div className="space-y-2 px-2">
        <p className="text-sm text-red-500 font-medium">Premium Collection</p>
        <h3 className="text-xl font-bold text-gray-800">{bike.name}</h3>
        <div className="flex space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < bike.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"
              }`}
            />
          ))}
        </div>
        <p className="text-2xl font-bold text-gray-900">${bike.price.toFixed(2)}</p>
      </div>
    </Link>
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-racingOneSans">
              Latest Collections
            </h2>
            <p className="text-gray-600 mt-4">Discover our newest premium bikes</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {newArrivals.slice(0, 4).map((bike) => (
              <ProductCard key={bike.id} bike={bike} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}