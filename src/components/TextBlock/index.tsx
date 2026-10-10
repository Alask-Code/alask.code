import React from 'react';

export default function TextBlock({
  title,
  subtitle,
  children
}: {
  title: string;
  subtitle: string;
  children: string;
}) {
  return (
    <div>
      <p className="text-4xl">{title}</p>
      <p className="text-xl text-stone-500">{subtitle}</p>
      <p className="pt-2">{children}</p>
    </div>
  );
}
