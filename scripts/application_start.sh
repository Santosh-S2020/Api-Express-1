#!/bin/bash

# Navigate into folder where all source code is present
cd /home/ec2-user/express-app

# add npm and node to path variable

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

#install node dependency
npm install
#start node app in backend
node app.js > app.out.log 2> app.err.log < /dev/null &