"use client";
import { useState } from "react";
import SocialScanner from "@/components/SocialScanner";
import Image from "next/image";
import LaunchFeed from "@/components/LaunchFeed";
import TwitterCard from "../components/card";
import Btn from "@/components/Btn";

export default function Home() {
  const [isLaunchFeedOpen, setIsLaunchFeedOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const handleClose = () => {
    setIsLaunchFeedOpen(false);
    // Wait for animation to complete before clearing selection
    setTimeout(() => {
      setSelectedCardId(null);
    }, 300);
  };

  const handleOpen = (id: string) => {
    setSelectedCardId(id);
    // Small delay to ensure smooth animation
    setTimeout(() => {
      setIsLaunchFeedOpen(true);
    }, 50);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24 gap-4 bg-[#1A1B2E]">
      <div className="flex flex-col lg:flex-row gap-5">
        <SocialScanner onCardClick={handleOpen} selectedCardId={selectedCardId || ''} />
        <LaunchFeed onClose={handleClose} isOpen={isLaunchFeedOpen} />
      </div>
    </main>
  );
}
