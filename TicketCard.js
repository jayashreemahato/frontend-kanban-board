import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  const priorityIcons = {
    4: '/icons_FEtask/Img - High Priority.svg', // Urgent
    3: '/icons_FEtask/Img - High Low.svg', // High
    2: '/icons_FEtask/Img - High Medium.svg', // Medium
    1: '/icons_FEtask/in-progress.svg', // Low
    0: '/icons_FEtask/No-priority.svg', // No Priority
  };

  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      {/* Display icon for priority */}
      <img
        className="ticket-icon"
        src={priorityIcons[ticket.priority]}
        alt={`Priority ${ticket.priority}`}
      />
      <h4>{ticket.title}</h4>
      <p>{ticket.description}</p>
      <span>Priority: {ticket.priority}</span>
    </div>
  );
};

export default TicketCard;
