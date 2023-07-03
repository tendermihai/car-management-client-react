import React from "react";

const Card = ({ car }) => {
  return (
    <>
      <div class="card-body p-4">
        <span class="badge delete rounded-pill bg-primary float-md-end mb-3 mb-sm-0">
          Delete
        </span>
        <h5>${car.model}</h5>
        <div class="mt-3">
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            ID: ${car.id}
          </span>
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            Make: ${car.maker}
          </span>
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            Model: ${car.model}
          </span>
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            Year: ${car.year}
          </span>
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            Color: ${car.color}
          </span>
          <span class="text-muted d-block">
            <i class="fa fa-car" aria-hidden="true"></i>
            Price: ${car.price}
          </span>
        </div>
        <div class="mt-3">
          <button class="btn btn-primary btn-update" id="id-${car.id}">
            Update
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
