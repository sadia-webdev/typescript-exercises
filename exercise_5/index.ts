function echo<T>(input: T) {
  console.log(input);
}

echo<number>(44);
echo<string>("ss");
echo<{ name: string; age: number }>({ name: "Ali", age: 22 });
echo<string[]>(["s", "d"]);

interface ApiResult<T> {
  status: string;
  data: T;
}

const ApiResult: ApiResult<string> = {
  status: "pending",
  data: "data",
};

const ApiResult2: ApiResult<{ id: number; name: string }> = {
  status: "pending",
  data: { id: 134, name: "Aisha" },
};

function firstItem<T>(items: T[]): T {
  return items[0];
}

const firstNum = firstItem([1, 2, 3]);
const firstName = firstItem(["Ali", "Ayan"]);
const firstObject = firstItem<{ myname: string; id: number }>([
  { myname: "saida", id: 22 },
  { myname: "Aisha", id: 42 },
]);
