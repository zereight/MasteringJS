function print(anything) {
  console.log(anything);
}

function func1() {
  print(Number.isNaN(NaN));
  print(Number.isNaN("text"));
  print(Number.isNaN(10.0));
}

function func2() {
  let arr = ["1", "2", "3", "4", NaN, "5"];
  print(arr.indexOf(NaN));
  print(arr.includes(NaN));
  print(arr.findIndex((n) => Number.isNaN(n)));
}

func1();
func2();
