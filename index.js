
const express = require("express");

const app = express();
const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
];
// Define a simple route for the root URL
app.get("/", (req, res) => {
  res.send("VINEET");
});
app.get("/home", (req, res) => {
  res.send("Express server is running This Is Other Route!");
});
app.get("/about", (req, res) => {
  res.send("Lol Nothing Here");
});
app.get("/users",(req,res)=>{
  res.send(users);
});
app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});



// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
