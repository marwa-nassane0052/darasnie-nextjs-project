"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";

const events = [
  {
    start: moment().toDate(),
    end: moment().add(1, "days").toDate(),
    title: "Some title",
  },
];

const localizer = momentLocalizer(moment);

export default function page() {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Emploie du Temps</h1>
      <hr />
      <div className="p-4 bg-white rounded-xl mt-4">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          date={date}
          view={view}
          views={["month", "week", "day"]}
          onView={(view) => setView(view)}
          onNavigate={(date) => {
            setDate(new Date(date));
          }}
          style={{ height: 600 }}
        />
      </div>
    </div>
  );
}
