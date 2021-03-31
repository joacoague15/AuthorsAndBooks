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

**FEATURES**
<ul>
  <li>CRUD system</li>
  <li>SignUp/Login manager</li>
  <li>Django Admin for choosing the featured book</li>
</ul>

**HOW ALL WORKS**
<p>Django is in charge of creating two APIs, one that will serve us for authentication and the other to render everything in react.</p>
<p>It is advisable to keep in mind to use Postman for checking if the APIs are working: https://learning.postman.com/docs/getting-started/installation-and-updates/</p>
<p>React consume the APIs and organize the components with the react-router-dom. The "slug" element from Django Model is essential for categorizing the genres.</p>
<p>Login is needed for making changes to the book posts.</p>

**INSTALLATION**

DATABASE:
<p>First It's necessary to install PostgreSQL and PostgreSQL-Contrib for adding funcionalities to the db.</p>

`sudo apt-get install postgresql postgresql-contrib`
<p>Now we can use pg-admin for a more concrete view of the database. So let's install It:</p>

`sudo curl https://www.pgadmin.org/static/packages_pgadmin_org.pub | sudo apt-key add`

`sudo sh -c 'echo "deb https://ftp.postgresql.org/pub/pgadmin/pgadmin4/apt/$(lsb_release -cs) pgadmin4 main" > /etc/apt/sources.list.d/pgadmin4.list && apt update'`

`sudo apt install pgadmin4-desktop`

<p>Finally, create the database either from pg-admin or from command line.</p>


BACKEND:
<p>Make a Backend directory so It's all more organize.</p>
<p>It is good practice to create a virtualenv for the Django Backend:</p>

`python3 -m venv [NAME]`
<p>And activate It doing:</p>

`source [NAME]/bin/activate`
<p>Make sure you have Django installed and create a project:</p>

`django-admin startproject [ProjectName]`
<p>And create all the apps that this project needs:</p>

`python manage.py startapp polls`
<p>Install the dependecies with:</p>

`pip install requirements.txt`
<p>Make migrations, keep in mind that you have to migrate when there is a change in the models:</p>

`python manage.py makemigrations`

`python manage.py migrate`


*Clarifications:* On ./settings.py
```
TEMPLATES = [
  {
    ...
    'DIRS': [os.path.join(BASE_DIR), 'build'],
    ...
  }
]
```

<p>That BUILD is set beacause the app has a Frontend which will run `npm run build` and a "build" directory will be created.</p>

`MEDIA_URL = /media/` is for storing all images displayed, This app does not render any dinamic img, but It can be in the near future.

<p>And</p>

```
INSTALLED_APPS = [
    ...
    'django_summernote',
]
```

<p>It is for adding style to the content of the books. This is not used right now, but It´s intend to be included later.</p>

FRONTEND:
1. Make sure Node is installed and updated to 12 or later
2. Make a new Frontend app:

  `npm create-react-app frontend`
   <p>So that you have:</p>
  <p>/backend</p>
  <p>/frontend (recently created)</p>

<p>Clone all the repository</p>
<p>This React app needs just two dependecies for make It works:</p>

`npm install --save axios react-router-dom`
<p>The first one is for making the requests for the API and the second one is just a way to organize the React urls to make it more understandable.</p>

*Remember the app uses Bootstrap and It's linked in the index.html, It should be noted that the JS link of boostrap is only for the carousel to work.*
