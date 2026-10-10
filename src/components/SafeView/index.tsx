import React, { ReactNode } from 'react';

export default function SafeView({ children }: { children: ReactNode }) {
  return (
    <div className="bg-stone-950 text-stone-400 w-full h-fit flex flex-col items-center justify-center">{children}</div>
  );
}
