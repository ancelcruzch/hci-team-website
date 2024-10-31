// src/components/ProjectTimeline.js
import React from 'react';
import TimelineEvent from './TimelineEvent';
import projectEvents from '../assets/data/projectEvents1'; // Importa los eventos

const ProjectTimeline = ({ events }) => { // Acepta events como prop
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </div>
  );
};

export default ProjectTimeline;