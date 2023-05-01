export default function Checkout({ clearCart }) {

    const checkSubmit = () => {
        //e.preventDefault();
        clearCart();
        alert("You have adopted birds. Thank you!");
    };

    return (
        <div className="Checkout">
        <h1>Checkout</h1>
            <form onSubmit={checkSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required></input>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required></input>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required></input>
                <label htmlFor="zipCode">Zip Code</label>
                <input type="number" id="zipCode" name="zipCode" required></input>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}