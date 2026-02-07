# Dashboard de gestión de proyectos

Este proyecto es un dashboard de gestión de proyectos desarrollado con **Next.js, Zustand y Mapbox GL**, que permite visualizar, filtrar y gestionar proyectos mostrando sus ubicaciones en un mapa interactivo.

La aplicación permite a los usuarios:

* Visualizar proyectos en una lista interactiva

* Filtrar y buscar proyectos dinámicamente

* Seleccionar proyectos y ubicarlos en un mapa

* Navegar entre ubicaciones

---
🎯 ¿Qué hace la aplicación?

Permite visualizar proyectos y su información clave (equipo, incidencias, tareas, RFI) junto con su ubicación en un mapa interactivo, facilitando el seguimiento y monitoreo visual de múltiples proyectos.

---

# 🚀 Tecnologías utilizadas

* **Next.js 16.1.6**
* **React 19.2.3**
* **Zustand 5.0.11** 
* **Mapbox GL 3.18.1**
* **CSS Modules** 
* **SweetAlert2 11.26.18**


---

# ⚔️ Retos enfrentados

* Sincronización entre lista de proyectos y mapa

* Activación/desactivación dinámica del mapa

* Selección y deselección de proyectos

* Manejo de coordenadas desde JSON

* Navegación animada del mapa (flyTo)

---

# 📦 Instalación y ejecución

### 1. Clonar repositorio

```bash
git clone <repo-url>
cd gestor-proyectos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear archivo `.env.local`

```
NEXT_PUBLIC_MAPBOX_TOKEN=tu_token_mapbox
```

Obtén tu token en:
[https://account.mapbox.com/](https://account.mapbox.com/)

### 4. Ejecutar proyecto

```bash
npm run dev
```

Abrir en navegador:

```
http://localhost:3000
```

---

# 🧠 Funcionalidades implementadas

## 📍 Mapa interactivo (Mapbox)

* Muestra marcadores de proyectos usando coordenadas del JSON
* Popup con nombre del proyecto
* Navegación automática al seleccionar proyecto


## 📂 Lista de proyectos

* Paginación
* Ordenamiento:

  * Alfabético
  * Incidencias
  * RFI
  * Tareas
* Búsqueda por nombre
* Highlight visual del proyecto seleccionado



## 🔔 Alertas 

Uso de **SweetAlert2**:

* Si el mapa está apagado y seleccionas proyecto
* Notifica que debes activar mapa

---

# 🗂 Estructura del proyecto

```
src/
 ├── app/
 │   ├── layout.jsx
 │   ├── page.jsx
 │   └── globals.css
 │
 ├── components/
 │   ├── layout/
 │   │   ├── Header.jsx
 │   │   └── Footer.jsx
 │   │
 │   └── projects/
 │       ├── ProjectList.jsx
 │       ├── ProjectMap.jsx
 │       ├── SearchBar.jsx
 │       ├── FilterDropdown.jsx
 │       └── modules.css
 │
 ├── store/
 │   └── useProjectStore.js
 │
 └── mock_data.json
```

---

# 🧠 Estado global (Zustand)

Se maneja:

* search → búsqueda
* sortBy → filtro 
* selectedProject → proyecto seleccionado
* mapVisible → mapa activo
* toggleMap() → activar/desactivar mapa

---

# 🧪 Cómo utilizar el proyecto

## 🔎Búsqueda de proyectos

Utiliza la barra de búsqueda para filtrar proyectos por nombre.

## Filtro de ordenamiento

El botón de filtro permite ordenar por:

* Orden alfabético

* Incidencias

* RFI

* Tareas

## 🗺 Activar mapa

El mapa está desactivado por defecto.

Debes presionar el botón de mapa para activarlo.

## 📍 Seleccionar proyecto

Click en un proyecto → centra mapa en su ubicación

Click nuevamente → deselecciona y muestra todos

Si mapa está apagado → alerta SweetAlert

## 🧭 Navegación mapa

El mapa:

* Muestra marcadores de todos los proyectos

* Hace zoom automático al seleccionar

* Tiene controles de navegación

* Popup con nombre del proyecto



---
# 👨‍💻 Autor

Desarrollado por: **Juan Pablo Hurtado**



