import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import BookmarkBorderRounded from "@material-ui/icons/BookmarkBorderRounded";
import LocalMallOutlined from "@material-ui/icons/LocalMallOutlined";
function Card(props) {
  return (
    <Grid item xs={12} md={3} sm={4}>
      <div className="card-body">
        <img
          src={props.product.image[0]}
          height="70%"
          width="100%"
          alt="image"
        />
        <div className="bookmark-icon">
          <BookmarkBorderRounded />
        </div>
        <div className="shopping-icon">
          <LocalMallOutlined />
        </div>
        <p className="product-name"> {props.product.name} </p>

        <p className="price">
          Rs.{props.product.special_price}{" "}
          <span className="old-price">{props.product.discount !== 0 && props.product.price} </span>{" "}
          <span className="discount">
            {props.product.discount !== 0 &&
              "(" + props.product.discount + "%OFF)"}
          </span>{" "}
        </p>
      </div>
    </Grid>
  );
}
export default Card;