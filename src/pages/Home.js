import { useState } from "react";

export function Home() {
  const [favicon, setFavicon] = useState("");

  const handleChange = (event) => {
    setFavicon(event.target.value);
  };

  return (
    <div className="h-screen max-w-[600px] mx-auto flex flex-col gap-6 justify-center items-center px-6">
      <div className="text-right">
        <h1 className="text-center font-bold">Finder Favicon</h1>
      </div>
      <div className="mb-6 flex flex-wrap">
        <div className="flex">
          <div className="flex content-center justify-center border border-gray-500 rounded-md p-1 text-gray-600 tracking-widest h-[50px]">
            <img
              src={
                favicon
                  ? `https://www.google.com/s2/favicons?domain=${favicon}`
                  : "https://www.google.com/s2/favicons?domain=google.com"
              }
              alt=""
              className="rounded-md"
            />
          </div>
          <div className="-mx-3w-full px-3">
            <input
              type="text"
              className="border border-gray-500 rounded-md inline-block p-3 w-full text-gray-600 tracking-widest"
              value={favicon}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
