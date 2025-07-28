import React from "react";

const benefits = [
  {
    title: "Recursos Administrados por Expertos",
    description: "Tu dinero manejado por profesionales con experiencia.",
  },
  {
    title: "Acceso a Anticipos de Sueldo",
    description: "Solicita parte de tu sueldo antes de la quincena, fácil y rápido.",
  },
  {
    title: "Crédito en condiciones preferenciales",
    description: "Obtén préstamos con tasas bajas y sin costos ocultos.",
  },
  {
    title: "Rendimientos Atractivos",
    description: "Haz crecer tu ahorro con tasas competitivas",
  },
  {
    title: "Acesso y Administración desde Aplicación",
    description: "Consulta y gestiona tu dinero desde cualquier lugar, cuando quieras.",
  },
];

const BenefitIcon = ({ number }) => (
  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white font-bold text-2xl shadow-md">
    {number === 1 ? (
      <span className="material-icons text-3xl">account_balance</span>
    ) : number === 2 ? (
      <span className="material-icons text-3xl">payments</span>
    ) : number === 3 ? (
      <span className="material-icons text-3xl">attach_money</span>
    ) : number === 4 ? (
      <span className="material-icons text-3xl">trending_up</span>
    ) : number === 5 ? (
      <span className="material-icons text-3xl">smartphone</span>
    ) : (
      number
    )}
  </span>
);

const BenefitsSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-black">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">Beneficios</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
      {benefits.map((benefit, idx) => (
        <div key={benefit.title} className="flex flex-col items-center text-center">
          <BenefitIcon number={idx + 1} />
          <h4 className="mt-6 sm:mt-8 text-lg sm:text-xl lg:text-2xl font-semibold h-16 sm:h-20 lg:h-24 flex items-center justify-center">{benefit.title}</h4>
          <p className="mt-3 sm:mt-4 text-gray-400 max-w-[200px] sm:max-w-[250px] text-sm sm:text-base">{benefit.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default BenefitsSection; 