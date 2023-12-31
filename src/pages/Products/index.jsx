import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { storeProductInCart } from '../../redux/actions/CartAction';
import { getAllProducts } from '../../redux/actions/ProductAction';
import FlashCard from '../../components/flashDeals/FlashCard';

const Products = () => {
  const { search } = useLocation();
  const { productsInfo, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.carts);

  const addToCart = (product) => {
    dispatch(storeProductInCart(cartProducts, product));
  };

  const getProducts = (query) => {
    if (query) return dispatch(getAllProducts(query));
    return dispatch(getAllProducts());
  };
  useEffect(() => {
    getProducts(search);
  }, [search]);

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa-brands fa-slack" />
          <h1> All Products</h1>
        </div>
        <div className="d_flex">
          {isLoading && (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Stack>
          )}
          {productsInfo.length > 0 &&
            productsInfo.map((product) => (
              <FlashCard
                product={product}
                key={product._id}
                addToCart={addToCart}
              />
            ))}
          {!isLoading && productsInfo.length === 0 && (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>No Products Found</h1>
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
