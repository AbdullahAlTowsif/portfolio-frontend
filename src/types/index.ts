export interface IBlog {
  id: number;
  title: string;
  content: string;
  picture: string;
  views: number;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
  author: {
    name: string;
    picture: string;
  }
}

export interface IUser {
    id: number;
    email: string;
    password: string;
    name: string;
    picture: string;
    createdAt: Date;
    updatedAt: Date;
}


export interface IProject {
    id: number;
    title: string;
    description: string;
    techstack: string[];
    category: string;
    githubLink: string;
    liveLink: string;
    thumbnail: string;
    createdAt: string;
    updatedAt: string;
}