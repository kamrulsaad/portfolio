import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'

const CustomLink = ({ href, title, className = '' }) => {

    const router = useRouter()

    return (
        <Link className={`${className} relative group`} href={href}>
            {title}
            <span className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = () => {
    return (
        <header className='w-full px-32 py-8 font-medium flex justify-between items-center'>
            <nav>
                <CustomLink className='mr-4' href="/" title={"Home"} />
                <CustomLink className='mx-4' href="/about" title={"About"} />
                <CustomLink className='mr-4' title={"Projects"} href="/projects" />
                <CustomLink href="/articles" title={"Articles"} className='ml-4' />
            </nav>

            <nav>
                <Link href="/" target={'_blank'}>T</Link>
                <Link href="/" target={'_blank'}>T</Link>
                <Link href="/" target={'_blank'}>T</Link>
                <Link href="/" target={'_blank'}>T</Link>
                <Link href="/" target={'_blank'}>T</Link>
                <Link href="/" target={'_blank'}>T</Link>
            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo></Logo>
            </div>
        </header>
    )
}

export default Navbar