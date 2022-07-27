import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "@material-ui/core";
import Card from "./shopingCard";
function BasicExample() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(
        `https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json`
      )
      .then((res) => {
        setProducts(res.data.data.products);
      });
  }, []);
  var allProducts;
  if (products !== null) {
    allProducts = products.map((item, index) => {
      return <Card product={item} key={index} />;
    });
  }
  if (products !== null) {
    return (
      <Grid container justifyContent="center">
        <Grid item md={10} xs={6} sm={11}>
          <Grid container spacing={2}>
            {allProducts}
          </Grid>
        </Grid>
      </Grid>
    );
  } else {
    <div></div>;
  }
}
export default BasicExample;