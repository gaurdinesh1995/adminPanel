/* eslint-disable react/display-name */
/**
 * Styles
 */
 import "./style.scss";

 /**
  * External Dependencies
  */
 import React, { Fragment, useState } from "react";
 import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
 /**
  * Internal Dependencies
  */
 import Icon from "../../components/icon";
 import DataTables from "react-data-table-component";
 import { getShops, deleteShop } from "../../services/Shops";
 import Shops from "./Shops";
import product1 from "../../Assets/product1.jpeg";
 
 
 const Content = () => {
   const [items, setItems] = React.useState([]);
   const [showModel, setShowModal] = useState(false); 
   const [showDialog, setshowDialog] = React.useState({ type: "", id: "" });
   const [loading,setLoading]=React.useState(false);
   const [validate,setValidate]=React.useState({
     nameError:'',
     ownerNameError:'',
     contactError:''
   })
  
 
   //Fetching the shop list
   React.useEffect(() => {
     
     getShops().then((response) => {
       console.log(response.data.data);
       setItems(response.data.data);
     });
   }, []);
 
   //Deleting API call

   const Delete = (id) => {
     deleteShop(id).then((response) => {
       if (response) {
         window.location.reload()
       }
     });
     setshowDialog(!showDialog)
    
   };
   //opening the delete modal
 
   const handleToggleDelete = () => {
     window.location.reload()
   };
  
   //creating the table coloum
   const columns = [
     {
       name: "Name",
       selector: (row) => row.name,
       sortable: true,
     },
     {
       name: "owner",
       selector: (row) => row.ownerName,
       sortable: true,
     },
     {
       name: "Contact",
       selector: (row) => row.contact,
       sortable: true,
     },
     {
       name: "Address",
       selector: (row) => row.address,
     },
 
     {
       name: "Action",
       selector: (row) => row.action,
       cell: (value) => (
         <>
              <button
             type="button"
             className="btn btn-brand btn-sm btn-uniform btn-round rui-filemanager-file-button"
             onClick={() => {
               setshowDialog({ type: "editItem", id: value.id });
             }}
             
           >
             <Icon name="edit" />
           </button>
           <button
             type="button"
             className="btn btn-brand btn-sm btn-uniform btn-round rui-filemanager-file-button"
             onClick={() => {
               //Delete(value.id)
               setshowDialog({ type: "deleteItem", id: value.id });
             }}
             
           >
             <Icon name="trash" />
           </button>
         </>
       ),
     },
   ];
 
   return (
     <Fragment>
       <div className="rui-filemanager">
         <div className="rui-filemanager-head">
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
                 className="btn btn-brand btn-custom-round mnt-2"
               >
                 <Icon name="more-vertical" />
               </button>
             </div>
             <div className="col-auto">
               <button
                 type="button"
                 className="btn btn-brand btn-sm btn-uniform btn-round"
                 onClick={() => {
                   setShowModal(true);
                 }}
               >
                 <Icon name="plus" />
               </button>
             </div>
           </div>
         </div>
         <div className="rui-filemanager-content">
           {/* <h2 className="h5 text-grey-5">Quick access</h2>
             <div className="table-responsive-lg">
               <table className="table rui-filemanager-table">
                 <tbody>
                   <tr>
                     <th className="rui-filemanager-table-name" scope="row">
                       <span className="rui-filemanager-file">
                         <Link className="rui-filemanager-file-link" to="#">
                           <Icon name="file-text" />
                           Project.doc
                         </Link>
                       </span>
                     </th>
                     <td className="rui-filemanager-table-size">
                       <span className="rui-filemanager-file">1.4 GB</span>
                     </td>
                     <td className="rui-filemanager-table-date">
                       <span className="rui-filemanager-file">04.25.2020</span>
                     </td>
                     <td className="rui-filemanager-table-icon">
                       <span className="rui-filemanager-file">
                         <Link
                           className="rui-filemanager-file-icon mr-10"
                           to="#"
                         >
                           <Icon name="link2" />
                         </Link>
                         <Link className="rui-filemanager-file-icon" to="#">
                           <Icon name="more-horizontal" />
                         </Link>
                       </span>
                     </td>
                   </tr>
                   <tr>
                     <th className="rui-filemanager-table-name" scope="row">
                       <span className="rui-filemanager-file">
                         <Link className="rui-filemanager-file-link" to="#">
                           <Icon name="file" />
                           Project-2.html
                         </Link>
                       </span>
                     </th>
                     <td className="rui-filemanager-table-size">
                       <span className="rui-filemanager-file">2 GB</span>
                     </td>
                     <td className="rui-filemanager-table-date">
                       <span className="rui-filemanager-file">04.24.2020</span>
                     </td>
                     <td className="rui-filemanager-table-icon">
                       <span className="rui-filemanager-file">
                         <Link
                           className="rui-filemanager-file-icon mr-10"
                           to="#"
                         >
                           <Icon name="link2" />
                         </Link>
                         <Link className="rui-filemanager-file-icon" to="#">
                           <Icon name="more-horizontal" />
                         </Link>
                       </span>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div> */}
           <div className="table-responsive-lg">
             <DataTables
               className="rui-datatable rui-filemanager-table table mb-10"
               columns={columns}
               data={items}
               key={items.id}
               pagination={true}
               highlightOnHover={true}
               dense={true}
           
             />
           </div>
         </div>
       </div>
 
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
             <h1>Are you sure to delete this record?</h1>
           </ModalBody>
           <ModalFooter>
             <Button color="secondary" onClick={handleToggleDelete}>
               Close
             </Button>
             <Button color="brand" onClick={() => Delete(showDialog.id)}>
               Delete
             </Button>
           </ModalFooter>
         </Modal>
       )}
 
       {showDialog.type==='editItem'  &&(
         <Shops closeEdit={setshowDialog} id={showDialog?.id} />
       )}
 
 {showModel == true && <Shops closeModal={setShowModal}  />}

     </Fragment>
   );
 };
 
 export default Content;
 
 