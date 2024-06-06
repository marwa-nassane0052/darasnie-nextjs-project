"use client";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { getStudentPlaning } from "@/actions/client/groups";
import { useEffect,useState } from "react";


const localizer = momentLocalizer(moment);

export default function page() {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
 
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const responseData = await getStudentPlaning();
        const transformedEvents = responseData.map(event => ({
          title: event.info,
          start:  event.StartingDate,
          end: event.endingDate,
        }));
        console.log(transformedEvents);
        setData(transformedEvents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataFromApi();
  }, []);


  const handleNavigate = (newDate) => {
    setDate(newDate);
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };
 


  return (
    <div>
      <h1 className="font-bold text-xl mb-8">Emploie du Temps</h1>
      <hr />
      <div className="p-4 bg-white rounded-xl mt-4">
        <Calendar
           localizer={localizer}
           events={data}
           startAccessor="start"
           endAccessor="end"
           style={{ height:800,width:1000,display:"flex",flexWrap:"wrap"}}
           view={view}
           onNavigate={handleNavigate}
           onView={handleViewChange}
           date={date}
           
        />
      </div>
    </div>
  );
}
