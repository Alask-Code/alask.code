import React from 'react';

function ToggleButton({ activeLanguage, language }: { activeLanguage: 'PT' | 'EN'; language: 'PT' | 'EN' }) {
  return <p className={`px-2 p-1 rounded-md ${activeLanguage === language && 'bg-white/20'}`}>{language}</p>;
}

export default function NavBar() {
  const [activeLanguage, setActiveLanguage] = React.useState<'PT' | 'EN'>('PT');
  return (
    <div
      className="
      print:hidden
    sticky text-2xl py-3
    px-6 flex items-center
    justify-between top-0
    w-full backdrop-blur-lg bg-stone-950/70
    border-b border-white/20"
    >
      <p>alask.code</p>
      <button
        onClick={() => setActiveLanguage(activeLanguage === 'PT' ? 'EN' : 'PT')}
        className="border border-white/20 p-1 rounded-lg cursor-pointer"
      >
        <div className="flex text-sm *:transition-all *:duration-300 items-center justify-center">
          <ToggleButton activeLanguage={activeLanguage} language="PT" />
          <ToggleButton activeLanguage={activeLanguage} language="EN" />
        </div>
      </button>
    </div>
  );
}
