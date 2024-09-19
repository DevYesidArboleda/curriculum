'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../contexts/LanguageContext'
import Hero from '@/components/Hero'
import About from '@/components/About'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Yesid Banguera Arboleda',
    subtitle: 'Desarrollador Web Full Stack',
    personalInfo: 'Información Personal',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    location: 'Ubicación',
    info:"Ingeniero de sistemas, creativo, dinámico, con alta capacidad para asumir nuevos retos, con conocimientos y habilidades que contribuyen al desarrollo de las metas propuestas por la organización. Facilidad de aprendizaje y dedicación. Asumo con alto grado de responsabilidad y compromiso todas las tareas asignadas, brindo mis actitudes positivas y conocimientos en el trabajo en equipo e individual.",
  },
  en: {
    title: 'Yesid Banguera Arboleda',
    subtitle: 'Full Stack Web Developer',
    personalInfo: 'Personal Information',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    info:"systems engineer, creative, dynamic, with high capacity to assume new challenges, with knowledge and skills that contribute to development of the goals proposed by the organization. Ease of learning and dedication. I assume with a high degree of responsibility and commitment all assigned tasks, I offer my attitudes positive and knowledge at work as a team and individually.",
  }
}

export default function Home() {

  const { language } = useLanguage()
  const t = content[language]
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-center mb-12">
        {/* <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden ">
          <Image 
            src="/assets/foto.png" 
            alt="Yesid Banguera Arboleda" 
            width={128}
            height={128}
            objectFit="cover"
          />
        </div> 
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>*/}
      </header>

      <Hero/>
      <About/>

      {/* <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>{t.personalInfo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{t.info}</p><br />
          <p><strong>{t.email}</strong> yesison714@gmail.com</p>
          <p><strong>{t.phone}</strong> +57 3162115964</p>
          <p><strong>{t.location}</strong> Cali, colombia</p>
        </CardContent>
      </MotionCard> */}
    </motion.div>
  )
}