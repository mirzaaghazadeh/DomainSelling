import { useState, useEffect } from 'react';
import { DomainHeader } from './components/DomainHeader';
import { EmailReveal } from './components/EmailReveal';
import { PriceDisplay } from './components/PriceDisplay';
import { LanguageSwitch } from './components/LanguageSwitch';
import { translations } from './translations';
import { type Language } from './types';
import { useCountryCode } from './hooks/useCountryCode';
import { animateTitle } from './utils/titleAnimation';

function App() {
  const countryCode = useCountryCode();
  const [lang, setLang] = useState<Language>('en');
  const currentDomain = window.location.hostname;
  const email = "me@navid.tr";
  const t = translations[lang];
  const showLanguageSwitch = countryCode === 'IR';

  useEffect(() => {
    if (countryCode === 'IR') {
      setLang('fa');
    }
  }, [countryCode]);

  useEffect(() => {
    const titleInterval = animateTitle('Domain is for Sale!');
    return () => clearInterval(titleInterval);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'fa' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="max-w-2xl w-full relative">
        <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-700">
          <LanguageSwitch 
            currentLang={lang} 
            onSwitch={toggleLanguage}
            showSwitch={showLanguageSwitch}
          />
          <DomainHeader domain={currentDomain} available={t.available} />
          <PriceDisplay />
          <div className="space-y-6">
            <EmailReveal 
              email={email} 
              revealText={t.reveal}
              copiedText={t.copied}
              copyText={t.copy}
            />
            <div className="text-center text-gray-400 text-sm">
              <p dir={lang === 'fa' ? 'rtl' : 'ltr'}>
                {t.request}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;