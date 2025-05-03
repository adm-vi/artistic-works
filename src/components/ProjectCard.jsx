import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import artisticA from '../assets/artistic_a.png'

const ProjectCard = ({ title, description, content, externalLink, badges = [] }) => {
  return (
    <Card className="h-[calc(33vh-2rem)] flex flex-col overflow-hidden shadow-sm relative">
      <div className="absolute top-12 right-3">
        <img 
          src={artisticA} 
          alt="Logo" 
          className="h-24 w-auto object-contain"
        />
      </div>
      
      <CardHeader className="flex-shrink-0 pb-0 pr-24">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-slate-500">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 p-6 pt-0 pr-24 mt-2">
        <p className="text-slate-700">{content}</p>
      </CardContent>
      
      <CardFooter className="border-t flex justify-between items-center py-2 mt-auto">
        <a 
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          View Project
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
        <div className="flex space-x-1">
          {badges.map((badge, index) => (
            <span 
              key={index} 
              className={`inline-flex items-center rounded-full bg-${badge.color}-50 px-2 py-0.5 text-xs font-medium text-${badge.color}-700`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard 