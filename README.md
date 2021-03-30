# AuthorsAndBooks
A simple CRUD app for posting books with Django + ReactJS

Build Status...

<img src="https://user-images.githubusercontent.com/38045464/112891534-a3198500-90ae-11eb-9361-60f6e193778f.png" />

Technology used:
PostgreSQL for data storage
Django for Backend
Django Rest Framework for making the API generic views for communicate with React
ReactJS for Frontend + Bootstrap for styling and responsivness

features
This project manage a CRUD system, where books are separated in categories which the author chose when the book was published

How code works (short and precise)...
Django is in charge of making the models and creating the api which is the center of the CRUD system
ReactJS is all about making requests and render the according data

DATABASE:
First It's necessary to install PostgreSQL. PostgreSQL-contrib is adding funcionalities to the db
`sudo apt-get install postgresql postgresql-contrib`
Now we can use pg-admin for a more concrete view of the database. But first the installation:
`sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add`
`sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'`
`sudo apt install pgadmin4-desktop`
create the db...


BACKEND:
Postman...
Setting PostgresSQL...
Make a Backend directory so It's all more organize
It's good practice making a virtualenv for the Django Backend
`python3 -m venv [NAME]`
And activate It doing:
`source [NAME]/bin/activate`
Install the dependecies with:
`pip install requirements.txt`
Now create a new Django project in the ./backend directory:
`django-admin startproject AuthorsBooks`
This project only has one app and It is the API:
`python manage.py startapp api`
Clone all files inside the backend directory
Make migrations, keep in mind that you have to migrate when there is a change in the models
`python manage.py makemigrations`
`python manage.py migrate`
Clarifications:
On ./settings.py
`TEMPLATES = [
  {
    ...
    'DIRS': [os.path.join(BASE_DIR), 'build'],
    ...
  }
]`
That BUILD is set beacause the app has a Frontend which will run `npm run build` and a "build" directory will be created

And 
`MEDIA_URL = /media/` is for storing all images displayed, This app does not render any dinamic img, but It can be in the near future 

And
`
INSTALLED_APPS = [
    ...
    'django_summernote',
]`
It´s for adding style to the content of the books. This is not used right now, but It´s intend to be included later

FRONTEND:
1. Make a new Frontend directory outside the Backend one
2. Make sure Node is installed and updated to 12 or more
Now It's time for the React app
`npm create-react-app frontend`
Clone the files of ./frontend
And It needs just two dependecies for for make all work:
`npm install --save axios react-router-dom`
The first one is for making the requests for the API and the second one is just a way to organize the react urls to make it more understandable
Remember the app uses Bootstrap and It's linked in the index.html, It should be noted that the JS link of boostrap is only for the carousel to work



Setup:
Setup PostgreSQL
Setup React
