export interface Project {
  title: string;
  description: string;
  tags: string;
  date: string;
  link?: string;
}

export const project_2024: Project[] = [
  {
    title: "Vim dots",
    description: "Basic Vim config files",
    tags: "Project",
    date: "May 2024",
    link: "https://github.com/jny0444/vim-dots",
  },
  {
    title: "Rock Paper Scissor",
    description: "Basic Rock Paper Scissor game in Javascript",
    tags: "Project",
    date: "May 2024",
    link: "https://github.com/jny0444/rock-paper-scissor",
  },
  {
    title: "Emacs dots",
    description: "Basic Emacs config files",
    tags: "Project",
    date: "Apr 2024",
    link: "https://github.com/jny0444/emacs-dots",
  },
  {
    title: "Conways Game of Life",
    description: "Recreated Conways Game of Life in Python",
    tags: "Project",
    date: "Mar 2024",
    link: "https://github.com/jny0444/conways-game-of-life",
  },
];
