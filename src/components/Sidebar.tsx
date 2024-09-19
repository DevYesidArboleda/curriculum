'use client'

import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '../../contexts/LanguageContext'

const Sidebar = () => {
  const { language } = useLanguage()

  const content = {
    es: {
      name: 'Yesid Banguera',
      title: 'Desarrollador Web Full Stack',
      email: 'yesison714@gmail.com',
      phone: '+57 3162115964',
      location: 'Cali - Colombia',
    },
    en: {
      name: 'Yesid Banguera',
      title: 'Full Stack Web Developer',
      email: 'yesison714@gmail.com',
      phone: '+57 3162115964',
      location: 'Cali - Colombia',
    }
  }

  const t = content[language]

  return (
    <div className="bg-transparent p-8 rounded-xl shadow-2xl text-white">
      <div className="text-center mb-8">
        <div className="relative w-40 h-40 mx-auto mb-6">
          <Image
            src="/assets/foto.png"
            alt={t.name}
            layout="fill"
            objectFit="cover"
            className="rounded-full border-4 border-sapote-500"
          />
        </div>
        <h2 className="text-3xl font-bold text-sapote-300 mb-2">{t.name}</h2>
        <p className="text-xl text-gray-300">{t.title}</p>
      </div>
      <div className="space-y-4 mb-8">
        <div className="flex items-center text-gray-300">
          <FaEnvelope className="mr-3 text-sapote-400" />
          <span>{t.email}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <FaPhone className="mr-3 text-sapote-400" />
          <span>{t.phone}</span>
        </div>
        <div className="flex items-center text-gray-300">
          <FaMapMarkerAlt className="mr-3 text-sapote-400" />
          <span>{t.location}</span>
        </div>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/yesid-banguera-arboleda-042280167/" target="_blank" rel="noopener noreferrer" className="text-sapote-300 hover:text-sapote-100 transition-colors duration-300">
          <FaLinkedin size={28} />
        </a>
        <a href="https://github.com/DevYesidArboleda" target="_blank" rel="noopener noreferrer" className="text-sapote-300 hover:text-sapote-100 transition-colors duration-300">
          <FaGithub size={28} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sapote-300 hover:text-sapote-100 transition-colors duration-300">
          <FaTwitter size={28} />
        </a>
      </div>
    </div>
  )
}

export default Sidebar