cp ./index.html ~/htdocs/index.html
find ./assets -name 'favicon.png' | cpio -pdmu  ~/htdocs
find ./assets -name 'logo-transparent.png' | cpio -pdmu  ~/htdocs
find ./assets -name 'styles.min.css' | cpio -pdmu  ~/htdocs
find ./assets -name 'scripts.min.js' | cpio -pdmu  ~/htdocs
find ./en -name 'base.html' | cpio -pdmu  ~/htdocs
find ./en -name 'book.html' | cpio -pdmu  ~/htdocs
find ./en -name 'config.json' | cpio -pdmu  ~/htdocs
find ./en -name 'otp.html' | cpio -pdmu  ~/htdocs
find ./en -name 'page.html' | cpio -pdmu  ~/htdocs
find ./en -name 'index.html' | cpio -pdmu  ~/htdocs
find ./en -name '*.png' | cpio -pdmu  ~/htdocs
