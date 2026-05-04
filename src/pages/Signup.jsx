import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <main className="flex-grow flex items-center justify-center p-gutter relative overflow-hidden w-full min-h-[80vh]">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 -rotate-12 bg-secondary-container border-4 border-black p-4 font-h3 uppercase neobrutal-shadow-sm select-none hidden lg:block z-0">
        STAY LOUD
      </div>
      <div className="absolute bottom-20 right-10 rotate-6 bg-tertiary-container text-white border-4 border-black p-4 font-h3 uppercase neobrutal-shadow-sm select-none hidden lg:block z-0">
        RAW IMPACT
      </div>

      {/* Signup Container */}
      <div className="relative w-full max-w-xl z-10 mt-10">
        {/* Quirky Sticker */}
        <div className="absolute -top-10 -right-6 z-20 bg-yellow-400 border-4 border-black p-4 rotate-12 neobrutal-shadow-sm">
          <p className="font-label-caps text-black">MEMBER 001</p>
          <p className="font-black text-xl italic uppercase">NEW DROP ACCESS</p>
        </div>

        {/* Main Form Card */}
        <section className="bg-white border-4 border-black p-10 neobrutal-shadow relative z-10">
          <header className="mb-10">
            <h1 className="font-h1 text-black uppercase mb-2">JOIN THE SQUAD.</h1>
            <p className="font-body-lg text-on-surface-variant uppercase">AUTHENTICITY IS NOT OPTIONAL.</p>
          </header>
          
          <form className="space-y-8">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-black uppercase" htmlFor="name">FULL IDENTITY / NAME</label>
              <input className="bg-white border-4 border-black p-6 font-body-lg text-black placeholder:text-zinc-400 transition-all focus:bg-yellow-400 focus:outline-none" id="name" placeholder="TYPE YOUR NAME..." type="text" />
            </div>
            
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-black uppercase" htmlFor="email">COMMUNICATION / EMAIL</label>
              <input className="bg-white border-4 border-black p-6 font-body-lg text-black placeholder:text-zinc-400 transition-all focus:bg-yellow-400 focus:outline-none" id="email" placeholder="YOUR@EMAIL.COM" type="email" />
            </div>
            
            {/* Password Input */}
            <div className="flex flex-col gap-2">
              <label className="font-label-caps text-black uppercase" htmlFor="password">SECRET ACCESS / PASSWORD</label>
              <input className="bg-white border-4 border-black p-6 font-body-lg text-black placeholder:text-zinc-400 transition-all focus:bg-yellow-400 focus:outline-none" id="password" placeholder="••••••••••••" type="password" />
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="w-full bg-secondary-container text-black font-h2 uppercase py-8 border-4 border-black neobrutal-shadow active-press transition-all flex items-center justify-center gap-4 group hover:bg-yellow-400" type="submit">
                CREATE ACCOUNT
                <span className="material-symbols-outlined text-5xl group-hover:translate-x-2 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
              </button>
            </div>
          </form>
          
          <footer className="mt-10 flex flex-col md:flex-row justify-between items-center border-t-4 border-black pt-8 gap-4">
            <p className="font-body-md font-bold uppercase">ALREADY ONE OF US?</p>
            <Link to="/login" className="bg-black text-white px-6 py-2 font-label-caps uppercase hover:bg-primary transition-colors neobrutal-shadow-sm active-press">
              LOGIN NOW
            </Link>
          </footer>
        </section>
      </div>
    </main>
  );
}
