import React from 'react';
import SafeView from '../../components/SafeView';
import { PiArrowUpThin, PiMagnifyingGlassThin } from 'react-icons/pi';
export default function Main() {
  return (
    <SafeView>
      <div className="p-36 px-84 gap-12 w-full flex flex-col items-start justify-start">
        <div className="text-6xl">
          <p>Alask-Code</p>
          <div className="text-lg">
            <p>Alex Rodrigues</p>
            <p>23 Years Old</p>
            <p>Paulinia - Brazil</p>
          </div>
        </div>

        <div>
          <p className="text-2xl">I am a software developer.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo suscipit vero tenetur quisquam aliquam
            corrupti at, delectus asperiores quod fugit neque odio nulla similique sit dolorem ad porro architecto nihil
            molestiae modi enim eveniet magnam natus? Esse molestiae quaerat sunt assumenda sequi, doloribus sed
            voluptatum accusantium, doloremque eveniet minima possimus?
          </p>
        </div>

        <div
          className="w-full
        "
        >
          <p className="text-3xl">Projects</p>
          <div>
            <div className="flex items-stretch justify-start gap-1 pb-3">
              <div
                className="flex items-center
               rounded-md bg-white/10 gap-1 p-1"
              >
                <input type="text" className="bg-black/20 rounded-sm p-1" placeholder="Search..." />
                <button className="cursor-pointer hover:bg-white/10 rounded-sm p-2">
                  <PiMagnifyingGlassThin />
                </button>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-md p-1 px-2">
                <p>Order by</p>
                <div className="flex items-center gap-2">
                  <select
                    className="appearance-none px-1 border-white/10 rounded-sm
                   border"
                    defaultValue="az"
                  >
                    <option value="az">A-Z</option>
                    <option value="date">Date</option>
                  </select>

                  <button className="cursor-pointer hover:bg-white/10 rounded-sm p-2">
                    <PiArrowUpThin />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid gap-3 grid-cols-3">
              {Array.from({ length: 10 }).map((_, index) => (
                <div key={index} className="w-full rounded-lg overflow-hidden bg-white/10">
                  <img src="https://placehold.co/1280x720" className="w-full" alt="" />
                  <div className="p-3 pt-2">
                    <p className="text-lg font-bold">LongText Project {index + 1}</p>
                    <p className="text-xs">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, non! {index + 1}
                    </p>
                    <p className="text-xs pt-4">TS VITE REACT TAILWINDCSS NODE</p>
                    <p className="text-xs pt-4 uppercase">Created at {index + 1}</p>
                    <p className="text-xs">Last updated {index + 1}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SafeView>
  );
}
