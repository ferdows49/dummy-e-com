import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
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

const EditProduct = () => {
  const [editProduct, setEditProduct] = useState({});
  const history = useHistory();
  const { productId } = useParams();
  const classes = useStyles();

  const onChangeHandler = (e, type) => {
    setEditProduct((prev) => {
      return {
        ...prev,
        [type]: e.target.value,
      };
    });
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => setEditProduct(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = {
      id: editProduct.id,
      title: editProduct.title,
      price: editProduct.price,
      description: editProduct.description,
      category: editProduct.category,
      image: editProduct.image,
    };
    axios
      .put(`https://fakestoreapi.com/products/${productId}`, { productData })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
    history.push(`/product-details/${editProduct.id}`);
  };

  return (
    <Loader>
      {/* <Loader /> */}
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
          value={editProduct.id}
          onChange={(e) => onChangeHandler(e, "id")}
        />
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          value={editProduct.title}
          onChange={(e) => onChangeHandler(e, "title")}
        />
        <TextField
          id="outlined-basic"
          label="price"
          variant="outlined"
          value={editProduct.price}
          onChange={(e) => onChangeHandler(e, "price")}
        />
        <TextField
          id="outlined-basic"
          label="description"
          variant="outlined"
          value={editProduct.description}
          onChange={(e) => onChangeHandler(e, "description")}
        />
        <TextField
          id="outlined-basic"
          label="category"
          variant="outlined"
          value={editProduct.category}
          onChange={(e) => onChangeHandler(e, "category")}
        />
        <TextField
          id="outlined-basic"
          label="image"
          variant="outlined"
          value={editProduct.image}
          onChange={(e) => onChangeHandler(e, "image")}
        />
        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </Loader>
  );
};

export default EditProduct;
