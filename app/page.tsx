import HeroKawêFinal from '@/components/HeroKawêFinal';
import ServicosKawêFinal from '@/components/ServicosKawêFinal';
import AgendamentoKawêFinal from '@/components/AgendamentoKawêFinal';
import FooterKawêFinal from '@/components/FooterKawêFinal';

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroKawêFinal />
        <ServicosKawêFinal />
        <AgendamentoKawêFinal />
      </main>
      <FooterKawêFinal />
    </div>
  );
}