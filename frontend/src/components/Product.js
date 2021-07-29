import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from "@material-ui/core/Box";

export default function Product(props) {
  const { product } = props;
  
  return (
    <Paper elevation={3}>
       <Box height="27em" width="27em" display="flex" justifyContent="center" alignItems="center">
        <div key={product._id}>
          <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image_link} alt={product.title} />
          </Link>
          <div>
            <Link to={`/product/${product._id}`}>
              <h2>{product.title}</h2>
            </Link>
            <div className="row">
              <div className="price">${product.price}</div>
            </div>
          </div>
        </div>
      </Box>
    </Paper>
  );
}
