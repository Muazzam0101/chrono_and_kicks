import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="flex-grow flex items-center justify-center p-gutter relative overflow-hidden w-full min-h-[80vh]">
      <div className="absolute top-10 left-10 md:top-20 md:left-20 -rotate-12 bg-secondary-container border-4 border-black px-4 py-2 neobrutal-shadow-sm z-0">
        <p className="font-h3 text-black uppercase m-0 leading-none">JOIN THE PACK</p>
      </div>
      <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 rotate-6 bg-tertiary-container border-4 border-black px-6 py-3 neobrutal-shadow-sm z-0">
        <p className="font-h3 text-white uppercase m-0 leading-none">AUTHENTIC ONLY</p>
      </div>
      
      <div className="relative z-10 w-full max-w-md bg-white border-4 border-black neobrutal-shadow p-8 md:p-10">
        <div className="mb-8">
          <h1 className="font-h2 uppercase text-black mb-2">ACCESS_GATE</h1>
          <p className="font-body-lg text-black uppercase font-black">STRICTLY NO ENTRY FOR THE WEAK.</p>
        </div>
        
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="font-label-caps uppercase text-black" htmlFor="email">USER_IDENTITY (EMAIL)</label>
            <input className="w-full h-16 border-4 border-black bg-white px-4 font-black uppercase text-xl placeholder-stone-400" id="email" placeholder="YOUR@EMAIL.COM" type="email" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-label-caps uppercase text-black" htmlFor="password">SECURITY_CODE (PASSWORD)</label>
            <input className="w-full h-16 border-4 border-black bg-white px-4 font-black uppercase text-xl placeholder-stone-400" id="password" placeholder="********" type="password" />
          </div>
          <div className="pt-4">
            <button className="w-full h-20 bg-secondary-container text-black border-4 border-black font-h1 text-4xl uppercase tracking-widest neobrutal-shadow-sm active-press transition-all flex items-center justify-center gap-4 hover:bg-yellow-400" type="submit">
              LOGIN
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>arrow_forward</span>
            </button>
          </div>
        </form>
        
        <div className="mt-10 flex flex-col items-center gap-4 border-t-4 border-black pt-8">
          <p className="font-body-md font-bold uppercase text-black">NOT ONE OF US YET?</p>
          <Link to="/signup" className="text-primary font-black uppercase text-xl underline decoration-4 underline-offset-4 hover:bg-yellow-400 transition-colors px-2">
            INITIALIZE SIGNUP
          </Link>
        </div>
      </div>
      
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none">
        <div className="grid grid-cols-6 gap-4 h-full w-full p-4">
          <div className="bg-black border-4 border-black h-32"></div>
          <div className="bg-primary border-4 border-black h-48"></div>
          <div className="bg-secondary border-4 border-black h-24"></div>
          <div className="bg-tertiary border-4 border-black h-64"></div>
          <div className="bg-black border-4 border-black h-32"></div>
          <div className="bg-secondary-container border-4 border-black h-40"></div>
        </div>
      </div>
    </main>
  );
}
