import React from 'react'

const RestaurantDetails = () => {
  return (
    <>
      <div class="jumbotron text-center">
        <h1>Restaurant Template</h1>
        <p>Best Food Best offers Just Scroll down...!!!</p>
      </div>
      <div class="container">
        <h4>Best Food in Mumbai <i class="fa fa-map-marker" aria-hidden="true"></i>
        </h4> <br />
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" class="img-fluid" />
            <h4>Pesto Pasta</h4>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star"></span>
            <span class="flr">(Delivery Reviews)</span>

            <p>Pesto Pasta, Pasta store
              <br />
                ₹150 for one 31 min <i class="fa fa-clock-o" aria-hidden="true"></i>

            </p>

          </div>

          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="img-fluid" />
            <h4>Pepperoni and Olive Pizza</h4>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star"></span>
            <span class="flr">(Delivery Reviews)</span>

            <p>Pepperoni and Olive Pizza
              <br />
                ₹250 for one 29 min <i class="fa fa-clock-o" aria-hidden="true"></i>

            </p>

          </div>
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" class="img-fluid" />
            <h4>Big burger Store</h4>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star checked"> </span>
            <span class="fa fa-star"></span>
            <span class="flr">(Delivery Reviews)</span>

            <p>big burger on a wooden table with garlic
              <br />
                ₹450 for one 40 min <i class="fa fa-clock-o" aria-hidden="true"></i>

            </p>

          </div>
        </div>
      </div>
    </>
  )
}

export default RestaurantDetails


