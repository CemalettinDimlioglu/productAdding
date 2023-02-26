 import { Button, Grid, TextField, Typography } from "@mui/material";
 import React, { useState } from "react";

 let values = {
   productTitle: "",
   price: "",
   quantity: "",
   img: "",
 };

 const AddProduct = () => {
   const [initialValue, setValue] = useState(values);
   let { productTitle, price, quantity, img } = initialValue;
   const handleSubmit = () => {
     localStorage.setItem(
       `${new Date().getSeconds()}`,
       JSON.stringify(initialValue)
     );
   };

   const handleChange = (e) => {
     let { name, value } = e.target;

     setValue((prev) => ({ ...prev, [name]: value }));
   };
   console.log(initialValue);
   return (
     <>
       <div>
         <Typography variant="h5">ADD PRODUCT</Typography>

         <form onSubmit={handleSubmit}>
           <Grid container spacing={3}>
             <Grid item xs={12}>
               <TextField
                 type="text"
                 name="productTitle"
                 label="Product Title"
                 variant="standard"
                 value={productTitle}
                 onChange={handleChange}
                 fullWidth
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 type="number"
                 name="price"
                 label="Product Price"
                 variant="standard"
                 value={price}
                 onChange={handleChange}
                 fullWidth
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 type="number"
                 name="quantity"
                 label="Product Qauntity"
                 variant="standard"
                 value={quantity}
                 onChange={handleChange}
                 fullWidth
               />
             </Grid>
             <Grid item xs={12}>
               <TextField
                 type="text"
                 name="img"
                 label="Image URL"
                 variant="standard"
                 value={img}
                 onChange={handleChange}
                 fullWidth
               />
             </Grid>
             <Grid item xs={12}>
               <Button
                 type="submit"
                 variant="contained"
                 color="warning"
                 fullWidth
               >
                 Add Product
               </Button>
             </Grid>
           </Grid>
         </form>
       </div>
     </>
   );
 };

 export default AddProduct;