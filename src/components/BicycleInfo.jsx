import React from "react";
import { useParams } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { bicycles } from "../db/database";

const RatingStars = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-2xl ${
            index < rating ? "text-amber-400" : "text-gray-300"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const ProductImage = ({ image, name }) => (
  <div className="relative overflow-hidden rounded-2xl bg-gray-100 h-[500px]">
    <img
      src={image}
      alt={name}
      className="object-cover w-full h-full transition-transform hover:scale-105"
    />
    <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
      <Heart className="w-6 h-6 text-gray-600" />
    </button>
  </div>
);

const ProductDetails = ({ bicycle }) => (
  <div className="flex flex-col gap-6">
    <div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{bicycle.name}</h1>
      <div className="flex items-center gap-4">
        <RatingStars rating={bicycle.rating} />
        <span className="text-gray-500">({bicycle.rating} out of 5)</span>
      </div>
    </div>
    
    <div className="text-3xl font-bold text-emerald-600">
      ${bicycle.price.toFixed(2)}
    </div>
    
    <p className="text-gray-700 leading-relaxed">{bicycle.description}</p>
    
    <div>
      <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
      <ul className="grid gap-2">
        {bicycle.specs.map((spec, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full" />
            <span className="text-gray-700">{spec}</span>
          </li>
        ))}
      </ul>
    </div>
    
    <button className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-xl hover:bg-emerald-700 transition-colors">
      <ShoppingCart className="w-5 h-5" />
      <span className="font-semibold">Add to Cart</span>
    </button>
  </div>
);

export default function BicycleInfo() {
  const { id } = useParams();
  const bicycle = bicycles.find((bike) => bike.id === id);

  if (!bicycle) {
    return <div className="text-center py-12">Bicycle not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-12">
        <ProductImage image={bicycle.image} name={bicycle.name} />
        <ProductDetails bicycle={bicycle} />
      </div>
    </div>
  );
}