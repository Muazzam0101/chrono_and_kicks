import { Link } from 'react-router-dom';

export default function Cart() {
  return (
    <main className="mt-16 mb-20 px-8 max-w-7xl mx-auto w-full">
      <h1 className="font-h1 text-h1 mb-12 uppercase">YOUR CART</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items List */}
        <div className="lg:col-span-8 space-y-8">
          {/* Item 1 */}
          <div className="bg-white border-4 border-black neobrutal-shadow flex flex-col md:flex-row p-6 gap-6 items-center">
            <div className="w-full md:w-48 h-48 border-4 border-black shrink-0 overflow-hidden">
              <img className="w-full h-full object-cover" alt="NEO-STOMPER V1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_PWctsbSu9Rrpx6Gkbl5SDiNoAlj1mfyGBZoi_nAMeXBEDsx0LiuUK8gHviYkooaBqcDXCAODMGYlbv3y9CYcAI-ssHMxU6bQixXMaN9khmn3rPxgmuA5dzo-zRmHOxS2k2VxjR1Egi05VW5Fl8wypPhEvbJu7I9DyB2cztEtDzf5yUiS83cZgjU3tLYUfDH0KhYg-QZby7EtN0fnDJQE2HthhV3f0gvJvHRTNkSFMDVjTFB0T-IOPVPFGV12SRttEr3URANN3xnj"/>
            </div>
            <div className="flex-grow w-full flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-h3 text-h3 uppercase leading-none">NEO-STOMPER V1</h3>
                  <p className="font-label-caps text-label-caps text-zinc-500 mt-2">SIZE: 42 | COLOR: VOLT RED</p>
                </div>
                <span className="font-h3 text-h3">$249.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex border-4 border-black">
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-r-4 border-black transition-colors">-</button>
                  <div className="w-12 h-12 flex items-center justify-center font-black text-xl bg-white">1</div>
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-l-4 border-black transition-colors">+</button>
                </div>
                <button className="bg-white border-4 border-black px-6 py-2 font-black uppercase tracking-tight hover:bg-black hover:text-white transition-all neobrutal-shadow active-press">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
          
          {/* Item 2 */}
          <div className="bg-white border-4 border-black neobrutal-shadow flex flex-col md:flex-row p-6 gap-6 items-center">
            <div className="w-full md:w-48 h-48 border-4 border-black shrink-0 overflow-hidden">
              <img className="w-full h-full object-cover" alt="RAW TECH-TEE" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtuQsI_EcizSf1u93NIc8cVpHSeAck8cbH58vSXLUIhwQW1hWGJqv2IooCDEdtWFj9eRxuhqssqQDqKcnER4mQVPZMWYatusdO6960wZXiKNMS3GwgQzWhubYQIrtDRJpqNfw2OeR6xdFdc21qSjYZSaY08SaGWRttzxjDQfetvxlWzc0EBKnWwXZzDA9AKgzmS3KSzW-vxhCOavtzOjdO-oEYeLSma0l5xZQq3k5XVPGmM_Be3_ZXqiQv0YQ04o1ryW9iP3GVIeL3"/>
            </div>
            <div className="flex-grow w-full flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-h3 text-h3 uppercase leading-none">RAW TECH-TEE</h3>
                  <p className="font-label-caps text-label-caps text-zinc-500 mt-2">SIZE: L | COLOR: ARCHIVE WHITE</p>
                </div>
                <span className="font-h3 text-h3">$85.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex border-4 border-black">
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-r-4 border-black transition-colors">-</button>
                  <div className="w-12 h-12 flex items-center justify-center font-black text-xl bg-white">2</div>
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-l-4 border-black transition-colors">+</button>
                </div>
                <button className="bg-white border-4 border-black px-6 py-2 font-black uppercase tracking-tight hover:bg-black hover:text-white transition-all neobrutal-shadow active-press">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="bg-white border-4 border-black neobrutal-shadow flex flex-col md:flex-row p-6 gap-6 items-center">
            <div className="w-full md:w-48 h-48 border-4 border-black shrink-0 overflow-hidden">
              <img className="w-full h-full object-cover" alt="VOID CARRIER" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuCq0_lLDyMfwDeGf2_A4RtLgKXh9i6PnpXk8_1sQcbLjeDGqCfamQUKy0WnnMYU2wyK13DzXX8F9l1wNN0aGxGAz1ZqoqKx7XSYxmLRYkgkBprlmtX_Mist5Bjd5Gk6xlNz9rC_ORh_0kmjZQ38ULj5h_k_CMNVJmpbcfkgbOE9N9ePxox2uM3MeEU4OJiSZZkbs_0pTJF94_LSMoukBMo-tuxK_HebNWAE03oDSZczuYRrhzCZ2DWkV8Ozvg-zGt4CPHaYUCxui9"/>
            </div>
            <div className="flex-grow w-full flex flex-col justify-between h-full space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-h3 text-h3 uppercase leading-none">VOID CARRIER</h3>
                  <p className="font-label-caps text-label-caps text-zinc-500 mt-2">ONE SIZE | COLOR: MATTE VOID</p>
                </div>
                <span className="font-h3 text-h3">$120.00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex border-4 border-black">
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-r-4 border-black transition-colors">-</button>
                  <div className="w-12 h-12 flex items-center justify-center font-black text-xl bg-white">1</div>
                  <button className="w-12 h-12 flex items-center justify-center font-black text-2xl hover:bg-secondary-container active:bg-black active:text-white border-l-4 border-black transition-colors">+</button>
                </div>
                <button className="bg-white border-4 border-black px-6 py-2 font-black uppercase tracking-tight hover:bg-black hover:text-white transition-all neobrutal-shadow active-press">
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white border-4 border-black neobrutal-shadow-lg p-8 sticky top-32">
            <h2 className="font-h3 text-h3 mb-8 uppercase border-b-4 border-black pb-4">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="font-bold uppercase">SUBTOTAL</span>
                <span>$539.00</span>
              </div>
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="font-bold uppercase">SHIPPING</span>
                <span>$15.00</span>
              </div>
              <div className="flex justify-between font-body-lg text-body-lg">
                <span className="font-bold uppercase">TAX</span>
                <span>$42.12</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center border-t-4 border-black pt-6 mb-10">
              <span className="text-3xl font-black uppercase">TOTAL</span>
              <span className="text-3xl font-black">$596.12</span>
            </div>
            
            <div className="space-y-4">
              <Link to="/checkout" className="block text-center w-full bg-[#FF0000] text-white border-4 border-black py-6 text-2xl font-black uppercase tracking-widest neobrutal-shadow active-press transition-all hover:bg-red-800">
                CHECKOUT
              </Link>
              <button className="w-full bg-[#fcd400] text-black border-4 border-black py-4 text-lg font-black uppercase tracking-tight neobrutal-shadow active-press transition-all hover:bg-yellow-500">
                PAY WITH PAYPAL
              </button>
            </div>
            
            <div className="mt-8">
              <label className="block font-label-caps text-label-caps mb-2 uppercase">PROMO CODE</label>
              <div className="flex">
                <input className="flex-grow border-4 border-black px-4 py-2 font-bold uppercase focus:bg-secondary-container focus:outline-none placeholder:text-zinc-400" placeholder="ENTER CODE" type="text"/>
                <button className="bg-black text-white px-6 font-black uppercase active:bg-zinc-800 transition-colors">APPLY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
