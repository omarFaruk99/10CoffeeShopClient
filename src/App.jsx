// import { useLoaderData } from "react-router-dom";
// import "./App.css";
// import CoffeeCard from "./Components/CoffeeCard";
// import { useState } from "react";

// function App() {
//   const LoadCoffees = useLoaderData();

//   const [coffees, setCoffees] = useState(LoadCoffees);

//   return (
//     <div>
//       <h1 className="text-2xl font-semibold text-teal-500">
//         Our Popular Products:{coffees.length}
//       </h1>
//       <div className="grid md:grid-cols-2 gap-4 mt-5">
//         {coffees.map((coffee) => (
//           <CoffeeCard
//             key={coffee._id}
//             coffee={coffee}
//             coffees={coffees}
//             setCoffees={setCoffees}
//           ></CoffeeCard>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
