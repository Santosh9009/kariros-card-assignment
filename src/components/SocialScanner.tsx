"use client";
import { ChevronDown } from "lucide-react";
import TwitterCard from "./card";
// Remove LaunchFeed import
import { useState } from "react";

const SocialScanner = ({
  onCardClick,
  selectedCardId,
}: {
  onCardClick: (id: string) => void;
  selectedCardId: string;
}) => {
  // Remove showLaunchFeed state

  const cardData = {
    id: "1",
    profile: {
      name: "Elon Musk",
      handle: "@elonmusk",
      image: "/Profile Image.svg",
      verified: true,
      list: "top 10",
    },
    tweet: {
      content:
        "X is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not just a letter, it is a way of lifeX is not ju",
      image: "/Mainpic.svg",
      timestamp: "now",
    },
    tags: [
      { name: "$XLIFE", time: "2m" },
      { name: "$XIZ", time: "1m" },
      { name: "$WAYOFX", time: "30s" },
    ],
    metrics: {
      comments: 18,
      retweets: 143,
      likes: "30s",
      influenceScore: 94,
    },
  };

  const cardData2 = {
    id: "2",
    profile: {
      name: "Elon Musk",
      handle: "@elonmusk",
      image: "/Profile Image.svg",
      verified: true,
      list: "top 10",
    },
    tweet: {
      content: "hirehciuefhvicuerhviurepump",
      timestamp: "now",
    },
    tags: [
      { name: "$XLIFE", time: "2m" },
      { name: "$XIZ", time: "1m" },
      { name: "$WAYOFX", time: "30s" },
    ],
    metrics: {
      comments: 18,
      retweets: 143,
      likes: "30s",
      influenceScore: 94,
    },
  };

  return (
    <main className="flex flex-col bg-[#0A0B14] px-3">
      <div className="flex justify-between items-center mb-3 py-1 border-b border-white/10 text-xs">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Social Scanner</h1>
          <div className="flex rounded-full bg-gradient-to-r from-white/20 via-white/10 bg-white-5 p-[1px]">
            <div className="flex bg-gradient-to-r from-white/5 via-white/3  rounded-full bg-[#0A0B14] px-2 py-0.5 items-center gap-1">
              List
              <span className="text-white/40">250</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="flex text-xs gap-2">
          Tracked Accounts
            <div className="flex b rounded-lg bg-gradient-to-br from-white/5 to-white/20 px-2 py-0.5">
              8000
            </div>
          </div>
        </div>

      <div className="flex gap-2 mb-2 text-xs">
        <div className="flex rounded-full bg-gradient-to-r from-[#9050E4] via-white/10 p-[1px]">
          <div className="flex justify-center items-center gap-1.5 bg-gradient-to-r from-white/5 via-white/3 rounded-full bg-[#0A0B14] px-2 py-0.5">
            All Feeds 
            <span className="bg-white/10 rounded-full px-1.5 py-0.5">158</span>
          </div>
        </div>

        <div className="flex rounded-full bg-gradient-to-r from-white/20 via-white/10 p-[1px]">
          <div className="flex justify-center items-center gap-1.5 bg-gradient-to-r from-white/5 via-white/3 rounded-full bg-[#0A0B14] px-2 py-0.5">
            KOLs
            <span className="bg-white/10 rounded-full px-1.5 py-0.5">24</span>
          </div>
        </div>
        <div className="flex rounded-full bg-gradient-to-r from-white/20 via-white/10 p-[1px]">
          <div className="flex justify-center items-center gap-1.5 bg-gradient-to-r from-white/5 via-white/3 rounded-full bg-[#0A0B14] px-2 py-0.5">
            VCs
            <span className="bg-white/10 rounded-full px-1.5 py-0.5">45</span>
          </div>
        </div>
        <div className="flex rounded-full bg-gradient-to-r from-white/20 via-white/10 p-[1px]">
          <div className="flex justify-center items-center gap-1.5 bg-gradient-to-r from-white/5 via-white/3 rounded-full bg-[#0A0B14] px-2 py-0.5">
            Direct calls
            <span className="bg-white/10 rounded-full px-1.5 py-0.5">89</span>
          </div>
        </div>
      </div>

      <TwitterCard
        {...cardData}
        onClick={onCardClick}
        selectedCardId={selectedCardId}
      />
      <div className="mb-3"></div>
      <TwitterCard
        {...cardData2}
        textColor="text-red-500"
        onClick={onCardClick}
        selectedCardId={selectedCardId}
      />
    </main>
  );
};

export default SocialScanner;
