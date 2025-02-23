# Use a imagem oficial do Node.js como imagem base
FROM node:14

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie package.json e package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Instale as dependências de desenvolvimento
RUN npm install --only=dev

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Inicie a aplicação
CMD ["npm", "start"]
