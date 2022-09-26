const products = [
  {
    id: 1,
    category: "latops",
    img: "/assets/images/products/laptop.png",
    title: "Laptop",
    price: "899900",
    priceDiscount: "799900",
    description: "Procesador i5, 8GB de RAM, 256GB SSD",
    resumen:
      "Laptop HP 15s-eq0001la, Intel Core i5-1035G1, 8GB RAM, 256GB SSD, Windows 10 Home",
    stock: 5,
  },
  {
    id: 2,
    category: "almacenamiento",
    img: "/assets/images/products/m2.png",
    title: "M2",
    price: "49990",
    priceDiscount: "39990",
    description: "1TB de almacenamiento",
    resumen: "Almacenamiento SSD M2 1TB",
    stock: 20,
  },
  {
    id: 3,
    category: "procesadores",
    img: "/assets/images/products/procesadores/amd/ryzen5/5600g-1.jpg",
    title: "Ryzen 5 5600G",
    price: "299990",
    priceDiscount: "249990",
    description: "Ryzen 5 5600G",
    resumen:
      "Procesador AMD Ryzen 5 5600G, 6-Core, 3,6Ghz (Max Boost 4,4Ghz), Socket AM4, Radeon Vega Graphics",
    stock: 15,

  },
  {
    id: 4,
    category: "almacenamiento",
    img: "/assets/images/products/ssd.png",
    title: "SSD",
    price: "39990",
    priceDiscount: "29990",
    description: "Almacenamiento SSD 500GB",
    resumen: "Almacenamiento SSD 500GB",
    stock: 10,
  },
  {
    id: 5,
    category: "energia",
    img: "/assets/images/products/fuentedepoder.png",
    title: "Fuente de Poder",
    price: "99990",
    priceDiscount: "79990",
    description: "650W",
    resumen: "Fuente de Poder 650W",
    stock: 5,
  },
  {
    id: 6,
    category: "memorias",
    img: "/assets/images/products/memoria.png",
    title: "Ram",
    price: "49990",
    priceDiscount: "39990",
    description: "8GB DDR4",
    resumen: "Memoria Ram 8GB DDR4",
    stock: 20,
  },
  {
    id: 7,
    category: "almacenamiento",
    img: "/assets/images/products/pendrive.png",
    title: "Pendrive",
    price: "9990",
    priceDiscount: "7990",
    description: "32GB",
    resumen: "Pendrive 32GB",
    stock: 55,
  },
  {
    id: 8,
    category: "almacenamiento",
    img: "/assets/images/products/hdd.png",
    title: "Disco Duro",
    price: "19990",
    priceDiscount: "14990",
    description: "1TB",
    resumen: "Disco Duro 1TB",
    stock: 100,
  },
  {
    id: 9,
    category: "cableria",
    img: "/assets/images/products/cablesata.png",
    title: "Cable Sata",
    price: "4990",
    priceDiscount: "3990",
    description: "1.5m",
    resumen: "Cable Sata 1.5m",
    stock: 50,
  },
  {
    id: 10,
    category: "accesorios",
    img: "/assets/images/products/fan.png",
    title: "Cooler Fan",
    price: "4990",
    priceDiscount: "3990",
    description: "120mm",
    resumen: "Cooler Fan 120mm",
    stock: 50,
  },
  {
    id: 11,
    category: "perifericos",
    img: "/assets/images/products/mouse.png",
    title: "Mouse Gamer",
    price: "4990",
    priceDiscount: "3990",
    description: "3200 DPI",
    resumen: "Mouse Gamer 3200 DPI",
    stock: 50,
  },
  {
    id: 12,
    category: "perifericos",
    img: "/assets/images/products/teclado.png",
    title: "Teclado Gamer",
    price: "19990",
    priceDiscount: "14990",
    description: "RGB",
    resumen: "Teclado Gamer Mecánico RGB",
    stock: 50,
  },
  {
    id: 13,
    category: "perifericos",
    img: "/assets/images/products/padrazer.png",
    title: "Pad Razer",
    price: "29990",
    priceDiscount: "24990",
    description: "RGB",
    resumen: "Pad Razer RGB",
    stock: 30,
  },
  {
    id: 14,
    category: "placasmadres",
    img: "/assets/images/products/motherboard.png",
    title: "Placa Madre",
    price: "99990",
    priceDiscount: "79990",
    description: "Socket AM4",
    resumen: "Placa Madre Socket AM4",
    stock: 30,
  },
  {
    id: 15,
    category: "graficas",
    img: "/assets/images/products/tarjetagrafica.png",
    title: "Tarjeta Grafica",
    price: "599990",
    priceDiscount: "499990",
    description: "8GB GDDR6",
    resumen: "Tarjeta Grafica 8GB GDDR6",
    stock: 10,
  },
  {
    id: 16,
    category: "accesorios",
    img: "/assets/images/products/aircooling.png",
    title: "Disipador de aire",
    price: "30990",
    priceDiscount: "25990",
    description: "Disipador de aire",
    resumen: "Disipador de aire",
    stock: 20,
  },
  {
    id: 17,
    category: "accesorios",
    img: "/assets/images/products/watercooling.png",
    title: "Disipador de agua",
    price: "60990",
    priceDiscount: "55990",
    description: "Disipador de agua",
    resumen: "Disipador de agua",
    stock: 20,
  },
  {
    id: 18,
    category: "gabinetes",
    img: "/assets/images/products/cases.png",
    title: "Gabinete",
    price: "49990",
    priceDiscount: "39990",
    description: "Gabinete Gamer",
    resumen: "Gabinete Gamer",
    stock: 16,
  },
  {
    id: 19,
    category: "perifericos",
    img: "/assets/images/products/audifonosgamer.png",
    title: "Audifonos Gamer",
    price: "19990",
    priceDiscount: "14990",
    description: "RGB",
    resumen: "Audífonos Gamer RGB",
    stock: 30,
  },
  {
    id: 20,
    category: "cableria",
    img: "/assets/images/products/cablehdmi.png",
    title: "Cable HDMI",
    price: "4990",
    priceDiscount: "3990",
    description: " 1.5m",
    resumen: "Cable HDMI 1.5m",
    stock: 10,
  },
];

export default products;
