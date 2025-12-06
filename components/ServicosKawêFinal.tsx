const servicos = [
  { icone: '🌋', nome: 'Pedras Vulcânicas', desc: 'Pedras basálticas aquecidas que liberam calor terapêutico e energético' },
  { icone: '🍶', nome: 'Ventosaterapia', desc: 'Técnica milenar para liberação de tensões' },
  { icone: '💆', nome: 'Massagem Relaxante', desc: 'Alívio do estresse e renovação energética' },
  { icone: '💫', nome: 'Dreno Modeladora', desc: 'Ativação da circulação e redução de inchaço' },
  { icone: '✨', nome: 'Massagem Terapêutica', desc: 'Foco em dores específicas e correção postural' },
  { icone: '🕯️', nome: 'Velas Quentes', desc: 'Hidratação profunda com cera de abelha' },
  { icone: '🦶', nome: 'Massagem nos Pés', desc: 'Reflexologia podal para equilíbrio total' },
  { icone: '🦵', nome: 'Massagem nas Pernas', desc: 'Alívio para pernas cansadas e pesadas' },
  // NOVAS MASSAGENS:
  { icone: '🪷', nome: 'Massagem Tântrica', desc: 'Técnica que trabalha energia e conexão corporal' },
  { icone: '👐', nome: 'Massagem 4 Mãos', desc: 'Dupla de terapeutas para relaxamento intenso' },
  { icone: '🎨', nome: 'Mix de Massagens', desc: 'Combinação personalizada de várias técnicas' },
];

export default function ServicosKawêFinal() {
  return (
    <section id="servicos" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ccedf8] text-[#2c3e50] font-medium mb-6">
            <span className="text-[#ff8ba7]">✨</span>
            Terapias Disponíveis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3e50]">
            Conheça nossas{' '}
            <span className="text-[#8bcae8]">12 especialidades</span>
          </h2>
          <p className="text-xl text-[#2c3e50]/70 max-w-3xl mx-auto">
            Escolha a terapia ideal para suas necessidades. Valores sob consulta.
          </p>
        </div>

        {/* Grid de Serviços - AGORA 12 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicos.map((servico, index) => (
            <div
              key={index}
              className="kawê-card hover:translate-y-[-4px] group cursor-pointer"
            >
              <div className="text-5xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                {servico.icone}
              </div>

              <h3 className="text-xl font-bold text-[#2c3e50] mb-3 text-center">
                {servico.nome}
              </h3>

              <p className="text-[#2c3e50]/70 text-center text-sm leading-relaxed">
                {servico.desc}
              </p>

              <div className="mt-6 pt-4 border-t border-[#ccedf8]/30 text-center">
                <span className="text-sm text-[#8bcae8] font-medium">
                  Solicitar valores
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
    </section>
  );
}