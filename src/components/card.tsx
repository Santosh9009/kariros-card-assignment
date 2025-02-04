import Image from "next/image";
import retweet from "../../public/retweet.svg";
import commment from "../../public/comment.svg";
import heart from "../../public/heart.svg";
import bluetick from "../../public/BlueTick.svg";
import "../app/globals.css";
import { TwitterCardProps } from "../types/twitter-card";
import GradientButton from "./button";

const TwitterCard = ({ profile, tweet, tags, metrics, textColor }: TwitterCardProps) => {
  return (
    <div className="card-wrapper w-[30vw]">
      <div className="card-content p-4 bg-[#0A0B14] shadow-[inset_0px_0px_32px_#A290FB1A] border border-white/10">
        <div className="flex flex-col gap-3 text-white">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <Image
                src={profile.image}
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="h-[40px] flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <span className="font-semibold">{profile.name}</span>
                  {profile.verified && (
                    <Image src={bluetick} alt="Verified" width={16} height={16} />
                  )}
                  {profile.list && (
                    <span className="text-xs text-gray-400">
                      List: {profile.list}
                    </span>
                  )}
                </div>
                <span className="text-gray-400 text-sm">{profile.handle}</span>
              </div>
            </div>
            <span className="text-gray-400">{tweet.timestamp}</span>
          </div>
          
          <p className={`text-sm ${textColor || 'text-gray-300'}`}>{tweet.content}</p>
          
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
          
          <div className="mt-3 flex gap-2 bg-gradient-to-r from-white/[0.05] via-transparent to-white/[0.05] p-1 rounded-lg">
            {tags.map((tag, index) => (
              <GradientButton key={index}>
                {tag.name} {tag.time}
              </GradientButton>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-gray-400 text-sm">
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
              <Image src={commment} alt="Comment" width={16} height={16} />
              <span className="text-white">{metrics.comments}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-green-400">
              <Image src={retweet} alt="Retweet" width={16} height={16} />
              <span className="text-white">{metrics.retweets}</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-red-400">
              <Image src={heart} alt="Heart" width={16} height={16} />
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
