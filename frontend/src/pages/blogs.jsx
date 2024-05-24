import React, { useEffect, useState } from "react";
import { SearchBar } from "../components/searchbar";

export const Blogs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/v1/blogs/all');
        const json = await res.json();
        
        if (Array.isArray(json.blogs)) {
          setData(json.blogs);
        } else {
          console.error("Unexpected data format:", json);
          setData([]); // Ensure data is set to an array
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]); // Ensure data is set to an array even if there's an error
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div >
        <div className="flex ">
        <div className="font-serif text-2xl text-semibold p-4 text-purple-500">Blogger</div>
        <div className="p-4">
            <SearchBar/>
        </div>
        </div>
        <div className="flex justify-end">
        <div className="flex  justify-end space-x-4">
            <div className="display-flex justify-items-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
            </div>
        </div>
        </div>
        <div className="border flex justify-center p-3 rounded border-slate-100 font-serif text-xl font-semilight border-8 border-solid ">
          Get unlimited access to the best of Medium for less than $1/week. Become a member
        </div>
        <div className="grid cols grid-cols-1">
        <div className="justify-start hover-pink-100 text-sm font-serif ">
          <div>
            <li className="flex p-2 text-2xl">
              <ul className="p-5">For you</ul>
              <ul className="p-5">Following</ul>
              <ul className="p-5">Artificial Intelligence</ul>
              <ul className="p-5">Java Script</ul>
              <ul className="p-5">Startup</ul>
              <ul className="p-5">Health</ul>
            </li>
          </div>
          <div className=" p-5 font-serif">
          {data.map(item => (
            <div className="text-xl font-serif font-light p-1">
              <Item  key={item.id} title={item.title} content={item.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
  <div className="h-screen bg-slate-50">
    <div className="justify-center p-4 ">
      <div className="font-serif justify-center p-4 flex text-2xl font-semibold">
        Recommended topics
      </div>
    <div>
</div>
    <div className="p-5 pl-5 justify-center flex">
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Apple</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Women</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Mindfulleness</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">AWS</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Fitness</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sexuality</button>
      <button type="button" className="p-7 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xl px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Flutter</button>
  </div>
</div>
<div>
    <div className="font-serif text-xl font-bold p-4 ">Who to Follow</div>
    <div className="font-serif text-xl font-semibold p-1">Ignacio de Gregorio
    <button type="button" className="p-5 justify-end text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-xl rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Follow</button>
    </div>
    <div className="font-serif text-md flex  font-light p-2">I break down the frontier AI systems in the world for you</div>
    <div className="font-serif text-xl font-semibold p-1">Tari Ibaba
    <button type="button" className="p-5 justify-end text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Follow</button>
    </div>
    <div className="font-serif text-sm flex  font-light p-2">I help you gain the coding knowledge and skills to build</div>
    <div className="font-serif text-md font-semibold p-1">Joan Westenberg
    <button type="button" className="p-5 justify-end text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Follow</button>
    </div>
    <div className="font-serif text-xl flex  font-light p-2">🍕 I write about tech + humans + philosophy.</div>
</div>
<p className="p-3 bg-slate-50 font-serif text-xl font-light text-green-500">See more suggestions</p>
<div className="font-serif text-md font-semibold p-3">
  Reading List
</div>
<div className="font-serif flex text-md font-light bg-slate-50 p-3">Click the Create icon on any story to easily add it to your reading list or a custom list that you can share.</div>
<div className="font-serif flex text-xl justify-between font-light ">
  <li className="flex justify-center p-2">
    <ul className="p-2">Help</ul>
    <ul className="p-2">Status</ul>
    <ul className="p-2">About</ul>
    <ul className="p-2">Careers</ul>
    <ul className="p-2">Press</ul>
    <ul className="p-2">Blog</ul>
    <ul className="p-2">Privacy</ul>
    <ul className="p-2">Terms</ul>
    <ul className="p-2">Help</ul>
    <ul className="p-2">Teams</ul>
  </li>
</div>
</div>
</div>
    
  );
};

const Item = ({ title, content }) => {
  return (
    <div>
      <div className="border-2 border-inherit border- p-4 rounded-xl border-solid shadow-md shadow-gray-50">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-base font-light">{content}</p>
    </div>
    </div>
  );
};
