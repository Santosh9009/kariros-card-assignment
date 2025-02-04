"use client";
import Image from "next/image";
import retweet from "../../public/retweet.svg";
import commment from "../../public/comment.svg";
import heart from "../../public/heart.svg";
import bluetick from "../../public/BlueTick.svg";
import "../app/globals.css";
import { TwitterCardProps } from "../types/twitter-card";
import GradientButton from "./button";
import { useEffect } from "react";

const TwitterCard = ({
  id,
  profile,
  tweet,
  tags,
  metrics,
  textColor,
  onClick,
  selectedCardId,
}: TwitterCardProps) => {
  const isSelected = selectedCardId === id ? true : false;

  return (
    <div className="relative inline-flex w-full sm:w-[90%] md:w-[80%] lg:w-[30vw] overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {isSelected && (
        <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#A290FB_360deg)]" />
      )}
      <div className="relative flex w-full flex-col rounded-2xl bg-[#0A0B14] p-2 sm:p-4 text-white backdrop-blur-3xl shadow-[inset_0px_0px_32px_#A290FB1A] border border-white/10">
        <div
          onClick={() => onClick(id)}
          className="flex flex-col gap-3 text-white"
        >
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Image
                src={profile.image}
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
              <div className="h-[36px] flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-xs">{profile.name}</span>
                  {profile.verified && (
                    <Image
                      src={bluetick}
                      alt="Verified"
                      width={14}
                      height={14}
                    />
                  )}
                  {profile.list && (
                    <span className="text-[10px] text-gray-400">
                      List: {profile.list}
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-xs">{profile.handle}</span>
              </div>
            </div>
            <span className="text-gray-400 text-[10px]">{tweet.timestamp}</span>
          </div>

          <p className={`text-[11px] sm:text-xs ${textColor || "text-gray-300"}`}>
            {tweet.content}
          </p>

          {tweet.image && (
            <div className="rounded-lg overflow-hidden">
              <Image
                src={tweet.image}
                alt="Tweet image"
                width={500}
                height={280}
                className="w-full rounded-lg"
              />
            </div>
          )}

          <div className="mt-2 sm:mt-3 flex gap-1 sm:gap-2 overflow-x-auto bg-gradient-to-r from-white/[0.05] via-transparent to-white/[0.05] p-1 rounded-lg">
            {tags.map((tag, index) => (
              <GradientButton key={index}>
                <span className="text-[10px] sm:text-xs">
                  {tag.name} {tag.time}
                </span>
              </GradientButton>
            ))}
          </div>
          <div className="mt-2 sm:mt-3 flex items-center justify-between text-gray-400 text-[10px] sm:text-xs">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
              <Image src={commment} alt="Comment" width={14} height={14} />
              <span className="text-white">{metrics.comments}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
              <Image src={retweet} alt="Retweet" width={14} height={14} />
              <span className="text-white">{metrics.retweets}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-red-400">
              <Image src={heart} alt="Heart" width={14} height={14} />
              <span className="text-white">{metrics.likes}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
              <span>
                Influence Score{" "}
                <span className="text-white">{metrics.influenceScore}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterCard;
