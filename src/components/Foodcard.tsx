// import './Foodcard.scss'
// import React, { useEffect, useState } from 'react';

// function Foodcard() {
//   const [recipes, setRecipes] = useState<any[]>([]);
//   console.log("🚀 ~ file: Foodcard.tsx:6 ~ Foodcard ~ recipes:", recipes)
//   const [query, setQuery] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
//       );
//       const data = await response.json();
//       setRecipes(data.hits);
//     };

//     if (query) {
//       fetchData();
//     }
//   }, [query]);

//   return (
    
//   );
// };

// export default Foodcard;
