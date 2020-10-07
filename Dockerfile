FROM arm32v7/node:latest
WORKDIR /usr/src/wradio
COPY package*.json ./
RUN npm -v
RUN npm install --loglevel verbose
COPY . .
EXPOSE 80
CMD ["node", "app.js"]
