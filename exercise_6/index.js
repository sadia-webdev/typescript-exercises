// type Role = 'admin' | 'user' | 'guest'
var UserRole;
(function (UserRole) {
    UserRole["superadmin"] = "superadmin";
    UserRole["moderator"] = "moderator";
    UserRole["viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== "viewer";
}
console.log(canEdit(UserRole.viewer));
