import React from 'react';
import './TicketCard.css';

const TicketCard = ({ ticket }) => {
  return (
    <div className={`ticket-card priority-${ticket.priority}`}>
      <h4>{ticket.title}</h4>
      <p>{ticket.description}</p>
      <span>Priority: {ticket.priority}</span>
    </div>
  );
};

export default TicketCard;
