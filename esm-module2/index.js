import {cjsModule1} from 'javascript-rollup-esm-uses-commonjs-as-external-demo--cjs-module1';

export function esmModule2() {
  console.log('<esmModule2>');
  cjsModule1();
  console.log('</esmModule2>');
}
