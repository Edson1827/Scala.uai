export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'João Silva',
      company: 'Tech Solutions',
      text: 'O ScalaUai transformou nossa estratégia de marketing digital. Em apenas 3 meses, aumentamos nossas conversões em 45%.',
      role: 'CEO'
    },
    {
      id: 2,
      name: 'Maria Oliveira',
      company: 'Boutique Elegance',
      text: 'Excelente custo-benefício! O plano Lead Pro nos ajudou a captar mais de 200 leads qualificados no primeiro mês.',
      role: 'Diretora de Marketing'
    },
    {
      id: 3,
      name: 'Carlos Santos',
      company: 'Consultoria Financeira',
      text: 'A equipe do ScalaUai é extremamente profissional e atenciosa. Os relatórios mensais são claros e nos ajudam a tomar decisões estratégicas.',
      role: 'Gerente Comercial'
    }
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">O que nossos clientes dizem</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
