import { initMercadopago } from "@mercadopago/sdk-react";

export const ButtonPago = () => {
  initMercadopago("APP_USR-8135b807-0add-41e7-887a-b1b64ff993fe"); // aqui va la PUBLIC KEY del comprador
  return (
    <div>
      <button>
        <span>Ir a pagar</span>
      </button>
      {<Wallet initialization={{ preferenceId }} />}
    </div>
  );
};

// Investigar la incorporacion del SDK de mercado pago en Front
