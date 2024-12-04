import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, chef, supplier, taste, category, details, photoUrl } =
    coffee;

  //   handle deleteCoffee
  const handleDeleteCoffee = (id) => {
    // console.log("delete coffee id: ", id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="card lg:card-side bg-teal-800 shadow-xl">
        <figure className="h-64 w-40">
          <img src={photoUrl} alt="Album" />
        </figure>
        <div className="flex md:justify-around justify-between w-full items-center">
          <div>
            <p>Name: {name}</p>
            <p>Chef: {chef}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="join join-vertical md:space-y-5">
            <button className="btn join-item">Details</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>
            <button
              onClick={() => handleDeleteCoffee(_id)}
              className="btn join-item"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
