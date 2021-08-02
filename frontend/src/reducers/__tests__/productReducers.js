import {productListReducer, productDetailsReducer} from "../productReducers";
import {listProducts, detailsProduct} from "../../actions/productActions";

it("should list products when passed PRODUCT_LIST_SUCCESS", () => {
  // arrange
  const initialState = {
    loading: false,
    products: []
  };

  const action = listProducts(1, 1);

  // act
  const newState = productListReducer(initialState, action);

  // assert
  expect(newState.producers[0].title).toEqual("GUB SC-180 1 st Mountainbike Fiets Crank Wieltrekker Remover Reparatie");
});