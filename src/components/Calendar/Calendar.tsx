import React from 'react';

import './Calendar.css';

const Calendar: React.FC = () => {
  return (
    <div className="calendar">
      <div className="calendar-day">
        <div className="calendar-day-label">
          <span>1 February</span>
        </div>
        <div className="calendar-event">
          <div className="calendar-event-info">
            <div>
              <div className="calendar-event-time">10 - 12</div>
              <div>Testing title</div>
            </div>
          </div>
          <button className="calendar-event-delete-button">&times;</button>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
