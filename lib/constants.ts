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


