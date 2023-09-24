const users = [];

export const addUser = ({ id, name, room }) => {
  // Clean the data
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!name || !room) {
    return {
      error: "Username and room are required!",
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.name === name;
  });
  if (existingUser) {
    return {
      user: existingUser,
    };
  }

  // Store user
  const user = { id, name, room };
  users.push(user);

  return { user };
};

export const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

export const getUser = (id) => {
  return users.find((user) => user.id === id);
};

export const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};
