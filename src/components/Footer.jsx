import React from "react";

const Footer = () => (
  <footer className="bg-gray-800 py-12 px-6 mt-auto">
    <div className="max-w-7xl mx-auto">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Costs and Commissions */}
        <div className="text-center md:text-left">
          <a 
            href="/costs-and-commissions" 
            className="text-blue-400 font-semibold text-lg mb-4 hover:underline transition duration-300"
            tabIndex={0}
            aria-label="Ver costos y comisiones"
          >
            Costos y comisiones
          </a>
        </div>

        {/* Buro Logo */}
        <div className="text-center md:text-left">
            <a href="https://www.buro.gob.mx/general_gob.php?id_sector=69&id_periodo=41" target="_blank" rel="noopener noreferrer">
              <img src="/buro-1.jpeg" alt="Buró de Entidades Financieras" className="h-16 w-auto" />
            </a>
        </div>

        {/* CONDUSEF Logo */}
        <div className="text-center md:text-left">
          <div className="inline-block">
            <a href="https://www.condusef.gob.mx/" target="_blank" rel="noopener noreferrer">
              <img src="/condusef-1.png" alt="CONDUSEF" className="h-16 w-auto" />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left text-gray-300 text-sm">
          <p>Teléfono: 800 145 6225 / 1 GLOBAL</p>
          <p>L - V: 9:00 a 18:00 horas</p>
          <p>
            Correo electrónico:{" "}
            <a 
              href="mailto:une@globalmoney.com" 
              className="text-blue-400 hover:underline"
              tabIndex={0}
              aria-label="Email"
            >
              une@globalmoney.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Section - Disclaimer */}
      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-300 text-sm text-center leading-relaxed">
          El Buró de Entidades Financieras contiene información de Global Money sobre nuestro desempeño frente a los Usuarios, por la prestación de productos y servicios. Te invitamos a consultarlo en la página{" "}
          <a 
            href="https://buro.gob.mx/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
            tabIndex={0}
            aria-label="Buró de Entidades Financieras"
          >
            https://buro.gob.mx/
          </a>
        </p>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-xs mt-6">
        &copy; {new Date().getFullYear()} Copyright
      </div>
    </div>
  </footer>
);

export default Footer; 