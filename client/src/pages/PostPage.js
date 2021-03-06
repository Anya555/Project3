import API from "../utils/API";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";



function PostPage() {
  // Setting our component's initial state
  const [Items, setItems] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all items and store them with setItems
  useEffect(() => {
    displayAll()
  }, [])

  function displayAll() {
    API.getAllItems()
      .then(res => setItems(res)
      )
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };

  // When the form is submitted, use the API.saveItem method to save the item data
  // Then reload items from the database
  function handleSubmit(event) {
    event.preventDefault();
    if (formObject.itemname && formObject.startingbid) {
      API.saveItem({
        itemname: formObject.itemname,
        startingbid: formObject.startingbid,
        category: formObject.category,
        condition: formObject.condition,
        buyout: formObject.condition
      })
        .then(res => displayAll())
        .catch(err => console.log(err));
    }

  };  
  

    return (
      <>
       
        <Navbar />
        <br />
       
        <br></br>
        <div className="container">
        <div className="row">
            <div className="col-md-6 offset-3">
        <h3>Fill <span className="fun">out</span> a <span className="fun">form</span> to <span className="fun">upload</span> your <span className="fun">product</span>!</h3>
        <hr/>
        </div>
        </div>
          <div className="row">
            <div className="col-md-4 sm-12 offset-4">
            
              <div className="card">
                <form >
                  <br></br>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="itemName">Enter Item Name</label>
                      <input id="itemName" name="itemName" type="text" class="form-control" onChange ={handleInputChange} />
                    </div>

                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="startPrice">Starting Price</label>
                      <input id="startPrice" name="startPrice" type="startPrice" class="form-control" onChange ={handleInputChange} />
                    </div>
                    <div class="form-group col-md-12">
                      <label htmlFor="startPrice">Buy out price</label>
                      <input id="startPrice" name="startPrice" type="startPrice" class="form-control" onChange ={handleInputChange} />
                    </div>

                  </div>
                  <div class="form-group col-md-12">
                    <label htmlFor="startPrice">Buy Now</label>
                    <input id="startPrice" name="startPrice" type="startPrice" class="form-control" onChange={handleInputChange} />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="category">Choose a category</label>
                    <select id="category" class="form-control" onChange={handleInputChange}>
                      <option>...</option>
                      <option>Home and garden</option>
                      <option>Electronics</option>
                      <option>Fashion</option>
                      <option>Sporting goods</option>
                      <option>Business and industrial</option>
                    </select>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-12">
                    <label for="condition">Add item condition</label>
                    <select id="condition" class="form-control" onChange={handleInputChange}>
                      <option>...</option>
                      <option>New</option>
                      <option>Good</option>
                      <option>Used</option>
                    </select>
                  </div>

                  
                  <div class="form-row">
                    <div class="form-group col-md-12 ">
                    <label htmlFor="img">Upload product image</label>
                      <div class="file-upload">
                        <div class="file-select">

                          
                         <input id="img" name="img" type="file" />
                      
                        
                        </div>
                      </div>


                      </div>
                    </div>

                  </div>

                  <br></br>


                <button className="postButton btn" onClick={handleSubmit}>Post Item!</button>
                <br />
              </form>
            </div>
            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </>

  );
}


export default PostPage;
