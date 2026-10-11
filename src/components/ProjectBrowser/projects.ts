import { SiElectron, SiReact, SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si';
import { ProjectType } from '../../types/ProjectType';

const projects: ProjectType[] = [
  {
    id: `outlands-edge`,
    title: `Outland's Edge`,
    cover: 'https://avatars.githubusercontent.com/u/205239705?s=200&v=4',
    description: `Game with survival and crafting mechanics, set in a post-apocalyptic world.`,
    createdAt: 1743044400,
    lastUpdatedAt: 1790729322,
    stack: [SiTypescript, SiElectron, SiReact, SiTailwindcss, SiThreedotjs]
  }
];

export default projects;
