marionette-browserify
=====================
DO
`npm install && bower install `
then run

`browserify -t hbsfy main.js bundle.js`

FOR COFFEE:

`browserify -t hbsfy -t coffeeify main.coffee bundle.js`

to Run local server:

`npm install http-server -g`
`http-server` in the root of the project

OR

`python -m SimpleHTTPServer 8080`
