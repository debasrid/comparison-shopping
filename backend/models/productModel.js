import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: false},
    link: { type: String, required: false},
    image_link: { type: String, required: false },
    availability: { type: String, required: true},
    price: { type: String, required: true },
    brand: { type: String, required: true },
    gtin: { type: String, required: false },
    mpn: { type: String, required: false },
    condition: { type: String, required: false },
    shipping: { type: String, required: false },
    identifier_exists: { type: String, required: false },
    google_product_category: { type: String, required: false },
    adult: { type: String, required: false },
    gender: { type: String, required: false },
    color: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
productSchema.plugin(mongoosePaginate);
const Product = mongoose.model('Product', productSchema);

export default Product;
