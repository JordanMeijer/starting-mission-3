import React from 'react'
import star from '../../assets/Home/star.png'
import ProjectCard from './components/ProjectCard';

export default function ProjectLibrary() {
     const SDProjectLibraryData = [
        {
            title: "Introduction",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project01.png",
        },
        {
            title: "My Birthday",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project02.png",
        },
          {
            title: "Introduction",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project01.png",
        },
        {
            title: "My Birthday",
            level: "Beginner",
            activity_type: "Animation",
            src: "/images/projects/Project02.png",
        }
    ];
  return (
    <div>ProjectLibrary
        <img src={star} alt="star" />
        {SDProjectLibraryData.map((project) =>{
            return(
                <div>
                    <h1>{project.title}</h1>
                    <img src={project.src}/>
                </div>
            )
        })}
        {SDProjectLibraryData.map((project) =>{
            return(
               <ProjectCard title={project.title} src={project.src}/>
            )
        })}
         <div>
                    <h1>animation</h1>
                    <img src="/images/projects/Project02.png"/>
                </div>
    </div>
  )
}
