"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import LaunchCard from './Launchcard'
import rocket from '../../public/Rocket.svg';
import share from '../../public/ShareNetwork.svg';
import linechart from '../../public/ChartLine.svg';

const LauchFeed = () => {
  const [activeTab, setActiveTab] = useState('pumpfun')

  return (
    <div className="w-full bg-[#0A0B14] font-urbanist px-3">
      <h1 className="text-base font-bold mb-6 py-2 border-b border-white/10">Launchpad</h1>
      <div className="flex gap- mb-4 border border-white/20 rounded-xl p-1">
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg hover:bg-white/8 ${
            activeTab === 'pumpfun' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('pumpfun')}
        >
          <Image src={rocket} alt="Rocket" width={20} height={20} />
          Pumpfun
        </button>
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg hover:bg-white/8 ${
            activeTab === 'migrated' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('migrated')}
        >
          <Image src={share} alt="Share" width={20} height={20} />
          Migrated
        </button>
        <button 
          className={`flex-1 px-4 py-2 flex items-center justify-center gap-2 rounded-lg  hover:bg-white/8 ${
            activeTab === 'volume' ? 'bg-gradient-to-tl from-white/20 to-white/5 backdrop-blur-sm' : ''
          }`}
          onClick={() => setActiveTab('volume')}
        >
          <Image src={linechart} alt="Chart" width={20} height={20} />
          Volume
        </button>
      </div>

      <div className="">
        {activeTab === 'pumpfun' && (
          <div className="flex flex-col gap-2">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
          </div>
        )}
        {activeTab === 'migrated' && (
          <div className="flex flex-col gap-2">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
          </div>
        )}
        {activeTab === 'volume' && (
          <div className="flex flex-col gap-2">
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
            <LaunchCard />
          </div>
        )}
      </div>
    </div>
  )
}

export default LauchFeed;