export const PRODUCTS: ProductType[] = [
  {
    id: "PD001",
    name: "Authority Everyday Indoor Cat Dry", //
    type: "Cat Food",
    weight: "3.17kg",
    price: 290,
    brand: "Authority",
    gift: "Free Toy & Free Shaker",
    description:
      "Authority Everyday Indoor Cat Dry made with chicken and pumpkin, and feature natural prebiotic fiber to promote good gut health.",
  },
  {
    id: "PD002",
    name: "Simply Nourish Natural Solutions", //
    type: "Dog Food",
    weight: "85g",
    brand: "Simply Nourish",
    price: 49,
    gift: "Free Toy & Free Shaker",
    description:
      "Simply Nourish Natural Solutions Meal Topper Gut Health Recipe Shreds in Broth Meal Complement for Dogs makes any mela better. These shreds in broth are made with chicken and pumpkin, and feature natural prebiotic fiber to promote good gut health. Only at PetSmart",
  },
  {
    id: "PD003",
    name: "Wellness® Bowl Boosters Simply Shreds", //
    type: "Pet Toy",
    weight: "950g",
    brand: "Wellness CORE",
    price: 190,
    gift: "Free Cat Food",
    description:
      "Wellness Bowl Boosters Simply Shreds are made with only five simple, natural ingredients including premium shredded protein and diced veggies. This grain-free, filler-free boost of pure protein is perfect for topping or snacking",
  },
  {
    id: "PD004",
    name: "Nylabone DuraChew Power", //
    type: "Pet Toy",
    weight: "2.6kg",
    brand: "nylabone",
    price: 390,
    gift: "Free Cat Food",
    description:
      "The Nylabone Power Chew Easy-Hold dog chew toy is specially designed with 4 paw grips that fit dogs's paws and allow for comfortable chewing from any angle. These robust chewing ends stand up to the most extreme chewers, keeping dogs engaged and occupied",
  },
  {
    id: "PD005",
    name: "ourish Source Adult Dog Food", //
    type: "Dog Food",
    weight: "10.88 kg",
    price: 650,
    gift: "Free Toy & Free Shaker",
    description:
      "Simply Nourish Source Chicken Recipe Adult Dog Food includes a blend of superfoods like kale, pumpkin, blueberries and other naturally nutritious ingredients, each chosen for their role in supporting skin & coat, digestion and overall health",
  },
  {
    id: "PD006",
    name: "Electronic Ball Launcher", //
    type: "Pet Toy",
    weight: "4.5kg",
    brand: "",
    price: 390,
    gift: "Free Toy & Free Shaker",
    description:
      "Our Joyhound Electronic Ball Launcher Dog Toy signals game-on for interactive fun for you and your dog. This toy allows you to play fetch with the push of a button and choose from three different settings",
  },
  {
    id: "PD007",
    name: "Feast Gravy Lovers All Life Stages",
    type: "Cat Food",
    weight: "450g",
    brand: "Purina Fancy",
    price: 290,
    gift: "Free Toy & Free Shaker",
    description:
      "Delight your cat with an exceptional mealtime experience with Purina Fancy Feast Gravy Lovers Chicken Hearts and Liver Feast Gourmet Cat Food in Wet Cat Food Gravy. Crafted in partnership with our expert nutritionists, this protein-rich",
  },
  {
    id: "PD009",
    name: "Multipet Purple Heart Be Mine Lamb", //
    type: "Dog Toy",
    weight: "900g",
    brand: "Multipet",
    price: 70,
    gift: "Free Dog Food",
    description:
      "Show your furry friend how much you wuff them on Valentine's! The furry friend favorite is cute as ever. This adorable plush Lamb Chop toy has pink paws and ears and is holding a purple heart",
  },
  {
    id: "PD010",
    name: "Kong AirDog Squeaker Toy", //
    type: "Dog Toy",
    weight: "950g",
    brand: "Kong",
    price: 180,
    gift: "Free Dog Food",
    description:
      "The KONG AirDog Squeaker Dumbbell Dog Toy combines two classic dog toys; the tennis ball and the squeaker, to create the perfect fetch toy. Its non-abrasive, high-quality material will not wear down",
  },
  {
    id: "PD014",
    name: "Rachael Ray Nutrish Dry Dog Food", //
    type: "Dog Food",
    weight: "400g",
    brand: "Rachael Ray",
    price: 180,
    gift: "Free Dog Toy",
    description:
      "Rachael Ray Nutrish Real Beef, Pea & Brown Rice Recipe Dry Dog Food, is a delicious, super premium dog food recipe made the Rachael Ray way - with lots of love and only the best",
  },
  {
    id: "PD018",
    name: "Wellness Core Hearty Cuts",
    type: "Dog Food",
    weight: "1.3kg",
    brand: "Wellness",
    price: 480,
    gift: "Free Dog Toy",
    description:
      "Treat your dog to the delicious flavor and nutritional elements in Wellness CORE Hearty Cuts Natural Grain-Free Chicken & Turkey Recipe Dog Food. Your dog will love the flavor of chicken and turkey set in delicious gravy",
  },
];
export type ProductType = {
  id: string;
  name: string;
  type: string;
  weight: string;
  price: number;
  quantity: number;
  gift: string;
  description: string;
};
