rm ./website.tar
tar -rvf website.tar ./index.html
tar -rvf website.tar ./assets/favicon.png
tar -rvf website.tar ./assets/logo-transparent.png
tar -rvf website.tar ./assets/styles.min.css
tar -rvf website.tar ./assets/scripts.min.js
tar -rvf website.tar ./assets/dl-options-002.js
tar -rvf website.tar ./en/base.html
find ./en -name 'book.html' -exec tar -rvf website.tar {} \;
find ./en -name 'config.json' -exec tar -rvf website.tar {} \;
find ./en -name 'otp.html' -exec tar -rvf website.tar {} \;
find ./en -name 'page.html' -exec tar -rvf website.tar {} \;
find ./en -name 'index.html' -exec tar -rvf website.tar {} \;
find ./en -name '*.png' -exec tar -rvf website.tar {} \;
