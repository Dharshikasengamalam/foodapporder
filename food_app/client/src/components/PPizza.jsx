import React, { useState } from "react";
import { Modal } from "react-bootstrap";
const PPizza = ({ pizza }) => {
    const  [quantity,setquantity]=useState(1)
    const  [varient,setvarient]=useState('small')
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (<div className=" shadow-lg p-3 mb-5 bg-white rounded" style={{margin:'70px'}}>
    <div onClick={handleShow}>
    <h1>{pizza.name}</h1>
    <img src={pizza.image} className="img-f" style={{height:'200px',width:'200px'}}/></div>
    <div className="flex-container">
        <div className="w-100 m-1"><p>
            Varients</p>
            <select className="form-control" value={varient} onChange={(e)=>{setvarient(e.target.value)}}>
                {
                    pizza.variants.map(variant=>{
                       return(
                        <option value={variant}>{variant}</option>
                       )     
                    })
                }
            </select>
            
            </div>
            <div className="w-100 m-1"><p>Quantity</p>
                <select className="form-control" value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
            {[...Array(10).keys()].map((_, index) => {
              return (
                <option key={index} value={index + 1}>{index + 1}</option>
              );
            })}
          </select>
            
            </div>
    </div>
    <div className="flex-container">
        <div className="m-1 w-100">
        <h1 className="mt-1">price: {pizza.prices[varient] * quantity} Rs/-</h1>

        </div>
        <div className="m-1 w-100">
         <button className="btn">ADD TO CART</button>
        </div>
    </div>



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{height:'400px'}}/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>close</button>
        </Modal.Footer>
      </Modal>
    </div>);
};

export default PPizza;
