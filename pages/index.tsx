import { useState } from 'react';
import { Layout } from '../components/Layout';
import { FormModal } from '../components/FormModal';
import { Benefits } from '../components/Benefits';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const handleContratarClick = (planName) => {
    // Abre o modal
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <Layout>
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary">ScalaUai</h1>
          <p className="text-lg mt-2 max-w-3xl mx-auto">Transforme seu investimento em marketing digital em resultados reais e mensuráveis para empresas que faturam de R$ 20 mil até R$ 5 milhões</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Starter</h2>
            <p className="mb-2 text-primary">12x de R$197</p>
            <p className="text-sm mb-4">Aumente suas vendas com campanhas direcionadas e resultados em 30 dias</p>
            <button 
              onClick={() => handleContratarClick('Starter')}
              className="bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Garantir Resultados
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
              Mais Popular
            </div>
            <h2 className="text-xl font-bold mb-2">Aceleração</h2>
            <p className="mb-2 text-primary">12x de R$297</p>
            <p className="text-sm mb-4">Dobre seu ROI com estratégias avançadas e landing pages de alta conversão</p>
            <button 
              onClick={() => handleContratarClick('Aceleração')}
              className="bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Acelerar Crescimento
            </button>
          </div>

          <div className="border rounded-lg p-6 shadow hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold mb-2">Crescimento Exponencial</h2>
            <p className="mb-2 text-primary">12x de R$397</p>
            <p className="text-sm mb-4">Multiplique seus resultados com estratégias omnichannel e otimização contínua</p>
            <button 
              onClick={() => handleContratarClick('Crescimento Exponencial')}
              className="bg-primary text-white px-4 py-2 rounded inline-block hover:bg-opacity-90 transition"
            >
              Escalar Negócio
            </button>
          </div>
        </section>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Economize até 75% comparado a agências tradicionais com resultados superiores</p>
        </div>
      </section>
      
      <Benefits />
      
      <Testimonials />
      
      <FAQ />
      
      <FormModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        planName={selectedPlan} 
      />
    </Layout>
  );
}
