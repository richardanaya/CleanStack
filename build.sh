cd  build
node r.js -o r.js.config
wait
node compress.js
wait
cd ..
rm public/app.min.js