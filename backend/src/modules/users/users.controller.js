import * as usersService from './users.service.js';

export function listUsers(req, res) {
  const users = usersService.listUsers();
  res.json(users);
}

export function createUser(req, res) {
  const user = usersService.createUser(req.body);
  res.status(201).json(user);
}