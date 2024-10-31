// src/components/TimelineEvent.js
import React from 'react';

const TimelineEvent = ({ icon, title, description, date }) => (
  <div className="timeline-event">
    <div className="timeline-icon">{icon}</div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      {description && <p className="timeline-description">{description}</p>}
      <p className="timeline-date">{date}</p>
    </div>
  </div>
);

export default TimelineEvent;
