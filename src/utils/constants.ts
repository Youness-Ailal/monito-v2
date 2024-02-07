export const categoryLinks = [
  {
    title: "New Pets",
    id: "MO001",
    subLinks: [
      {
        title: "Pomeranian", //
        id: "MO295",
      },
      {
        title: "Alaskan Malamute", //
        id: "MO512",
      },
      {
        title: "Pembroke", //
        id: "MO231",
      },
      {
        title: "Pembroke Corgi", //
        id: "MO588",
      },
      {
        title: "Poodle", //
        id: "MO502",
      },
      {
        title: "Malamute", //
        id: "MO512",
      },
      {
        title: "Pembroke", //
        id: "MO231",
      },
      {
        title: "Poodle Sepia", //
        id: "MO102",
      },
      {
        title: "Pembroke Corgi",
        id: "MO588",
      },
      {
        title: "Pomeranian Brown",
        id: "MO235",
      },
      {
        title: "Poodle",
        id: "MO541",
      },
      {
        title: "Pomeranian Brown", //
        id: "MO235",
      },
    ],
  },
  {
    title: "Pet Food",
    id: "MO014",
    subLinks: [
      {
        title: "Simply Nourish",
        id: "PD002",
      },
      {
        title: "Wellness®",
        id: "PD018",
      },
      {
        title: "Ourish Source",
        id: "PD005",
      },
      {
        title: "Feast Gravy",
        id: "PD007",
      },
      {
        title: "Rachael Ray",
        id: "PD014",
      },
      {
        title: "Wellness",
        id: "PD018",
      },
    ],
  },
  {
    title: "Pet Toys",
    id: "MO021",
    subLinks: [
      {
        title: "Wellness®", //
        id: "PD003",
      },
      {
        title: "Kong", //
        id: "PD010",
      },
      {
        title: "Multipet", //
        id: "PD009",
      },
      {
        title: "Electronic Ball",
        id: "PD006",
      },
      {
        title: "Nylabone",
        id: "PD004",
      },
      {
        title: "Boosters",
        id: "PD003",
      },
    ],
  },
];
export const IMAGE_URL = (id: string, quality: number = 800) =>
  `https://res.cloudinary.com/ddi3hd3cx/image/upload/w_${quality}/v1706736360/monito/${id}.jpg`;
