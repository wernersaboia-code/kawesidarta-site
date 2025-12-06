export default function AgendamentoKawêFinal() {
  const mensagemPadrao = "Olá Kawê! Gostaria de agendar uma sessão de massoterapia. Pode me informar sobre horários disponíveis?";

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#ccedf8]/20">
      <div className="max-w-4xl mx-auto">
        <div className="kawê-card bg-gradient-to-br from-white to-[#ccedf8]/30 border-[#8bcae8]/50">
          <div className="text-center">
            {/* Ícone */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#ccedf8] to-[#8bcae8] flex items-center justify-center mx-auto mb-8 shadow-lg">
              <span className="text-4xl">📅</span>
            </div>

            {/* Título */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3e50]">
              Agende sua sessão em{' '}
              <span className="text-[#ff8ba7]">1 minuto</span>
            </h2>

            {/* Passos */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ccedf8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">1. Clique no botão</h3>
                <p className="text-[#2c3e50]/70">Vai abrir o WhatsApp</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ff8ba7] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">2. Me conte sua necessidade</h3>
                <p className="text-[#2c3e50]/70">Já tem uma mensagem pronta</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#8bcae8] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-bold text-[#2c3e50] mb-2">3. Combinamos tudo</h3>
                <p className="text-[#2c3e50]/70">Horário, local e terapia ideal</p>
              </div>
            </div>

            {/* Botão PRINCIPAL */}
            <a
              href={`https://wa.me/556196084063?text=${encodeURIComponent(mensagemPadrao)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 px-10 py-6 rounded-full bg-gradient-to-r from-[#ff8ba7] to-[#ff6b8b] text-white font-bold text-2xl shadow-2xl hover:shadow-3xl transition-all hover:scale-105 mb-8 w-full max-w-md mx-auto"
            >
              <span className="text-3xl">💬</span>
              AGENDAR AGORA
              <span className="text-3xl">✨</span>
            </a>

            {/* Informações */}
            <div className="space-y-4 text-[#2c3e50]/70">
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#8bcae8]">✓</span>
                Resposta em até 30 minutos
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#8bcae8]">✓</span>
                Atendimento domiciliar - vou até você
              </p>
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#8bcae8]">✓</span>
                Aceito cartão de crédito/débito
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}