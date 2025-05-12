import React from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { cn } from "@/lib/utils"

const ProjectCard = ({ title, description, content, externalLink, image, imageClass }) => {
  const hasValidLink = externalLink && externalLink !== "-";

  return (
    <div className="h-[220px] rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/30 backdrop-blur-md overflow-hidden relative flex flex-col">
      <div className="absolute top-4 md:top-8 right-2 md:right-3 drop-shadow-md">
        <img 
          src={image || "/artistic_a.png"} 
          alt={`${title} logo`} 
          className={`h-14 md:h-20 w-auto object-contain opacity-80 md:opacity-100 ${imageClass || ''}`}
        />
      </div>
      
      <div className="flex-shrink-0 pb-2 pr-16 md:pr-24 flex flex-col space-y-2 md:space-y-1 p-4 md:p-4">
        <h3 className="text-base md:text-lg font-normal leading-tight tracking-wide drop-shadow-sm text-slate-900 mb-1 font-rock truncate">{title}</h3>
        <p className="text-lg md:text-lg text-slate-600 font-reenie line-clamp-1">{description}</p>
      </div>
      
      <div className="flex-1 px-4 pr-16 md:pr-24 py-1">
        <p className="text-sm md:text-sm text-slate-800 line-clamp-3 font-geist">{content}</p>
      </div>
      
      <div className="border-t border-white/20 flex items-center p-3 md:p-3 pt-2 py-2">
        {hasValidLink ? (
          <a 
            href={externalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-xs md:text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 md:h-4 md:w-4 ml-0.5 md:ml-1" 
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
        ) : (
          <span style={{fontFamily: "'Permanent Marker', cursive"}} className="text-slate-800 text-sm md:text-base -rotate-2">
            coming soon
          </span>
        )}
      </div>
    </div>
  )
}

export default ProjectCard 