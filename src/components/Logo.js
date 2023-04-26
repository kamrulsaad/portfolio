import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

const MotionLink = motion(Link)

const Logo = () => {
    return (
        <div className='flex items-center justify-center'>
            <MotionLink className='justify-center items-center flex rounded-full bg-dark w-16 h-16 dark:border-light border border-solid border-transparent text-light text-2xl font-bold' href={'/'}
                whileHover={{
                    backgroundColor: ["#121212", "rgba(131,58,180,1)", "rgba(253,29,29,1)", "rgba(252,176,69,1)", "rgba(131,58,180,1)", "#121212"],
                    transition: {
                        duration: 1,
                        repeat: Infinity,
                    }
                }}
            >KS</MotionLink>
        </div>
    )
}

export default Logo