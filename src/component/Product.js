import React from "react";

function Product(props) {
  if (props.status) {
    return (
      <div className='product'>
        <div className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
          <div className='thumbnail'>
            <div className='caption'>
              <img
                src={props.images}
                alt={props.name}
                className='image-product'
              />
              <p> {props.price} </p>
              <p>
                <a
                  className='btn btn-primary'
                  onClick={() => onAddToCard(props.name)}
                >
                  Mua
                </a>
              </p>
            </div>
            {props.prices}
          </div>
          {props.name}
        </div>
      </div>
    );
  } else {
    return "";
  }
}

function onAddToCard(text) {
  alert(text);
}
export default Product;
