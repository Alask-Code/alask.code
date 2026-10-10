import React, { ReactNode } from 'react';

export default function A4FormatDiv({ children }: { children: ReactNode }) {
  return <div className="p-24 px-[20%] gap-12 w-full flex flex-col items-start justify-start">{children}</div>;
}
