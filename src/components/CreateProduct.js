import React, { useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import Loader from "./Loader/Loader";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({});
  const history = useHistory();
  const classes = useStyles();

  const onChangeHandler = (e, type) => {
    setNewProduct((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      id: newProduct.id,
      title: newProduct.title,
      price: newProduct.price,
      description: newProduct.description,
      category: newProduct.category,
      image: newProduct.image,
    };
    axios
      .post(`https://fakestoreapi.com/products`, { productData })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    history.push(`/product-details/${newProduct.id}`);
  };

  return (
    <Loader>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="id"
          variant="outlined"
          value={newProduct.id}
          onChange={(e) => onChangeHandler(e, "id")}
        />
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          value={newProduct.title}
          onChange={(e) => onChangeHandler(e, "title")}
        />
        <TextField
          id="outlined-basic"
          label="price"
          variant="outlined"
          value={newProduct.price}
          onChange={(e) => onChangeHandler(e, "price")}
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          value={newProduct.description}
          onChange={(e) => onChangeHandler(e, "description")}
        />
        <TextField
          id="outlined-basic"
          label="category"
          variant="outlined"
          value={newProduct.category}
          onChange={(e) => onChangeHandler(e, "category")}
        />
        <TextField
          id="outlined-basic"
          label="image"
          variant="outlined"
          value={newProduct.image}
          onChange={(e) => onChangeHandler(e, "image")}
        />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </Loader>
  );
};

export default CreateProduct;
