import { loadStripe } from "@stripe/stripe-js"

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      "pk_test_51HvYc6H6evTvUWZmJ0nW13k5njBLR9qiy9SpX7KHcEjswQnuxWcjKKhM6a52PmbdmkAxE0wSdQX1ZshCWNbLuWNb00YicF7Etn"
    )
  }
  return stripePromise
}

export default getStripe
