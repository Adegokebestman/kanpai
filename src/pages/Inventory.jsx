import React from 'react';
import {BsPlusLg} from 'react-icons/bs';
import {FaMinus} from 'react-icons/fa';
import {GrCart} from 'react-icons/gr';
import { Button  } from '../components';
import {productList} from '../data/dummy';
import AddToCart from '../components/AddToCart';

const Inventory = () => {
  return (
    <div className='mt-12 bg-gray-100 '>
   <div className=' flex flex-wrap lg:flex-nowrap justify-center'>


    <div className='flex font-semibold justify-center items-center absolute'>
<div className='flex m-3 flex-wrap justify-center gap-8 items-center '>

{productList.map((item) =>(
    <div key={item.title} className="bg-white text-center sidebar  dark:text-gray-200 dark:bg-secondary-dark-bg md:w-full h-32 p-4 rounded-2xl">
    <button type='button' style={{color:item.iconColor, backgroundColor: item.iconBg}} className="text-2xl text-center opacity-0.9 rounded-full p-4 hover:drop-shadow-xl">
   <img src= {item.image} alt='product' className='w-14 mr-24'  />

    </button>

    <span className='mr-24'>

      {item.name}

    </span>
    <span className='mt-4'> {item.quantity}</span>


    <span className='mr-10'>      {item.status}
    <span>{item.quantity}</span>
 </span>

      <span className='mr-10'>{item.price}</span>
      <span className='mr-10'>{item.quantity}</span>
 <button className=' m-4 p-2 border rounded-full bg-[#D0F4D0] text-[#147D30] '>
            <BsPlusLg/>
            </button>
            <span>0</span>
            <button className=' p-2  mr-16 ml-4 border rounded-full bg-[#F9BFB5] text-[#EF3838]'>
             <FaMinus /> </button>

						{/* <button class="mr-4 text-yellow-100">
              <GrCart />
            </button> */}



<Button  color="white" bgColor="#FF7E20" text="Add to Cart" borderRadius="10px"   />

</div>

))}
</div>
</div>
</div>
   <div>
   </div>

 </div>

  )
}

export default Inventory