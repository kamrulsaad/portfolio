import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
            <Layout className='py-8 flex lg:flex-col lg:py-6 items-center justify-between  '>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:my-2'>
                    Built with <span className='
                text-primary text-2xl px-1 dark:text-primaryDark
                '> &#9825; </span>
                    by &nbsp; <Link className='underline underline-offset-2' href={'https://devdreaming.com'}>Kamrul Saad</Link>
                </div>
                <Link href={'/'} target='_blank' className='underline underline-offset-2'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer