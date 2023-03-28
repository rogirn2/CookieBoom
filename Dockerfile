# Use a imagem oficial do Node.js 18
FROM node:18

# Crie o diretório de trabalho
WORKDIR /app

# Copie os arquivos package.json e package-lock.json
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código-fonte do projeto
COPY . .

# Compile o TypeScript
RUN npm run build

# Exponha a porta na qual o aplicativo será executado
EXPOSE 3000

# Inicie o aplicativo
CMD [ "npm", "start" ]