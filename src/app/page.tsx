'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MotionCard = motion(Card)

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-center mb-12">
        <div className="mb-4 relative w-32 h-32 mx-auto rounded-full overflow-hidden">
          <Image 
            src="/assets/foto.png" 
            alt="Yesid Banguera Arboleda" 
            width={128}
            height={128}
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Yesid Banguera Arboleda</h1>
        <p className="text-xl text-gray-600">Desarrollador Web Full Stack</p>
      </header>

      <MotionCard whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
        <CardHeader>
          <CardTitle>Información Personal</CardTitle>
        </CardHeader>
        <CardContent>
          <p><strong>Email:</strong> yesison714@gmail.com</p>
          <p><strong>Teléfono:</strong> +57 3162115964</p>
          <p><strong>Ubicación:</strong> Cali, colombia</p>
        </CardContent>
      </MotionCard>
    </motion.div>
  )
}