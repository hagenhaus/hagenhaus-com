import CleanCss from 'clean-css';
import fs from 'fs-extra';
import {minify} from 'minify';
import UglifyJS from 'uglify-js';

try {
  let input = fs.readFileSync('../hhdatalist.js', 'utf8');
  let options = {};
  let output = new UglifyJS.minify(input, options);
  if (output.error) throw output.error;
  fs.writeFileSync('./hello.min.js', output.code);
} catch (err) {
  console.log(err);
}
