import "./style.scss";
import React from "react";
import Icon from "../../components/icon";
import product1 from "../../Assets/product1.jpeg";
import { getCartItem, deleteItem } from "../../services/ShoppingCart";
import { getShops } from "../../services/Shops";
import {
  Row,
  Col,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from "reactstrap";
import Cart from "./Cart";
import ReactStars from "react-rating-stars-component";
import SweetAlert from "sweetalert2-react";

const Checkout = () => {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [shopName, setShopName] = React.useState([]);
  const [alert,setAlert]=React.useState(false);
  const [showDialog, setshowDialog] = React.useState({ type: "", id: "" });
  const [close, setClose] = React.useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //Fetchng the cart item
  React.useEffect(() => {
    debugger
    getCartItem().then((response) => {
      if (response) {
        setItems(response.data.data);
        {
          items.map((qty) => {
            setQuantity(qty.quantity);
          });
        }
      } else {
        console.log("Something went wrong");
      }
    });
  }, []);

  //Fetching the shop list
  React.useEffect(() => {
    debugger;
    getShops().then((response) => {
      console.log(response.data.data);
      setShopName(response.data.data);
    });
  }, []);

  //Ratingi icon
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

   //deleting the cart item
   debugger;
   const Delete = (id) => {
     deleteItem(id).then((response) => {
       if (response) {
         window.location.reload();
       }
     });
     setshowDialog(!showDialog);
   };

   const handleToggleDelete = () => {
    window.location.reload();
  };

  const CloseModal = () => {
    setClose(!close);
  };
  return (
    <Row className="xs-gap vertical-gap ">
      <Col sm="2">
        <div></div>
      </Col>
      <Col sm="6">
        {items.map((item) => {
          const itemImage=`https://api.ncig.store/${item.clustercubeProduct.Product.defaultImage}`
          return (
            <div className="uri-checkout-div">
              <Col sm="12">
                <Card>
                  <CardBody>
                    <div className="col">
                      <div className="rui-cart-items ">
                        <img src={itemImage} alt="" height={80} />
                        <div className="rui-product-details">
                          <p> {item.clustercubeProduct.Product.productName}</p>
                          <p> By:{item.clustercubeProduct.Product.brand}</p>
                          <ReactStars
                            count={item.clustercubeProduct.Product.rating}
                            onChange={ratingChanged}
                            size={16}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div style={{ marginLeft: "40%" }}>
                          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>Select a shop</DropdownToggle>
                            <DropdownMenu>
                              {shopName.map((shop) => {
                                console.log("name is the ", shop.name);
                                return <DropdownItem>{shop.name}</DropdownItem>;
                              })}
                            </DropdownMenu>
                          </Dropdown>
                          <Button
                            color="secondary"
                            className="rui-checkout-button"
                            onClick={() => {
                              setshowDialog({ type: "deleteItem", id: item.id });
                              setClose(true);
                            }}
                          >
                            {" "}
                            <Icon name="trash" /> Remove{" "}
                          </Button>
                          <Button color="brand" className="rui-checkout-button"onClick={() =>setAlert(true) } >
                            <Icon name="shopping-cart" /> Checkout
                          </Button>
                          <SweetAlert
                            show={alert}
                            title="Checkout Successful"
                            text="Your order has been placed successfully"
                            onConfirm={() => setAlert(false)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardBody>
                  {showDialog.type == "deleteItem" && (
          <Modal
            isOpen={showDialog}
            toggle={handleToggleDelete}
            //className={props.className}
            fade
            id={items.id}
          >
            <div className="modal-header">
              <h5 className="modal-title h2">Delete</h5>
              <Button className="close" color="" onClick={handleToggleDelete}>
                <Icon name="x" />
              </Button>
            </div>
            <ModalBody>
              <h1>Are sure to delete this record</h1>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={CloseModal}>
                Close
              </Button>
              <Button color="brand" onClick={() => Delete(showDialog.id)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        )}
                </Card>
              </Col>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};

export default Checkout;
