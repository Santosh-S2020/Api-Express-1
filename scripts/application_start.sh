#!/bin/bash

# Navigate into folder where all source code is present
cd /home/ec2-user/express-app

# add npm and node to path variable

export "NVM_DIR"="$HOME/.nvm"
[ -s "NVM_DIR"/nvm.sh ] && \. "$NVM_DIR/nvm.sh" #loads NVM
[ -s "NVM_DIR/bash_completion"] && \. "$NVM_DIR/bash_completion" #load nvm bash_completion

#install node dependency
sudo npm install
#start node app in backend
sudo node app.js > app.out.log 2> app.err.log < /deb/null &