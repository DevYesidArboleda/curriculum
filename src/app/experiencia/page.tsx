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
      company: 'Dropi',
      period: '2023-Presente',
      responsibilities: [
        'Desarrollo de aplicaciones web utilizando React (Next js) y Node.js',
        'Implementación de arquitecturas serverless con AWS'
      ]
    },
    job2: {
      title: 'Desarrollador Vtex IO',
      company: 'Balloom Group',
      period: '2022-2023',
      responsibilities: [
        'Creación de componentes custom con react',
        'desarrollo front de Vtex IO',
        "Maquetación"
      ]
    }
  },
  en: {
    title: 'Work Experience',
    professionalCareer: 'Professional Career',
    job1: {
      title: 'Senior Full Stack Developer',
      company: 'Dropi',
      period: '20233-Present',
      responsibilities: [
        'Development of web applications using React and Node.js',
        'Implementation of serverless architectures with AWS'
      ]
    },
    job2: {
      title: 'Front-end Developer Vtex IO',
      company: 'Balloom Group',
      period: '2022-2023',
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
      <h1 className="text-3xl font-bold text-white mb-6">{t.title}</h1>
      <MotionCard className='border-0 bg-transparent relative overflow-clip bg-[linear-gradient(to_bottom,#00FF0000,#2B1942_35%,#8F5C55_60%,#00FF0000_80%)]' whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>{t.professionalCareer}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">{t.job1.title}</h3>
            <p className="text-sm text-white">{t.job1.company}, {t.job1.period}</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              {t.job1.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">{t.job2.title}</h3>
            <p className="text-sm text-white">{t.job2.company}, {t.job2.period}</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              {t.job2.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Desarrollador Vtex IO</h3>
            <p className="text-sm text-white">Summa Solution , 2021-2022</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              {t.job2.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500">Desarrollador Vtex IO</h3>
            <p className="text-sm text-white">JUMP DIGITAL, 2021-2021</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              {t.job2.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500"> Desarrollador de software</h3>
            <p className="text-sm text-white">DevbotStudio S.A.S , 2020-2021</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              {t.job2.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500"> Consultor de desarrollo</h3>
            <p className="text-sm text-white">Intelecto S.A.S  , 2020-2021</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              <li >Desarrollo de aplicativos web con javascript </li>
              <li >Manejo de servidores en la nube (Linux) </li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold text-orange-500"> Consultor Sistemas</h3>
            <p className="text-sm text-white">MasterTics S.A.S  , 2018-2020</p>
            <ul className="list-disc list-inside mt-2 text-sm text-white">
              <li >Desarrollo de aplicativos web con wordpress </li>
              <li >Manejo de servidores en la nube y fisicos "Linux" </li>
              <li >Mantemiento y instalación de bases de datos </li>
            </ul>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}