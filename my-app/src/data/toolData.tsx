
export interface Badge {
  id: BadgeTypeEnum;
  name: string;
  badge_url: string;
  type: ToolTypeEnum;
  url?: string;
}

export enum BadgeTypeEnum {
    React,
    Tailwind,
    Python,
    Pandas,
    Keras,
    TensorFlow,
    JupyterNotebook,
    JavaScript,
    TypeScript,
  }

export enum ToolTypeEnum {
  Language,
  Framework,
  Technology,
}

export const repoData = [
    {
        id: BadgeTypeEnum.React, // make this one for each project
        name: "GitHub",
        url: "https://github.com/hchae0817/Animal-Dictionary",
        badge_url:
          "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",
      },
]

export const toolData = [
  {
    id: BadgeTypeEnum.React,
    name: "React",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
  },
  {
    id: BadgeTypeEnum.Tailwind,
    name: "Tailwind CSS",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Python,
    name: "Python",
    type: ToolTypeEnum.Language,
    badge_url:
      "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Pandas,
    name: "Pandas",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Keras,
    name: "Keras",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white",
  },
  {
    id: BadgeTypeEnum.TensorFlow,
    name: "TensorFlow",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
  },
  {
    id: BadgeTypeEnum.JupyterNotebook,
    name: "Jupyter Notebook",
    type: ToolTypeEnum.Framework,
    badge_url:
      "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white",
  },
  {
    id: BadgeTypeEnum.JavaScript,
    name: "Javascript",
    type: ToolTypeEnum.Language,
    badge_url:
      "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
] as Badge[];
