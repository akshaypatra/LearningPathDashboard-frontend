
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {field: 'Rollno', headerName: 'Roll Number', width: 110,editable: true,},
  {field: 'Enrollment_Number', headerName: 'Enrollment Number', width: 150,editable: true,},
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },

  
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'Attendance',
    headerName: 'Attendance %',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
    { id: 1, lastName: 'Patel', firstName: 'Rohan', age: 20, Rollno: 2234567, Enrollment_Number: 'MITU22BTCS0001', email: 'rohan.patel@school.edu', Attendance: 85 },
    { id: 2, lastName: 'Sharma', firstName: 'Priya', age: 22, Rollno: 2345678, Enrollment_Number: 'MITU22BTCS0002', email: 'priya.sharma@school.edu', Attendance: 90 },
    { id: 3, lastName: 'Khan', firstName: 'Aamir', age: 21, Rollno: 2456789, Enrollment_Number: 'MITU22BTCS0003', email: 'aamir.khan@school.edu', Attendance: 78 },
    { id: 4, lastName: 'Singh', firstName: 'Raj', age: 23, Rollno: 2567890, Enrollment_Number: 'MITU22BTCS0004', email: 'raj.singh@school.edu', Attendance: 92 },
    { id: 5, lastName: 'Iyer', firstName: 'Sanya', age: 19, Rollno: 2678901, Enrollment_Number: 'MITU22BTCS0005', email: 'sanya.iyer@school.edu', Attendance: 88 },
    { id: 6, lastName: 'Das', firstName: 'Anil', age: 20, Rollno: 2789012, Enrollment_Number: 'MITU22BTCS0006', email: 'anil.das@school.edu', Attendance: 75 },
    { id: 7, lastName: 'Verma', firstName: 'Simran', age: 21, Rollno: 2890123, Enrollment_Number: 'MITU22BTCS0007', email: 'simran.verma@school.edu', Attendance: 82 },
    { id: 8, lastName: 'Mehta', firstName: 'Aryan', age: 22, Rollno: 2901234, Enrollment_Number: 'MITU22BTCS0008', email: 'aryan.mehta@school.edu', Attendance: 95 },
    { id: 9, lastName: 'Nair', firstName: 'Kavya', age: 20, Rollno: 3012345, Enrollment_Number: 'MITU22BTCS0009', email: 'kavya.nair@school.edu', Attendance: 89 },
    { id: 10, lastName: 'Reddy', firstName: 'Vikram', age: 21, Rollno: 3123456, Enrollment_Number: 'MITU22BTCS0010', email: 'vikram.reddy@school.edu', Attendance: 76 },
  ];
export default function StudentList() {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}
