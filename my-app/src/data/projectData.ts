import { Badge, BadgeTypeEnum, toolData, ToolTypeEnum } from "./toolData";

  export enum ProjectEnum {
    Animal,
    Bike,
    Project3,
    Project4,
  }

  export interface Project {
    title: string;
    description: string;
    link: string;
    tools?: Badge[];
    repo: Badge;
    id: ProjectEnum;
  }
  
export const projectData = [
    {
        id: ProjectEnum.Animal,
        title: 'Animal Adventure',
        description: 'Designed to provide children with a fun, engaging, and educational way to explore the animal kingdom.',
        link: '#',
        tools: toolData.filter(x => [BadgeTypeEnum.React, BadgeTypeEnum.Tailwind].includes(x.id)),
        repo: {
            name: "GitHub",
            url: "https://github.com/hchae0817/Animal-Dictionary",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
    {
        id: ProjectEnum.Bike,
        title: 'Bike Prediction with machine learning modal',
        description: 'Designed a machine learning model to predict optimal bike-sharing demand, leveraging data analysis and deep learning to improve resource allocation and user experience.',
        link: '#',
        tools: toolData.filter(x => [BadgeTypeEnum.Python, BadgeTypeEnum.Pandas,  BadgeTypeEnum.Keras, BadgeTypeEnum.TensorFlow, BadgeTypeEnum.JupyterNotebook].includes(x.id)),
        repo: {
            name: "GitHub",
            type: ToolTypeEnum.Technology,
            url: "https://github.com/hchae0817/Animal-Dictionary",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
    {
        id: ProjectEnum.Project3,
        title: 'Project Three',
        description: 'A brief description of Project Three. Highlight key features and technologies used.',
        link: '#',
        tools: toolData.filter(x => [BadgeTypeEnum.React, BadgeTypeEnum.JavaScript].includes(x.id)),
        repo: {
            name: "GitHub",
            type: ToolTypeEnum.Technology,
            url: "https://github.com/hchae0817/Animal-Dictionary",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
    {
        id: ProjectEnum.Project4,
        title: 'Project Four',
        description: 'A brief description of Project Four. Highlight key features and technologies used.',
        link: '#',
        repo: {
            name: "GitHub",
            type: ToolTypeEnum.Technology,
            url: "https://github.com/hchae0817/Animal-Dictionary",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
] as Project[];
