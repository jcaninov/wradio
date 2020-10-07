FROM arm32v7/node:latest
WORKDIR /dist/
USER node
RUN npm install onoff --save
RUN npm install socket.io --save
CMD ["node", "app.js"]
