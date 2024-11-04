import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import Calendar from 'react-calendar';
// Register necessary Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

// Sample Data for Overall Attendance
const attendanceData = {
   labels: ['Present', 'Absent'],
   datasets: [
      {
         data: [75, 25],
         backgroundColor: ['#4caf50', '#f44336'],
         hoverBackgroundColor: ['#66bb6a', '#ef5350']
      }
   ]
};

// Sample Data for Subject-wise Attendance
const subjectAttendance = {
    OS: { labels: ['Present', 'Absent'], data: [80, 20] },
    UCD: { labels: ['Present', 'Absent'], data: [90, 10] },
    DAA: { labels: ['Present', 'Absent'], data: [70, 30] },
    IDS: { labels: ['Present', 'Absent'], data: [60, 40] },
    DMS: { labels: ['Present', 'Absent'], data: [90, 10] }
};

// Sample Data for Missed Days and Topics Covered
const missedTopics = {
    '2024-11-01': ['OS - Process Scheduling', 'DAA - Graph Theory Basics'],
    '2024-11-02': ['UCD - User Interface Design', 'DMS - Normalization'],
    '2024-11-03': ['IDS - Data Wrangling Techniques', 'DAA - Dynamic Programming'],
    '2024-11-06': ['OS - Process Scheduling', 'DAA - Graph Theory Basics'],
    '2024-11-07': ['UCD - User Interface Design', 'DMS - Normalization'],
    '2024-11-08': ['IDS - Data Wrangling Techniques', 'DAA - Dynamic Programming']
};

const missedDays = [
  new Date(2024, 10, 1), // Example: November 1, 2024
  new Date(2024, 10, 5), // November 2, 2024
  new Date(2024, 10, 6), // November 3, 2024
];

export default function AnalyticsPage() {
  return (
    <div className="analytics-page">
       <h1>Analytics</h1>

       <section className='analytics-page-section1'>
          {/* Overall Attendance */}
          <div className="analytics-page-chart-container">
              <h2>Overall Attendance</h2>
              <Pie data={attendanceData} />
          </div>

          {/* Subject-wise Attendance */}
          {Object.entries(subjectAttendance).map(([subject, data], index) => (
              <div className="analytics-page-chart-container" key={index}>
                <h2>{subject} Attendance</h2>
                <Pie
                    data={{
                      labels: data.labels,
                      datasets: [
                          {
                            data: data.data,
                            backgroundColor: ['#2196f3', '#ff9800'],
                            hoverBackgroundColor: ['#42a5f5', '#ffb74d']
                          }
                      ]
                    }}
                />
              </div>
          ))}
       </section>

       {/* Missed Days and Topics Covered */}
       <section className='analytics-page-section2'>
         <section className='analytics-page-section2-subsection1'>
          <h2>Missed Topics</h2>
          <div className="missed-topics-container">
              {Object.entries(missedTopics).map(([date, topics], index) => (
                  <div key={index} className="missed-topics-item">
                      <h3>{date}</h3>
                      <ul>
                          {topics.map((topic, i) => (
                              <li key={i}>{topic}</li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
          </section>

          <section className='analytics-page-section2-subsection2'>
          <h2>Days Absent</h2>
          <Calendar
              tileClassName={({ date, view }) => {
                  // Highlight absent days on the calendar
                  if (view === 'month' && missedDays.some(d => d.getTime() === date.getTime())) {
                      return 'absent-day';
                  }
                  return null;
              }}
          />
          </section>


       </section>
    </div>
 );
}
