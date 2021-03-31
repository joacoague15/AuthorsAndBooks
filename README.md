# AuthorsAndBooks
A simple CRUD app for posting books with Django + ReactJS

**Python 3.8.5 / Django 3.1.7 / DRF 3.12.2 / PostgreSQL 12.6 / ReactJS 17.0.1 / NodeJS 12**

<img src="https://user-images.githubusercontent.com/38045464/112891534-a3198500-90ae-11eb-9361-60f6e193778f.png" />

 **Technologies used:**
1. PostgreSQL for data storage
2. Django for Backend
3. DRF for making the API generic views for communication between Django and React
4. ReactJS for Frontend
5. Bootstrap for responsible style

**FEATURED**
CRUD system
SignUp/Login manager
Django Admin for choosing the featured book

**HOW ALL WORKS**
Django is in charge of creating two APIs, one that will serve us for authentication and the other to render everything in react.
It is advisable to keep in mind to use Postman for checking if the APIs are working: https://learning.postman.com/docs/getting-started/installation-and-updates/
React consume the APIs and organize the components with the react-router-dom. The "slug" element from Django Model is essential for categorizing the genres.
Login is needed for making changes to the book posts.

**INSTALLATION**

DATABASE:
First It's necessary to install PostgreSQL and PostgreSQL-Contrib for adding funcionalities to the db

`sudo apt-get install postgresql postgresql-contrib`
Now we can use pg-admin for a more concrete view of the database. So let's install It:
`sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add`
`sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'`
`sudo apt install pgadmin4-desktop`
Create the database either from pg-admin or from command line


BACKEND:
Make a Backend directory so It's all more organize
It is good practice to create a virtualenv for the Django Backend:
`python3 -m venv [NAME]`
And activate It doing:
`source [NAME]/bin/activate`
Make sure you have Django installed and create a project:
`django-admin startproject [ProjectName]`
And create all the apps that this project needs:
`python manage.py startapp polls`
Install the dependecies with:
`pip install requirements.txt`
Make migrations, keep in mind that you have to migrate when there is a change in the models:
`python manage.py makemigrations`
`python manage.py migrate`

*Clarifications:*
On ./settings.py
`TEMPLATES = [
  {
    ...
    'DIRS': [os.path.join(BASE_DIR), 'build'],
    ...
  }
]`
That BUILD is set beacause the app has a Frontend which will run `npm run build` and a "build" directory will be created.

`MEDIA_URL = /media/` is for storing all images displayed, This app does not render any dinamic img, but It can be in the near future.

And
`
INSTALLED_APPS = [
    ...
    'django_summernote',
]`
It is for adding style to the content of the books. This is not used right now, but It´s intend to be included later.

FRONTEND:
1. Make sure Node is installed and updated to 12 or later
2. Make a new Frontend app so that you have
`npm create-react-app frontend`
/backend
/frontend (recently created)

Clone all the repository
This React app needs just two dependecies for make It works:
`npm install --save axios react-router-dom`
The first one is for making the requests for the API and the second one is just a way to organize the React urls to make it more understandable.

*Remember the app uses Bootstrap and It's linked in the index.html, It should be noted that the JS link of boostrap is only for the carousel to work.*
