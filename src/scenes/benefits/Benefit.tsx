import React from 'react'
import { SelectedPage } from '@/shared/types'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { motion } from 'framer-motion'


const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
    
}

type Props = {
    icon: JSX.Element
    title: string
    description: string
    setSelectedPage: (value: SelectedPage) => void
}



const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
        variants={childVariant}
        className='mt-5 ronded-md border-2 border-gray-100 px-5 py-16 text-center'>
        <div className='mb-4 flex justify-center'>
            <div className='rounded-full border-2 border-gray-100 bg-primary-100 p-4'>
                {icon}
            </div>
        </div>
        <div className='font-bold'>{title}</div>
        <div className='my-3'>{description}</div>
        <AnchorLink 
            className='text-sm font-bold underline text-primary-500 hover:text-secondary-500'
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
        >Learn More</AnchorLink>
    </motion.div>
  )
}

export default Benefit