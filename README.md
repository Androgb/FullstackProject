# 🧩 Fullstack App – NestJS + Vue 3

Este proyecto es una aplicación fullstack desarrollada como prueba técnica para el cargo de desarrollador fullstack junior. Se compone de un backend hecho con **NestJS + Mongoose** y un frontend hecho con **Vue 3 + TypeScript**.

---

## 🚀 Tecnologías Utilizadas

### Backend
- [NestJS](https://nestjs.com/)
- [Mongoose](https://mongoosejs.com/)
- TypeScript
- class-validator / class-transformer

### Frontend
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) (gestión de estado)
- Vue Router
- Axios

---

## 📁 Estructura del Proyecto

```bash
my-fullstack-app/
├── backend/     # API REST con NestJS
└── frontend/    # Aplicación cliente con Vue 3
```
## 🔧 Cómo correr el proyecto

### 1. Clonar el repositorio

``` bash
git clone https://github.com/tu-usuario/fullstack-nest-vue.git
cd fullstack-nest-vue
```

### 2. Configurar y ejecutar el Backend
``` bash
cd backend
npm install
```
Crear un archivo .env con la cadena de conexión a MongoDB:


```bash
MONGO_URI=mongodb://localhost:27017/miapp
PORT=3000
```

Luego, correr el backend:

```bash
npm run start:dev
```
La API estará disponible en: http://localhost:3000

### 3. Configurar y ejecutar el Frontend

```bash
cd ../frontend
npm install
npm run dev
La app Vue estará en: http://localhost:5173
```

# ✨ Funcionalidades del Proyecto
### 👤 Registro y gestión de usuarios.

### 📦 Gestión de productos.

### 🛒 Carrito de compras por usuario.

### ⚙️ CRUD completo desde la API y el frontend.

Validaciones, modularidad y buenas prácticas de desarrollo.

# 📌 Estructura del Backend
```bash
backend/
├── users/        ← Gestión de usuarios
├── products/     ← Productos disponibles
├── cart/         ← Carrito del usuario
├── common/       ← Validaciones, utilidades, filtros, etc.
├── main.ts       ← Punto de entrada
└── app.module.ts ← Módulo principal
```
# 📌 Estructura del Frontend

```bash
frontend/
├── views/         ← Vistas principales (Home, Cart, Products)
├── components/    ← Componentes reutilizables
├── stores/        ← Estado global (carrito)
├── services/      ← Llamadas a la API (Axios)
├── router/        ← Rutas de la app
└── main.ts        ← Montaje de app, Pinia y Router
```

# 📬 Contacto

Proyecto desarrollado como prueba técnica. Para más información, puedes escribirme a alejandrobeltran7889@gmail.com o visitar mi perfil en GitHub: https://github.com/Androgb