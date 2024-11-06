import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projectData } from '../projectData';
import BaseProject from './BaseProject';

const AnimalProject: React.FC = () => {
    const { id } = useParams<{ id: string }>(); 
    const project = projectData.find((proj) => proj.id.toString() === id);

    if (!project) {
        return <div>Project not found.</div>; 
      }


    return (
        <>
        <BaseProject>
        Hana
        </BaseProject>
        </>
    );
};

export default AnimalProject;
