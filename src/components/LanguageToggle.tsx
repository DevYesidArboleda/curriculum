'use client'

import { useLanguage } from '../../contexts/LanguageContext'
import { Button } from '@/components/ui/button'
import { Switch } from './ui/switch'
import { Label } from './ui/label'

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="flex mt-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-end justify-end">
      
      <Switch id="airplane-mode" onClick={toggleLanguage}/>
      <Label htmlFor="airplane-mode">{language === 'es' ? 'EN' : 'ES'}</Label>
      {/* <Button onClick={toggleLanguage} variant="outline" size="sm">
        {language === 'es' ? 'EN' : 'ES'}
      </Button> */}
    </div>
  )
}

export default LanguageToggle