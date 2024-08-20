import { AI, Analysis, CRM, Code, Finance, Market, TechSupport, UIDesign, eComm } from "@/components/SVG"
import path from "path";
import { ReactNode } from "react";
import { promises as fs } from 'fs';
import { remark } from "remark";
import html from 'remark-html';


export const navLinks = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Services',
        url: '/services'
    },
    {
        title: 'Blog',
        url: '/blog'
    },
    {
        title: 'Contact',
        url: '/contact'
    },
    {
      title: 'Chat',
      url: '/chat'
    }
]

type OfferingsType = {
  title: string;
  description: string;
  icon: () =>  ReactNode;
}

export const offerings: OfferingsType[] = [
    {
      title: 'UI/UX Design',
      description: 'Create intuitive and visually appealing user interfaces and experiences to enhance user satisfaction and engagement',
     icon: UIDesign
    },
    {
      title: 'Full Stack Web Development',
      description: 'Develop robust and scalable front-end and back-end solutions to ensure seamless and efficient application performance.',
  icon: Code
    },
    {
      title: 'CRM Optimization',
      description: 'Optimize customer relationship management systems to improve client interactions and streamline business processes.',
  icon: CRM
    },
    {
      title: 'Marketing Automation',
      description: 'Implement marketing automation tools to enhance campaign efficiency and deliver personalized customer experiences.',
  icon: Market
    },
    {
      title: 'Custom Inventory and Finance Management Software',
      description: 'Design customized inventory and finance management software to meet the unique needs of your business.',
  icon: Finance
    },
    {
      title: 'AI Integration',
      description: 'Integrate artificial intelligence solutions to automate tasks, improve decision-making, and enhance operational efficiency.',
  icon: AI
    },
    {
      title: 'eCommerce Solutions',
      description: 'Provide comprehensive eCommerce solutions to help businesses sell online effectively and maximize revenue.',
  icon: eComm
    },
    {
      title: 'Analytics',
      description: 'Deliver powerful analytics tools to help you gain insights from data and make informed business decisions.',
  icon: Analysis
    },
    {
        title: 'Technical Support',
        description: 'Advise and assist with issues concerning technical products',
        icon: TechSupport
    }
  ]

export const profile_img = 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 

  export const blogLinks = [
    {
      title: 'All',
      category: 'all',
      href: '/blog'
    },
    {
      title: 'Business Analysis',
      category: 'business_analysis',
      href: '/blog?category=business_analysis'
    },
    {
      title: 'Dev',
      category: 'dev',
      href: '/blog?category=dev'
    },
    {
      title: 'Case Studies',
      category: 'case_studies',
      href: '/blog?category=case_studies'
    },
  ]

  export type BlogArticle = {
    id: string;
    title: string;
    length: string;
    main_image_url: string;
    description?: string;
    date: string;
    sections: Section[];
    category: "business_analysis" | "dev" | "case_studies";
    tags?: string[];
    blockquotes?: string[]

  }

  type Section = {
    section_title: string;
    image_url?: string;
    paragraphs: string[];
  }

 export  type Schedule = {
    id: number;
    start_date: string
    end_date?: string
    event_name: string
    description: string
    start_time?: string
    end_time?: string
    
}
  export const schedule: Schedule[] = [
    {
        id: 1,
        start_date: '2024-06-27',
        event_name: 'Work',
        description: "Time Given For A Salary.",
        start_time: '09H00',
        end_time: '17H00'
    },
    {
        id: 2,
        start_date:'2024-06-27',
        event_name: 'Coding',
        description: "Fixing Marley&Me AI Scheduler",
        start_time: '20H00',
        end_time: '00H00'
    },
    {
        id: 3,
        start_date:'2024-06-28',
        event_name: 'Work',
        description: "Hit The Grind, Atleast Its Friday",
        start_time: '09H00',
        end_time: '17H00'
    },
    {
        id: 4,
        start_date:'2024-07-01',
        event_name: 'Work',
        description: "Hit The Grind",
        start_time: '09H00',
        end_time: '17H00'
    },
    {
        id: 10,
        start_date:'2024-07-01',
        event_name: 'IIBA Womens Month Team Meeting',
        description: "Inital Meeting For IIBA Volunteers Meeting",
        start_time: '17H30',
        end_time: '18H30'
    },
    {
      "id": 5,
      "start_date": "2024-07-01",
      "event_name": "Work",
      "description": "Adulting - Achieve moderate levels of productivity",
      "start_time": "08:00",
      "end_time": "17:00"
    },
    {
      "id": 6,
      "start_date": "2024-07-02",
      "event_name": "Work",
      "description": "Emails, Meetings, and the neverending quest for coffee",
      "start_time": "08:00",
      "end_time": "17:00"
    },
    {
      "id": 7,
      "start_date": "2024-07-03",
      "event_name": "Work",
      "description": "Spreadsheets that talk back and existential dread (optional)",
      "start_time": "08:00",
      "end_time": "17:00"
    },
    {
      "id": 8,
      "start_date": "2024-07-04",
      "event_name": "Work",
      "description": "Pretend to be busy while strategically planning the weekend",
      "start_time": "08:00",
      "end_time": "17:00"
    },
    {
      "id": 9,
      "start_date": "2024-07-05",
      "event_name": "Work",
      "description": "Casually refresh Zoho every 2 minutes, hoping for a miracle (it won't happen)",
      "start_time": "08:00",
      "end_time": "17:00"
    },
    {
      "id": 11,  
      "start_date": "2024-07-08", 
      "event_name": "IIBA Volunteer Team Meeting", 
      "description": "Discuss Business Analysis Women's Month Campaign", 
      "start_time": "18:30", 
      "end_time": "19:30"
    },
    {
      "id": 12,  
      "start_date": "2024-07-02", 
      "event_name": "Coding", 
      "description": "MototraceHub", 
      "start_time": "20:00", 
      "end_time": "23:30"
    },
    {
      "id": 13,  
      "start_date": "2024-07-03", 
      "event_name": "Marley&Me", 
      "description": "Write New Blogs And Improve AI", 
      "start_time": "20:00", 
      "end_time": "23:30"
    },
    {
      "id": 14,  
      "start_date": "2024-07-04", 
      "event_name": "Coding", 
      "description": "MototraceHub",
      "start_time": "20:00", 
      "end_time": "23:30"
    },
    {
      "id": 15,  
      "start_date": "2024-07-05", 
      "event_name": "Marley&Me", 
      "description": "Write New Blogs And Improve AI", 
      "start_time": "20:00", 
      "end_time": "23:30"
    },{
      "id": 16,  
      "start_date": "2024-08-14", 
      "event_name": "Tutoring", 
      "description": "Tutoring", 
      "start_time": "20:00", 
      "end_time": "23:30"
    }
]
