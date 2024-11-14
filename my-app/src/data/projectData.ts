import { Badge, BadgeTypeEnum, toolData, ToolTypeEnum } from "./toolData";

  export enum ProjectEnum {
    TodoUK,
    Monitor,
    Bike,
    Animal,
}

  export interface Project {
    title: string;
    description: string;
    link?: string;
    tools?: Badge[];
    repo?: Badge;
    id: ProjectEnum;
  }
  
export const projectData = [
    {
        id: ProjectEnum.TodoUK,
        title: 'Todo UK',
        description: 'Bridge cultures and share the beauty of guaranteed places in the UK with people from around the world. ',
        tools: toolData.filter(x => [BadgeTypeEnum.React, BadgeTypeEnum.MongoDB, BadgeTypeEnum.TypeScript].includes(x.id)),
        link: "https://hchae0817.github.io/my-uk-app/",
        repo: {
            name: "GitHub",
            url: "https://github.com/hchae0817/my-uk-app",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
    {
        id: ProjectEnum.Monitor,
        title: 'Real-time Monitoring System',
        description: 'New alerting system that enables stakeholders to view and analyze real-time data',
        tools: toolData.filter(x => [BadgeTypeEnum.React, BadgeTypeEnum.TypeScript, BadgeTypeEnum.SQL, BadgeTypeEnum.MicrosoftSQLServer, BadgeTypeEnum.CSharp, BadgeTypeEnum.NET].includes(x.id)),
    },
    {
        id: ProjectEnum.Bike,
        title: 'Bike Prediction with machine learning modal',
        description: 'Designed a machine learning model to predict optimal bike-sharing demand, leveraging data analysis and deep learning to improve resource allocation and user experience.',
        tools: toolData.filter(x => [BadgeTypeEnum.Python, BadgeTypeEnum.Pandas,  BadgeTypeEnum.Keras, BadgeTypeEnum.TensorFlow, BadgeTypeEnum.JupyterNotebook].includes(x.id)),
        repo: {
            name: "GitHub",
            type: ToolTypeEnum.Technology,
            url: "https://github.com/hchae0817/Bike_Prediction",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
    {
        id: ProjectEnum.Animal,
        title: 'Animal Adventure',
        description: 'Designed to provide children with a fun, engaging, and educational way to explore the animal kingdom.',
        tools: toolData.filter(x => [BadgeTypeEnum.React, BadgeTypeEnum.Tailwind].includes(x.id)),
        repo: {
            name: "GitHub",
            url: "https://github.com/hchae0817/Animal-Dictionary",
            badge_url: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"
        }
    },
] as Project[];
