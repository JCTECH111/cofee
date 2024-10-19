import React from 'react'
import BottomTabs from '../components/BottomTabs'
import { IoNotifications, IoCart, IoSwapHorizontal, IoStar, IoAdd   } from 'react-icons/io5';
import Carousel from '../components/Carousel';
import image1 from "../assets/slide1.jpeg"
import image2 from "../assets/slide2.jpeg"
import image3 from "../assets/slide3.jpeg"
import image4 from "../assets/slide4.jpeg"
import ProductCard from '../components/ProductCard';
import Categories from '../components/Category';
function HomeScreen() {
  return (
    <div >
    <div className='bg-brown-600  rounded-b-[2rem] py-3'>
     <div className='head flex justify-between p-3 items-center'>
      <h4 className='text-white font-bold text-xl'>
        Joecode 👑
      </h4>
      <div className='boxes flex gap-2 '>
        <div className='box h-12 w-12 bg-brown-400 text-white font-bold rounded-xl flex justify-center items-center'>
          <IoCart size={28} />
        </div>
        <div className='box h-12 w-12 bg-brown-400 text-white font-bold rounded-xl flex justify-center items-center'>
          <IoNotifications size={28} />
        </div>
      </div>
     </div>
     <div className='flex items-center gap-2 justify-center py-3 px-3'>
      <input placeholder='Search' className='bg-white border-none outline-none text-gray-700 px-3 py-2.5 rounded-xl w-[20rem]'/>
      <div className='box h-12 w-12 bg-white text-black font-bold rounded-xl flex justify-center items-center'>
          <IoSwapHorizontal size={28} />
        </div>
     </div>
    </div>
    <div className='p-3'>
    <Carousel />
    </div>
    <Categories />
    <div className='products w-full p-4 flex flex-col gap-3'>
     <h2 className='text-2xl text-gray-700 font-bold'>
      Taraczin Products
     </h2>
     <div className='product_list grid grid-cols-2 md:grid-cols-3 gap-4 mb-20'>
        <ProductCard productname ="Capocillo" productimage={image1} price="$29.7" ratings="4.0" />
        <ProductCard productname ="Zakarto" productimage={image2} price="$32.9" ratings="3.5" />
        <ProductCard productname ="pokino" productimage={image3} price="$45.8" ratings="4.1" />
        <ProductCard productname ="laravasca" productimage={image4} price="$99.9" ratings="4.5" />
        <ProductCard productname ="bopatota" productimage={image2} price="$12.6" ratings="2.5" />
        <ProductCard productname ="moima" productimage={image1} price="$21.4" ratings="3.4" />
        <ProductCard productname ="Zakarto" productimage={image2} price="$32.9" ratings="3.5" />
        <ProductCard productname ="pokino" productimage={image3} price="$45.8" ratings="4.1" />
        <ProductCard productname ="laravasca" productimage={image4} price="$99.9" ratings="4.5" />
     </div>
    </div>
      <BottomTabs />
    </div>
  )
}

export default HomeScreen
