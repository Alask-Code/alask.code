import React from 'react';
import { MdDateRange, MdUpdate } from 'react-icons/md';
import { ProjectType } from '../../types/ProjectType';

const formatTimestamp = (value: number | string) => {
  if (!value && value !== 0) return 'N/A';

  const numericValue = Number(value);
  const date = Number.isFinite(numericValue)
    ? new Date(numericValue > 1_000_000_000_000 ? numericValue : numericValue * 1000)
    : new Date(value);

  if (Number.isNaN(date.getTime())) return 'N/A';

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const formatRelativeTime = (value: number | string) => {
  if (!value && value !== 0) return 'N/A';

  const numericValue = Number(value);
  const date = Number.isFinite(numericValue)
    ? new Date(numericValue > 1_000_000_000_000 ? numericValue : numericValue * 1000)
    : new Date(value);

  if (Number.isNaN(date.getTime())) return 'N/A';

  const diffMs = Date.now() - date.getTime();
  const diffSeconds = Math.max(0, Math.floor(diffMs / 1000));

  if (diffSeconds < 60) return `${diffSeconds} second${diffSeconds === 1 ? '' : 's'} ago`;

  const diffMinutes = Math.floor(diffSeconds / 60);
  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes === 1 ? '' : 's'} ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? '' : 's'} ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 30) return `${diffDays} day${diffDays === 1 ? '' : 's'} ago`;

  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths < 12) return `${diffMonths} month${diffMonths === 1 ? '' : 's'} ago`;

  const diffYears = Math.floor(diffMonths / 12);
  return `${diffYears} year${diffYears === 1 ? '' : 's'} ago`;
};

export default function ProjectBrowser({ projects }: { projects: ProjectType[] }) {
  return (
    <div className="w-full flex flex-col print:hidden">
      <p className="text-4xl">Projects</p>
      <p className="text-xl text-stone-500">Some of my work.</p>
      <div className="pt-4 grid gap-3 grid-cols-2 max-md:grid-cols-1">
        {projects.map((project) => (
          <div key={project.id} className="w-full h-full flex flex-col border border-white/20 bg-white/10">
            <img src={project.cover} className="w-full aspect-video border-b border-white/20" alt="" />
            <div className="h-full flex flex-col items-start justify-between">
              <div className="pt-3 px-2">
                <p className="text-xl font-bold">{project.title}</p>
                <p className="text-xs text-stone-500">{project.description}</p>
                <div className="flex py-4 gap-2">
                  {project.stack.map((Tech) => (
                    <Tech />
                  ))}
                </div>
                <p className="text-xs flex items-center gap-1">
                  <MdDateRange /> {formatTimestamp(project.createdAt)}
                </p>
                <p className="text-xs flex items-center gap-1">
                  <MdUpdate /> {formatRelativeTime(project.lastUpdatedAt)}
                </p>
              </div>
              <p className=" w-full text-right underline p-2 pt-6 pb-3 h-fit">
                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                  Learn More
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
