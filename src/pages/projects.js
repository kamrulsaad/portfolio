import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import { motion } from 'framer-motion'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, image, link, github }) => {
    return (
        <article className='w-full p-12 flex items-center justify-between rounded-3xl border border-solid rounded-br-2xl dark:bg-dark dark:border-light border-dark bg-light shadow-2xl relative'>
            <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-white' />
            <Link className='w-1/2 cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <FramerImage src={image} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                    {type}
                </span>
                <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>
                        {title}
                    </h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>
                    {summary}
                </p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} className='w-10' target='_blank'><GithubIcon /></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, image, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light '>
            <div className='absolute rounded-br-3xl top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
            <Link className='w-full cursor-pointer overflow-hidden rounded-lg' href={link} target='_blank'>
                <FramerImage src={image} alt={title} className="w-full h-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl'>
                    {type}
                </span>
                <Link className='hover:underline underline-offset-2' href={link} target='_blank'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold '>
                        {title}
                    </h2>
                </Link>
                <div className='mt-2 w-full flex items-center justify-between'>
                    <Link href={link} target='_blank' className='text-lg font-semibold underline'>Visit</Link>
                    <Link href={github} className='w-8' target='_blank'><GithubIcon /></Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Kamrul Saad</title>
                <meta name="description" content="Projects of Kamrul Saad" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText
                        className='mb-16'
                        text={"Imagination Trumps Knowledge!"}
                    ></AnimatedText>

                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                        <div className='col-span-6'>
                            <Project
                                title={'Crypto Screener Application'}
                                summary={'A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency.'}
                                link={'https://crypto-screener-app.netlify.app/'}
                                type={'React App'}
                                github={'/'}
                                image={project1}
                            />
                        </div>
                    </div>

                </Layout>

            </main>
        </>
    )
}

export default projects