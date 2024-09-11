'use client'

import Image from 'next/image'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'
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
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <Image
          src="/assets/foto.png"
          alt={t.name}
          width={150}
          height={150}
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{t.name}</h2>
        <p className="text-gray-600">{t.title}</p>
      </div>
      <div className="mb-6">
        <p className="mb-2 text-gray-800"><strong>{t.email}</strong> </p>
        <p className="mb-2 text-gray-800"><strong>{t.phone}</strong> </p>
        <p className='text-gray-800'><strong>{t.location}</strong> </p>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="https://www.linkedin.com/in/yesid-banguera-arboleda-042280167/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/DevYesidArboleda" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
          <FaGithub size={24} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  )
}

export default Sidebar