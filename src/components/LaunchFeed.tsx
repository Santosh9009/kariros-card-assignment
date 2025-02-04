"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import LaunchCard from './Launchcard'
import rocket from '../../public/Rocket.svg';
import share from '../../public/ShareNetwork.svg';
import linechart from '../../public/ChartLine.svg';

interface LauchFeedProps {
  onClose: () => void;
  isOpen: boolean;
}

const LaunchFeed: React.FC<LauchFeedProps> = ({ onClose, isOpen }) => {
  const [activeTab, setActiveTab] = useState('pumpfun')
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsClosing(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  // Don't return null, instead manage visibility with CSS
  return (
    <div className={`w-full bg-[#0A0B14] font-urbanist px-3 transition-all duration-300 
      ${!isOpen ? 'opacity-0 translate-x-4 hidden' : 'opacity-100 translate-x-0'}
      ${isClosing ? 'opacity-0 translate-x-4' : ''}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-bold mb-6 py-2 border-b border-white/10 w-full">Launchpad</h1>
        <button 
          onClick={handleClose}  
          className="text-white/60 hover:text-white"
        >
          ✕
        </button>
      </div>
      <div className="flex gap- mb-4 border border-white/20 rounded-xl p-1">
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg hover:bg-white/8 ${
            activeTab === 'pumpfun' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('pumpfun')}
        >
          <Image src={rocket} alt="Rocket" width={16} height={16} />
          Pumpfun
        </button>
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg hover:bg-white/8 ${
            activeTab === 'migrated' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('migrated')}
        >
          <Image src={share} alt="Share" width={16} height={16} />
          Migrated
        </button>
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg  hover:bg-white/8 ${
            activeTab === 'volume' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('volume')}
        >
          <Image src={linechart} alt="Chart" width={16} height={16} />
          Volume
        </button>
      </div>

      <div className="relative min-h-[400px]">
        <div className={`relative w-full transition-all duration-300 ease-in-out ${
          activeTab === 'pumpfun' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none hidden'
        }`}>
          <div className="flex flex-col gap-2 pb-4">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
          </div>
        </div>

        <div className={`relative w-full transition-all duration-300 ease-in-out ${
          activeTab === 'migrated' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none hidden'
        }`}>
          <div className="flex flex-col gap-2 pb-4">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />

          </div>
        </div>

        <div className={`relative w-full transition-all duration-300 ease-in-out ${
          activeTab === 'volume' ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none hidden'
        }`}>
          <div className="flex flex-col gap-2 pb-4">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />

          </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchFeed;