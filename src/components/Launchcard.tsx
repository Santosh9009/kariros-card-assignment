import Image from "next/image";
import AvatarImg from "../../public/trumpsonImg.png";
import globe from "../../public/WebIcon.svg";
import telegramIcon from "../../public/TelegramIcon.svg";
import XIcon from "../../public/XIcon.svg";

import UserIcon from "../../public/UserRed.svg";
import HatIcon from "../../public/HatGreen.svg";
import RatIcon from "../../public/RatRed.svg";
import TrackerIcon from "../../public/TrackerGreen.svg";
import copyIcon from "../../public/copyIcon.svg";
import SniperIcon from "../../public/sniper-rifle 1.svg";
import chart from "../../public/Chart Container.svg";
import clock from "../../public/Clock.svg";
import capsuel from "../../public/capsule.svg";

export default function LaunchCard() {
  return (
    <div className="card-wrapper w-[35.4vw] min-w-[420px]">
      <div className="card-content p-3 bg-[#0A0B14] shadow-[inset_0px_0px_32px_#A290FB1A] border border-white/10">
        <div className="flex flex-col gap-3">
          {/* Profile and Info Section */}
          <div className="flex justify-between items-start w-full">
            <div className="flex gap-3 max-w-[60%]">
              <div className="relative w-16 h-16 rounded-xl border-2 border-green-500 flex items-center justify-center">
                <Image
                  src={AvatarImg}
                  alt="Token Avatar"
                  width={50}
                  height={50}
                  className="rounded-lg"
                />
                <Image
                  src={capsuel}
                  alt="Capsule"
                  width={20}
                  height={20}
                  className="absolute -bottom-1 -right-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-base font-semibold">$XLIFE</h3>
                
                  <p className="text-base text-gray-400">X Life Token</p>
                  <Image
                    src={copyIcon}
                    alt="Copy"
                    width={14}
                    height={14}
                    className="cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-start">
                  <div className="flex items-center gap-1.5">
                    <Image
                      src={clock}
                      alt="clock"
                      width={14}
                      height={14}
                      className="cursor-pointer"
                    />
                    <p className="text-xs text-gray-400">2m</p>
                  </div>
                  <div className="flex items-center gap-3 ml-3">
                    <p className="text-xs">
                      VOL <span className="text-gray-300">$52K</span>
                    </p>
                    <p className="text-xs">
                      MC <span className="text-gray-300">$82K</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <p className="text-sm font-normal">$0.00002654</p>
                  <p className="text-green-400 text-xs">+123.5%</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end w-[40%]">
              <Image
                src={chart}
                alt="Price Chart"
                width={100}
                height={90}
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex items-center justify-between text-[10px] text-gray-400 gap-2">
            {/* Social and Stats Section */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3 min-w-fit">
                <Image src={globe} alt="Web Icon" width={14} height={14} />
                <Image
                  src={telegramIcon}
                  alt="Telegram"
                  width={14}
                  height={14}
                />
                <Image src={XIcon} alt="X Icon" width={14} height={14} />
              </div>

              {/* Stats with percentages */}
              <div className="flex items-center gap-1.5">
                <Image src={UserIcon} alt="User Icon" width={14} height={14} />
                <span className="text-red-500">38%</span>
                <Image src={HatIcon} alt="Hat Icon" width={14} height={14} />
                <span className="text-green-500">2%</span>
                <Image src={RatIcon} alt="Rat Icon" width={14} height={14} />
                <span className="text-red-500">66%</span>
                <Image
                  src={TrackerIcon}
                  alt="Tracker Icon"
                  width={14}
                  height={14}
                />
                <span className="text-green-500">12%</span>
                <div className="border-l border-gray-600 ml-2 pl-2">
                  Holders <span className="text-white">245</span>
                </div>
              </div>
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 w-24 py-0.5 px-2 rounded text-white text-sm font-medium flex items-center justify-center gap-1.5 ml-2">
              Snipe
              <Image src={SniperIcon} alt="Sniper" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
