import React from "react";

export default function Footer() {
  return (
    <footer>
      {/* ABOVE */}
      <div className="sm:flex w-full hidden items-start justify-between py-12">
        <ul className="w-1/3 text-left flex flex-col gap-y-3">
          <li className="font-bold  text-sm mb-3">
            <a href="">Support</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Help Centre</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">AirCover</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Anti-discrimination</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Disability support</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Cancellation options</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Report neighbourhood concern</a>
          </li>
        </ul>
        <ul className="w-1/3 text-left flex flex-col gap-y-3">
          <li className="font-bold  text-sm mb-3">
            <a href="">Hosting</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Airbnb your home</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">AirCover for Hosts</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Hosting resources</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Community forum</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Hosting responsibly</a>
          </li>
        </ul>
        <ul className="w-1/3 text-left flex flex-col gap-y-3">
          <li className="font-bold  text-sm mb-3">
            <a href="">Airbnb</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Newsroom</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">New features</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Careers</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Investors</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Gift cards</a>
          </li>
          <li className=" text-sm font-normal hover:underline">
            <a href="">Airbnb.org emergency stays</a>
          </li>
        </ul>
      </div>
      <hr />
      {/* BELOW */}
      <div className="py-6 flex justify-between items-center">
        {/* LEFT */}
        <div className="flex ">
          <p>© 2023 Airbnb, Inc.</p>
          <ul className="flex gap-x-2">
            <li>
              <a className="text-sm font-normal hover:underline" href="">
                Privacy
              </a>
            </li>
            <li>
              <a className="text-sm font-normal hover:underline" href="">
                Term
              </a>
            </li>
            <li>
              <a className="text-sm font-normal hover:underline" href="">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        {/* RIGHT */}
        <ul className="flex items-center gap-x-4">
          <li className="flex gap-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>{" "}
            <a
              href=""
              className="inline-block text-sm font-semibold hover:underline"
            >
              English (CA)
            </a>
          </li>
          <li className="flex gap-x-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <a
              href=""
              className="inline-block text-sm font-semibold hover:underline"
            >
              CAD
            </a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  );
}