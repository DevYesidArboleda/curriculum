'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../contexts/LanguageContext'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Yesid Banguera Arboleda',
    subtitle: 'Desarrollador Web Full Stack',
    personalInfo: 'Información Personal',
    email: 'Correo electrónico',
    phone: 'Teléfono',
    location: 'Ubicación',
  },
  en: {
    title: 'Yesid Banguera Arboleda',
    subtitle: 'Full Stack Web Developer',
    personalInfo: 'Personal Information',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
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
        <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden ">
          <Image 
            src="/assets/foto.png" 
            alt="Yesid Banguera Arboleda" 
            width={128}
            height={128}
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t.title}</h1>
        <p className="text-xl text-gray-600">{t.subtitle}</p>
      </header>

      <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>{t.personalInfo}</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>{t.email}</strong> yesison714@gmail.com</p>
          <p><strong>{t.phone}</strong> +57 3162115964</p>
          <p><strong>{t.location}</strong> Cali, colombia</p>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}