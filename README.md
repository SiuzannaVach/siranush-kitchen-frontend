# Siranush's Kitchen — Frontend 🍳🇦🇲

Frontend de la plataforma web y móvil (**Web y Móvil Responsive**) **Siranush's Kitchen**, una aplicación diseñada para preservar y difundir recetas armenias tradicionales. Este repositorio contiene la interfaz de usuario, los estilos modulares y la suite de pruebas unitarias.

Proyecto desarrollado como trabajo individual en el marco del bootcamp de **Factoría F5** (Cohorte 9, Barcelona).

---

## 📝 Descripción del Proyecto (Acceso, Gestión y Adaptabilidad)

La aplicación funciona como una solución digital multiplataforma (diseñada tanto para navegadores de escritorio como para dispositivos móviles) que sirve como catálogo exclusivo y protegido de la gastronomía armenia. El flujo de trabajo sigue una estructura estricta de administración única:

* **Público en general (Invitados en Web/Móvil):** Tienen acceso de solo lectura. Pueden navegar desde cualquier ordenador o smartphone para consultar el catálogo y ver los detalles de las recetas para aprender a cocinarlas.
* **Gestión Exclusiva (Rol ADMIN):** El acceso de modificación está totalmente restringido. **Solo tú, con tus credenciales de Administrador, puedes iniciar sesión en la aplicación para modificar las páginas, añadir nuevas recetas tradicionales o eliminar contenido del catálogo**, reflejando el sistema de gestión que ya has configurado y verificado previamente a través de Postman.

La interfaz destaca por una arquitectura de diseño moderna, fluida y 100% responsive bajo la temática visual **"Peach Velvet"** (Terciopelo Melocotón) y detalles elegantes en tonos burdeos, optimizada para ofrecer una experiencia UX impecable en pantallas móviles.

---

## 🧭 Flujo de Usuario (User Flow)

El sistema define dos caminos de navegación claros según el tipo de acceso del usuario, garantizando la seguridad del catálogo y una excelente experiencia UX:

### 👥 1. Flujo de Invitado (Público General)
* **Inicio (Home):** El usuario ingresa a la plataforma web o móvil y visualiza la landing page con la presentación de la cultura gastronómica armenia.
* **Catálogo de Recetas:** Accede a la vista general donde puede explorar las recetas tradicionales disponibles.
* **Búsqueda y Filtros:** Permite buscar recetas específicas o filtrarlas por categorías.
* **Detalle de Receta:** El usuario selecciona una receta para ver sus ingredientes, pasos de preparación e historia, en formato de **solo lectura**.

### 🔐 2. Flujo de Administración (Rol ADMIN)
* **Autenticación:** El administrador accede a la página de inicio de sesión e ingresa sus credenciales exclusivas.
* **Panel de Gestión (Dashboard):** Una vez autenticado, es redirigido a un panel privado que habilita las funciones de modificación de contenido.
* **Añadir Contenido:** Apertura de un modal responsive para registrar una nueva receta tradicional en el catálogo.
* **Modificar / Eliminar:** Capacidad directa en la interfaz para actualizar los pasos de una receta existente o darla de baja del sistema.

---

## 🏗️ Arquitectura del Frontend (Estructura de Archivos)

El proyecto sigue una estructura limpia и escalable, separando los componentes de la interfaz de la suite de pruebas y aplicando estilos globales controlados:

```text
siranush-kitchen-frontend/
├── node_modules/            # Dependencias del proyecto (instaladas localmente)
├── src/                     # Código fuente principal de la aplicación
│   ├── assets/              # Recursos multimedia, imágenes e iconos locales
│   ├── components/          # Componentes de la interfaz de usuario (UI)
│   │   ├── AddRecipeModal/  # Componente y lógica para añadir recetas
│   │   ├── AuthModal/       # Modales de inicio de sesión y registro
│   │   ├── Footer.jsx       # Pie de página de la aplicación
│   │   ├── Header.jsx       # Barra de navegación superior
│   │   └── SubscribeForm.test.jsx # Pruebas unitarias del formulario de suscripción
│   ├── context/             # Gestión de estados globales de React
│   │   └── AuthContext.jsx  # Contexto de autenticación para el administrador
│   ├── pages/               # Vistas principales de la aplicación (Pantallas)
│   │   ├── Admin.jsx        # Vista exclusiva del panel de administración
│   │   ├── Dashboard.jsx    # Panel general de gestión
│   │   ├── Ghapama.jsx      # Receta     
│   │   ├── Home.jsx         # Página de inicio y landing page
│   │   ├── Login.jsx        # Formulario de acceso para el Admin
│   │   ├── Recipes.jsx      # Catálogo interactivo de recetas tradicionales
│   │   └── Register.jsx     # Formulario de registro de usuario
│   ├── services/            # Módulos para llamadas a la API REST (Backend)
│   ├── styles/              # Arquitectura modular de estilos SASS
│   ├── App.jsx              # Componente principal raíz de React
│   ├── main.jsx             # Punto de entrada para el renderizado del DOM
│   └── router.jsx           # Configuración de las rutas de navegación de la app
├── .env                     # Variables de entorno (configuraciones privadas)
├── .gitignore               # Archivos excluidos del control de versiones (Git)
├── eslint.config.js         # Configuración del linter para la calidad de código
├── index.html               # Archivo HTML principal indexado por Vite
├── package-lock.json        # Registro detallado de dependencias instaladas
├── package.json             # Scripts del proyecto y dependencias base de Node
├── README.md                # Documentación principal del repositorio
├── vite.config.js           # Configuración del empaquetador rápido Vite
└── vitest.config.js         # Configuración del entorno de pruebas unitarias Vitest
```

---

## 🛠️ Tecnologías y Herramientas Utilizadas

Para el desarrollo de la interfaz, el diseño conceptual y las pruebas de este proyecto, se ha utilizado el siguiente conjunto de herramientas tecnológicas:

* **Estack Técnico Principal:**
  * **Framework:** React.js (con Vite para un entorno de desarrollo rápido).
  * **Estilos:** SASS / SCSS (Arquitectura modular para estilos fluidos).
* **Diseño UX/UI e Ideación:** 
  * **Google Stitch:** Utilizado como herramienta de inteligencia artificial (Vibe Design) para la generación rápida de conceptos, maquetación de interfaces y exploración de componentes UX.
  * **Figma:** Creación de prototipos definitivos, diseño de la paleta cromática (Peach Velvet y Burdeos) y estructuración visual final.
* **IDE / Editor de Código:** Visual Studio Code (Entorno de desarrollo principal para el Frontend).
* **Gestión de Base de Datos:** DBeaver (Visualización y administración de los datos del proyecto).
* **Pruebas de API:** Postman (Verificación previa de endpoints y flujos de administración).
* **Entorno del Backend:** IntelliJ IDEA (Desarrollo del Backend integrado y control del ecosistema del proyecto).

---

## 🚀 Instalación y Uso Local

Sigue estos pasos para ejecutar el frontend en tu entorno de desarrollo local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/SiuzannaVach/siranush-kitchen-frontend.git
   ```
2. **Navegar al directorio del proyecto:**
   ```bash
   cd siranush-kitchen-frontend
   ```
3. **Instalar las dependencias de Node:**
   ```bash
   npm install
   ```
4. **Iniciar el servidor de desarrollo local (Vite):**
   ```bash
   npm run dev
   ```
5. **Abrir en el navegador:**
   Accede a la dirección local provista por la consola (usualmente `http://localhost:5173`).

6. **Ejecutar la suite de pruebas (Vitest):**
   ```bash
   npm run test
   ```
---
---

## 🚦 Estado del Proyecto (Estatus de Desarrollo)

Actualmente, el proyecto se encuentra en **Fase Final de Despliegue y Producción**, habiendo completado con éxito todas las etapas críticas de integración Full Stack:

* ✅ **Completado (Diseño y Maquetación):** Estructura modular en SASS y diseño adaptable a dispositivos móviles (Home, Dashboard, Registro, Modales) basado en el prototipo de Figma y conceptos de Google Stitch.
* ✅ **Completado (Backend e Integración de API):** Conexión total y funcional con los endpoints de la API REST. El sistema de gestión de recetas y la autenticación del Administrador (Rol ADMIN) están validados mediante Postman.
* ✅ **Completado (Base de Datos):** Persistencia de datos integrada correctamente con PostgreSQL y administrada a través de DBeaver.
* ✅ **Completado (Testing):** Suite de pruebas unitarias implementada y ejecutada de manera exitosa utilizando Vitest.
* ⏳ **En proceso:** Ajustes finales de rendimiento y auditoría de accesibilidad web previa al despliegue definitivo en producción.

---

## 👩‍💻 Autora

Este es un proyecto individual desarrollado de forma integral (Full Stack):

* **Desarrolladora:** Siuzanna Vachaganian — [@SiuzannaVach](https://github.com/SiuzannaVach)
* **Formación:** Factoría F5 (Cohorte 9, Barcelona)
