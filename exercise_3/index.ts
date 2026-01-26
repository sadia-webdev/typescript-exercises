// function fullName(first, last) {
//   return first + " " + last;
// }

function fullName(first: string, last: string): string {
  return first + " " + last;
}

console.log(fullName("sadia", "mahamud"));

const registerUser = (
  username: string,
  isAdmin: boolean,
  lanuage: string = "en",
) => {
  console.log(username, isAdmin, lanuage);
};

registerUser("Ali", true);

function average(...scores: number[]): number {
  const sum = scores.reduce((acc, current) => acc + current, 0);
  return sum / scores.length
}

console.log(average(12, 34, 65));
