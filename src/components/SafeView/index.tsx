import React from 'react';

export default function SafeView({ children }: { children: React.ReactNode }) {
  return <div className="bg-stone-950 text-stone-400 w-full h-fit flex items-center justify-center">{children}</div>;
}
