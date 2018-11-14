# Django-React-Rest

Develop a webapp with Django/Rest handling backend and React handling frontend.

Deployment configuration using Nginx+uwsgi

For initial phase please create folder called /Desktop/pet_pro/ and clone the project here. This will be fixed once vagrant comes in picture.

Install pipenv

pip install --user pipenv

pipenv shell

pipenv install


Run nginx
nginx

Run uwsgi
uwsgi --ini path to uwsgi file.
eg: /Users/monish/Desktop/pet_pro/Django-React-Rest/mysite.ini


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


Load frontend
npm run dev
