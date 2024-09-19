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
      <h1 className="text-3xl font-bold text-White mb-6">{t.title}</h1>
      <MotionCard className='border-0 bg-transparent relative overflow-clip bg-[linear-gradient(to_bottom,#00FF0000,#2B1942_35%,#8F5C55_60%,#00FF0000_80%)]' whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>{t.academicFormation}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">{t.degree}</h3>
            <p className="text-sm text-white">{t.university1}, 2013-2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">{t.master}</h3>
            <p className="text-sm text-white">{t.university2}, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Fundamentals Installation and Upgrade</h3>
            <p className="text-sm text-white">PLURALSIGHT, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Disaster Recovery and Data Movement</h3>
            <p className="text-sm text-white">PLURALSIGHT, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500"> Performance Tuning and Optimization </h3>
            <p className="text-sm text-white">PLURALSIGHT, 2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">[Español] AWS Certified Cloud Practitioner (CLF-C02)-2024</h3>
            <p className="text-sm text-white">Udemy, 2024</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Principios SOLID y Clean Code</h3>
            <p className="text-sm text-white">Udemy, 2023</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">JavaScript Moderno: Guía para dominar el lenguaje</h3>
            <p className="text-sm text-white">Udemy, 2018</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Angular de cero a Experto</h3>
            <p className="text-sm text-white">Udemy, 2022</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Docker - Guía práctica de uso para desarrolladores</h3>
            <p className="text-sm text-white">Udemy, 2022</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">DevOps con Docker, Jenkins, Kubernetes, git, GitFlow CI y CD</h3>
            <p className="text-sm text-white">Udemy, 2022</p>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}