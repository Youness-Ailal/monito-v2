import { loadStripe } from "@stripe/stripe-js";
const KEY =
  "pk_test_51O6xToGO0uX1lkUYGeUfOo4Er1HVlK4qe6kODVByl4aIWwbl7lI0O0ZfzlFlmpn4eiKLJqa8ZATGv2mywYtgWW3n008O7XYPFf";

const stripePromise = loadStripe(KEY);

export default stripePromise;
