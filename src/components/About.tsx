import React from 'react'
import { useLanguage } from '../../contexts/LanguageContext'
import Image from 'next/image'
import book from "../../public/assets/book.png"
import card from "../../public/assets/card.png"
import finance from "../../public/assets/finance.png"
import pc from "../../public/assets/pc.png"

const content = {
    es: {
      education: "Tengo una licenciatura en informática y me estoy centrando en tecnologías como React, Next.js, Tailwind y más",
      titleEducation: "Educación",
      pc: "Abordo los desafíos con una mentalidad lógica y sistemática.",
      titlePc: "Resolución de problemas",
      technical: "Como desarrollador web fullstack, me especializo en salesforce, react js, next.js, vtex IO, tailwind y más herramientas. Mi experiencia se extiende a la creación de interfaces receptivas y fáciles de usar y soluciones backend eficientes",
      technicalTitle: "Habilidades técnicas",
      portfolio: "Portafolio",
      comingSoon: "Próximamente"
    },
    en: {
      education: "I hold a degree in computer science and I am focusing on technologies like React, Next.js, Tailwind and more",
      titleEducation: "Education",
      pc: "I approach challenges with a logical and systematic mindset",
      titlePc: "Problem-solving",
      technical: "As a fullstack web developer, I specialize in Salesforce, React.js, Next.js, VTEX IO, Tailwind and more tools. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions",
      technicalTitle: "Technical Skills",
      portfolio: "Portfolio",
      comingSoon: "Coming soon"
    }
}

const AboutCard = ({ image, title, description }:any) => (
  <div className='w-full bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden'>
    <div className='flex flex-col sm:flex-row p-4 sm:p-6'>
      <Image src={image} alt='' className='w-full sm:w-auto h-[130px] object-contain mb-4 sm:mb-0 sm:mr-4'/>
      <div className='flex flex-col justify-center'>
        <h2 className='text-xl sm:text-2xl font-bold text-white/80'>{title}</h2>
        <p className='text-base sm:text-lg text-white/70 mt-2'>{description}</p>
      </div>
    </div>
  </div>
)

const About = () => {
    const { language } = useLanguage()
    const t = content[language]

  return (
    <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-8 gap-6'>
        <div className='md:col-span-5'>
          <AboutCard 
            image={book}
            title={t.titleEducation}
            description={t.education}
          />
        </div>

        <div className='md:col-span-3'>
          <AboutCard 
            image={card}
            title={t.portfolio}
            description={t.comingSoon}
          />
        </div>

        <div className='md:col-span-3'>
          <AboutCard 
            image={finance}
            title={t.titlePc}
            description={t.pc}
          />
        </div>

        <div className='md:col-span-5'>
          <AboutCard 
            image={pc}
            title={t.technicalTitle}
            description={t.technical}
          />
        </div>
      </div>
    </div>
  )
}

export default About