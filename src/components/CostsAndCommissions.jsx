import React from "react";

const CostsAndCommissions = () => {
  const handleBackHome = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header with Logo and Back Button */}
      <div className="bg-gray-900 border-b border-gray-700 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <img src="/GM-Logo-1.png" alt="Global Money Logo" className="h-12 w-auto" />
          <button
            onClick={handleBackHome}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 shadow-lg"
            tabIndex={0}
            aria-label="Volver al inicio"
          >
            <span className="material-icons text-lg">home</span>
            Volver al Inicio
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <div className="space-y-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-white text-center lg:text-left">
              CAT (Costo Anual Total) |
            </h1>

            {/* Introductory Paragraph */}
            <p className="text-gray-200 leading-relaxed">
              CAT promedio 115.00% sin IVA, tasa de interés fija anual 60.00%, comisión por apertura hasta 5% del monto del crédito sin IVA. La información anterior es únicamente con fines informativos y de comparación. Para mayor información sobre otras comisiones consulta{" "}
              <a href="https://www.globalmoney.com" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                www.globalmoney.com
              </a>{" "}
              o en oficinas de Global Money.
            </p>

            {/* Key Financial Details */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Información Financiera</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>Fecha de Cálculo:</strong> 10 de octubre de 2024.</li>
                <li>• <strong>Fecha de Vigencia:</strong> 10 de octubre de 2024 a 10 de abril de 2025.</li>
                <li>• <strong>Tasa de Interés Ordinario Anual Promedio:</strong> 60.00% fija, sin IVA.</li>
              </ul>
            </div>

            {/* Credit Amount */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Monto del Crédito:</h2>
              <p className="text-gray-200">
                Hasta $2,000 pesos (moneda nacional), siempre que no exceda el 30% del ingreso fijo neto del cliente.
              </p>
            </div>

            {/* Restrictions */}
            <div className="bg-yellow-900 border-l-4 border-yellow-500 p-4">
              <p className="text-yellow-100">
                <strong>Restricciones aplican.</strong> Consulta con un promotor al 81 8363 3082 y 800 6363 747.
              </p>
            </div>

            {/* Credit Term */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Plazo del Crédito:</h2>
              <p className="text-gray-200">
                De 3 a 120 quincenas, o períodos equivalentes en semanas, quincenas o meses, según la frecuencia con que el cliente reciba su salario, pensión o ingreso por jubilación.
              </p>
            </div>

            {/* Collection Frequency */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Frecuencia de cobro:</h2>
              <p className="text-gray-200">
                La frecuencia de cobro se determina por la frecuencia con que el cliente reciba su ingreso (salario, pensión o jubilación).
              </p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Medios de pago:</h2>
              <ul className="space-y-2 text-gray-200">
                <li>• <strong>Domiciliación:</strong> Los pagos se realizarán periódicamente a través de una cuenta bancaria hasta liquidar el crédito.</li>
                <li>• <strong>Con cheque:</strong>  Los pagos podrán efectuarse mediante cheque expedido a nombre de Global Money, el cual se recibirá salvo buen cobro, para acreditarse al día en que se reciba, cuando el pago se realice en la institución de crédito que lleve la cuenta de la emisora, si el cheque es cargo de la misma institución de crédito; o, tres días hábiles a partir del segundo día hábil siguiente si el pago se realiza después de las 16:00 horas, si el cheque es a cargo de otra institución de crédito.</li>
              </ul>
            </div>

            {/* Credit Disposition Commission */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-white">Comisiones Por Disposición del Crédito</h2>
              <p className="text-gray-200 leading-relaxed">
                La cantidad de $40.00 por disposición del crédito. Excepto en los créditos que deriven de Convenios en los que las Dependencias y Operadora Némesis hayan negociado y pactado una comisión distinta, en cuyo caso, el importe de la comisión se especificará en el contrato de Crédito aplicable.
              </p>
              <p className="text-gray-200 leading-relaxed">
                <strong>Periodicidad:</strong> Por única ocasión.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Estas comisiones pueden ser consultadas en el portal de Registro de Comisiones Vigentes (RECO) de la CONDUSEF.
              </p>
            </div>
          </div>

          

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <img 
                src="/cat-1.jpg" 
                alt="Person signing document" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostsAndCommissions; 