import React from 'react'
import StudentHeader from './components/StudentHeader'
import StudentSidebar from './components/StudentSidebar'
import LeraningObjective from './learningObjective/LeraningObjective'
import StudentFooter from './components/StudentFooter'

export default function StudentDashboard() {
  return (
   <>
   <StudentHeader title="project" subTitle="introduction" dots="⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫⚫"/>
   <StudentHeader/>
   <div style={{display:"flex"}}>
    <StudentSidebar/>
    <LeraningObjective/>
   </div>
   <StudentFooter/>
   </>
  )
}
