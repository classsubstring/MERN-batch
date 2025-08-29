const users = [
  {
    name: "Ankit",
    email: "ankit@gmail.com",
    isActive: true,
  },
];

export const listUser = (req, resp) => {
  resp.json(users);
};

export const createUser = (req, resp) => {
  // const error = new Error("User not found ");
  // throw error;
  resp.send("user created");
};
