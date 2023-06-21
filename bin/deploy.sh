#! /usr/bin/bash
PWD=/c/Users/RAGDALION-2021/pjm/pjm-oee-monitoring-fe-ts
PWD_BE=/c/Users/RAGDALION-2021/pjm/pjm-oee-monitoring-be-ts
echo "Pull from Repository "
sudo git checkout main
sudo git pull origin main || (sudo git stash && sudo git pull origin main)
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

