export default function OrderSummary() {
  const name = "Wilson's Training Jacket";
  const price = "$10.50";
  return (
    <div className="w-full max-w-xs">
      <h2 className="text-2xl font-bold mb-4">Order summary</h2>
      <div className="flex justify-between mb-2">
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <hr className="mb-4" />
      <div className="flex justify-between font-bold mb-6">
        <p>Total:</p>
        <p>{price}</p>
      </div>
      <button className="w-full bg-gradient-to-r from-[#FFD200] to-[#0064A4] text-white py-2 rounded-md font-semibold">
        Proceed to Payment
      </button>
    </div>
  );
}
