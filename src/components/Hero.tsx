"use client"

import { motion } from "framer-motion";
import Image from 'next/image'
import { useLanguage } from '../../contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Cursor from "../../public/assets/icon1.png"
import Ligtning from "../../public/assets/icon2.png"
import profilePic from "../../public/assets/profilepic.png"

const content = {
    es: {
      title: 'Yesid Banguera Arboleda',
      subtitle: 'Desarrollador Web Full Stack',
      personalInfo: 'Información Personal',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      saludo:"Hola, soy",
      location: 'Ubicación',
      info:"Ingeniero de sistemas, creativo, dinámico, con alta capacidad para asumir nuevos retos, con conocimientos y habilidades que contribuyen al desarrollo de las metas propuestas por la organización. Facilidad de aprendizaje y dedicación. Asumo con alto grado de responsabilidad y compromiso todas las tareas asignadas, brindo mis actitudes positivas y conocimientos en el trabajo en equipo e individual.",
    },
    en: {
      title: 'Yesid Banguera Arboleda',
      subtitle: 'Full Stack Web Developer',
      personalInfo: 'Personal Information',
      email: 'Email',
      saludo:"Hi, I am",
      phone: 'Phone',
      location: 'Location',
      info:"systems engineer, creative, dynamic, with high capacity to assume new challenges, with knowledge and skills that contribute to development of the goals proposed by the organization. Ease of learning and dedication. I assume with a high degree of responsibility and commitment all assigned tasks, I offer my attitudes positive and knowledge at work as a team and individually.",
    }
  }

const Hero = () => {
    const { language } = useLanguage()
    const t = content[language]

    return (
        <div className="pt-24 relative overflow-clip bg-[linear-gradient(to_bottom,#00FF0000,#2B1942_35%,#8F5C55_60%,#00FF0000_80%)] ">


            <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#00FF0000_80%,#2B1942)]"></div>

                            
            <div className="relative">
                <div>
                    <div className="text-8xl font-bold text-center"> 
                        <h1 className="text-[#98B4CE]">{t.saludo}</h1>
                        <h1 className="text-[#E48A59]">Yesid Banguera</h1>
                    </div>
                </div>            
                
                <motion.div className="absolute left-[280px] top-[170px]" drag>
                    <Image 
                        src={Cursor}
                        height="120"
                        width="120"
                        alt=""
                        draggable="false"/>
                </motion.div>

                <motion.div className="absolute right-[210px] top-[20px]" drag>
                    <Image 
                        src={Ligtning}
                        height="100"
                        width="100"
                        alt=""
                        draggable="false"/>
                </motion.div>

                <motion.div className="text-center text-xl lg:max-w-[1000px] max-w-[500px] mx-auto" >
                <CardHeader>
                    {/* <CardTitle>{t.personalInfo}</CardTitle> */}
                    </CardHeader>
                    <CardContent>
                    <p>{t.info}</p><br />
                    </CardContent>
                </motion.div>

                <Image 
                        className="h-auto w-auto mx-auto"
                        src={profilePic}
                        alt=""
                        draggable="false"/>
            </div>
            
        
        </div>
    )
}

export default Hero;