cd /var/sourceFiles/proyectofinal/admin && 
echo 'discard local changes' && 
git reset --hard && 
cd /var/sourceFiles/proyectofinal/admin && 
echo 'pull from github' && 
git pull && 
cd /var/sourceFiles/proyectofinal/admin/ && 
echo 'npm install' && 
npm install  && 
echo 'build browser' && 
sudo ionic cordova build browser --prod && 
echo 'coping files' && 
sudo cp -a /var/sourceFiles/proyectofinal/admin/platforms/browser/www/. /var/www/aguita/
