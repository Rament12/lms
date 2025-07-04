import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/student/Home'
import CoursesList from './pages/student/CoursesList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollements from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/student/Loading'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentEnrolled from './pages/educator/StudentsEnrolled'
import Navbar from './components/student/Navbar'


const App = () => {
  const isEducatorRoute = useMatch('/educator/*')
  return (
    <div className="text-default min-h-screen bg-white">
      {!isEducatorRoute && <Navbar/>}
      
    
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses-List" element={<CoursesList/>}/>
        <Route path="/courses-List/:input" element={<CoursesList/>}/>
        <Route path="/cource/:id" element={<CourseDetails/>}/>
        <Route path="/my-enrollement" element={<MyEnrollements/>}/>
        <Route path="/player/:courseId" element={<Player/>}/>
        <Route path="/loading/:path" element={<Loading/>}/>
        <Route path="/educator" element={<Educator/>}>
          <Route path="educator" element={<Dashboard/>}/>
          <Route path="add-course" element={<AddCourse/>}/>
          <Route path="my-courses" element={<MyCourses/>}/>
          <Route path="student-enrolled" element={<StudentEnrolled/>}/>
        </Route>
        
        
       </Routes>
      
      
    </div>
  )
}

export default App

