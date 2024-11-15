import React from "react";

import CalendarEvents from "./CalendarEvents";
import TodayTask from "./TodayTask";
import TodayClasses from "./TodayClasses";

export default function TeacherProfileComponent() {
 
  return (
    <div>
      <section className="teacher-info">
        <div className="teacher-imageAndName">
          <img
            id="teacher-image"
            src="https://media.istockphoto.com/id/1327592506/vector/default-avatar-photo-placeholder-icon-grey-profile-picture-business-man.jpg?s=612x612&w=0&k=20&c=BpR0FVaEa5F24GIw7K8nMWiiGmbb8qmhfkpXcp1dhQg="
            alt="ImageNotavailable"
          />
          <h1 id="teacher-name">Akshay Patra </h1>
        </div>
        <TodayClasses/>
        <TodayTask/>
        
      </section>
      <hr></hr>

      <section className="calendar-section">
        <CalendarEvents />
      </section>
    </div>
  );
}
