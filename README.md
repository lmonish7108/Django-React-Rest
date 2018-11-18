<pre>
# Django-React-Rest

Develop a webapp with Django/Rest handling backend and React handling frontend.

Deployment configuration using Nginx + uwsgi

For initial phase please create folder called <strong>/Desktop/pet_pro/</strong> and clone the project here. This will be fixed once vagrant comes in picture.

Install pipenv

pip install --user pipenv

pipenv shell

pipenv install


go to the path where package.json is there
and run the following commands:

npm i webpack webpack-cli --save-dev

npm i @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties --save-dev

npm i react react-dom prop-types --save-dev
npm i weak-key --save-dev


open package.json
add the following line to scripts:


"scripts": {
  "dev": "webpack --mode development ./project/frontend/src/index.js --output ./project/frontend/static/frontend/main.js",
  "build": "webpack --mode production ./project/frontend/src/index.js --output ./project/frontend/static/frontend/main.js"
}


<strong> Load frontend </strong>

npm run dev

Create virtual link of your project folder "mysite" to link to /usr/
example:
ln -sf /Users/monish/Desktop/pet_pro/Django-React-Rest/ /usr/local/var/www/mysite



<strong> To start nginx </strong>

nginx

<strong> Run uwsgi </strong>

uwsgi --ini path to uwsgi file.

eg: /Users/monish/Desktop/pet_pro/Django-React-Rest/mysite.ini

<strong>Providing initial data for models (<i>Using Fixtures</i>)</strong>

This is done to load homepage with some data on first go.

python manage.py loaddata fixture_name

eg: python manage.py loaddata leads
</pre>
