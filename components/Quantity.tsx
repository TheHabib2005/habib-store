// import React from 'react'

// const Quantity = () => {
//     return (
//         <div className='flex items-center gap-x-8'>
//             <span>Quantity</span>
//             <div className='flex items-center gap-x-8'>
//                 <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] disabled:cursor-default  disabled:bg-gray-400'
//                     disabled={quantity > 1 ? false : true}
//                     onClick={() => {
//                         setQuantity(prev => prev - 1)
//                         updateQuantity("decrement", currentProduct.id)

//                     }}
//                 >-</button>
//                 <span>{quantity}</span>
//                 <button className='w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] '
//                     onClick={() => {
//                         setQuantity(prev => prev + 1)
//                         updateQuantity("increment", currentProduct.id)
//                     }}
//                 >+</button>
//             </div>
//         </div>
//     )
// }

// export default Quantity