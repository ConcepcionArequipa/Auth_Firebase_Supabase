# Login Fullstack: Firebase & Supabase
## Integrantes: Concepcion Arequipa, Camila Bueno y Leonor Yumi

Este repositorio contiene dos proyectos completos diseñados para el aprendizaje de autenticación y manejo de bases de datos en entornos Fullstack.

## Estructura del Repositorio

El proyecto se divide en dos ejercicios independientes:

1.  **`firebase-login-fullstack`**: Implementación con React/Vite, Express, Firebase Auth y Firestore.
2.  **`supabase-login-fullstack`**: Implementación con React/Vite, Express, Supabase Auth y PostgreSQL.

Cada una de estas carpetas incluye:
* **`frontend/`**: Interfaz de usuario con formularios de Registro, Login, Logout y un CRUD de productos protegido.
* **`backend/`**: API REST en Express con validación de tokens (Middleware) y lógica de base de datos.
---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:
* **Node.js**: Versión 18 o superior.
* **Cuentas activas**: En las plataformas de [Firebase](https://firebase.google.com/) o [Supabase](https://supabase.com/).

### Configuración de Plataformas:
* **Firebase**: Habilitar *Authentication* (Email/Password) y crear una base de datos en *Cloud Firestore*.
* **Supabase**: Habilitar *Auth* (Email/Password) y ejecutar el script SQL ubicado en `backend/schema.sql` desde el editor SQL de Supabase.

## Guía de Ejecución Rápida

Para poner en marcha cualquiera de los proyectos, abre **dos terminales** (una para el servidor y otra para el cliente):

### 1. Configuración del Backend
```bash
cd backend
npm install
npm run dev

```

### 2. Configuración del Frontend
```bash
cd frontend
npm install
npm run dev
```
Una vez iniciados ambos servicios, accede a la aplicación en: http://localhost:5173

### Pantallas de ejecucion
### 1. Auth con Firebase

- Registro y inicio de sesion del usuario
  
  <img width="923" height="442" alt="image" src="https://github.com/user-attachments/assets/042066c6-0810-4c34-8129-88a2cf3933dd" />

  <img width="1589" height="523" alt="image" src="https://github.com/user-attachments/assets/f42dca47-9c7e-4590-80cd-802bb1f16b35" />

- Menu principal del usuario

  <img width="926" height="447" alt="image" src="https://github.com/user-attachments/assets/47efbc7a-6fb3-4577-b96f-8baccd1c6df4" />

### 2. Auth con Supabase
- Registro del usuario y inicio de sesion
  <img width="959" height="503" alt="Captura de pantalla 2026-05-06 203353" src="https://github.com/user-attachments/assets/5d53d187-2eba-42f7-990d-18d7f42cfd09" />

  <img width="959" height="500" alt="Captura de pantalla 2026-05-06 203638" src="https://github.com/user-attachments/assets/5413700c-27a6-4846-9eb2-a30471c62405" />

- Menu principal del usuario

  <img width="959" height="509" alt="Captura de pantalla 2026-05-06 203816" src="https://github.com/user-attachments/assets/eab19b23-0067-4dde-9c69-d152028e5e35" />

## Notas Importantes

* **Configuración de Variables (`.env`):** Este repositorio contiene dos proyectos distintos. Asegúrate de configurar los archivos `.env` en las siguientes rutas según el ejercicio que estés probando:
    * `firebase-login-fullstack/backend/.env`
    * `firebase-login-fullstack/frontend/.env`
    * `supabase-login-fullstack/backend/.env`
    * `supabase-login-fullstack/frontend/.env`

* **Orden de ejecución:** Es obligatorio que el **Backend** correspondiente esté iniciado y corriendo antes de intentar usar el **Frontend**. De lo contrario, no se podrán validar los tokens ni acceder a los datos.

* **Llaves de Firebase:** Si usas el proyecto de Firebase, asegúrate de colocar tu archivo `serviceAccountKey.json` dentro de la carpeta `backend/`.

