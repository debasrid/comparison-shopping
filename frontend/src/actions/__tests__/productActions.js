import {listProducts, detailsProduct} from "../productActions";
import { useSelector } from 'react-redux';
import * as productConstants from "../../constants/productConstants"

describe("Get list of products successfully", () => {
    it ("shoud fetch and list products sucessfully", () => {
        //arrange
        const page = 1;
        const limit = 1;
        const products = [{
            title: "GUB SC-180 1 st Mountainbike Fiets Crank Wieltrekker Remover Reparatie", 
            description: "Specificatie: Naam BikeTool Merk GUB Model SC-180 Gewicht 126g Kenmerk",
            link: "https://www.dennisdeal.com/products/gub-sc-180-1-st-mountainbike-fiets-crank-wieltrekker-remover-reparatie-extractor-tool-pedalen-removal-reparatie-tool_1589338?variant=31732877000794",
            image_link: "https://dnqslujgppusp.cloudfront.net/products/one6TFQiphO.jpg",
            availability: "in stock",
            price: "16.99 EUR",
            brand: "DennisDeal",
          }]
        const expectedProductList = {
            type: productConstants.PRODUCT_LIST_SUCCESS,
            products
        };

        //act
        listProducts({page: page, limit: limit});
        const productList = useSelector((state) => state.productList);

        //assert
        expect(productList).toEqual(expectedProductList);
    });
});

describe("Get product details successfully", () => {
    it ("should fetch details of a product", () => {
        //arrange
        const productId = "392f2717-1f77-4065-81a6-761c0c4a0069";
        const product = {
            title: "GUB SC-180 1 st Mountainbike Fiets Crank Wieltrekker Remover Reparatie", 
            description: "Specificatie: Naam BikeTool Merk GUB Model SC-180 Gewicht 126g Kenmerk",
            link: "https://www.dennisdeal.com/products/gub-sc-180-1-st-mountainbike-fiets-crank-wieltrekker-remover-reparatie-extractor-tool-pedalen-removal-reparatie-tool_1589338?variant=31732877000794",
            image_link: "https://dnqslujgppusp.cloudfront.net/products/one6TFQiphO.jpg",
            availability: "in stock",
            price: "16.99 EUR",
            brand: "DennisDeal",
          }
        const expectedProduct = {
            type: productConstants.PRODUCT_DETAILS_SUCCESS,
            product
        };

        //act
        detailsProduct(productId);
        const retrievedProduct = useSelector((state) => state.productDetails);

        //assert
        expect(retrievedProduct).toEqual(expectedProduct);
    });
});