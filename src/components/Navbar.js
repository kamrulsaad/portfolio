import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import { DribbbleIcon, GithubIcon, LinkedInIcon, MoonIcon, PinterestIcon, SunIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {

    const router = useRouter()

    return (
        <Link className={`${className} relative group`} href={href}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}
            dark:bg-light
            `}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {

    const router = useRouter()

    const handleClick = () => {
        toggle()
        router.push(href)
    }

    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`} href={href}>
            {title}
            <span className={`h-[1px] inline-block bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}
            `}>&nbsp;</span>
        </button>
    )
}


const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher()

    const [isOpen, setIsOpen] = React.useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className='w-full px-32 py-8 font-medium flex justify-between items-center dark:text-light relative
        z-10 lg:px-16 sm:px-8 md:px-12'>

            <button onClick={handleClick} className='flex-col justify-center items-center hidden lg:flex'>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded  ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>

            <div className='w-full flex justify-between items-center lg:hidden'>
                <nav className='space-x-4'>
                    <CustomLink href="/" title={"Home"} />
                    <CustomLink href="/about" title={"About"} />
                    <CustomLink title={"Projects"} href="/projects" />
                    <CustomLink href="/articles" title={"Articles"} />
                </nav>

                <nav className='flex items-center justify-center flex-wrap'>
                    <motion.a href="/" target={'_blank'}
                        whileHover={{
                            y: -2
                        }}
                        whileTap={{
                            scale: 0.9
                        }}
                        className='w-6 mr-3 '>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href="/" target={'_blank'} className='w-6 mx-3 ' whileHover={{
                        y: -2
                    }}
                        whileTap={{
                            scale: 0.9
                        }}>
                        <GithubIcon />
                    </motion.a>
                    <motion.a href="/" target={'_blank'} className='w-6 mx-3 ' whileHover={{
                        y: -2
                    }}
                        whileTap={{
                            scale: 0.9
                        }}>
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a href="/" target={'_blank'} className='w-6 mx-3 ' whileHover={{
                        y: -2
                    }}
                        whileTap={{
                            scale: 0.9
                        }}>
                        <DribbbleIcon />
                    </motion.a>
                    <motion.a href="/" target={'_blank'} className='w-6 ml-3 bg-light rounded-full' whileHover={{
                        y: -2
                    }}
                        whileTap={{
                            scale: 0.9
                        }}>
                        <PinterestIcon />
                    </motion.a>

                    <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : "bg-light text-dark"}`}>
                        {
                            mode === 'dark' ?
                                <SunIcon className={'fill-dark'} /> :
                                <MoonIcon className={'fill-dark'} />
                        }
                    </button>

                </nav>
            </div>

            {
                isOpen ? <motion.div
                initial={{scale: 0, opacity: 0, x: '-50%', y: '-50%'}}
                animate={{scale: 1, opacity: 1}}
                className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'>
                    <nav className='flex items-center flex-col justify-center'>
                        <CustomMobileLink toggle={handleClick} href="/" title={"Home"} />
                        <CustomMobileLink toggle={handleClick} href="/about" title={"About"} />
                        <CustomMobileLink toggle={handleClick} title={"Projects"} href="/projects" />
                        <CustomMobileLink toggle={handleClick} href="/articles" title={"Articles"} />
                    </nav>

                    <nav className='flex items-center justify-center flex-wrap mt-2'>
                        <motion.a href="/" target={'_blank'}
                            whileHover={{
                                y: -2
                            }}
                            whileTap={{
                                scale: 0.9
                            }}
                            className='w-6 mr-3 sm:mx-1'>
                            <TwitterIcon />
                        </motion.a>
                        <motion.a href="/" target={'_blank'} className='w-6 mx-3 bg-light rounded-full dark:bg-dark sm:mx-1' whileHover={{
                            y: -2
                        }}
                            whileTap={{
                                scale: 0.9
                            }}>
                            <GithubIcon />
                        </motion.a>
                        <motion.a href="/" target={'_blank'} className='w-6 mx-3 sm:mx-1' whileHover={{
                            y: -2
                        }}
                            whileTap={{
                                scale: 0.9
                            }}>
                            <LinkedInIcon />
                        </motion.a>
                        <motion.a href="/" target={'_blank'} className='w-6 mx-3 sm:mx-1' whileHover={{
                            y: -2
                        }}
                            whileTap={{
                                scale: 0.9
                            }}>
                            <DribbbleIcon />
                        </motion.a>
                        <motion.a href="/" target={'_blank'} className='w-6 ml-3 sm:mx-1 bg-light rounded-full' whileHover={{
                            y: -2
                        }}
                            whileTap={{
                                scale: 0.9
                            }}>
                            <PinterestIcon />
                        </motion.a>

                        <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')} className={`ml-3 flex items-center justify-center sm:mx-1 rounded-full p-1 ${mode === 'light' ? 'bg-dark text-light' : "bg-light text-dark"}`}>
                            {
                                mode === 'dark' ?
                                    <SunIcon className={'fill-dark'} /> :
                                    <MoonIcon className={'fill-dark'} />
                            }
                        </button>

                    </nav>
                </motion.div> : null
            }

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>
        </header>
    )
}

export default Navbar