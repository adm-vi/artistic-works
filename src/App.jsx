import React from 'react'
import Layout from './components/Layout'
import ProjectCard from './components/ProjectCard'

function App() {
  const projects = [
    { 
      title: "Hello Pioneer", 
      description: "A sample project", 
      content: "Project 1 description",
      externalLink: "https://www.hello-pioneer.com/",
      badges: [
        { text: "Design", color: "blue" },
        { text: "New", color: "green" }
      ]
    },
    { 
      title: "Project 2", 
      description: "A sample project", 
      content: "Project 2 description",
      externalLink: "https://example.com/project2",
      badges: [
        { text: "Art", color: "purple" },
        { text: "Featured", color: "yellow" }
      ]
    },
    { 
      title: "Project 3", 
      description: "A sample project", 
      content: "Project 3 description",
      externalLink: "https://example.com/project3",
      badges: [
        { text: "Design", color: "blue" },
        { text: "Art", color: "purple" }
      ]
    },
    { 
      title: "Project 4", 
      description: "A sample project", 
      content: "Project 4 description",
      externalLink: "https://example.com/project4",
      badges: [
        { text: "Development", color: "red" },
        { text: "New", color: "green" }
      ]
    },
    { 
      title: "Project 5", 
      description: "A sample project", 
      content: "Project 5 description",
      externalLink: "https://example.com/project5",
      badges: [
        { text: "Art", color: "purple" }
      ]
    },
    { 
      title: "Project 6", 
      description: "A sample project", 
      content: "Project 6 description",
      externalLink: "https://example.com/project6",
      badges: [
        { text: "Design", color: "blue" },
        { text: "Development", color: "red" }
      ]
    }
  ]

  return (
    <Layout>
      {/* Column 1 - Cards 1-3 */}
      <div className="grid grid-rows-3 gap-4">
        {projects.slice(0, 3).map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            content={project.content}
            externalLink={project.externalLink}
            badges={project.badges}
          />
        ))}
      </div>
      
      {/* Column 2 - Cards 4-6 */}
      <div className="grid grid-rows-3 gap-4">
        {projects.slice(3, 6).map((project, index) => (
          <ProjectCard
            key={index + 3}
            title={project.title}
            description={project.description}
            content={project.content}
            externalLink={project.externalLink}
            badges={project.badges}
          />
        ))}
      </div>
    </Layout>
  )
}

export default App
