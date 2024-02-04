export const categoryLinks = [
  {
    title: "Popular",
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
        title: "Beagle Boo",
        id: "MO542",
      },
      {
        title: "Husky",
        id: "MO007",
      },
      {
        title: "Samoyed",
        id: "MO008",
      },
      {
        title: "Labrador",
        id: "MO009",
      },
      {
        title: "Tosa",
        id: "MO010",
      },
      {
        title: "Dachshund",
        id: "MO011",
      },
      {
        title: "French Bulldog",
        id: "MO012",
      },
      {
        title: "Pomeranian Brown", //
        id: "MO235",
      },
    ],
  },
  {
    title: "Large Dog",
    id: "MO014",
    subLinks: [
      {
        title: "Akita",
        id: "MO015",
      },
      {
        title: "Alaskan Malamute",
        id: "MO016",
      },
      {
        title: "Bernese Moutain",
        id: "MO017",
      },
      {
        title: "Bloodhound",
        id: "MO018",
      },
      {
        title: "Bullmastiff",
        id: "MO019",
      },
      {
        title: "Cane Corso",
        id: "MO020",
      },
    ],
  },
  {
    title: "Small Dog",
    id: "MO021",
    subLinks: [
      {
        title: "Poodle Tiny", //
        id: "MO502",
      },
      {
        title: "Poodle", //
        id: "MO102",
      },
      {
        title: "Poodle", //
        id: "MO541",
      },
      {
        title: "Chihuahua",
        id: "MO025",
      },
      {
        title: "Cocker Spaniel",
        id: "MO026",
      },
      {
        title: "Dachshund",
        id: "MO027",
      },
    ],
  },
];
export const IMAGE_URL = (id: string, quality: number = 800) =>
  `https://res.cloudinary.com/ddi3hd3cx/image/upload/w_${quality}/v1706736360/monito/${id}.jpg`;
