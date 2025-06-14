import jakeTheDev from '../../assets/jake-the-dev.webp';

export default function Hero() {

  return(
    <div className="pt-24 pb-14 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24">
          <div className="">
            <img 
              alt="Jake the dev"
              src={jakeTheDev} 
            />
          </div>

          <div className="text-white h-full lg:grid lg:place-items-center">
            <div>
              <div class="logo">
                <span className="text-7xl md:text-8xl font-semibold mb-2">DevWil</span>
                <svg class="wave" viewBox="0 0 120 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 2.5 0, 5 5 T 10 5 T 15 5 T 20 5 T 25 5 T 30 5 T 35 5 T 40 5 T 45 5 T 50 5 T 55 5 T 60 5 T 65 5 T 70 5 T 75 5 T 80 5 T 85 5 T 90 5 T 95 5 T 100 5 T 105 5 T 110 5 T 115 5 T 120 5" 
                        fill="none" stroke="#f44336" stroke-width="3"/>
                </svg>
              </div>
              <p className='mt-8 md:mt-10'>I know what I want. My goals guide me, my priorities ground me, my plans push me and success is non-negotiable.</p>
              <button className="mt-8 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition">
                Buy me coffee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}