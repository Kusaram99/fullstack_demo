import {validateUser} from "./validation.js";
import User from "./user.js"; 

// get data
const getData = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// add data
const addData = async (req, res) => {
  const { error } = validateUser(req.body);
  console.log("Error: ", error);
  if (error) return res.status(401).send(error.details[0].message);
  try {
    const result = new User(req.body);
    result.save();

    res.status(201).send("Data added");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// delete data
const deleteData = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete({ _id: id });
    res.send("Data deleted");
  } catch (error) {
    res.status(500).send("Server error");
  }
};

// update data
const updateData = async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const result = await User.findOneAndUpdate(
      { _id: id },
      { $set: { name: name } },
      {
        new: true, //// Return the updated document
      }
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Server error");
  }
};

export { getData, addData, deleteData, updateData };
