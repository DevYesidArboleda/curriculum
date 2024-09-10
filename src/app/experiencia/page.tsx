'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../../contexts/LanguageContext'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Experiencia Laboral',
    professionalCareer: 'Trayectoria Profesional',
    job1: {
      title: 'Desarrollador Full Stack Senior',
      company: 'TechCorp S.L.',
      period: '2020-Presente',
      responsibilities: [
        'Desarrollo de aplicaciones web utilizando React y Node.js',
        'Implementación de arquitecturas serverless con AWS',
        'Liderazgo de equipo de desarrollo de 5 personas'
      ]
    },
    job2: {
      title: 'Desarrollador Front-end',
      company: 'WebSolutions Inc.',
      period: '2019-2020',
      responsibilities: [
        'Creación de interfaces de usuario con React y Vue.js',
        'Optimización de rendimiento de aplicaciones web'
      ]
    }
  },
  en: {
    title: 'Work Experience',
    professionalCareer: 'Professional Career',
    job1: {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp LLC',
      period: '2020-Present',
      responsibilities: [
        'Development of web applications using React and Node.js',
        'Implementation of serverless architectures with AWS',
        'Leadership of a 5-person development team'
      ]
    },
    job2: {
      title: 'Front-end Developer',
      company: 'WebSolutions Inc.',
      period: '2019-2020',
      responsibilities: [
        'Creation of user interfaces with React and Vue.js',
        'Optimization of web application performance'
      ]
    }
  }
}

export default function Experiencia() {
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
          <CardTitle>{t.professionalCareer}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">{t.job1.title}</h3>
            <p className="text-sm text-gray-600">{t.job1.company}, {t.job1.period}</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              {t.job1.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">{t.job2.title}</h3>
            <p className="text-sm text-gray-600">{t.job2.company}, {t.job2.period}</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              {t.job2.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}