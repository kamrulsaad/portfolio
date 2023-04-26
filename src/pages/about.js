import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on('change', (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}></span>
    )
}

const about = () => {
    return (
        <>
            <Head>
                <title>About | Kamrul Saad</title>
                <meta name="description" content="Learn more about Kamrul Saad" />
            </Head>
            <TransitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText className='mb-16 lg:!text-7xl sm:!text-6xl xl:!text-4xl sm:mb-8' text={"Passion Fuels Purpose"}></AnimatedText>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 md:col-span-8 xl:col-span-4 flex flex-col items-start justify-start md:order-2'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark dark:text-light/75 opacity-75'>Biography</h2>
                            <p className='font-medium'>
                                - Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 4 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients' visions to life.
                            </p>
                            <p className='font-medium my-4'> I believe that design is about more than just making things look pretty – it's about solving problems and
                                creating intuitive, enjoyable experiences for users.
                            </p>
                            <p className='font-medium'>
                                -Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>

                        <div className='col-span-3 md:col-span-8 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic}
                                priority
                                sizes='(max-width: 768px) 100vw, 
                          (max-width: 1200px) 50vw, 33vw'
                                alt='Kamrul Saad' className="w-full h-auto" />
                        </div>

                        <div className='col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end  md:order-3 justify-between'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold  inline-block'>
                                    <AnimatedNumbers value={50} />
                                    +
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm dark:text-light/75'>
                                    Satisfied Clients
                                </h2>
                            </div>
                            <div className='flex flex-col items-end xl:items-center justify-center '>
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold  inline-block'>
                                    <AnimatedNumbers value={40} />
                                    +
                                </span>
                                <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75'>
                                    Projects Completed
                                </h2>
                            </div>
                            <div className='flex flex-col items-end xl:items-center justify-center '>
                                <span className='text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold  inline-block'>
                                    <AnimatedNumbers value={4} />
                                    +
                                </span>
                                <h2 className='text-xl xl:text-center md:text-lg sm:text-base xs:text-sm font-medium capitalize text-dark/75 dark:text-light/75'>
                                    Years of Experience
                                </h2>
                            </div>
                        </div>
                    </div>

                    <Skills></Skills>
                    <Experience />
                    <Education />
                </Layout>
            </main>
        </>
    )
}

export default about