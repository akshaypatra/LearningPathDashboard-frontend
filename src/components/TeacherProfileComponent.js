import React from 'react'
import CalendarEvents from './CalendarEvents'

export default function TeacherProfileComponent() {
  return (
    <div>
        <section className='teacher-info'>
        <h1 id='teacher-name'>Prof. Akshay Patra </h1>
        </section>
        <section className='calendar-section'>
            <CalendarEvents/>
        </section>
    </div>
  )
}
