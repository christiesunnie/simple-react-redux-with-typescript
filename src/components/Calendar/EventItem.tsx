import React from 'react';
import { UserEvent } from '../../redux/user-events';
import { deleteUserEvent } from '../../redux/user-events';
import { useAppDispatch } from '../../redux/store';

import './Calendar.css';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };

  return (
    <div>
      <div className="calendar-event-info">
        <div>
          <div className="calendar-event-time">10 - 12</div>
          <div>{event.title}</div>
        </div>
      </div>
      <button
        className="calendar-event-delete-button"
        onClick={handleDeleteClick}
      >
        &times;
      </button>
    </div>
  );
};

export default EventItem;
