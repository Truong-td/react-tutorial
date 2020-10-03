import React from "react";
import "./App.css";
import Product from "./component/Product";


function App() {
  const products = [
    {
      id: 1,
      name: "test1",
      prices: "15.000.000",
      image:
        "https://cdn.tgdd.vn/Products/Images/42/190323/iphone-xs-gold-600x600-2-600x600.jpg",
      status: true,
    },
    {
      id: 2,
      name: "test2",
      prices: "15.000.000",
      image:
        "https://didongviet.vn/pub/media/catalog/product//5/7/5758686-min_1.jpg",
      status: false,
    },
    {
      id: 3,
      name: "test3",
      prices: "15.000.000",
      image:
        "https://clickbuy.com.vn/uploads/2019/04/apple-iphone-xs-white.png",
      status: true,
    },
    {
      id: 4,
      name: "test4",
      prices: "15.000.000",
      image:
        "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-xs-64gb-didongviet.jpg",
      status: false,
    },
  ];
  const listItems = products.map((product) => (
    <Product
      key={product.id}
      name={product.name}
      prices={product.prices}
      images={product.image}
      status={product.status}
    />
  ));


  return (
    <div className='app'>
      <div>
        <nav className='navbar navbar-inverse'>
          <a className='navbar-brand' href='#'>
            Title
          </a>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                {listItems}
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <button type="button" className="btn btn-warning" onClick={clickMe}> Click me !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function clickMe() {
  alert("Truongtd");
}

export default App;
