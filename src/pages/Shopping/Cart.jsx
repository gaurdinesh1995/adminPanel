import "./style.scss";
import React from "react";
import {
  Button,
  Modal,
  ButtonGroup,
  ModalFooter,
  Badge,
  ModalBody,
  Card,
  CardBody,
} from "reactstrap";
import Icon from "../../components/icon";
import { useHistory } from "react-router-dom";
import { getCartItem, deleteItem,updateCart } from "../../services/ShoppingCart";


const Cart = ({ closeModal,id },props) => {
 
  const history = useHistory();
  const [items, setItems] = React.useState([]);
  const [Qty, setQuantity] = React.useState();
  const [showDialog, setshowDialog] = React.useState({ type: "", id: "" });
  const [close, setClose] = React.useState(false);
  
  //Fetchng the cart item
  React.useEffect(() => {
    getCartItem().then((response) => {
      if (response) {
        setItems(response.data.data);
          return true
      } else {
        console.log("Something went wrong");
      }
    });
  }, []);

  //deleting the cart item
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

  //Adding cart item
debugger
  const onAdd=(product)=>{
    const exist =items.find((x)=>x.id === product.id);
    let qty;
    if(exist){
      setItems(
        items.map((x)=>x.id ===product.id ? {...exist,qty:exist.qty+1}:x)
      )
      console.log(items)
    }else{
      setItems([...items,{...product,qty:1}])
    }
  }

  //removing items

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Modal
      isOpen={true}
      //toggle={}
      //className={.className}
      fade
      on
      className="my-modal"
    >
      <>
        <div className="rui-card-header">
          <h2 className="rui-margin">My Cart</h2>
          <Badge className="rui-margin" color="light">
            {items.length} items
          </Badge>
        </div>
        <div className="rui-cart-seprator" />
        {items.length === 0 && <div>Cart is empty</div>}
        {items.map((item) => {
          const itemImage=`https://api.ncig.store/${item.clustercubeProduct.Product.defaultImage}`
          let qty=item.quantity
          return (
            <div>
            <Card>
              <CardBody>
                <div className="col">
                  <div className="row sm-gap vertical-gap align-items-center">
                    <div className="rui-cart-items " key={item.productId}>
                      <img src={itemImage} alt="" height={80} />
                      <p>
                        <h5 className="margin " style={{ width: 80 }}>
                          {item.clustercubeProduct.Product.productName}
                        </h5>{" "}
                      </p>
                      <ButtonGroup className="margin">
                        <Button
                          color="brand"
                          className="rui-button-height"
                          onClick={()=>onAdd(item)}
                        >
                          <Icon name="plus" />
                        </Button>
                        <Button color="brand" className="rui-button-height">
                          {qty}
                        </Button>
                        <Button color="brand" className="rui-button-height" onClick={()=>onRemove(item)}>
                          <Icon name="minus" />
                        </Button>
                      </ButtonGroup>
                      <p className="margin">
                        RM{item.clustercubeProduct.Product.productPrice}
                      </p>
                      <Button
                        color="light"
                        className="rui-button-height margin "
                        onClick={() => {
                          //Delete(value.id)
                          setshowDialog({ type: "deleteItem", id: item.id });
                          setClose(true);
                        }}
                      >
                        <Icon name="trash" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
           
            </div>
          );
        })}
         <div className="rui-cart-total">
              <h3>Total</h3>
              <h3>RM:30</h3>
            </div>
        <ModalFooter>
          <Button
            color="secondary"
            onClick={() => {
              closeModal(false);
            }}
          >
            Close
          </Button>

          <Button color="brand" onClick={() => history.push("/Checkout")}>
            Checkout
          </Button>
        </ModalFooter>
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
              <Button color="secondary" onClick={closeModal}>
                Close
              </Button>
              <Button color="brand" onClick={() => Delete(showDialog.id)}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        )}
      </>
    </Modal>
  );
};

export default Cart;
