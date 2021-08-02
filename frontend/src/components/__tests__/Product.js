import Product from "../Product";
import React from 'react';
import renderer from 'react-test-renderer';

describe(`The product component`, ()=> {

    it (`should not regress`, () => {
        const productProp = {
            title: "GUB SC-180 1 st Mountainbike Fiets Crank Wieltrekker Remover Reparatie", 
            description: "Specificatie: Naam BikeTool Merk GUB Model SC-180 Gewicht 126g Kenmerk",
            link: "https://www.dennisdeal.com/products/gub-sc-180-1-st-mountainbike-fiets-crank-wieltrekker-remover-reparatie-extractor-tool-pedalen-removal-reparatie-tool_1589338?variant=31732877000794",
            image_link: "https://dnqslujgppusp.cloudfront.net/products/one6TFQiphO.jpg",
            availability: "in stock",
            price: "16.99 EUR",
            brand: "DennisDeal",
          }
        const tree = renderer.create(
            <Product 
                product = {productProp}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    })
})