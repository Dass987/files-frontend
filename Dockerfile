# Usar una imagen base de Node.js
FROM node:16-alpine

# Crear el directorio de trabajo
WORKDIR /app

# Copiar el package.json y lock (si existe) y ejecutar npm install
COPY package*.json ./
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Exponer el puerto donde servirá la aplicación estática (ajustar según tu configuración)
EXPOSE 3000

# Servir la aplicación estática
CMD ["npm", "start"]