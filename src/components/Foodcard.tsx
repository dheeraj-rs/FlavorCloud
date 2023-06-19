import './Foodcard.scss'

function Foodcard() {
  
  return (
    <div className="w-80 h-56 shadow-xl rounded-lg  overflow-hidden flip-card" >
      <div className="flip-card-inner w-full h-full">

        <figure className="flip-card-front w-full h-full duration-500" >
          <img src="https://i.pinimg.com/736x/75/50/d1/7550d1bada82c17ad32ec43f648a220e.jpg" alt="food"
            className="object-fill h-full w-full rounded-lg " />
        </figure>

        <div className="flip-card-back rounded-lg duration-500 bg-slate-200 h-full p-5 flex flex-col justify-between" >
          <div className="">
            <h2 className="text-xl">Food!</h2>
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
  );
};

export default Foodcard;
