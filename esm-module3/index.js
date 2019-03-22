import {esmModule2} from 'javascript-rollup-esm-uses-commonjs-as-external-demo--esm-module2';

export function esmModule3() {
  console.log('<esmModule3>');
  esmModule2();
  console.log('</esmModule3>');
}
