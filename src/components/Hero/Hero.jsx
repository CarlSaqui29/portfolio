import jakeTheDev from '../../assets/jake-the-dev.webp';

export default function Hero() {

  return(
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="">
            <img 
              alt="Jake the dev"
              src={jakeTheDev} 
            />
          </div>

          <div className="text-white">
            <div class="logo">
              <span className="text-8xl font-semibold mb-2">DevWil</span>
              <svg class="wave" viewBox="0 0 120 10" preserveAspectRatio="none">
                <path d="M0 5 Q 2.5 0, 5 5 T 10 5 T 15 5 T 20 5 T 25 5 T 30 5 T 35 5 T 40 5 T 45 5 T 50 5 T 55 5 T 60 5 T 65 5 T 70 5 T 75 5 T 80 5 T 85 5 T 90 5 T 95 5 T 100 5 T 105 5 T 110 5 T 115 5 T 120 5" 
                      fill="none" stroke="#f44336" stroke-width="3"/>
              </svg>
            </div>
            <p className='mt-10'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</p>
            <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
              Buy me coffee
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}