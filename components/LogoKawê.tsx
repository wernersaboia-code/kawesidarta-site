'use client'; // ⬅️ ISSO AQUI RESOLVE!

import { useState } from 'react';

export default function LogoKawê({ className = '' }: { className?: string }) {
  const [erro, setErro] = useState(false);

  return (
    <div className={`w-40 h-40 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto mb-8 ring-4 ring-[#ccedf8]/30 ${className}`}>
      {erro ? (
        // Fallback se a imagem não carregar
        <div className="w-full h-full bg-gradient-to-br from-[#ccedf8] to-[#8bcae8] flex items-center justify-center">
          <span className="text-6xl font-bold text-white">K</span>
        </div>
      ) : (
        <img
          src="/logo-kawê.jpg" // ou .png, .svg
          alt="Kawê Sidarta - Logo"
          className="w-full h-full object-cover"
          onError={() => setErro(true)}
        />
      )}
    </div>
  );
}