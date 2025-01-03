import { useState, useEffect } from 'react';

export function PriceDisplay() {
  const [price, setPrice] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetch('/price.txt')
      .then(response => response.text())
      .then(price => {
        setPrice(price.trim());
        setIsVisible(true);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="flex justify-center mb-8">
      <div 
        className={`
          transform transition-all duration-700
          animate-bounce-gentle
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {price}
        </span>
      </div>
    </div>
  );
}