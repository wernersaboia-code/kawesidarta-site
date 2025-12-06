import Link from 'next/link';
import { CheckCircle, AlertCircle, Clock, Edit, ExternalLink } from 'lucide-react';

export default function StatusPage() {
  const projectStatus = {
    version: '1.0.0',
    lastUpdated: 'Dezembro 2024',
    deployUrl: 'https://kawesidarta.vercel.app',
    githubUrl: 'https://github.com/seu-usuario/kawesidarta',
  };

  const completedFeatures = [
    '✅ Site responsivo (mobile/desktop)',
    '✅ Hero com logo personalizada',
    '✅ 12 terapias com descrições',
    '✅ Sistema de agendamento via WhatsApp',
    '✅ Cores da identidade visual (#ccedf8)',
    '✅ Footer com redes sociais',
    '✅ Logos do Instagram/WhatsApp',
    '✅ Deploy no Vercel',
    '✅ SEO básico configurado',
  ];

  const futureIdeas = [
    '🎯 Sistema de agendamento online',
    '🎯 Blog com dicas de bem-estar',
    '🎯 Galeria de fotos do espaço',
    '🎯 Sistema de avaliações',
    '🎯 Calculadora de pacotes',
    '🎯 Integração com Google Calendar',
    '🎯 Área do cliente',
    '🎯 Presenteie alguém (gift cards)',
  ];

  const quickChanges = [
    { title: 'Mudar telefone', file: 'components/HeroKawêFinal.tsx', line: 95 },
    { title: 'Mudar Instagram', file: 'components/HeroKawêFinal.tsx', line: 88 },
    { title: 'Adicionar nova terapia', file: 'components/ServicosKawêFinal.tsx', line: 13 },
    { title: 'Mudar cores', file: 'app/globals.css', line: 'Todo arquivo' },
    { title: 'Atualizar logo', file: 'public/logo.jpg', line: 'Substituir arquivo' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🚀 Status do Projeto: <span className="text-[#8bcae8]">Kawê Sidarta</span>
          </h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">Site Online</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-medium">Versão 1.0</span>
            </div>
            <a
              href={projectStatus.deployUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full hover:bg-purple-200 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="font-medium">Ver Site Online</span>
            </a>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Coluna 1: O que foi feito */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Implementado (100%)
              </h2>
              <ul className="space-y-3">
                {completedFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-green-500">✓</div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideias Futuras */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <AlertCircle className="text-blue-500" />
                Ideias para Futuras Versões
              </h2>
              <ul className="space-y-3">
                {futureIdeas.map((idea, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-blue-500">🎯</div>
                    <span className="text-gray-700">{idea}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Coluna 2: Informações e Ajustes Rápidos */}
          <div>
            {/* Informações do Projeto */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                📋 Informações do Projeto
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Versão</h3>
                  <p className="text-gray-900 font-mono">{projectStatus.version}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Última Atualização</h3>
                  <p className="text-gray-900">{projectStatus.lastUpdated}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">URL de Produção</h3>
                  <a
                    href={projectStatus.deployUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8bcae8] hover:underline break-all"
                  >
                    {projectStatus.deployUrl}
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-700 mb-1">Código Fonte</h3>
                  <a
                    href={projectStatus.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#8bcae8] hover:underline break-all"
                  >
                    https://github.com/wernersaboia-code/kawesidarta-site.git
                  </a>
                </div>
              </div>
            </div>

            {/* Ajustes Rápidos */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Edit className="text-[#ff8ba7]" />
                Ajustes Rápidos
              </h2>
              <div className="space-y-4">
                {quickChanges.map((change, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-1">{change.title}</h3>
                    <div className="text-sm text-gray-600 font-mono bg-gray-100 px-3 py-1 rounded inline-block">
                      {change.file}:{change.line}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Paleta de Cores */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                🎨 Paleta de Cores
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ccedf8] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Azul Principal</p>
                    <p className="text-sm text-gray-600 font-mono">#ccedf8</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#8bcae8] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Azul Escuro</p>
                    <p className="text-sm text-gray-600 font-mono">#8bcae8</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ff8ba7] border border-gray-200"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Rosa Destaque</p>
                    <p className="text-sm text-gray-600 font-mono">#ff8ba7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer do Status */}
        <footer className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
          <p>
            Esta página é apenas para gerenciamento do projeto. Não é visível publicamente.
          </p>
          <p className="mt-2">
            ❤️ Desenvolvido com Next.js, Tailwind CSS e muita paciência!
          </p>
        </footer>
      </div>
    </div>
  );
}