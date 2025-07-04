import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppContextProvider = (props) =>{
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()
    const [allcourses, setAllCourses] = useState([])
    const [isEducator, setIsEducator] = useState(true)


    //fetch all courses
    const fetchAllCourses = async()=>{
        setAllCourses(dummyCourses)
    }
    useEffect(()=>{
        fetchAllCourses()

    },[])
    //calculate average rating
    const calculateRating =(course)=>{
        if(course.courseRatings.length === 0){
            return 0;
        }
        let totalRating = 0
        course.courseRatings.forEach(rating=>{
            totalRating += rating.rating
        })
        return totalRating / course.courseRatings.length
    }

        const value = {
            currency,allcourses,navigate, calculateRating,isEducator,setIsEducator

        }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
