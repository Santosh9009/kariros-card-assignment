import { ChevronDown } from "lucide-react";
import TwitterCard from "./card";

const SocialScanner = () => {
  const cardData = {
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
      <div className="flex justify-between items-center mb-4 py-1.5 border-b border-white/10 text-sm">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">Social Scanner</h1>
          <div className="flex rounded-full bg-gradient-to-r from-white/30 via-white/20 p-[1px]">
            <div className="flex bg-gradient-to-r from-white/5 via-white/3  rounded-full bg-[#0A0B14] px-2.5 py-0.5 items-center gap-1.5">
              List
              <span className="text-white/40">250</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="flex text-sm gap-3">
          Tracked Accounts
          <div className="flex rounded-full bg-gradient-to-r from-white/20 via-white/10 p-[1px]">
            <div className="flex bg-gradient-to-r from-white/5 via-white/3 rounded-full bg-[#0A0B14] px-2.5 py-0.5">
              8000
            </div>
          </div>
        </div>
      </div>
      <TwitterCard {...cardData} />
      <TwitterCard {...cardData2} textColor="text-red-500" />
    </main>
  );
};

export default SocialScanner;
