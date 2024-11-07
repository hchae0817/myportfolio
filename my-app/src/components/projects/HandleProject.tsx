import React from "react";
import BaseProject from "./BaseProject";
import { useParams } from "react-router-dom";
import AnimalProject from "./AnimalProject";
import BikeProject from "./BikeProject";
import { projectData } from "../projectData";

const HandleProject: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectData.find((proj) => proj.id.toString() === id);
  if (!project) {
      return <div>Project not found.</div>; // Handle case when the project is not found
  }
  console.log(id, id === "2")
  if (id === "1") {
    return (
      <BaseProject project={project}>
        <AnimalProject />
      </BaseProject>
    );
  } else if (id === "2") {
    return ( <BaseProject project={project}>
      <BikeProject />
    </BaseProject>
    )
  } else {
    return (
          <BaseProject project={project}/>
      );
  }

};

export default HandleProject;
