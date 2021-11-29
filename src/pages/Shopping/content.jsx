import "./style.scss";
import React from "react";
import Icon from "../../components/icon";
import product1 from "../../Assets/product1.jpeg";
import { getShoppingItems, addItemes } from "../../services/ShoppingCart";
import ReactStars from "react-rating-stars-component";
import {
  Card,
  CardImg,
  Badge,
  Button,
} from "reactstrap";
import Cart from './Cart'


const content = () => {
  const [items, setItems] = React.useState([]);
  const [count, setCount] = React.useState(0);
  const [showModel, setShowModal] = React.useState(false); 
  React.useEffect(() => {
    getShoppingItems().then((response) => {
      setItems(response.data.data.rows);
    });
  }, []);

  //Ratingi icon
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };


  //Add items to the cart
  const addCartItems = (productInfo) => {
    debugger
    let initalParams = {
      clusterProductId: productInfo.id,
      quantity: 1,
      uniqueVariationOptionsIds: productInfo.fmcgProductVariationOptionsCombinations.length && productInfo.fmcgProductVariationOptionsCombinations[0].uniqueVariationOptionsI,
    };
    addItemes(initalParams).then((response) => {
      if (response) {
        setCount(count + 1);
        console.log("API integration is successfull");
      } else {
        console.log("OOps something went wrong");
      }
    });
  };

  return (
    <div>
      {/* Header part */}
      <div className="rui-shop-head">
        <div className="row sm-gap vertical-gap align-items-center">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend mnl-3">
                <button
                  type="button"
                  className="btn btn-clean btn-grey-5 mb-0 mnl-10"
                >
                  <Icon name="search" />
                </button>
              </div>
              <input
                type="search"
                className="form-control form-control-clean rui-search-input"
                placeholder="Type to search..."
              />
            </div>
          </div>

          <div className="col-auto">
            <button
              type="button"
              className="btn btn-brand btn-sm btn-uniform btn-round"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Icon name="shopping-cart" />
              {count}
            </button>
          </div>
        </div>
      </div>
      {/* Content part */}
      <div style={{ display: "flex", flexDirection: "row", width: "70%" }}>
        {items.map((productInfo) => {
     const itemImage=`https://api.ncig.store/${productInfo.Product.defaultImage}`
          return (
            <Card style={{ marginLeft: 10 }}>
              <CardImg alt="" src={itemImage} top />
              <div className="rui-shop-ratings">
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={16}
                  activeColor="#ffd700"
                />
                <p className="rui-prcing">MYR {productInfo.id}</p>
              </div>
              <div className="rui-shop-ratings">
                <Badge>New item</Badge>
              </div>
              <div className="rui-shop-title">
                <h4>{productInfo.Product.productName} </h4>
                <p>{productInfo.Product.productDesciption}</p>
              </div>

              <div className="rui-button">
                <Button color="brand" onClick={()=>addCartItems(productInfo)}>
                  Add to cart
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
      {showModel == true && <Cart closeModal={setShowModal}  />}
    </div>
  );
};

export default content;
