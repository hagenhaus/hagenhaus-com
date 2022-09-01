import fs from 'fs-extra';
import CleanCss from 'clean-css';
import { minify } from "terser";
import obfuscator from 'javascript-obfuscator';

try {
  let input = fs.readFileSync('../hhdatalist.css', 'utf8');
  let options = { level: 2 };
  let output = new CleanCss(options).minify(input);
  fs.writeFileSync('../../../../cdn/hhdatalist-2022-09-10/hhdatalist.min.css', output.styles);
} catch (err) {
  console.log(err);
}

// try {
//   let input = fs.readFileSync('../hhdatalist.js', 'utf8');
//   let output = await minify(input);
//   fs.writeFileSync('../../../../cdn/hhdatalist-2022-09-10/hhdatalist.min.js', output.code);
// } catch (error) {
//   console.log(error);
// }

const options = {
  compact: false,
  controlFlowFlattening: true,
  controlFlowFlatteningThreshold: 1,
  numbersToExpressions: true,
  simplify: true,
  stringArrayShuffle: true,
  splitStrings: true,
  stringArrayThreshold: 1
};

try {
  let input = fs.readFileSync('../hhapi.js', 'utf8');
  let output = obfuscator.obfuscate(input, options);
  fs.writeFileSync('../../../../cdn/hhdatalist-2022-09-10/hhapi.min.js', output.getObfuscatedCode());
} catch (error) {
  console.log(error);
}

try {
  let input = fs.readFileSync('../hhdatalist.js', 'utf8');
  let output = obfuscator.obfuscate(input, options);
  fs.writeFileSync('../../../../cdn/hhdatalist-2022-09-10/hhdatalist.min.js', output.getObfuscatedCode());
} catch (error) {
  console.log(error);
}
