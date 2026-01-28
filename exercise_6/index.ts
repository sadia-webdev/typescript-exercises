// type Role = 'admin' | 'user' | 'guest'

enum UserRole {
  superadmin = "superadmin",
  moderator = "moderator",
  viewer = "viewer",
}

function canEdit(role: UserRole) {
  return role !== "viewer";
}

console.log(canEdit(UserRole.viewer));


const btn = document.querySelector("button") as HTMLButtonElement;
btn.disabled = true; 