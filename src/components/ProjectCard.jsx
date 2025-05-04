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

const getBadgeStyles = (color) => {
  const styles = {
    blue: "bg-blue-200/90 border-blue-300/50 text-blue-800",
    green: "bg-green-200/90 border-green-300/50 text-green-800",
    red: "bg-red-200/90 border-red-300/50 text-red-800",
    purple: "bg-purple-200/90 border-purple-300/50 text-purple-800",
    yellow: "bg-yellow-200/90 border-yellow-300/50 text-yellow-800"
  };
  
  return styles[color] || "bg-gray-200/90 border-gray-300/50 text-gray-800";
};

const ProjectCard = ({ title, description, content, externalLink, badges = [] }) => {
  return (
    <div className="h-auto md:h-[calc(33vh-2rem)] rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/30 backdrop-blur-md overflow-hidden relative flex flex-col">
      <div className="absolute top-2 md:top-12 right-1 md:right-3 drop-shadow-md">
        <img 
          src="/artistic_a.png" 
          alt="Logo" 
          className="h-10 md:h-24 w-auto object-contain opacity-80 md:opacity-100"
        />
      </div>
      
      <div className="flex-shrink-0 pb-0 pr-12 md:pr-24 flex flex-col space-y-0 md:space-y-1.5 p-3 md:p-6">
        <h3 className="text-lg md:text-2xl font-normal leading-tight tracking-wide drop-shadow-sm font-jersey text-slate-900 mb-0 md:mb-1">{title}</h3>
        <p className="text-xs md:text-sm text-slate-600">{description}</p>
      </div>
      
      <div className="flex-1 p-3 md:p-6 pt-0 pr-12 md:pr-24 mt-0 md:mt-2">
        <p className="text-xs md:text-base text-slate-800 line-clamp-2 md:line-clamp-none">{content}</p>
      </div>
      
      <div className="border-t border-white/20 flex items-center justify-between gap-1 md:gap-0 p-2 md:p-6 pt-1 md:pt-0 py-1 md:py-2 mt-auto">
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
        <div className="flex flex-wrap gap-0.5 md:gap-1">
          {badges.map((badge, index) => (
            <span 
              key={index} 
              className={`inline-flex items-center rounded-full backdrop-blur-sm shadow-sm px-1 md:px-2 py-0.5 text-[8px] md:text-xs font-medium border ${getBadgeStyles(badge.color)}`}
            >
              {badge.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard 