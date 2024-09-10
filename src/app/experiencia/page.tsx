'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MotionCard = motion(Card)

export default function Experiencia() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Experiencia Laboral</h1>
      <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>Trayectoria Profesional</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Desarrollador Full Stack Senior</h3>
            <p className="text-sm text-gray-600">TechCorp S.L., 2020-Presente</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Desarrollo de aplicaciones web utilizando React y Node.js</li>
              <li>Implementación de arquitecturas serverless con AWS</li>
              <li>Liderazgo de equipo de desarrollo de 5 personas</li>
            </ul>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Desarrollador Front-end</h3>
            <p className="text-sm text-gray-600">WebSolutions Inc., 2019-2020</p>
            <ul className="list-disc list-inside mt-2 text-sm">
              <li>Creación de interfaces de usuario con React y Vue.js</li>
              <li>Optimización de rendimiento de aplicaciones web</li>
            </ul>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}