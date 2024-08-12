import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Track-Record.co Finance Blog",
  DESCRIPTION: "Articles to help my children and those interested in learning about value investing.",
  EMAIL: "ronnie.synakowski@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Track-Record.co Finance is an accessible collection of articles on investing.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on value investing.",
};

export const PROJECTS: Metadata = {
  TITLE: "Resources",
  DESCRIPTION:
    "A collection of useful tools with links to websites, articles, tools, and books.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ron-synakowski/",
  },
];
