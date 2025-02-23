# Usa la imagen base de Node.js en su versión 22.14
FROM node:22.14

# Instala globalmente el CLI de NestJS para crear y gestionar proyectos NestJS
RUN npm i -g @nestjs/cli

# Establece el directorio de trabajo dentro del contenedor como /app
WORKDIR /app

# Copia los archivos de la carpeta gestion-usuarios (en el host) al directorio /app en el contenedor
COPY gestion-usuarios/ .

# Expone el puerto 3000 para que la aplicación sea accesible desde fuera del contenedor
EXPOSE 3000

# Comando por defecto que se ejecuta cuando el contenedor inicia.
# Inicia la aplicación en modo de desarrollo usando el script "start:dev" definido en package.json
CMD ["npm", "run", "start:dev"]