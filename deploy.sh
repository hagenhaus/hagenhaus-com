cp ./index.html ~/htdocs/index.html
find ./assets -name 'favicon.png' | cpio -pdm  ~/htdocs
find ./assets -name 'logo-transparent.png' | cpio -pdm  ~/htdocs
find ./assets -name 'styles.min.css' | cpio -pdm  ~/htdocs
find ./assets -name 'scripts.min.js' | cpio -pdm  ~/htdocs
find ./en -name 'base.html' | cpio -pdm  ~/htdocs
find ./en -name 'book.html' | cpio -pdm  ~/htdocs
find ./en -name 'config.json' | cpio -pdm  ~/htdocs
find ./en -name 'otp.html' | cpio -pdm  ~/htdocs
find ./en -name 'page.html' | cpio -pdm  ~/htdocs
find ./en -name 'index.html' | cpio -pdm  ~/htdocs
find ./en -name '*.png' | cpio -pdm  ~/htdocs
