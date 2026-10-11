import {
  SiCss,
  SiElectron,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript
} from 'react-icons/si';
import { ProjectType } from '../../types/ProjectType';

const projects: ProjectType[] = [
  {
    id: `outlands-edge`,
    title: `Outland's Edge`,
    cover: 'https://avatars.githubusercontent.com/u/205239705?s=200&v=4',
    description: `Game with survival and crafting mechanics, set in a post-apocalyptic world.`,
    createdAt: 1743044400,
    lastUpdatedAt: 1790729322,
    projectUrl: 'https://github.com/Outland-s-Edge',
    stack: [SiTypescript, SiElectron, SiReact, SiTailwindcss, SiThreedotjs]
  },
  {
    id: 'simple-clicker',
    title: 'Simple Clicker',
    cover: 'https://placehold.co/1280x720',
    description: 'Simple Web game about Clicking.',
    projectUrl: 'https://alask-code.github.io/Simple-Clicker/',

    createdAt: 0,
    lastUpdatedAt: 0,
    stack: [SiJavascript, SiCss, SiHtml5]
  },
  {
    id: 'mood-clock',
    title: 'Mood Clock',
    cover: 'https://placehold.co/1280x720',
    projectUrl: 'https://alask-code.github.io/Mood-Clock/',
    description:
      'Mood Clock is a web application that combines to-do list features, a Pomodoro timer, and a clock, helping with time management and productivity.',
    createdAt: 1736035200,
    lastUpdatedAt: 1774915200,
    stack: [SiCss, SiSass, SiJavascript, SiHtml5]
  },
  {
    id: 'simple-clock',
    title: 'Simple Clock',
    cover: 'https://placehold.co/1280x720',
    projectUrl: 'https://alask-code.github.io/Simple-Clock/',
    description: 'A Simple clock that shows you the time. Features auto theme switcher based on system definition.',
    createdAt: 0,
    lastUpdatedAt: 0,
    stack: [SiJavascript, SiCss, SiSass, SiHtml5]
  }
];

export default projects;
