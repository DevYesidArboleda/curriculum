'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '../../contexts/LanguageContext'

const Navigation = () => {
  const pathname = usePathname()
  const { language } = useLanguage()

  const navItems = [
    { name: language === 'es' ? 'Información Personal' : 'Personal Information', path: '/' },
    { name: language === 'es' ? 'Estudios' : 'Education', path: '/estudios' },
    { name: language === 'es' ? 'Experiencia' : 'Experience', path: '/experiencia' },
    { name: language === 'es' ? 'Habilidades' : 'Skills', path: '/habilidades' },
  ]

  return (
    <nav className="bg-transparent shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  pathname === item.path
                    ? 'border-indigo-500 text-orange-500'
                    : 'border-transparent text-white hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation