import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

export default function AverageAttendanceComponent() {
  return (
    <div className="Today-attendance-pie-chart-container">
      <p className='Today-attendance-pie-chart-label'>Today's Attendance</p>
        <PieChart
        className='today-attendance-pie-chart'
        // colors={['green','red']}
      series={[
        {
          data: [
            { id: 0, value: 50, label: 'Present' },
            { id: 1, value: 10, label: 'Absent' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
    </div>
  )
}



