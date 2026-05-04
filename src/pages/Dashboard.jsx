import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-background w-full">
      {/* SideNavBar */}
      <aside className="hidden md:flex flex-col min-h-full w-64 bg-white border-r-4 border-black shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] z-20">
        <div className="p-6 border-b-4 border-black">
          <h1 className="text-xl font-black uppercase font-h3 tracking-tighter">DASHBOARD</h1>
          <p className="text-sm font-bold text-gray-600">USER_0842</p>
        </div>
        <nav className="flex-grow flex flex-col">
          {/* ORDERS (Active) */}
          <Link to="/dashboard" className="flex items-center space-x-3 p-4 bg-orange-500 text-black border-2 border-black font-black active-press hover:bg-yellow-400 hover:text-black transition-colors m-2">
            <span className="material-symbols-outlined">package_2</span>
            <span className="font-bold uppercase">ORDERS</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-3 p-4 text-black border-b-2 border-transparent hover:border-black active-press hover:bg-yellow-400 hover:text-black transition-colors m-2">
            <span className="material-symbols-outlined">person</span>
            <span className="font-bold uppercase">PROFILE</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-3 p-4 text-black border-b-2 border-transparent hover:border-black active-press hover:bg-yellow-400 hover:text-black transition-colors m-2">
            <span className="material-symbols-outlined">location_on</span>
            <span className="font-bold uppercase">ADDRESSES</span>
          </Link>
          <Link to="/login" className="flex items-center space-x-3 p-4 text-black border-t-4 border-black mt-auto active-press hover:bg-red-500 hover:text-white transition-colors bg-surface-container">
            <span className="material-symbols-outlined">logout</span>
            <span className="font-bold uppercase">LOGOUT</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-grow p-6 md:p-12 space-y-12 overflow-y-auto">
        {/* Dashboard Header */}
        <header className="mb-12">
          <div className="inline-block bg-primary text-white p-6 border-4 border-black neobrutal-shadow-lg">
            <h2 className="font-h2 uppercase">YOUR ACCOUNT / USER_0842</h2>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Profile Section (Left Column) */}
          <section className="lg:col-span-4 space-y-6">
            <div className="bg-white border-4 border-black p-6 neobrutal-shadow">
              <h3 className="font-h3 uppercase mb-6 border-b-4 border-black pb-2 inline-block">PROFILE</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="font-label-caps uppercase block">FULL NAME</label>
                  <input className="w-full border-2 border-black p-3 bg-white focus:border-4 focus:bg-yellow-50 outline-none font-bold uppercase" type="text" defaultValue="ALEX RIVERA" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps uppercase block">EMAIL ADDRESS</label>
                  <input className="w-full border-2 border-black p-3 bg-white focus:border-4 focus:bg-yellow-50 outline-none font-bold uppercase" type="email" defaultValue="alex_0842@kickntick.com" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-caps uppercase block">PHONE</label>
                  <input className="w-full border-2 border-black p-3 bg-white focus:border-4 focus:bg-yellow-50 outline-none font-bold uppercase" type="text" defaultValue="+1 (555) 094-8822" />
                </div>
                <button className="w-full bg-secondary-container text-black border-4 border-black p-4 font-black uppercase neobrutal-shadow active-press hover:bg-yellow-400 mt-4">
                  SAVE CHANGES
                </button>
              </div>
            </div>

            {/* Addresses Section */}
            <div className="space-y-4 mt-8">
              <h3 className="font-h3 uppercase">ADDRESSES</h3>
              <div className="grid grid-cols-1 gap-4">
                {/* Address Card 1 */}
                <div className="bg-surface-container-low border-4 border-black p-4 neobrutal-shadow -rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="bg-black text-white px-2 py-1 text-xs font-black uppercase mb-2 inline-block">DEFAULT</span>
                    <div className="flex space-x-2">
                      <button className="border-2 border-black p-1 hover:bg-primary hover:text-white transition-colors bg-white">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="border-2 border-black p-1 hover:bg-red-500 hover:text-white transition-colors bg-white">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">124 BRUTALIST WAY, APT 4B</p>
                  <p className="font-bold">NEW YORK, NY 10001</p>
                </div>
                {/* Address Card 2 */}
                <div className="bg-white border-4 border-black p-4 neobrutal-shadow rotate-1 hover:rotate-0 transition-transform cursor-pointer">
                  <div className="flex justify-between items-start">
                    <span className="bg-gray-200 text-black px-2 py-1 text-xs font-black uppercase mb-2 inline-block">OFFICE</span>
                    <div className="flex space-x-2">
                      <button className="border-2 border-black p-1 hover:bg-primary hover:text-white transition-colors bg-white">
                        <span className="material-symbols-outlined text-sm">edit</span>
                      </button>
                      <button className="border-2 border-black p-1 hover:bg-red-500 hover:text-white transition-colors bg-white">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">44 TECH PLAZA, FLOOR 12</p>
                  <p className="font-bold">SAN FRANCISCO, CA 94105</p>
                </div>
              </div>
              <button className="w-full border-4 border-dashed border-black p-4 font-black uppercase hover:bg-surface-container-high transition-colors bg-white mt-4">
                + ADD NEW ADDRESS
              </button>
            </div>
          </section>

          {/* Orders Section (Right Column) */}
          <section className="lg:col-span-8">
            <div className="bg-white border-4 border-black neobrutal-shadow overflow-hidden">
              <div className="p-6 bg-black text-white flex justify-between items-center">
                <h3 className="font-h3 uppercase">RECENT ORDERS</h3>
                <button className="bg-secondary text-black px-4 py-2 font-black border-2 border-white hover:bg-yellow-400 transition-colors bg-white">VIEW ALL</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-4 border-black bg-surface-container">
                      <th className="p-4 font-black uppercase border-r-4 border-black">ORDER ID</th>
                      <th className="p-4 font-black uppercase border-r-4 border-black">DATE</th>
                      <th className="p-4 font-black uppercase border-r-4 border-black">STATUS</th>
                      <th className="p-4 font-black uppercase">TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b-2 border-black hover:bg-yellow-50 bg-white">
                      <td className="p-4 font-bold border-r-2 border-black">#KT-9821</td>
                      <td className="p-4 font-bold border-r-2 border-black">OCT 12, 2023</td>
                      <td className="p-4 border-r-2 border-black">
                        <span className="bg-green-400 text-black px-3 py-1 border-2 border-black font-black text-xs">SHIPPED</span>
                      </td>
                      <td className="p-4 font-black text-lg">$249.00</td>
                    </tr>
                    <tr className="border-b-2 border-black translate-x-1 translate-y-1 bg-surface-container-low hover:bg-yellow-50 relative z-10 shadow-[-4px_-4px_0px_#000]">
                      <td className="p-4 font-bold border-r-2 border-black">#KT-9744</td>
                      <td className="p-4 font-bold border-r-2 border-black">OCT 05, 2023</td>
                      <td className="p-4 border-r-2 border-black">
                        <span className="bg-blue-400 text-black px-3 py-1 border-2 border-black font-black text-xs">DELIVERED</span>
                      </td>
                      <td className="p-4 font-black text-lg">$89.50</td>
                    </tr>
                    <tr className="border-b-2 border-black hover:bg-yellow-50 bg-white">
                      <td className="p-4 font-bold border-r-2 border-black">#KT-9602</td>
                      <td className="p-4 font-bold border-r-2 border-black">SEP 22, 2023</td>
                      <td className="p-4 border-r-2 border-black">
                        <span className="bg-orange-400 text-black px-3 py-1 border-2 border-black font-black text-xs">PENDING</span>
                      </td>
                      <td className="p-4 font-black text-lg">$1,204.00</td>
                    </tr>
                    <tr className="border-b-2 border-black -translate-x-1 bg-white hover:bg-yellow-50 relative z-10 shadow-[4px_4px_0px_#000]">
                      <td className="p-4 font-bold border-r-2 border-black">#KT-9488</td>
                      <td className="p-4 font-bold border-r-2 border-black">SEP 15, 2023</td>
                      <td className="p-4 border-r-2 border-black">
                        <span className="bg-red-400 text-white px-3 py-1 border-2 border-black font-black text-xs">CANCELLED</span>
                      </td>
                      <td className="p-4 font-black text-lg">$45.00</td>
                    </tr>
                    <tr className="hover:bg-yellow-50 bg-white">
                      <td className="p-4 font-bold border-r-2 border-black">#KT-9311</td>
                      <td className="p-4 font-bold border-r-2 border-black">AUG 28, 2023</td>
                      <td className="p-4 border-r-2 border-black">
                        <span className="bg-blue-400 text-black px-3 py-1 border-2 border-black font-black text-xs">DELIVERED</span>
                      </td>
                      <td className="p-4 font-black text-lg">$312.20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Marketing / Upsell Card */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-tertiary-container text-white border-4 border-black p-6 neobrutal-shadow relative overflow-hidden group hover:bg-red-700 transition-colors">
                <div className="relative z-10">
                  <h4 className="font-h3 uppercase mb-2">LOYALTY REWARDS</h4>
                  <p className="font-bold text-lg mb-4">YOU HAVE 450 POINTS</p>
                  <button className="bg-white text-black px-6 py-3 border-4 border-black font-black active-press uppercase hover:bg-yellow-400 transition-colors">REDEEM NOW</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-20 group-hover:scale-110 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              
              <div className="bg-secondary-container text-black border-4 border-black p-6 neobrutal-shadow relative overflow-hidden group hover:bg-yellow-500 transition-colors">
                <div className="relative z-10">
                  <h4 className="font-h3 uppercase mb-2">REFER A FRIEND</h4>
                  <p className="font-bold text-lg mb-4">GET $20 FOR EACH REFERRAL</p>
                  <button className="bg-black text-white px-6 py-3 border-4 border-black font-black active-press uppercase hover:bg-gray-800 transition-colors">GET LINK</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-20 group-hover:rotate-12 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
              </div>
            </div>
          </section>
        </div>

        {/* Promotional Banner */}
        <section className="mt-12 bg-white border-4 border-black neobrutal-shadow flex flex-col md:flex-row">
          <div className="md:w-1/3 border-b-4 md:border-b-0 md:border-r-4 border-black bg-yellow-400 flex items-center justify-center p-8">
            <img className="w-full aspect-square object-cover border-4 border-black neobrutal-shadow" alt="Promo Sneaker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_MGIL947DJwrl3NYNj9nyxen3LuXKMeyWXWdRGIJg53olVime9d-GyIbNxtXmhgyl5lYWEhR99qb0S0IfOrYr2xTzy8fXhqI1-rR2KjBstFoSOxJlh1iseXl9NOk4iFlHLloTEyK0n8e_LQ8JBabv0fQsGDOjZ9f9-QT1-_LPDoZ3AlNG9EXeKTr9-EG4kQn-wnx64JIQ8XhEGRb0HZkmzOpKDOldq0FFeMyWH1KRh1mDBBtPsE9b3F4skl2ZmRQihz17oH4INtw"/>
          </div>
          <div className="md:w-2/3 p-8 flex flex-col justify-center space-y-6">
            <span className="bg-primary text-white px-4 py-1 font-black uppercase w-fit border-2 border-black">MEMBERS EXCLUSIVE</span>
            <h2 className="font-h2 uppercase">GET 30% OFF YOUR NEXT ORDER WITH CODE 'BRUTAL30'</h2>
            <p className="font-body-lg uppercase max-w-xl">USE YOUR ACCOUNT STATUS TO UNLOCK PREMIUM ACCESS TO THE NEW DROP ARRIVING NEXT WEEK.</p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black text-white px-8 py-4 border-4 border-black font-black active-press uppercase text-xl hover:bg-gray-800 transition-colors">SHOP NOW</button>
              <button className="bg-white text-black px-8 py-4 border-4 border-black font-black active-press uppercase text-xl hover:bg-gray-100 transition-colors">DETAILS</button>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile Navigation (Bottom) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t-4 border-black flex justify-around p-4 z-50">
        <Link to="/dashboard" className="flex flex-col items-center text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
          <span className="text-[10px] font-black uppercase mt-1">ORDERS</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center text-black hover:text-primary">
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-black uppercase mt-1">PROFILE</span>
        </Link>
        <Link to="/dashboard" className="flex flex-col items-center text-black hover:text-primary">
          <span className="material-symbols-outlined">location_on</span>
          <span className="text-[10px] font-black uppercase mt-1">ADDRESS</span>
        </Link>
        <Link to="/login" className="flex flex-col items-center text-black hover:text-primary">
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[10px] font-black uppercase mt-1">LOGOUT</span>
        </Link>
      </nav>
    </div>
  );
}
