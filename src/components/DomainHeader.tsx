import { Globe } from 'lucide-react';

interface DomainHeaderProps {
  domain: string;
  available: string;
}

export function DomainHeader({ domain, available }: DomainHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-center mb-6">
        <Globe className="w-12 h-12 text-blue-400" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade">
        {domain}
      </h1>
      
      <p className="text-xl text-center text-gray-300 mb-8">
        {available}
      </p>
    </>
  );
}