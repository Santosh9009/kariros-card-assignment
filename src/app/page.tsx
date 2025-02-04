import SocialScanner from "@/components/SocialScanner";
import TwitterCard from "../components/card";
import Image from "next/image";
import LauchFeed from "@/components/LauchFeed";
import LaunchCard from "@/components/Launchcard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-4 bg-[#1A1B2E]">
      <div className="flex gap-5 ">
        <SocialScanner />
        <LauchFeed />
      </div>
    </main>
  );
}
