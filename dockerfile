FROM node:latest
ENV NODE_ENV=PRODUCION
# Create app directory
WORKDIR /usr/src/app
# Install APP dependencies
# Node and npm is alreday installed in base image
COPY package*.json ./
RUN npm install --production

# Copy local files into server
#COPY -R C:/Users/ssant/OneDrive/Desktop/Learning/AWS/JavaScipt/API-express-project/* /usr/src/app/
 COPY . .
 EXPOSE 3000
 CMD ["node", "app.js"]