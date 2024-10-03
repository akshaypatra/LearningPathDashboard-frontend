import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';

const aData = [24, 34, 44, 37, 46, 41, 43,24, 34, 60];
const pData = [40, 30, 20, 27, 18, 23, 21,40, 30, 4];
const xLabels = [
  'Oct 20',
  'Oct 21',
  'Oct 22',
  'Oct 23',
  'Oct 24',
  'Oct 25',
  'Oct 26',
  'Oct 27',
  'Oct 28',
  'Oct 29',
];

export default function ClassAttendanceRecordBarGraph() {
    return (
        <div className='ClassAttendanceRecordBarGraph-container'>
        <p className='ClassAttendanceRecordBarGraph-label'>Class Attendance Record ( last 10 lectures )</p>
        <BarChart
        className='ClassAttendanceRecordBarGraph'
            width={1000}
            height={300}
            series={[
            { data: pData, label: 'Present', id: 'pId' },
            { data: aData, label: 'Absent', id: 'aId' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band' }]}
        />
        </div>
    );
  }
