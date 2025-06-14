import { useState, useEffect } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

const fullCode = `
import { love, support } from 'family'
import { code, design } from 'career'
import { grind, bounceBack } from 'basketball'
import { build, tune } from 'carCulture'
import { useState } from 'react'

function CarlLife() {
  const [energy, setEnergy] = useState(100)

  return (
\t<Life fueledBy={[love, support]}>
\t  <Code passion />
\t  <Design soul />
\t  <Court grind={grind} dream="NBA" />
\t  <Garage project="Honda EF" vibe="stanced" />
\t  <Goals target="Senior Dev by 28" />
\t</Life>
  )
}
`;

export default function Bento() {
  const [typedCode, setTypedCode] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (index < fullCode.length) {
      timeout = setTimeout(() => {
        setTypedCode((prev) => prev + fullCode[index]);
        setIndex(index + 1);
      }, 20); // Typing speed
    } else {
      // Pause 2s then reset
      timeout = setTimeout(() => {
        setTypedCode('');
        setIndex(0);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [index]);
  
  return (
    <div className="py-14 sm:py-16">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-custom">About Me</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          No rest days
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-bento lg:rounded-l-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                  Basketball Player
                </p>
                <p className="mt-2 max-w-lg text-base text-gray-400 max-lg:text-center">
                  Rebuilding the dreams I once buried. Reclaiming what was mine.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 lg:rounded-l-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-bento max-lg:rounded-t-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">Designer</p>
                <p className="mt-2 max-w-lg text-base text-gray-400 max-lg:text-center">
                  Every pixel tells a story. And I’m here to design yours.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  className="w-full max-lg:max-w-xs"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-t-4xl"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-bento"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">Car Enthusiast</p>
                <p className="mt-2 max-w-lg text-base text-gray-400 max-lg:text-center">
                  More than just a car, it’s my escape.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-bento max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-100 max-lg:text-center">
                  Software Developer
                </p>
                <p className="mt-2 max-w-lg text-base text-gray-400 max-lg:text-center">
                  Driven by purpose and intent—always evolving, always creating.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                  <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                    <div className="-mb-px flex text-base font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        payDebt.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">configLife.jsx</div>
                    </div>
                  </div>
                  <div className="pl-6 pb-14">
                    <SyntaxHighlighter 
                      language="jsx"
                      style={nightOwl}
                      wrapLongLines={true}
                      customStyle={{ fontSize: '12px', overflow: 'hidden', backgroundColor: 'transparent' }}
                    >
                      {typedCode}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm ring-1 ring-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
