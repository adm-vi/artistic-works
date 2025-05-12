import React from 'react'
import Layout from './components/Layout'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import { Analytics } from '@vercel/analytics/react'

function App() {
  // Calculate the midpoint to split projects evenly between columns
  const midpoint = Math.ceil(projects.length / 2)
  
  return (
    <>
      <Layout>
        {/* Column 1 - First half of projects */}
        <div className="flex flex-col gap-4">
          {projects.slice(0, midpoint).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              content={project.content}
              externalLink={project.externalLink}
              image={project.image}
              imageClass={project.imageClass}
            />
          ))}
        </div>
        
        {/* Column 2 - Second half of projects */}
        <div className="flex flex-col gap-4">
          {projects.slice(midpoint).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              content={project.content}
              externalLink={project.externalLink}
              image={project.image}
              imageClass={project.imageClass}
            />
          ))}
        </div>
      </Layout>
      <Analytics />
    </>
  )
}

export default App
