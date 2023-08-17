import { useEffect } from 'react';
import Hero from '../../components/Hero/index'
import FlashDeals from '../../components/flashDeals'
import {useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from '../../redux/actions/ProductAction';
const Home = () => {
const {productsInfo} = useSelector(state=>state.products);
const dispatch = useDispatch();

useEffect(() => {
  if(productsInfo.length === 0) {
    dispatch(getAllProducts())
  }
}, [dispatch,productsInfo])

  return (
    <>
    <Hero/>
    <FlashDeals/>
    </>
  )
}

export default Home