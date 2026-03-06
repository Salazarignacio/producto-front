🧾 Product Management POS – Frontend

Aplicación frontend de gestión de productos y ventas, diseñada para funcionar como un punto de venta (POS) para pequeños comercios.

El sistema permite administrar productos y registrar ventas de forma rápida, intuitiva y optimizada para uso con teclado, priorizando la velocidad de operación en mostrador.

La aplicación consume una API REST externa desarrollada en Java.

🚀 Demo

Deploy
https://producto-front-lqpuye7af-salazarignacios-projects.vercel.app/

Backend
https://github.com/Salazarignacio/producto-api

⚙️ Tecnologías utilizadas

React

JavaScript

Fetch API

React Bootstrap

HTML / CSS

Variables de entorno (.env)

Vercel (deploy)

📦 Funcionalidades principales
Gestión de productos

Listado completo de productos

Creación de nuevos productos

Edición individual

Edición múltiple dinámica

Eliminación de productos

Actualización automática de la interfaz ante cada cambio (renderizado inmediato)

Ventas (POS)

Sistema de ventas diseñado para ser rápido y fluido en entornos reales de mostrador.

Permite:

Agregar productos a la venta rápidamente

Modificar precio y cantidad en tiempo real

Confirmar ventas sin interrumpir el flujo de trabajo

Impresión directa de tickets

🔎 Búsqueda inteligente de productos

El selector de productos cuenta con búsqueda reactiva, permitiendo encontrar artículos mediante:

nombre

código de barras

categoría

Los resultados se actualizan dinámicamente mientras el usuario escribe.

⌨️ Optimización para uso con teclado

El sistema fue diseñado para poder operarse sin necesidad de utilizar el mouse, permitiendo una experiencia de venta más rápida.

Incluye:

cursor automático en el input principal al cargar la aplicación

navegación entre campos utilizando TAB

navegación en listas utilizando flechas del teclado

modificación rápida de precio y cantidad

confirmación de acciones sin interrumpir el flujo

Esto permite que la aplicación funcione de forma ágil y eficiente en situaciones reales de venta.

🎨 Experiencia de usuario

La interfaz fue diseñada con foco en claridad, velocidad y estética moderna.

Incluye:

modo claro / modo oscuro

interfaz minimalista

animaciones sutiles en:

agregado de productos

actualización de precios

efectos hover

feedback visual inmediato

🌐 Configuración de entornos

La aplicación utiliza variables de entorno para definir la URL de la API, lo que permite ejecutarla fácilmente en:

entorno local

entorno de producción

sin modificar el código fuente.

🧠 Decisiones de diseño

El sistema fue pensado para pequeños comercios, priorizando simplicidad y rapidez de uso.

Por ejemplo:

Se permite stock negativo, ya que muchos comercios pequeños no manejan control estricto de inventario.

Las categorías son opcionales, permitiendo usar el sistema sin necesidad de estructurar los productos.

Estas decisiones buscan mantener el sistema flexible y práctico para el uso diario.

🛠 Estado del proyecto

🟢 Versión funcional completa

El sistema implementa las funcionalidades esenciales de un POS moderno para pequeños comercios, con una experiencia fluida y optimizada para velocidad de uso.