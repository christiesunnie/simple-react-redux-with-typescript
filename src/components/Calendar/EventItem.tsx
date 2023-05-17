import React, { useEffect, useRef, useState } from 'react';
import { UserEvent } from '../../redux/user-events';
import { deleteUserEvent, editUserEvent } from '../../redux/user-events';
import { useAppDispatch } from '../../redux/store';

import './Calendar.css';

interface Props {
  event: UserEvent;
}

const EventItem: React.FC<Props> = ({ event }) => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState(event.title);

  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteUserEvent(event.id));
  };

  const handleTitleClick = () => {
    setEditable(true);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    if (title !== event.title) {
      dispatch(editUserEvent({ ...event, title }));
    }
    setEditable(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editable) {
      inputRef.current?.focus();
    }
  }, [editable]);

  return (
    <div>
      <div className="calendar-event-info">
        <div>
          <div className="calendar-event-time">10 - 12</div>
          <div>
            {editable ? (
              <input
                type="text"
                value={title}
                ref={inputRef}
                onChange={handleTitleChange}
                onBlur={handleTitleBlur}
              />
            ) : (
              <span onClick={handleTitleClick}>{event.title}</span>
            )}
          </div>
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
