import {
  DiAndroid,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJavascript1,
  DiLinux,
  DiNodejsSmall,
  DiNpm,
  DiReact,
  DiSass,
  DiVisualstudio,
  DiWindows
} from 'react-icons/di';
import {
  SiReactrouter,
  SiVite,
  SiCss,
  SiGnubash,
  SiElectron,
  SiTailwindcss,
  SiTypescript,
  SiExpo,
  SiExpress,
  SiThreedotjs
} from 'react-icons/si';
import { SkillType } from '../../types/SkillType';

export const skills: SkillType[] = [
  {
    label: 'Android',
    link: 'https://developer.android.com/',
    Skill: DiAndroid
  },
  {
    label: 'Windows',
    link: 'https://www.microsoft.com/en-us/windows',
    Skill: DiWindows
  },
  {
    label: 'Linux',
    link: 'https://www.linux.org/',
    Skill: DiLinux
  },
  {
    label: 'HTML5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    Skill: DiHtml5
  },
  {
    label: 'CSS3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    Skill: SiCss
  },
  {
    label: 'Sass',
    link: 'https://sass-lang.com/',
    Skill: DiSass
  },
  {
    label: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    Skill: DiJavascript1
  },
  {
    label: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    Skill: SiTypescript
  },
  {
    label: 'Node.js',
    link: 'https://nodejs.org/',
    Skill: DiNodejsSmall
  },
  {
    label: 'ExpressJS',
    link: 'https://expressjs.com/',
    Skill: SiExpress
  },
  {
    label: 'ElectronJS',
    link: 'https://www.electronjs.org/',
    Skill: SiElectron
  },

  { label: 'Vite', link: 'https://vitejs.dev/', Skill: SiVite },
  {
    label: 'React',
    link: 'https://reactjs.org/',
    Skill: DiReact
  },
  {
    label: 'React Router',
    link: 'https://reactrouter.com/',
    Skill: SiReactrouter
  },
  {
    label: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    Skill: SiTailwindcss
  },
  {
    label: 'Three.js',
    link: 'https://threejs.org/',
    Skill: SiThreedotjs
  },

  {
    label: 'npm',
    link: 'https://www.npmjs.com/',
    Skill: DiNpm
  },

  { label: 'Expo', link: 'https://expo.dev/', Skill: SiExpo },

  {
    label: 'Git',
    link: 'https://git-scm.com/',
    Skill: DiGit
  },
  {
    label: 'GitHub',
    link: 'https://github.com/',
    Skill: DiGithubBadge
  },
  {
    label: 'Visual Studio Code',
    link: 'https://code.visualstudio.com/',
    Skill: DiVisualstudio
  },
  { label: 'Bash Scripting', link: 'https://www.gnu.org/doc/doc.html', Skill: SiGnubash }
];
