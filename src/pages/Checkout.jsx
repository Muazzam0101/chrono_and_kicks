import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <main className="max-w-7xl mx-auto px-margin py-xl flex flex-col md:flex-row gap-gutter w-full">
      {/* Left Column: Checkout Forms */}
      <div className="flex-grow space-y-lg">
        <h1 className="font-h2 text-h2 uppercase mb-lg">CHECKOUT</h1>
        
        {/* Shipping Information */}
        <section className="bg-white border-4 border-black p-lg space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
            <h2 className="font-h3 text-h3 uppercase">01 SHIPPING INFORMATION</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="font-label-caps text-label-caps uppercase">Full Name</label>
              <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-neutral-400" placeholder="JOHN DOE" type="text" />
            </div>
            
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="font-label-caps text-label-caps uppercase">Address</label>
              <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-neutral-400" placeholder="123 BRUTALIST AVENUE" type="text" />
            </div>
            
            <div className="flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps uppercase">City</label>
              <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-neutral-400" placeholder="METROPOLIS" type="text" />
            </div>
            
            <div className="flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps uppercase">Zip Code</label>
              <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-neutral-400" placeholder="101010" type="text" />
            </div>
            
            <div className="flex flex-col gap-xs md:col-span-2">
              <label className="font-label-caps text-label-caps uppercase">Country</label>
              <select className="bg-white border-[3px] border-black p-sm font-bold uppercase appearance-none">
                <option>UNITED STATES</option>
                <option>GERMANY</option>
                <option>JAPAN</option>
              </select>
            </div>
          </div>
        </section>

        {/* Billing Information */}
        <section className="bg-white border-4 border-black p-lg space-y-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-3xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>receipt</span>
              <h2 className="font-h3 text-h3 uppercase">02 BILLING</h2>
            </div>
            <label className="flex items-center gap-sm cursor-pointer group">
              <div className="relative">
                <input className="peer sr-only" type="checkbox" defaultChecked />
                <div className="w-6 h-6 border-[3px] border-black bg-white peer-checked:bg-black flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-sm hidden peer-checked:block" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
                </div>
              </div>
              <span className="font-label-caps text-xs uppercase">SAME AS SHIPPING</span>
            </label>
          </div>
        </section>

        {/* Payment Method */}
        <section className="bg-white border-4 border-black p-lg space-y-md">
          <div className="flex items-center gap-sm">
            <span className="material-symbols-outlined text-3xl font-black" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            <h2 className="font-h3 text-h3 uppercase">03 PAYMENT METHOD</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            <label className="border-4 border-black p-md cursor-pointer bg-secondary-container hover:bg-yellow-400 neobrutal-shadow active-press flex flex-col items-center gap-sm">
              <input className="sr-only peer" name="payment" type="radio" defaultChecked />
              <span className="material-symbols-outlined text-4xl">credit_card</span>
              <span className="font-label-caps uppercase">CARD</span>
            </label>
            <label className="border-4 border-black p-md cursor-pointer bg-white hover:bg-neutral-100 neobrutal-shadow active-press flex flex-col items-center gap-sm">
              <input className="sr-only peer" name="payment" type="radio" />
              <span className="material-symbols-outlined text-4xl">account_balance_wallet</span>
              <span className="font-label-caps uppercase">PAYPAL</span>
            </label>
            <label className="border-4 border-black p-md cursor-pointer bg-white hover:bg-neutral-100 neobrutal-shadow active-press flex flex-col items-center gap-sm">
              <input className="sr-only peer" name="payment" type="radio" />
              <span className="material-symbols-outlined text-4xl">qr_code_2</span>
              <span className="font-label-caps uppercase">UPI</span>
            </label>
          </div>

          <div className="mt-md space-y-md">
            <div className="flex flex-col gap-xs">
              <label className="font-label-caps text-label-caps uppercase">Card Number</label>
              <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-zinc-400" placeholder="XXXX XXXX XXXX XXXX" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-md">
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps uppercase">Expiry Date</label>
                <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-zinc-400" placeholder="MM/YY" type="text" />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-caps text-label-caps uppercase">CVV</label>
                <input className="bg-white border-[3px] border-black p-sm font-bold uppercase placeholder:text-zinc-400" placeholder="XXX" type="text" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Column: Order Summary */}
      <aside className="w-full md:w-[400px]">
        <div className="sticky top-28 bg-white border-4 border-black p-lg neobrutal-shadow-lg space-y-lg">
          <h2 className="font-h3 text-h3 uppercase border-b-4 border-black pb-sm">ORDER SUMMARY</h2>
          
          {/* Product List */}
          <ul className="space-y-md">
            <li className="flex gap-md items-center">
              <div className="w-20 h-20 border-[3px] border-black flex-shrink-0">
                <img className="w-full h-full object-cover" alt="Red Sneaker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYhuW7NcM10o0VNDkCaAFOeBlFzxFaD3mhSiQh-6V9LJtCwPeADMf8jB2-Jy_0kSKdxmWKjgU4eRzvGbfU1FwZT-rT9oGcs879xBv92gkz2MWeo0C9bgSbtl8q1AQuDLtAAiTylLdgeetQ-MvYLlM_SgKoWo03JrBfwhbO0H541kcIVKU4pEBx0NOa4UtJAMjkC2v2K2SkJp_agw5vMn0-ncraeFdPsSz_dmxo7lkhvSkN_U_Q02vRBZYoZ9ufveDeCr5WTLEhio96" />
              </div>
              <div className="flex-grow">
                <p className="font-bold uppercase text-body-md leading-none">BOLT RUNNER X2</p>
                <p className="font-label-caps text-xs text-neutral-500 uppercase">SIZE: 10 / RED</p>
              </div>
              <p className="font-black text-body-lg">$189.00</p>
            </li>
            <li className="flex gap-md items-center">
              <div className="w-20 h-20 border-[3px] border-black flex-shrink-0">
                <img className="w-full h-full object-cover" alt="Chronograph Watch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHNSEBNUnPfEex60buVNNTWQeQXK8LS1ojfv2Z-DuOPKjxeMsFYI-huoPhp3hID1b-iijVXvhq0q2VxlHreHLpELt8OfAOj1MzHyEV-dHEs-Zp1fc3q7ZZv18pueebmAOlrHotUyv6y_B1DcwImzTh8kqu383WuubP02MPMOxnnavWRgGVnuBrddbfdQFwTBGq7QTdCrvCwFaQuhE_pKCbKWHXbFje646gEqOkSl80Lhe_WrrYqkMvqr2LVFLWVAkzkWHzzFq3qUIA" />
              </div>
              <div className="flex-grow">
                <p className="font-bold uppercase text-body-md leading-none">AERO CHRONO 44</p>
                <p className="font-label-caps text-xs text-neutral-500 uppercase">BLACK LEATHER</p>
              </div>
              <p className="font-black text-body-lg">$450.00</p>
            </li>
          </ul>

          {/* Calculations */}
          <div className="border-t-4 border-black pt-md space-y-sm">
            <div className="flex justify-between font-label-caps uppercase">
              <span>SUBTOTAL</span>
              <span>$639.00</span>
            </div>
            <div className="flex justify-between font-label-caps uppercase text-green-600">
              <span>SHIPPING</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between font-label-caps uppercase">
              <span>TAX (8%)</span>
              <span>$51.12</span>
            </div>
          </div>

          <div className="bg-black text-white p-md flex justify-between items-end">
            <span className="font-label-caps text-xs uppercase">TOTAL AMOUNT DUE:</span>
            <span className="font-h2 text-h2 leading-none">$690.12</span>
          </div>

          <button className="w-full py-6 bg-secondary-container text-black font-h2 text-h3 border-4 border-black neobrutal-shadow active-press uppercase tracking-widest hover:bg-yellow-400 transition-none">
            PLACE ORDER
          </button>
          
          <p className="text-center font-label-caps text-[10px] uppercase text-neutral-400">
            BY CLICKING PLACE ORDER, YOU AGREE TO OUR TERMS OF WARFARE.
          </p>
        </div>
      </aside>
    </main>
  );
}
