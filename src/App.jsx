import React from 'react'
import Layout from './components/Layout'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <Layout>
      {/* Column 1 - Cards 1-3 */}
      <div className="grid grid-rows-3 gap-4">
        {projects.slice(0, 3).map((project, index) => (
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
      
      {/* Column 2 - Cards 4-6 */}
      <div className="grid grid-rows-3 gap-4">
        {projects.slice(3, 6).map((project, index) => (
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
      <Analytics />
    </Layout>
  )
}

export default App
