import React, { useEffect } from "react";
import { getData } from "../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { Text, Grid, GridItem } from "@chakra-ui/react";
import { Product } from "../Components/Product";

const Shop = () => {
  const loading = useSelector((state) => state.product.loading);
  const products = useSelector((state) => state.product.products);
  const error = useSelector((state) => state.product.error);

  const dispatch = useDispatch();
  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getData());
    }
  }, [dispatch, products.length]);
  return (
    <div>
      {loading ? (
        <h1>Entities loading...</h1>
      ) : error ? (
        <h2>Something went wrong, please try again later</h2>
      ) : (
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {products.length > 0 &&
            products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
        </Grid>
      )}
    </div>
  );
};

export default Shop;
