// src/components/ProjectTimeline.js
import React from 'react';
import TimelineEvent from './TimelineEvent';

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