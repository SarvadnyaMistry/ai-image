// import React, { useContext } from 'react'
// import { assets, plans } from '../assets/assets'
// import { AppContext } from '../context/Appcontext'

// import { motion } from "motion/react"

// const BuyCredit = () => {
//   const {user} = useContext(AppContext)
//   return (
//     <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
//     initial={{opacity:0.2,y:100}}
//     transition={{duration:1}}
//     whileInView={{opacity:1,y:0}}
//     viewport={{once:true}}
//     >
//       <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
//         Our plans
//       </button>
//       <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
      
//       <div className='flex flex-wrap justify-center gap-6 text-left'>
//         {plans.map((item,index)=>(
//           <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
//             <img width={40} src={assets.logo_icon} alt="" />
//             <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
//             <p className='text-sm'>{item.desc}</p>
//             <p className='mt-6'>
//              <span className='text-3xl font-medium'> ${item.price} </span>/ {item.credits} credits </p>
//              <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase': 'Get Started'}</button>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// export default BuyCredit

import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/Appcontext'

import { motion } from "framer-motion"

const BuyCredit = () => {
  const { user } = useContext(AppContext)
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
            <img width={40} src={assets.logo_icon} alt="" />
            <p className='mt-3 mb-1 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'> ${item.price} </span>/ {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Sections */}
      <div className='mt-16 text-gray-700 text-sm'>
        <p className='flex items-center justify-center gap-2 mb-4'>
          <span className='text-lg'>📞</span> Contact Us: +91 7893456754
        </p>

        <div className='max-w-2xl mx-auto text-left space-y-4'>
          <div>
            <h2 className='font-semibold'>Shipping Policy</h2>
            <p>After Payment is successfull, the credits will be reflected in your account within few minutes</p>
          </div>

          <div>
            <h2 className='font-semibold'>Terms and Conditions</h2>
            <p>By using our services, you agree to comply with our terms and conditions as outlined on our website.</p>
          </div>

          <div>
            <h2 className='font-semibold'>Cancellations and Refunds</h2>
            <p>Orders can be canceled within 24 hours of purchase. Refunds will be processed within 7 business days.</p>
          </div>

          <div>
            <h2 className='font-semibold'>Privacy Policy</h2>
            <p>We respect your privacy and ensure that your personal information is kept secure and not shared with third parties.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default BuyCredit
