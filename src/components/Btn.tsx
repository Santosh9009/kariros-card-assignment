import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
  isAnimated?: boolean;  // Add new prop
}

const Btn = ({ title, description, imageUrl, isAnimated = true }: CardProps) => {
  return (
    <div className="relative inline-flex h-[400px] w-[300px] overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {isAnimated && (
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#A290FB_360deg)]" />
      )}
      <div className="relative flex h-full w-full flex-col items-center justify-start rounded-2xl bg-slate-950 p-6 text-white backdrop-blur-3xl">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            className="mb-4 h-48 w-full rounded-xl object-cover"
          />
        )}
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-center text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Btn;
