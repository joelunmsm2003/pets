killall -9 node
killall -9 python

cd /home/joel/proyectos/pets
node server.js&

cd /home/joel/proyectos/bpet
python manage.py runserver 