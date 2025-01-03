import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

interface EmailRevealProps {
  email: string;
  revealText: string;
  copiedText: string;
}

export function EmailReveal({ email, revealText, copiedText }: EmailRevealProps) {
  const [isEmailRevealed, setIsEmailRevealed] = useState(false);
  const [showCopiedIndicator, setShowCopiedIndicator] = useState(false);

  const handleClick = () => {
    if (!isEmailRevealed) {
      setIsEmailRevealed(true);
    }
    
    navigator.clipboard.writeText(email);
    setShowCopiedIndicator(true);
    setTimeout(() => setShowCopiedIndicator(false), 2000);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleClick}
        className="relative group flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded-lg font-medium"
      >
        {showCopiedIndicator ? (
          <>
            <Check className="w-5 h-5" />
            <span>{copiedText}</span>
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            <span>{isEmailRevealed ? email : revealText}</span>
          </>
        )}
      </button>
    </div>
  );
}