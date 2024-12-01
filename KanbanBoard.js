import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../utils/api';
import TicketCard from './TicketCard';
import './KanbanBoard.css';

const KanbanBoard = () => {
  const groupingIcons = {
    status: '/icons_FEtask/Display.svg',
    user: '/icons_FEtask/add.svg',
    priority: '/icons_FEtask/SVG - Urgent Priority colour/.svg',
  };

  return (
    <header>
      <img src={groupingIcons[groupBy]} alt={groupBy} className="grouping-icon" />
      <select onChange={(e) => setGroupBy(e.target.value)}>
        <option value="status">Group by Status</option>
        <option value="user">Group by User</option>
        <option value="priority">Group by Priority</option>
      </select>
    </header>
  );
};

  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState('status');
  const [sortBy, setSortBy] = useState('priority');

  useEffect(() => {
    const loadTickets = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    loadTickets();
  }, []);

  const groupedTickets = tickets.reduce((groups, ticket) => {
    const key = ticket[groupBy] || 'Uncategorized';
    if (!groups[key]) groups[key] = [];
    groups[key].push(ticket);
    return groups;
  }, {});

  const renderTickets = () => {
    return Object.keys(groupedTickets).map((key) => (
      <div key={key} className="kanban-column">
        <h3>{key}</h3>
        {groupedTickets[key].map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    ));
  };

  return (
    <div className="kanban-board">
      <header>
        <select onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Group by Status</option>
          <option value="user">Group by User</option>
          <option value="priority">Group by Priority</option>
        </select>
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </header>
      <main>{renderTickets()}</main>
    </div>
  );
};

export default KanbanBoard;
