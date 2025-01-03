import { Globe } from 'lucide-react';
import { type Language } from '../types';

interface LanguageSwitchProps {
  currentLang: Language;
  onSwitch: () => void;
  showSwitch: boolean;
}

export function LanguageSwitch({ currentLang, onSwitch, showSwitch }: LanguageSwitchProps) {
  if (!showSwitch) return null;

  return (
    <button
      onClick={onSwitch}
      className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 rounded-full 
                 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
                 hover:from-blue-500/30 hover:to-purple-500/30
                 border border-gray-600 backdrop-blur-sm
                 transition-all duration-300 ease-in-out
                 transform hover:scale-105"
      aria-label="Switch Language"
    >
      <Globe className="w-4 h-4" />
      <span className="text-sm font-medium">
        {currentLang === 'en' ? 'فارسی' : 'English'}
      </span>
    </button>
  );
}