import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/payment/CheckoutForm";


// TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    // const total = cart.reduce((sum, item) => sum + item.price, 0);
    // const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Payment</h2>
            <Elements stripe={stripePromise}>
                {/* <CheckoutForm cart={cart} price={price}/> */}
            </Elements>
        </div>
    );
};

export default Payment;