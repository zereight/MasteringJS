function test1() {
  const obj1 = { a: true, b: true };
  const obj2 = obj1;

  obj2.c = true;

  console.log(obj1); // same with obj2
}

function test2() {
  const obj1 = { a: true, b: true };
  const obj2 = { ...obj1 }; // shallow copy
  const obj3 = Object.assign({}, obj1); // shallow copy

  /*
    spread is faster than Object.assign
  */

  obj2.c = true;
  obj3.d = true;

  console.log(obj1); // { a: true, b: true }
}

function test3() {
  const objA = { a: { value: true }, b: { value: true } };
  const objA2 = { ...objA };
  const objB = { a: { value: true }, b: { value: true } };
  const objB2 = JSON.parse(JSON.stringify(objB)); // deep copy

  objA2.a.value = false;
  objB2.a.value = false;

  console.log(objA.a.value); // false
  console.log(objB.a.value); // true
}

function test4() {
  const obj = { date: new Date("2019-06-01") };
  const copy = JSON.parse(JSON.stringify(obj));

  console.log(obj.date instanceof Date); // true
  console.log(copy.date instanceof Date); // false, `date` is a string
}

test4();
