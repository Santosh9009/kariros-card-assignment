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
import profile2 from '../../public/ProfileMan.png'

export default function LaunchCard() {
  return (
    <div className="relative inline-flex w-full max-w-[35.4vw] min-w-[300px] sm:min-w-[420px] overflow-hidden rounded-xl p-[1px] focus:outline-none">
      <span className="absolute inset-[-1000%] animate-[spin_7s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,#A290FB_360deg)]" />
      <div className="relative flex w-full rounded-xl bg-[#0A0B14] p-2 sm:p-3 text-white backdrop-blur-3xl">
        <div className="flex flex-col gap-2 sm:gap-3 w-full">
          {/* Profile and Info Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start w-full gap-2 sm:gap-0">
            <div className="flex gap-2 sm:gap-3 max-w-full sm:max-w-[60%]">
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl border-2 border-green-500 flex items-center justify-center">
                <Image
                  src={AvatarImg}
                  alt="Token Avatar"
                  width={50}
                  height={50}
                  className="rounded-lg w-10 h-10 sm:w-[50px] sm:h-[50px]"
                />
                <Image
                  src={capsuel}
                  alt="Capsule"
                  width={20}
                  height={20}
                  className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5"
                />
              </div>
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <div className="flex items-center gap-1 flex-wrap">
                  <h3 className="text-xs sm:text-sm font-semibold">$XLIFE</h3>
                  <p className="text-xs sm:text-sm text-gray-400">X Life Token</p>
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
                    <p className="text-[10px] text-gray-400">2m</p>
                  </div>
                  <div className="flex items-center gap-3 ml-3">
                    <p className="text-[10px]">
                      VOL <span className="text-gray-300">$52K</span>
                    </p>
                    <p className="text-[10px]">
                      MC <span className="text-gray-300">$82K</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-start flex-wrap">
                  <p className="text-xs sm:text-sm font-normal">$0.00002654</p>
                  <p className="text-green-400 text-[10px] sm:text-xs ml-2">+123.5%</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end w-full sm:w-[40%]">
              <Image
                src={chart}
                alt="Price Chart"
                width={100}
                height={90}
                className="object-contain w-[80px] sm:w-[100px]"
              />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[10px] text-gray-400 gap-2">
            {/* Social and Stats Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
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
              <div className="flex items-center gap-1.5 flex-wrap">
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

            <button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-24 py-1 sm:py-0.5 px-2 rounded text-white text-xs font-medium flex items-center justify-center gap-1.5">
              Snipe
              <Image src={SniperIcon} alt="Sniper" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
