import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const coffees = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-6xl text-center my-20 text-purple-600">
        Coffee Length : {coffees.length}
      </h1>
    <Link to='/addCoffee'><button className="btn btn-primary mr-5">Add Coffee</button></Link>
    <Link to='/updateCoffee'><button className="btn btn-success">Update Coffee</button></Link>
   <div className="grid md:grid-cols-2 gap-4">
   {coffees.map((coffee) => (
        <CoffeeCard 
        key={coffee._id} 
        coffee={coffee}>
        </CoffeeCard>
      ))}
   </div>
    </div>
  );
}

export default App;
