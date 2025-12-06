export default function FooterKawêFinal() {
  return (
    <footer className="py-12 px-6 bg-[#2c3e50] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <div className="w-full h-full p-1.5 bg-white border border-[#ccedf8] rounded-full">
                <img
                  src="/logo.jpg"
                  alt="Logo Kawê"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold">
              <span className="text-[#ccedf8]">Kawê</span>
              <span className="text-white"> Sidarta</span>
            </h2>
          </div>

          {/* Redes sociais */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://instagram.com/kawesidartamassoterapeuta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ff8ba7] to-[#ff6b8b] flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="text-xl">📷</span>
            </a>
            <a
              href="https://wa.me/556196084063"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center hover:scale-110 transition-transform"
            >
              <span className="text-xl">💬</span>
            </a>
          </div>

          {/* Contato */}
          <div className="mb-8">
            <p className="text-[#ccedf8] mb-2">Entre em contato</p>
            <p className="text-xl font-semibold">(61) 9608-4063</p>
            <p className="text-sm text-gray-300 mt-2">Atendimento em todo o Distrito Federal</p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Kawê Sidarta - Massoterapeuta Holístico. Todos os direitos reservados.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Site desenvolvido com ❤️ para a comunidade
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}