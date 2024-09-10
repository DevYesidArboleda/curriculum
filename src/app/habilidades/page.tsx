'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaAws, FaDocker } from 'react-icons/fa'
import { SiJavascript, SiTypescript } from 'react-icons/si'
import { useLanguage } from '../../../contexts/LanguageContext'

const MotionCard = motion(Card)

const content = {
  es: {
    title: 'Habilidades',
    technicalSkills: 'Competencias Técnicas',
  },
  en: {
    title: 'Skills',
    technicalSkills: 'Technical Skills',
  }
}

const skills = [
  { name: 'React', icon: FaReact, color: 'text-blue-500' },
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'HTML5', icon: FaHtml5, color: 'text-red-500' },
  { name: 'CSS3', icon: FaCss3, color: 'text-blue-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-600' },
  { name: 'AWS', icon: FaAws, color: 'text-yellow-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
]

export default function Habilidades() {
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
          <CardTitle>{t.technicalSkills}</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            initial="hidden"
            animate="show"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                className="flex items-center p-2 bg-white rounded-lg shadow-sm"
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  show: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <skill.icon className={`text-2xl mr-2 ${skill.color}`} />
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}