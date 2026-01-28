function login(user) {
    console.log("Hello", user.username, user.email);
}
login({
    id: 1232,
    username: "Sadiy",
    email: "example@gmail.com",
    passqword: "passqword",
});
login({ id: 32334, username: "Sadiy", passqword: "passqword" });
