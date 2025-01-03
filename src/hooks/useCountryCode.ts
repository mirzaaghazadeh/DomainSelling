import { useState, useEffect } from 'react';

export function useCountryCode() {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  useEffect(() => {
    const headers = new Headers();
    const countryCode = headers.get('CF-IPCountry');
    setCountryCode(countryCode);
  }, []);

  return countryCode;
}