import React, { ReactNode } from 'react';

export default function Header({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="text-6xl">
      <p>{name}</p>
      <div className="text-lg text-stone-500">{children}</div>
    </div>
  );
}
