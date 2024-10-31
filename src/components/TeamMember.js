// src/components/TeamMember.js
import React from 'react';

const TeamMember = ({ member }) => {
  return (
    <div className="team-member">
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <img src={member.image} alt={member.name} />
    </div>
  );
};

export default TeamMember;
