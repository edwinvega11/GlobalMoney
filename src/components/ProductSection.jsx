import React from "react";

const ProductSection = () => (
  <section
    id="product"
    className="w-full py-24 px-4 bg-gray-900 flex flex-col md:flex-row items-center justify-center min-h-[60vh]"
  >
    {/* Left: Product Image */}
    <div className="w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0">
      <div className="w-80 h-80 md:w-[28rem] md:h-[28rem] bg-gradient-to-tr from-blue-400 via-blue-600 to-blue-900 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
        {/* Replace with your product image if available */}
        <img src="/stockthumbs.jpg" className="w-full h-full object-cover rounded-3xl" />
      </div>
    </div>
    {/* Right: Product Text */}
    <div className="w-full md:w-1/2 flex flex-col items-start justify-center md:pl-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6">Descubre nuestra Caja de Ahorro</h2>
      <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-xl">
      En Global Money, te ayudamos a ahorrar de forma segura y ordenada.
      Administra tu dinero, gana rendimientos y accede a beneficios exclusivos por ser parte de nuestra caja.
      </p>
      <p className="text-lg sm:text-xl text-gray-200 mb-6 max-w-xl font-bold"> Tu ahorro, bien cuidado.</p>
      
    </div>
  </section>
);

export default ProductSection; 