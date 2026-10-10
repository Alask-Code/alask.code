import React from 'react';

const projects = [
  {
    id: `outlands-edge`,
    title: `Outland's Edge`,
    description: `Game with survival and crafting mechanics, set in a post-apocalyptic world.`,
    createdAt: `Created at`,
    lastUpdated: `Last updated`
  },
  {
    id: `outlands-edge`,
    title: `Outland's Edge`,
    description: `Game with survival and crafting mechanics, set in a post-apocalyptic world.`,
    createdAt: `Created at`,
    lastUpdated: `Last updated`
  },
  {
    id: `outlands-edge`,
    title: `Outland's Edge`,
    description: `Game with survival and crafting mechanics, set in a post-apocalyptic world.`,
    createdAt: `Created at`,
    lastUpdated: `Last updated`
  }
];
export default function ProjectBrowser() {
  return (
    <div className="w-full flex flex-col print:hidden">
      <p className="text-4xl">Projects</p>
      <p className="text-xl text-stone-500">Some of my work.</p>
      <div className="pt-4 grid gap-3 grid-cols-3 max-md:grid-cols-1">
        {projects.map((project) => (
          <div key={project.id} className="w-full rounded-lg overflow-hidden bg-white/10">
            <img src="https://placehold.co/1280x720" className="w-full" alt="" />
            <div className="p-3 pt-2">
              <p className="text-lg font-bold">{project.title}</p>
              <p className="text-xs">{project.description}</p>
              <p className="text-xs pt-4">TS VITE REACT TAILWINDCSS NODE</p>
              <p className="text-xs pt-4 uppercase">{project.createdAt}</p>
              <p className="text-xs">{project.lastUpdated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
