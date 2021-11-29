import React from 'react';
import {
    createShop,
    getShopProfile,
    updateShop,
  } from "../../services/Shops";

  import {
    Col,
    FormGroup,
    Label,
    Input,Button, Modal, ModalBody, ModalFooter 
  } from "reactstrap";
  

  import Icon from "../../components/icon";

const serviceModal={
    name:'',
    ownerName:'',
    contact:'',
    address:'',
    googleAddress: {"name": "", "": '', "lng": ''},

}

const Shops=({id, closeModal,onDismiss,closeEdit})=>{
    const [modal, setModal] = React.useState(false);
    const[values,setValues]=React.useState(serviceModal);
    const[loading,setLoading]=React.useState(false)
    const[validate, setValidate]=React.useState({
      nameError:'',
      ownerNameError:'',
      contactError:'',
      googleAddress: {
        name:''
      },
    })

    const toggle = () => setModal(modal);

    const checkName=()=>{
      const {
          name,
      } = values.name;

      const isValid =values.name && values.name.length >= 0;
     console.log(isValid)
      setValidate( {
          nameError: isValid ? '' : 'Name must be at least 3 characters long',
      } );

      return isValid;
  }

     //Posting the data via model

const AddShop=()=>{
    let data={
      //id:items?.id,
      name:nameInput1.value,
      ownerName:nameInput2.value,
      contact:contact.value,
      googleAddress:{
        name:addressInput.value
      }
    }
    createShop(JSON.stringify(data)).then((response)=>{
      if(response){
       window.location.reload()
       closeModal(false)
        console.log(response)
      }else{
        console.log('Something went wrong')
      }
    })
  }

//update shop data
const EditShop=()=>{
  let data={
    //id:items?.id,
    name:nameInput1.value,
    ownerName:nameInput2.value,
    contact:contact.value,
    googleAddress:{
      name:addressInput.value
    }

  }
  debugger
  updateShop(JSON.stringify(data),id).then((response)=>{
    if(response){
      window.location.reload()
     //closeModal(false)
    
      console.log(response)
       
    }else{
      console.log('Soething went wrong')
    }
  })
}


  //Fetch single app data
  React.useEffect(()=>{
    getShopProfile(id).then((res)=>{
      if(res){
       const val={
        name:res.data.data?.name,
        ownerName:res.data.data?.ownerName,
        contact:res.data.data?.contact,
        googleAddress:{
          name:res.data.data?.googleAddress
        }
       }

       setValues(val)
      }else{
        console.log('I am failed')
      }
    })
  },[id])
  
    return(
       <React.Fragment>
           <Modal
        isOpen={true}
        //toggle={}
        //className={.className}
        fade
       on
      >
        <div className="modal-header">
          <h5 className="modal-title h2">{id ?'Edit Shop':'Add Shop'}</h5>
          <Button className="close" color="" onClick={()=>{id ?closeEdit(false) :closeModal(false)}}>
            <Icon name="x" />
          </Button>
        </div>
        <ModalBody>
          <FormGroup row >
            <Label for="nameInput1" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                id="nameInput1"
                name="Name"
                placeholder="Name"
                type="text"
                required
                value={values.name}
                onChange={ ( e ) => {
                  setValues( {
                      name: e.target.value,
                  },validate.nameError ? checkName : () => {} );
              } }
              onBlur={ checkName}
              disabled={ loading }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="nameInput2" sm={2}>
              Owner name
            </Label>
            <Col sm={10}>
              <Input
                id="nameInput2"
                
                name="Owner_name"
                placeholder="Owner Name"
                type="text"
                value={values.ownerName}
                onChange={ ( e ) => {
                  setValues( {
                      ownerName: e.target.value,
                  } );
              } }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="contact" sm={2}>
              Contact
            </Label>
            <Col sm={10}>
              <Input
                id="contact"
                name="contact"
                placeholder="Contact Number"
                type="number"
                value={values.contact}
                onChange={ ( e ) => {
                  setValues( {
                      contact: e.target.value,
                  } );
              } }
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="addressInput" sm={2}>
              Address
            </Label>
            <Col sm={10}>
              <Input
                id="addressInput"
                name="address"
                placeholder="Address"
                type="textarea"
                value={values?.googleAddress?.name}
                onChange={ ( e ) => {
                  setValues( {
                      googleAddress: e.target.value,
                  } );
              } }
              />
            </Col>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={()=>{id ? closeEdit(false) :closeModal(false)}}>
            Close
          </Button>

          {id ?<Button color="brand" onClick={EditShop}>
            Update
          </Button> :<Button color="brand" onClick={AddShop}>
            Save changes
          </Button>}
        </ModalFooter>
      </Modal>
       </React.Fragment>
    )
}

export default Shops