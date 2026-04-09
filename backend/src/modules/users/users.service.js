// mock por enquanto
const users = [];

export function listUsers() {
  return users;
}

export function createUser(data) {
  const user = {
    id: users.length + 1,
    name: data.name,
    email: data.email,
  };

  users.push(user);
  return user;
}
