import { IconType } from 'react-icons';

export interface ProjectType {
  id: string;
  title: string;
  cover: string;
  description: string;
  createdAt: number;
  lastUpdatedAt: number;
  stack: IconType[];
}
