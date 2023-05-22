#! /usr/bin/bash
PWD=/home/ubuntu/apps/nig-frontend
PWD_BE=/home/ubuntu/apps/nig-backend
echo "Pull from Repository "
sudo git checkout development
sudo git pull origin development || (sudo git stash && sudo git pull origin development)
echo "Deploying..."
echo "Check Node.JS"
node --version || "echo \"Error: Node JS Not Found\" && exit"
echo "Check Yarn && Install if it doesnt exist"
yarn --version || npm i -g yarn
echo "Installing depedencies"
yarn
echo "Build"
yarn build
cp -R $PWD/dist/* $PWD_BE/public
echo "Wait 10 Sec for live server testing"
sleep 10
curl http://localhost/
echo "Finish"
exit

