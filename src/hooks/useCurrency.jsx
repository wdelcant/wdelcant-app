// Esta función devuelve un objeto con una propiedad de formateador que se puede usar para formatear el número en el formato de moneda local.
const useCurrency = () => {
  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });
  return {
    formatter,
  };
};

export default useCurrency;
