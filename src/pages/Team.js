// src/pages/Team.js
import React from 'react';
import TeamMember from '../components/TeamMember';
import teamData from '../assets/data/team.json'; // Información de miembros del equipo

const Team = () => {
  return (
    <section>
      <h2>Equipo de Desarrollo</h2>
      <div className="team-list">
        {teamData.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default Team;
