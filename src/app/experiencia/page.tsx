'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from '../../../contexts/LanguageContext'
import { FaReact, FaNodeJs, FaAws, FaWordpress, FaLinux, FaGitAlt, FaAngular,FaCss3Alt, FaPhp    } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiVtex, SiMicrosoftazure, SiNextdotjs, SiOracle, SiTailwindcss  } from 'react-icons/si'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Experiencia Laboral',
    professionalCareer: 'Trayectoria Profesional',
    jobs: [
      {
        title: 'Desarrollador Full Stack Senior',
        company: 'Dropi',
        period: '2023-Presente',
        responsibilities: [
          'Desarrollo de aplicaciones web utilizando React (Next.js) y Node.js',
          'Implementación de arquitecturas serverless con AWS'
        ],
        technologies: [FaReact, SiNextdotjs, FaNodeJs, FaAws, SiTypescript, FaGitAlt, FaCss3Alt, SiTailwindcss ]
      },
      {
        title: 'Desarrollador Vtex IO',
        company: 'Balloom Group',
        period: '2022-2023',
        responsibilities: [
          'Creación de componentes custom con React',
          'Desarrollo front de Vtex IO',
          'Maquetación'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, SiTailwindcss, FaCss3Alt  ]
      },
      {
        title: 'Desarrollador Vtex IO',
        company: 'Summa Solution',
        period: '2021-2022',
        responsibilities: [
          'Creación de componentes custom con React',
          'Desarrollo front de Vtex IO',
          'Maquetación'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, FaCss3Alt]
      },
      {
        title: 'Desarrollador Vtex IO',
        company: 'JUMP DIGITAL',
        period: '2021-2021',
        responsibilities: [
          'Creación de componentes custom con React',
          'Desarrollo front de Vtex IO',
          'Maquetación'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, FaCss3Alt]
      },
      {
        title: 'Desarrollador de software',
        company: 'DevbotStudio S.A.S',
        period: '2020-2021',
        responsibilities: [
          'Desarrollo de aplicaciones web con JavaScript',
          'Implementación de soluciones de software'
        ],
        technologies: [SiJavascript, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3Alt, FaAngular  ]
      },
      {
        title: 'Consultor de desarrollo',
        company: 'Intelecto S.A.S',
        period: '2020-2021',
        responsibilities: [
          'Desarrollo de aplicativos web con JavaScript',
          'Manejo de servidores en la nube (Linux)'
        ],
        technologies: [SiJavascript, FaLinux, SiMicrosoftazure, FaGitAlt, FaCss3Alt, FaPhp  ]
      },
      {
        title: 'Consultor Sistemas',
        company: 'MasterTics S.A.S',
        period: '2018-2020',
        responsibilities: [
          'Desarrollo de aplicativos web con WordPress',
          'Manejo de servidores en la nube y físicos "Linux"',
          'Mantenimiento e instalación de bases de datos'
        ],
        technologies: [FaWordpress, FaLinux, SiJavascript, FaGitAlt, SiOracle, FaCss3Alt ]
      }
    ]
  },
  en: {
    title: 'Work Experience',
    professionalCareer: 'Professional Career',
    jobs: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Dropi',
        period: '2023-Present',
        responsibilities: [
          'Development of web applications using React (Next.js) and Node.js',
          'Implementation of serverless architectures with AWS'
        ],
        technologies: [FaReact, SiNextdotjs, FaNodeJs, FaAws, SiTypescript, FaGitAlt, FaCss3Alt, SiTailwindcss  ]
      },
      {
        title: 'Vtex IO Developer',
        company: 'Balloom Group',
        period: '2022-2023',
        responsibilities: [
          'Creation of custom components with React',
          'Vtex IO front-end development',
          'Layout design'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, SiTailwindcss, FaCss3Alt  ]
      },
      {
        title: 'Vtex IO Developer',
        company: 'Summa Solution',
        period: '2021-2022',
        responsibilities: [
          'Creation of custom components with React',
          'Vtex IO front-end development',
          'Layout design'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, FaCss3Alt ]
      },
      {
        title: 'Vtex IO Developer',
        company: 'JUMP DIGITAL',
        period: '2021-2021',
        responsibilities: [
          'Creation of custom components with React',
          'Vtex IO front-end development',
          'Layout design'
        ],
        technologies: [FaReact, SiVtex, SiJavascript, FaGitAlt, FaCss3Alt ]
      },
      {
        title: 'Software Developer',
        company: 'DevbotStudio S.A.S',
        period: '2020-2021',
        responsibilities: [
          'Web application development with JavaScript',
          'Implementation of software solutions'
        ],
        technologies: [SiJavascript, FaReact, FaNodeJs, FaGitAlt, FaPhp, FaCss3Alt, FaAngular  ]
      },
      {
        title: 'Development Consultant',
        company: 'Intelecto S.A.S',
        period: '2020-2021',
        responsibilities: [
          'Web application development with JavaScript',
          'Cloud server management (Linux)'
        ],
        technologies: [SiJavascript, FaLinux, SiMicrosoftazure, FaGitAlt, FaCss3Alt, FaPhp  ]
      },
      {
        title: 'Systems Consultant',
        company: 'MasterTics S.A.S',
        period: '2018-2020',
        responsibilities: [
          'Web application development with WordPress',
          'Cloud and physical server management "Linux"',
          'Database maintenance and installation'
        ],
        technologies: [FaWordpress, FaLinux, SiJavascript, FaGitAlt, SiOracle, FaCss3Alt ]
      }
    ]
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
        <CardContent className="space-y-8">
          {t.jobs.map((job, index) => (
            <motion.div key={index} whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
              <h3 className="font-semibold text-orange-500 text-xl">{job.title}</h3>
              <p className="text-sm text-white mb-2">{job.company}, {job.period}</p>
              <ul className="list-disc list-inside mt-2 text-sm text-white mb-4">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((Icon, techIndex) => (
                  <Icon key={techIndex} className="text-2xl text-white hover:text-orange-500 transition-colors" />
                ))}
              </div>
            </motion.div>
          ))}
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}