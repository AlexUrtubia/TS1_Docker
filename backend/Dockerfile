FROM node:20-alpine

WORKDIR /app

# copiar dependencias primero (cache de Docker)
COPY package*.json ./

RUN npm install

# copiar el resto del código
COPY . .

# exponer puerto
EXPOSE 3000

# usar usuario no root
USER node

CMD ["npm", "start"]