# collab-spark

## Instrucciones para correr el proyecto en entorno local

Este proyecto está dividido en dos partes: backend y frontend. Es necesario abrir dos terminales para ejecutarlo correctamente.

### 1. Backend

Ubicación: `collab-spark-back-end`

**Pasos:**
1. Abre una terminal y navega a la carpeta del backend:
	```bash
	cd collab-spark-back-end
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor:
	```bash
	npm run dev
	```
	El backend se ejecutará en el puerto definido en el archivo `.env` (por defecto `3001`).

### 2. Frontend

Ubicación: `collab-spark-front-end`

**Pasos:**
1. Abre una segunda terminal y navega a la carpeta del frontend:
	```bash
	cd collab-spark-front-end
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia la aplicación:
	```bash
	npm run dev
	```
	El frontend se ejecutará en el puerto que indique la terminal (por defecto `8080` o `5173`).

### Notas importantes
- El proyecto está diseñado para ejecutarse en entorno local.
- Es necesario mantener ambos servidores (backend y frontend) corriendo en paralelo para que la aplicación funcione correctamente.
- Si tienes problemas de CORS, revisa que el puerto del frontend esté incluido en la variable `CORS_ORIGINS` del archivo `.env` del backend.
