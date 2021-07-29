import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { makeStyles } from "@material-ui/core/styles";
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(164),
      height: theme.spacing(110)
    }
  }
}));

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products} = productList;
  const productCollection = products.docs;

  useEffect(() => {
    dispatch(listProducts({page: page, limit: 6}));
  }, [dispatch, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const classes = useStyles();

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
          {products.length !== 0 && 
          <Grid container alignContent="center" className={classes.root}>
          <div className="row center" >
            {productCollection.map((product) => (
              <Grid item xs={4}>
                <Product key={product._id} product={product}></Product>
              </Grid>
            ))}
          </div>
          </Grid>}
        </>
      )}
      {products.length !== 0 && 
        <div className="row center">
          <Pagination
            className="my-3"
            count={products.totalPages}
            page={products.page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
      }
    </div>
  );
}
