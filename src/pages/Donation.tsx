import { useState } from 'react';

export default function Donation() {
  const [amount, setAmount] = useState(100);
  const [loading, setLoading] = useState(false);

  const loadRazorpay = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => handleDonate();
    document.body.appendChild(script);
  };

  const handleDonate = async () => {
    setLoading(true);
    const res = await fetch("/api/donate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const data = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID, // from .env
      amount: data.amount,
      currency: "INR",
      name: "Ayyappa Swamy Temple",
      description: "Donation",
      order_id: data.id,
      handler: function (response: any) {
        alert("Donation successful! Thank you!");
        // optionally send confirmation to backend
      },
      theme: { color: "#cd8500" },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#cd8500]">Donate to the Temple</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="w-full border p-2 mb-4 rounded"
        placeholder="Enter amount"
      />
      <button
        onClick={loadRazorpay}
        className="w-full bg-[#cd8500] text-white py-2 rounded hover:bg-orange-700 transition"
        disabled={loading}
      >
        {loading ? "Processing..." : "Donate Now"}
      </button>
    </div>
  );
}
