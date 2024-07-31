// pages/team.jsx

import React from 'react';
import '../styles/global.css'; // Import global styles

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Alice', role: 'Developer', image: '/images/alice.jpg' },
    { id: 2, name: 'Bob', role: 'Designer', image: '/images/bob.jpg' },
    { id: 3, name: 'Charlie', role: 'Project Manager', image: '/images/charlie.jpg' },
    // Tambahkan anggota tim lainnya di sini
  ];

  return (
    <div className="container">
      <h1>Our Team</h1>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.id} className="card">
            <img src={member.image} alt={member.name} />
            <h2>{member.name}</h2>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
