// function fullName(first, last) {
//   return first + " " + last;
// }
function fullName(first, last) {
    return first + " " + last;
}
console.log(fullName("sadia", "mahamud"));
var registerUser = function (username, isAdmin, lanuage) {
    if (lanuage === void 0) { lanuage = "en"; }
    console.log(username, isAdmin, lanuage);
};
registerUser("Ali");
function average() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var sum = scores.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / scores.length;
}
console.log(average(12, 34, 65));
