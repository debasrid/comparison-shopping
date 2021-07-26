import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInitialState, listProducts } from '../actions/productActions';
import Pagination from '@material-ui/lab/Pagination';
import Grid from '@material-ui/core/Grid';

export default function HomeScreen() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products} = productList;
  const productCollection = products.docs;
  
  //console.log("Pages " + totalPages);

  useEffect(() => {
    dispatch(fetchInitialState());
    console.debug("Inside fetch initial state");
  }, []);

  useEffect(() => {
    dispatch(listProducts({page: page, limit: 6}));
    console.debug("Inside fetch list product state");
  }, [dispatch]);

  //setCount(products.totalPages);
  //setPage(products.page);
  console.debug("After fetch list product state");
  console.debug("Productlist is "+JSON.stringify(products));
  console.debug("Count is "+count);
  console.debug("page is "+page);

  //setCount(totalPages);

  // const retrieveProducts = () => {

  //   listProducts({page: page, limit: 6})
  //     .then((response) => {
  //       const { products, totalPages } = response.data;

  //       setProducts(products);
  //       setCount(totalPages);

  //       console.log(response.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  // useEffect(retrieveProducts, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };


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
          <Grid container spacing={3}>
          <div className="row center">
            {productCollection.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
          </Grid>}
        </>
      )}
      {products.length !== 0 && 
        <div className="row center">
          <Pagination
            className="my-3"
            count={count}
            page={page}
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
