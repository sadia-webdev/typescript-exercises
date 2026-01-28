function echo(input) {
    console.log(input);
}
echo(44);
echo("ss");
echo({ name: "Ali", age: 22 });
echo(["s", "d"]);
var ApiResult = {
    status: "pending",
    data: "data",
};
var ApiResult2 = {
    status: "pending",
    data: { id: 134, name: "Aisha" },
};
function firstItem(items) {
    return items[0];
}
var firstNum = firstItem([1, 2, 3]);
var firstName = firstItem(["Ali", "Ayan"]);
var firstObject = firstItem([
    { myname: "saida", id: 22 },
    { myname: "Aisha", id: 42 },
]);
