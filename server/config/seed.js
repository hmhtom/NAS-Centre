const db = require("./connection");
const { Category, Event, Seat } = require("../models");

const eventDetail = [
  {
    eventName: "Toronto Raptors Vs. Cleveland Cavaliers",
    description:
      "The Cleveland Cavaliers (13-7, 12-7-2 ATS, 10-11 O/U) take on the Toronto Raptors (10-9, 11-8 ATS, 10-9 O/U) in an Eastern Conference battle on Monday night. The Cavaliers beat the Pistons on Sunday. The Raptors collected a home win against the Mavericks on Saturday. Toronto recorded a 108-105 home win in the lone meeting this season.",
    image: "./wakanda-forever.jpg",
    date: " 2022/11/30 09:30",
    price: 117.0,
  },
  {
    eventName:
      "Toronto Maple Leafs vs. San Jose Sharks",
    description: "Toronto Maple Leafs is playing against San Jose Sharks. ",
    image: "./black-adam.png",
    date: " 2022/12/01 09:30",
    price: 129.0,
  },
  {
    eventName: "Dave Chappelle: In Your Dreams",
    description: "Dave Chappelle: In Your Dreams",
    image: "./strange-world.jpg",
    date: " 2022/12/03 09:30",
    price: 106.0,
  },
  {
    eventName: "Metallica: World Tour (Toronto)",
    description:
      "Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich and has been based in San Francisco for most of its career.[1][2] The band's fast tempos, instrumentals and aggressive musicianship made them one of the founding \"big four\" bands of thrash metal, alongside Megadeth, Anthrax and Slayer. Metallica's current lineup comprises founding members and primary songwriters Hetfield and Ulrich, longtime lead guitarist Kirk Hammett and bassist Robert Trujillo. Guitarist Dave Mustaine (who formed Megadeth after being fired from the band) and bassists Ron McGovney, Cliff Burton and Jason Newsted are former members of the band.",
    image: "./metallica.jpg",
    date: " 2022/12/01 09:30",
    price: 127.0,
  },
];

const createEvent = async (eventInfo, categoryName) => {
  const event = await Event.create(eventInfo);
  await Category.findOneAndUpdate(
    { name: categoryName },
    { $addToSet: { events: event._id } }
  );
};

const seats = [];

for (let i = 1; i <= 20; i++) {
  seats.push({ seatNumber: `${i}A` });
  seats.push({ seatNumber: `${i}B` });
  seats.push({ seatNumber: `${i}C` });
  seats.push({ seatNumber: `${i}D` });
  seats.push({ seatNumber: `${i}E` });
}

db.once("open", async () => {
  await Category.deleteMany();
  const categories = await Category.insertMany([
    {
      name: "Sport",
    },
    {
      name: "Comedy",
    },
    {
      name: "Concert",
    },
  ]);

  await Event.deleteMany();
  await createEvent(eventDetail[0], "Sport");
  await createEvent(eventDetail[1], "Sport");
  await createEvent(eventDetail[2], "Concert");
  await createEvent(eventDetail[3], "Comedy");

  await Seat.deleteMany();
  await Seat.insertMany(seats);
  console.log(seats);

  console.log("Seeding Complete");

  process.exit();
});
