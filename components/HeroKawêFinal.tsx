'use client';

import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function HeroKawêFinal() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden kawê-gradient-bg">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ccedf8]/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff8ba7]/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Conteúdo principal */}
      <div className="relative z-10 max-w-2xl animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#ccedf8] mb-8">
          <span className="text-sm font-medium text-[#2c3e50]">
            🌈 Espaço seguro e inclusivo
          </span>
        </div>

        {/* Logo */}
        <div className="w-52 h-52 rounded-full border-4 border-white shadow-2xl overflow-hidden mx-auto mb-8 bg-white">
          <div className="w-full h-full p-0.5">
            <img
              src="/logo.jpg"
              alt="Kawê Sidarta - Logo"
              className="w-full h-full object-contain scale-110"
            />
          </div>
        </div>

        {/* Nome e título */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="text-[#2c3e50]">Kawê</span>
          <span className="text-[#8bcae8]"> Sidarta</span>
        </h1>

        <h2 className="text-2xl md:text-3xl text-[#2c3e50]/80 mb-8 font-light">
          Massoterapeuta Holístico
        </h2>

        {/* Mensagem principal */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-[#ccedf8]/50 shadow-sm">
          <p className="text-xl text-[#2c3e50] leading-relaxed">
            Ofereço <span className="font-semibold text-[#8bcae8]">terapias personalizadas</span>
            que unem técnicas milenares e cuidado integral, em um ambiente de
            <span className="font-semibold text-[#ff8ba7]"> total acolhimento e respeito</span>.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://wa.me/5561996084063"
            target="_blank"
            rel="noopener noreferrer"
            className="kawê-btn-accent px-8 py-4 text-lg font-bold flex items-center gap-3"
          >
            <span className="text-2xl">💬</span>
            Agendar pelo WhatsApp
          </a>

          <a
            href="#servicos"
            className="kawê-btn px-8 py-4 text-lg font-bold flex items-center gap-3"
          >
            <span className="text-2xl">✨</span>
            Conhecer as Terapias
          </a>
        </div>

        {/* Contato rápido */}
        <div className="mt-12 pt-8 border-t border-[#ccedf8]">
          <p className="text-[#2c3e50]/70 mb-4 text-sm">
            Atendimento domiciliar • Horários flexíveis
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/kawesidartamassoterapeuta"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white text-sm font-medium hover:shadow-md transition-shadow"
            >
              <FaInstagram className="w-4 h-4" />
              @kawesidartamassoterapeuta
            </a>
            <a
              href="https://wa.me/5561996084063"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] text-white text-sm font-medium hover:shadow-md transition-shadow"
            >
              <FaWhatsapp className="w-4 h-4" />
              (61) 99608-4063
            </a>
          </div>
        </div>
      </div>

      {/* Seta indicando scroll */}
      <div className="absolute bottom-8 animate-float">
        <div className="text-[#8bcae8] text-2xl">↓</div>
      </div>
    </section>
  );
}