import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/create loading screen in react js.jpg'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const MovingImage = ({ image, title, link }) => {

    const imageRef = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    function handleMouse(e) {
        imageRef.current.style.display = "inline-block"
        x.set(e.pageX);
        y.set(-10);
    }

    function handleMouseLeave(e) {
        imageRef.current.style.display = "none"
        x.set(0);
        y.set(0);
    }

    return <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
    >
        <h2 className='capitalize text-xl font-semibold hover:underline'>
            {title}
        </h2>
        <FramerImage
            style={{ x, y }}
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: { duration: 0.5 }
            }}
            ref={imageRef} src={image} alt={title} className="w-96 hidden absolute rounded-lg z-10 h-auto" />
    </Link>
}

const Articles = ({
    title,
    date,
    link,
    image
}) => {
    return <motion.li
        initial={{ y: 200 }}
        whileInView={{
            y: 0, transition: {
                duration: 0.5,
                ease: 'easeInOut'
            }
        }}
        viewport={{once: true}}
        className='relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
        <MovingImage
            image={image}
            title={title}
            link={link}
        />
        <span className='text-primary font-semibold pl-4'>
            {date}
        </span>
    </motion.li>
}

const FeaturedArticles = ({ image, title, time, summary, link }) => {
    return <li className='col-span-1 w-full p-4 bg-light border border-solid rounded-2xl border-dark relative'>
        <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark' />
        <Link className='w-full cursor-pointer overflow-hidden rounded-lg inline-block' href={link} target='_blank'>
            <FramerImage src={image} alt={title} className="w-full h-auto "
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            />
        </Link>
        <Link href={link} target='_blank'>
            <h2 className='capitalize my-2 mt-4 w-full text-2xl font-bold hover:underline'>
                {title}
            </h2>
        </Link>
        <p className='mb-2 text-sm'>
            {summary}
        </p>
        <span className='text-primary font-semibold'>
            {time}
        </span>
    </li>
}

const articles = () => {
    return (
        <>
            <Head>
                <title>Article | Kamrul Saad</title>
                <meta name="description" content="Articles from Kamrul Saad" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text="Words Can Change The World!"
                        className='mb-16'
                    />
                    <ul className='grid grid-cols-2 gap-16'>
                        <FeaturedArticles
                            title={'Build A Custom Pagination Component In Reactjs From Scratch'}
                            summary={'Learn how to build a custom pagination component in ReactJS from scratch.'}
                            time={'2 min read'}
                            link={'/'}
                            image={article1}

                        />
                        <FeaturedArticles
                            title={'Build A Custom Pagination Component In Reactjs From Scratch'}
                            summary={'Learn how to build a custom pagination component in ReactJS from scratch.'}
                            time={'2 min read'}
                            link={'/'}
                            image={article1}

                        />
                    </ul>
                    <h2 className='font-bold text-4xl my-16 text-center w-full mt-32'>All Articles</h2>
                    <ul>
                        <Articles
                            title={'Build A Custom animation Component In Reactjs From Scratch'}
                            date={'March 22, 2023'}
                            link={'/'}
                            image={article1}
                        />
                        <Articles
                            title={'Build A Custom animation Component In Reactjs From Scratch'}
                            date={'March 22, 2023'}
                            link={'/'}
                            image={article1}
                        />
                        <Articles
                            title={'Build A Custom animation Component In Reactjs From Scratch'}
                            date={'March 22, 2023'}
                            link={'/'}
                            image={article1}
                        />
                        <Articles
                            title={'Build A Custom animation Component In Reactjs From Scratch'}
                            date={'March 22, 2023'}
                            link={'/'}
                            image={article1}
                        />
                        <Articles
                            title={'Build A Custom animation Component In Reactjs From Scratch'}
                            date={'March 22, 2023'}
                            link={'/'}
                            image={article1}
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles