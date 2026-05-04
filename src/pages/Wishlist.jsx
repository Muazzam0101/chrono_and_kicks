import { Link } from 'react-router-dom';

export default function Wishlist() {
  return (
    <main className="min-h-screen px-4 md:px-8 py-8 max-w-[1440px] mx-auto w-full">
      {/* Wishlist Header */}
      <section className="mb-12 border-b-4 border-black pb-4">
        <h1 className="font-h1 text-h1 uppercase text-black">YOUR WISHLIST</h1>
        <p className="font-label-caps text-label-caps mt-2 bg-black text-white inline-block px-4 py-1">8 ITEMS SAVED FOR LATER</p>
      </section>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1 */}
        <div className="bg-white border-4 border-black neobrutal-shadow flex flex-col group hover-lift transition-all">
          <div className="relative border-b-4 border-black aspect-square overflow-hidden bg-surface-container">
            <img className="w-full h-full object-cover" alt="AEROFLIGHT V1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq8Vt9CCpvrUpa9W4U6_VGfkg_SHj525OGlIbSAbDomHiDItpwCYoBbSYCtVk0waYv1kRgWonGer2cQpW33WAHnaN5FD9c8-43KUZBOt5CzdmbqfimMd8mRDbzHRLavw3oHRKs5nCJTHOrRq9daBwcmCn9bqqQjJy_Y73OZysxa5fcjQyL8kLtb7W2GWo8YySlS3PPdOtR6B5p7e5wCNBc26X0R6N4lx4NxDaalqAlwTBmG70_B_cKaRZPzB9w8b5gBymbT8Kq_V0z"/>
            <div className="absolute top-4 left-4 bg-red-600 text-white font-bold px-3 py-1 border-2 border-black">NEW</div>
            <button className="absolute top-4 right-4 bg-white border-2 border-black p-1 active-press hover:bg-red-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
            </button>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-h3 text-xl uppercase mb-1">AEROFLIGHT V1</h3>
              <p className="font-body-lg text-lg mb-4">$245.00</p>
            </div>
            <button className="w-full bg-secondary-container text-black font-h3 text-xl py-3 border-4 border-black neobrutal-shadow-sm active-press uppercase">
              MOVE TO CART
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-surface border-4 border-black neobrutal-shadow flex flex-col group hover-lift transition-all">
          <div className="relative border-b-4 border-black aspect-square overflow-hidden bg-surface-container-highest">
            <img className="w-full h-full object-cover" alt="CHRONO DARK-X" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJoWdLMv7huNNh0ecXMxv_0C1HZPeoY9XQyXwZ-hzWsoGcUfrGKfBQlt_vjstPNNUMIxromrgW62Lv9FMC7JXBVhchdXEXBFpWPg40nInfMOq1IQ31McpE8IWGIAnR6UltcNw2vIYNd3LHAVrChq1tF2P68o9YNsCZNxAZXebebmj8ZDOKaXKVAL1xKkGva0kAXc_QL4QF3htgFBwU3sboesOwQNVMyMz4OotD4X0yLUssS1MKW28VkHrEjejECNET2DJplZWfWzyv"/>
            <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 border-2 border-black">HOT</div>
            <button className="absolute top-4 right-4 bg-white border-2 border-black p-1 active-press hover:bg-red-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
            </button>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-h3 text-xl uppercase mb-1">CHRONO DARK-X</h3>
              <p className="font-body-lg text-lg mb-4">$1,190.00</p>
            </div>
            <button className="w-full bg-secondary-container text-black font-h3 text-xl py-3 border-4 border-black neobrutal-shadow-sm active-press uppercase">
              MOVE TO CART
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-yellow-400 border-4 border-black neobrutal-shadow flex flex-col group hover-lift transition-all">
          <div className="relative border-b-4 border-black aspect-square overflow-hidden bg-white">
            <img className="w-full h-full object-cover" alt="LEGACY HI-TOP" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIFN45pi2Gapr_dmhxbYo-cQBc6rAULQlFPIH70vBBQjAc3KRfMlcRGR9TuLbRXHgsizb-MV5w9EBPDA1Y1kIcACIOfExIk5nFR-G6_DlHu46wtgL5hSb43ElRyqxg70uOWAQPa4bIDL_mlRcKeUog0F1sdcIaxr3PfGiCm5HkrSExfmEjn-m2AS7nTViuBSRw5Dlwa31JTr3lykqXBPUkTcXwZmmXwSZT-MjSDipjIpaUCaYpPHaWDrqjp2QXAfkU_o5c4P1ICnRW"/>
            <div className="absolute top-4 left-4 bg-black text-white font-bold px-3 py-1 border-2 border-white">SALE</div>
            <button className="absolute top-4 right-4 bg-white border-2 border-black p-1 active-press hover:bg-red-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
            </button>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-h3 text-xl uppercase mb-1">LEGACY HI-TOP</h3>
              <div className="flex items-center gap-2 mb-4">
                <p className="font-body-lg text-lg">$165.00</p>
                <p className="font-body-md text-sm line-through opacity-60">$210.00</p>
              </div>
            </div>
            <button className="w-full bg-black text-white font-h3 text-xl py-3 border-4 border-white neobrutal-shadow-sm active-press uppercase">
              MOVE TO CART
            </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border-4 border-black neobrutal-shadow flex flex-col group hover-lift transition-all">
          <div className="relative border-b-4 border-black aspect-square overflow-hidden bg-surface-container-low">
            <img className="w-full h-full object-cover" alt="SOLAR CORE Y2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIzonyrK_tocQLEiXObtiqiWfOpesMXGscJ-r4jTFjiQjbZhL0oZ8fKqZaeMxaF9nkobCCfLU6qMI3AJShepqGSJUco6K56jMhY5Y4-cXK9o_Y222p3wT8wfuecDhmMy3Bx2k6IQYZHqkS_gx_Y1kdyrr4Yhy1FGZfWb61-VtFVtwq34bBw7V3JwELkk4ZMDmkj2jsVHVlyrDYB2nnS-EEjVgMJUCPz-J02jRl1EVPp_Dy6np2DRSpW5cQsfRV3ugCl9xXvVbWcWRw"/>
            <button className="absolute top-4 right-4 bg-white border-2 border-black p-1 active-press hover:bg-red-500 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>close</span>
            </button>
          </div>
          <div className="p-4 flex-grow flex flex-col justify-between">
            <div>
              <h3 className="font-h3 text-xl uppercase mb-1">SOLAR CORE Y2</h3>
              <p className="font-body-lg text-lg mb-4">$310.00</p>
            </div>
            <button className="w-full bg-secondary-container text-black font-h3 text-xl py-3 border-4 border-black neobrutal-shadow-sm active-press uppercase">
              MOVE TO CART
            </button>
          </div>
        </div>
      </div>

      {/* Pagination or Load More */}
      <div className="mt-20 flex justify-center">
        <button className="bg-primary text-white font-h2 text-h3 px-12 py-6 border-4 border-black neobrutal-shadow active-press-lg uppercase">
          LOAD MORE SAVED ITEMS
        </button>
      </div>
    </main>
  );
}
