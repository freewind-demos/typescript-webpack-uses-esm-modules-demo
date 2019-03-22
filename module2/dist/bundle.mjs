import { module1 } from 'typescript-webpack-uses-esm-modules-demo--module1';

function module2() {
  console.log('<module2>');
  module1();
  console.log('</module2>');
}

export { module2 };
