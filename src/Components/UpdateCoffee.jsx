import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const { _id, name, chef, supplier, taste, category, details, photoUrl } =
    useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrl = form.photoUrl.value;
    const newCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photoUrl,
    };
    console.log(newCoffee);

    // send newCoffee data to server
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Update Succefully",
            icon: "success",
            confirmButtonText: "Close",
          })
        }
      });
  };

  return (
    <div>
      <div className="bg-[#F4F3F0] py-4 rounded-md">
        <p className="flex justify-center text-2xl font-bold text-gray-700 mb-2">
          Update Coffee
        </p>
        <form onSubmit={handleUpdateCoffee}>
          {/* table first row: name & chef */}
          <div className="md:flex w-11/12 mx-auto md:space-x-5">
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={name}
                placeholder="Enter coffee name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                placeholder="Enter coffee chef"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* table 2nd row: Supplier & Taste */}
          <div className="md:flex w-11/12 mx-auto md:space-x-5">
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                placeholder="Enter coffee supplier"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                placeholder="Enter coffee taste"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* table 3rd row: category & details */}
          <div className="md:flex w-11/12 mx-auto md:space-x-5">
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                placeholder="Enter coffee category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2 pb-5">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Enter coffee details"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* table 4th row: photo URL */}
          <div className="md:flex w-11/12 mx-auto md:space-x-5">
            <div className="form-control w-full pb-5">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                defaultValue={photoUrl}
                placeholder="Enter photo URL"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          {/* add coffee button */}
          <div className="w-11/12 mx-auto">
            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-block bg-gray-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
