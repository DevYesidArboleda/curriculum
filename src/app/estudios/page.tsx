'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../../contexts/LanguageContext'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Estudios',
    academicFormation: 'Formación Académica',
    degree: 'Ingeniería de Sistemas  ',
    university1: 'Universidad Cooperativa - Cali',
    master: 'Certificación OCA 12c: SQL fundamentals',
    university2: 'Universidad Cooperativa - Cali',
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
            <p className="text-sm text-gray-600">{t.university1}, 2013-2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">{t.master}</h3>
            <p className="text-sm text-gray-600">{t.university2}, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Fundamentals Installation and Upgrade</h3>
            <p className="text-sm text-gray-600">PLURALSIGHT, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Disaster Recovery and Data Movement</h3>
            <p className="text-sm text-gray-600">PLURALSIGHT, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold"> Performance Tuning and Optimization </h3>
            <p className="text-sm text-gray-600">PLURALSIGHT, 2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">[Español] AWS Certified Cloud Practitioner (CLF-C02)-2024</h3>
            <p className="text-sm text-gray-600">Udemy, 2024</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Principios SOLID y Clean Code</h3>
            <p className="text-sm text-gray-600">Udemy, 2023</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">JavaScript Moderno: Guía para dominar el lenguaje</h3>
            <p className="text-sm text-gray-600">Udemy, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Angular de cero a Experto</h3>
            <p className="text-sm text-gray-600">Udemy, 2022</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Docker - Guía práctica de uso para desarrolladores</h3>
            <p className="text-sm text-gray-600">Udemy, 2022</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD</h3>
            <p className="text-sm text-gray-600">Udemy, 2022</p>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}