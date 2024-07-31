import Link from "next/link";
import React from 'react';
import '../styles/global.css'; // Import global styles

const Team = () => {
  const teamMembers = [
    { id: 1, name: 'Agam Riyandana', role: 'Founder', image: '/agam.jpg' },
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
