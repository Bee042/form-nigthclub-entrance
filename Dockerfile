# Utiliser une image Node officielle comme image de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN yarn install

# Copier tout le reste du code source
COPY . .

# Exposer le port sur lequel l'application va tourner
EXPOSE 3000

# Lancer l'application
CMD ["yarn", "start"]
