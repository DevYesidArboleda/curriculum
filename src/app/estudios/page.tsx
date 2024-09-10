'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MotionCard = motion(Card)

export default function Estudios() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Estudios</h1>
      <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>Formación Académica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Grado en Ingeniería Informática</h3>
            <p className="text-sm text-gray-600">Universidad Politécnica de Madrid, 2015-2019</p>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
            <h3 className="font-semibold">Máster en Desarrollo Web</h3>
            <p className="text-sm text-gray-600">Universidad Complutense de Madrid, 2019-2020</p>
          </motion.div>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}