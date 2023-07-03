import { useState } from 'react';
import axios from 'axios';
import './Foodcard.scss'
import { getRecipe } from '../services/ApiService';

type FoodCardData = {
  recipe: {
    label: string;
    image: string;
    ingredientLines: string[]
  }
};

function ShopContainer(): JSX.Element {
  const [data, setData] = useState<FoodCardData[]>([]);
  console.log("🚀 ~ file: Shopcontainer.tsx:11 ~ ShopContainer ~ data:", data)
  const [query, setQuery] = useState<string | null>(null);


  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!query) return;
    const { data } = await getRecipe(query);
    setData(data.hits)

  }


  return (

    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 ">
        <div className="max-w-screen-xl h-20 flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flavor Cloud</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Search</span>
            </button>


            <div className="relative hidden md:block">
              <form className=" flex gap-5" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Search..." className="py-2 text-black w-80 ring-2 rounded-lg pl-4 to-black" onChange={(e) => setQuery(e.target.value)}></input>
                <button className="bg-[#0e2446] text-white p-2 rounded-md text-lg font-semibold px-4" type="submit">search</button>
              </form>
            </div>

            {/* <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input type="text" value={query}
           
            onChange={(e) => handleSubmit(e)}

            
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div> */}
            <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input type="text" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Shop</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {/* product container */}
      <div className="w-full h-[calc(100vh-80px)]  p-5 bg-slate-400 flex flex-wrap gap-y-10  gap-x-10 justify-center overflow-x-scroll">

        {/* food card */}

        {data?.map((items) => (
          <div className="w-80 h-56  rounded-lg  overflow-hidden flip-card" key={items['recipe']['label']} >
            <div className="flip-card-inner w-full h-full">
              <figure className="flip-card-front w-full h-full duration-500" >
                <img src={items['recipe']['image']} alt="food"
                  className="object-cover h-full w-full rounded-lg " />
              </figure>

              <div className="flip-card-back rounded-lg duration-500 bg-slate-200 h-full p-5 flex flex-col justify-between" >
                <div className="">
                  <h1 className="text-3xl font-extrabold">{items['recipe']['label']}</h1>
                  <h2 className="text-xl">{items['recipe']['ingredientLines']}</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum optio magnam ullam unde dignissimos vel perferendis sit,
                    atque fugiat. Similique, ex!</p>
                </div>
                <div className="flex justify-end ">
                  <button className="p-2 bg-gray-900 text-white rounded-md">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ShopContainer