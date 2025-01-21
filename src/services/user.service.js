export const getAllUsers = (request, response) => {
  const users = [
    {
      name: "Chandler Bing",
      position: "Employee",
      country: "USA",
    },
    {
      name: "Ross Geller",
      position: "Manager",
      country: "USA",
    },
  ];
  return users;
};
