'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../../contexts/LanguageContext'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Estudios',
    academicFormation: 'Formación Académica',
    degree: 'Grado en Ingeniería Informática',
    university1: 'Universidad Politécnica de Madrid',
    master: 'Máster en Desarrollo Web',
    university2: 'Universidad Complutense de Madrid',
  },
  en: {
    title: 'Education',
    academicFormation: 'Academic Formation',
    degree: 'Bachelor\'s Degree in Computer Engineering',
    university1: 'Polytechnic University of Madrid',
    master: 'Master\'s Degree in Web Development',
    university2: 'Complutense University of Madrid',
  }
}

export default function Estudios() {
  const { language } = useLanguage()
  const t = content[language]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">{t.title}</h1>
      <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>{t.academicFormation}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">{t.degree}</h3>
            <p className="text-sm text-gray-600">{t.university1}, 2015-2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">{t.master}</h3>
            <p className="text-sm text-gray-600">{t.university2}, 2019-2020</p>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}