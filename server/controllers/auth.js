import Users from "../models/users";

const login = async (req, res) => {};
const logout = async (req, res) => {};
const signIn = async (req, res) => {
  try {
    const { email, username, password, role } = req.body();
    await Users.create({ email, username, password, role });
  } catch (error) {
    console.log(error);
  }
};
