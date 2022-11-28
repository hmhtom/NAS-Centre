const db = require("./connection");
const { User, Category, Event } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    { name: "Concert", events: [events[4]._id] },
    { name: "Sports" },
    { name: "Shows", events: [events[2]._id, events[1]._id, events[3]._id] },
  ]);
  console.log("categories seeded");

  await Event.deleteMany();
  const events = await Event.insertMany([
    {
      eventName: "Black Adam",
      description:
        "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. The film is related to Shazam!",
      image: "black-adam.png",
      date: " 2022/11/30 09:30",
      price: 24.0,
      availableSeats: 100,
    },
    {
      eventName: "Black Panther: Wakanda Forever",
      description:
        "Black Panther: Wakanda Forever is a 2022 American superhero film based on the Marvel Comics character Black Panther",
      image: "wakanda-forever.jpg",
      date: " 2022/12/01 09:30",
      price: 27.0,
      availableSeats: 100,
    },
    {
      eventName: "Strange World",
      description:
        "Strange World is a 2022 American computer animated science fiction adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney",
      image: "strange-world.jpg",
      date: " 2022/12/03 09:30",
      price: 27.0,
      availableSeats: 100,
    },
    {
      eventName: "Metallica",
      description: "Music concer",
      image: "metallica.jpg",
      date: " 2022/12/01 09:30",
      price: 27.0,
      availableSeats: 100,
    },
  ]);
  console.log("events seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    tickets: [events[0]._id],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
