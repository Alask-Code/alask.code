import React from 'react';
import SafeView from '../../components/SafeView';
import ProjectBrowser from '../../components/ProjectBrowser';
import TextBlock from '../../components/TextBlock';
import Header from '../../components/Header';
import A4FormatDiv from '../../components/A4FormatDiv';
import Skills from '../../components/Skills';

import NavBar from '../../components/NavBar';
import { skills } from './skills';
import projects from '../../components/ProjectBrowser/projects';

export default function Main() {
  return (
    <SafeView>
      <NavBar />
      <A4FormatDiv>
        <Header name="Alex Rodrigues">
          <p>23 Years Old</p>
          <p>Paulinia - Brazil</p>
        </Header>
        <TextBlock title="Who I am?" subtitle="I am an entry-level software developer.">
          I am a junior developer looking to begin my career in technology and contribute to meaningful projects. I
          build software with a focus on clean code, practical functionality, and user-friendly experiences. I enjoy
          learning, solving real-world problems, and creating reliable solutions while growing alongside a team.
        </TextBlock>
        <TextBlock title="About Me" subtitle="Let me tell you a little about myself.">
          I am a curious and driven developer who enjoys building thoughtful solutions and continuously improving my
          craft. My work blends technical problem-solving with a strong focus on usability, readability, and real-world
          value. I like turning complex ideas into clear, efficient, and maintainable software that helps people in
          practical ways.
        </TextBlock>
        <Skills label="Skills" subtitle="Some technologies I've worked with." skills={skills} />
        <ProjectBrowser projects={projects} />
      </A4FormatDiv>
    </SafeView>
  );
}
