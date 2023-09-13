// Requerimos mercadopago y lo inicializamos
const mercadopago = require("mercadopago");

const createPreference = async () => {
  // Configuramos y asociamos el ACCESS TOKEN PRODUCCION <Vendedor> de las credenciales de mercado pago <TEST>
  mercadopago.configure({
    access_token:
      "APP_USR-1588018776018958-081920-c910a29592000fab034bdd6a7e97522a-1454952979", // Guardar en una variable de entorno para no exporner
  });

  // Creamos las "preferencias"
  const preference = {
    items: [
      {
        title: "Nombre del producto",
        quantity: 1,
        unit_price: 7550,
      },
    ],
    notification_url: "https://mfrgjt6k-3030.brs.devtunnels.ms/notification", // Aqui devolveremos la respuesta del pago de MP
    back_urls: {
      success: "http://localhost:3030/mp/success", // aqui nos redirigira cuando el pago se efectue satisfacotriamente
      pending: "http://localhost:3030/mp/pending", // aqui nos redirigira en caso de que el pago este pendiente
      failure: "http://localhost:3030/mp/failure", // aqui nos redirigira en caso de que el pago sea rechazado
    },
  };

  // Extraemos de la respuesta a las preferencias los datos necesarios para redirigir al pago en en FRONEND
  const resMercadopago = await mercadopago.preferences.create(preference);
  //   console.log({ resMercadopago });
  const { id } = resMercadopago.body;
  return id;
};

module.exports = {
  createPreference,
};
