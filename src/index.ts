/* eslint-disable @typescript-eslint/no-unused-vars */
interface Params {
  isValid: boolean;
}

function func({ isValid }: Params) {
  let foo = 1;

  if (isValid) {
    foo = 2;
  }

  return foo;
}
