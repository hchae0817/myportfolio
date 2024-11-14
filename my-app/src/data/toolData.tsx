
export interface Badge {
  id: BadgeTypeEnum;
  name: string;
  badge_url: string;
  type: ToolTypeEnum;
  subType: ToolSubTypeEnum;
  url?: string;
}

export enum BadgeTypeEnum {
  React = "React",
  Tailwind = "Tailwind",
  Python = "Python",
  Pandas = "Pandas",
  Keras = "Keras",
  TensorFlow = "TensorFlow",
  JupyterNotebook = "Jupyter Notebook",
  JavaScript = "JavaScript",
  TypeScript = "TypeScript",
  CSharp = "C#",
  SQL = "SQL",
  Java = "Java",
  CPlusPlus = "C++",
  Scala = "Scala",
  HTML = "HTML",
  CSS = "CSS",
  NodeJS = "Node.js",
  NET = ".NET",
  Jest = "Jest",
  Git = "Git",
  SVN = "SVN",
  Octopus = "Octopus",
  TeamCity = "TeamCity",
  Jira = "Jira",
  Azure = "Azure",
  MongoDB = "MongoDB",
  MicrosoftSQLServer = "Microsoft SQL Server",
  Figma = "Figma",
  Zeplin = "Zeplin",
}

export enum ToolTypeEnum {
  Language = "Language",
  Framework = "Framework",
  Technology = "Technology",
}

export enum ToolSubTypeEnum {
  BestAt = "I am Best At",
  Confident = "Confident",
  HaveUsed = "Have Used Before",
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
  // Languages
  {
    id: BadgeTypeEnum.CSharp,
    name: "C#",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
  },
  {
    id: BadgeTypeEnum.JavaScript,
    name: "JavaScript",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
  },
  {
    id: BadgeTypeEnum.TypeScript,
    name: "TypeScript",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white",
  },
  {
    id: BadgeTypeEnum.SQL,
    name: "SQL",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/SQL-00758F?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Java,
    name: "Java",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white",
  },
  {
    id: BadgeTypeEnum.CPlusPlus,
    name: "C++",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=cplusplus&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Scala,
    name: "Scala",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Python,
    name: "Python",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
  },
  {
    id: BadgeTypeEnum.HTML,
    name: "HTML",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white",
  },
  {
    id: BadgeTypeEnum.CSS,
    name: "CSS",
    type: ToolTypeEnum.Language,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white",
  },

  // Frameworks & Libraries
  {
    id: BadgeTypeEnum.React,
    name: "React",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black",
  },
  {
    id: BadgeTypeEnum.NodeJS,
    name: "Node.js",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Tailwind,
    name: "Tailwind",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white",
  },
  {
    id: BadgeTypeEnum.NET,
    name: ".NET",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=.net&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Pandas,
    name: "Pandas",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Keras,
    name: "Keras",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white",
  },
  {
    id: BadgeTypeEnum.TensorFlow,
    name: "TensorFlow",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Jest,
    name: "Jest",
    type: ToolTypeEnum.Framework,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Git,
    name: "Git",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white",
  },
  {
    id: BadgeTypeEnum.SVN,
    name: "SVN",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/SVN-809CC9?style=for-the-badge&logo=subversion&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Octopus,
    name: "Octopus",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/Octopus-5D70B5?style=for-the-badge&logo=octopus&logoColor=white",
  },
  {
    id: BadgeTypeEnum.TeamCity,
    name: "TeamCity",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/TeamCity-000000?style=for-the-badge&logo=teamcity&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Jira,
    name: "Jira",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Azure,
    name: "Azure",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.Confident,
    badge_url: "https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white",
  },
  {
    id: BadgeTypeEnum.MongoDB,
    name: "MongoDB",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.HaveUsed,
    badge_url: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white",
  },
  {
    id: BadgeTypeEnum.MicrosoftSQLServer,
    name: "Microsoft SQL Server",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Microsoft%20SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Figma,
    name: "Figma",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white",
  },
  {
    id: BadgeTypeEnum.Zeplin,
    name: "Zeplin",
    type: ToolTypeEnum.Technology,
    subType: ToolSubTypeEnum.BestAt,
    badge_url: "https://img.shields.io/badge/Zeplin-DA3B01?style=for-the-badge&logo=zeplin&logoColor=white",
  }
] as Badge[];