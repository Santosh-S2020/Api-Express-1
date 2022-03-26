#!/bin/bash

# Install node.js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh

# Install nodemon
# sudo npm install nodemon -g
nvm install node

# Install forever module 
# https://www.npmjs.com/package/forever
# sudo npm install forever -g

# Clean working folder
# sudo find /home/ubuntu/test -type f -delete

#Create working directory if not present
DIR="/home/ec2-user/express-app"
if [ -d "$DIR" ]; then echo "${DIR} exists"
else
   echo "creating ${DIR} directory"
   mkdir ${DIR}
fi

sudo chmod -R 777 ${DIR}
