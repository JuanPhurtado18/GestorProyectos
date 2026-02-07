# 🧭 Dashboard de Gestión de Proyectos

Dashboard interactivo de gestión de proyectos desarrollado con **Next.js + Mapbox GL + Zustand**, que permite visualizar, filtrar y ubicar proyectos en un mapa en tiempo real.

Este proyecto simula un entorno real de monitoreo de múltiples proyectos, integrando una lista dinámica con navegación geográfica interactiva.

---

# 📌 1. Descripción del proyecto

Este dashboard permite a los usuarios visualizar y gestionar proyectos mostrando información clave como:

- Equipo asignado  
- Incidencias activas  
- Tareas pendientes  
- RFIs  
- Ubicación geográfica en mapa  

La aplicación sincroniza la lista de proyectos con un mapa interactivo, permitiendo navegar entre ubicaciones y visualizar proyectos de forma visual y dinámica.

### 🎯 Objetivo
Simular una herramienta moderna de seguimiento de proyectos con visualización geográfica, enfocada en UX y sincronización de estados globales.

---

# 🚀 2. Tecnologías utilizadas

- **Next.js 16**
- **React 19**
- **Zustand** → manejo de estado global
- **Mapbox GL JS** → mapa interactivo
- **CSS Modules** → estilos modulares
- **SweetAlert2** → alertas UX
- **Vercel** → despliegue

---

# 🧠 3. ¿Qué hace la aplicación?

Permite:

- Visualizar proyectos en lista interactiva
- Buscar proyectos en tiempo real
- Ordenar por métricas (incidencias, tareas, etc.)
- Activar/desactivar mapa
- Navegar automáticamente a la ubicación del proyecto
- Seleccionar/deseleccionar proyectos
- Ver todos los proyectos nuevamente al deseleccionar
- Alertar si se intenta usar el mapa apagado

---

# ⚔️ 4. Retos técnicos enfrentados

Este proyecto implicó resolver problemas reales de frontend:

### 🗺 Sincronización lista ↔ mapa
Mantener el proyecto seleccionado sincronizado entre:

- Lista
- Estado global
- Mapa Mapbox

### 🔁 Selección inteligente
- Click selecciona proyecto
- Segundo click lo deselecciona
- Muestra todos nuevamente

### 🧠 Estado global centralizado
Uso de **Zustand** para controlar:
- Búsqueda
- Filtros
- Proyecto seleccionado
- Estado del mapa

### 📍 Manejo de coordenadas
Lectura de coordenadas desde JSON y renderizado dinámico en Mapbox.

### 🎥 Navegación animada
Uso de `flyTo()` para centrar mapa suavemente.

---

# 📦 5. Instalación y ejecución

## 1. Clonar repositorio
git clone https://github.com/JuanPhurtado18/GestorProyectos.git  
cd GestorProyectos  

## 2. Instalar dependencias
npm install  

## 3. Configurar variables de entorno

Crear archivo `.env.local`

NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_mapbox  

Obtener token en:  
https://account.mapbox.com/

## 4. Ejecutar proyecto
npm run dev  

## 5. Abrir en navegador
http://localhost:3000  

---

# 🌐 6. Demo en producción

Deploy en Vercel:  
👉 https://gestor-proyectos-amber.vercel.app/

---

# 🧩 7. Funcionalidades implementadas

## 📍 Mapa interactivo (Mapbox)
- Marcadores de proyectos desde JSON
- Popup con nombre
- Zoom automático al seleccionar
- Navegación animada
- Controles de mapa
- Toggle on/off del mapa

## 📂 Lista de proyectos
- Paginación
- Búsqueda en tiempo real
- Ordenamiento por:
  - Alfabético
  - Incidencias
  - RFI
  - Tareas
- Highlight visual del proyecto seleccionado

## 🔔 Alertas UX
Uso de SweetAlert2:
- Notifica si se intenta seleccionar proyecto con mapa apagado

---

# 🗂 8. Estructura del proyecto

src/  
 ├── app/  
 │   ├── layout.jsx  
 │   ├── page.jsx  
 │   └── globals.css  
 │  
 ├── components/  
 │   ├── layout/  
 │   │   ├── Navbar.jsx  
 │   │   └── Footer.jsx  
 │   │  
 │   └── projects/  
 │       ├── ProjectList.jsx  
 │       ├── ProjectMap.jsx  
 │       ├── SearchBar.jsx  
 │       ├── FilterDropdown.jsx  
 │       ├── ViewButtons.jsx  
 │       └── *.module.css  
 │  
 ├── store/  
 │   └── useProjectStore.js  
 │  
 └── mock_data.json  

---

# 🧠 9. Estado global (Zustand)

Se maneja:

- `search` → texto de búsqueda  
- `sortBy` → tipo de ordenamiento  
- `selectedProject` → proyecto seleccionado  
- `mapVisible` → mapa activo  

Funciones:
- `setSearch()`
- `setSortBy()`
- `setSelectedProject()`
- `toggleMap()`

---

# 🧪 10. Cómo utilizar la app

### 🔎 Buscar proyectos
Usa la barra de búsqueda para filtrar por nombre.

### 📊 Ordenar proyectos
Botón de filtro:
- Orden alfabético
- Incidencias
- RFI
- Tareas

### 🗺 Activar mapa
Presiona el botón 📍 para activarlo.

### 📍 Seleccionar proyecto
- Click → centra mapa  
- Click otra vez → muestra todos  
- Si mapa apagado → alerta  

---

# 👨‍💻 11. Autor

**Juan Pablo Hurtado**  
Frontend Developer  

GitHub:  
https://github.com/JuanPhurtado18

