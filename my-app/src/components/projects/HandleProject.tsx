import React from "react";
import BaseProject from "./BaseProject";
import { useParams } from "react-router-dom";
import AnimalProject from "./AnimalProject";
import BikeProject from "./BikeProject";
import { projectData, ProjectEnum } from "../../data/projectData";
import MonitorProject from "./MonitorProject";
import TodoUKProject from "./todoUKProject";

const HandleProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((proj) => proj.id.toString() === id);
  if (!project) {
    return <div>Project not found.</div>; // Handle case when the project is not found
  }
  if (id === ProjectEnum.Animal.toString()) {
    return (
      <BaseProject project={project}>
        <AnimalProject />
      </BaseProject>
    );
  } else if (id === ProjectEnum.Bike.toString()) {
    return (<BaseProject project={project}>
      <BikeProject />
    </BaseProject>
    )
  } else if (id === ProjectEnum.Monitor.toString()) {
    return (<BaseProject project={project}>
      <MonitorProject />
    </BaseProject>
    )
  } else if (id === ProjectEnum.TodoUK.toString()) {
    return (<BaseProject project={project}>
      <TodoUKProject />
    </BaseProject>
    )
  } else {
    return (
      <BaseProject project={project} />
    );
  }

};

export default HandleProject;
