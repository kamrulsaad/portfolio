import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {

    const ref = useRef(null)

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] flex flex-col justify-between items-center'>
        <LiIcon reference={ref}/>
        <motion.div 
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring'  }}
        >
            <h3 className='capitalize font-bold text-2xl'>
                {position} &nbsp; <a target='_blank' className='text-primary dark:text-primaryDark capitalize' href={companyLink}>@{company}</a>
            </h3>
            <span className='capitalize dark:text-light/75 font-medium text-dark/75 '>
                {time} &nbsp; | &nbsp; {address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experience = () => {

    const ref = useRef(null)

    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ['start end', "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>

            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div
                    style={{
                        scaleY: scrollYProgress
                    }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light' />

                <ul className='w-full flex flex-col justify-between items-start ml-32'>
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        companyLink={"https://www.google.com/"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's                      search engine, including improving the accuracy and relevance of search results and                       developing new tools for data analysis and visualization. "}

                    />
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        companyLink={"https://www.google.com/"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's                      search engine, including improving the accuracy and relevance of search results and                       developing new tools for data analysis and visualization. "}

                    />
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        companyLink={"https://www.google.com/"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's                      search engine, including improving the accuracy and relevance of search results and                       developing new tools for data analysis and visualization. "}

                    />
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        companyLink={"https://www.google.com/"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's                      search engine, including improving the accuracy and relevance of search results and                       developing new tools for data analysis and visualization. "}

                    />
                    <Details
                        position={"Software Engineer"}
                        company={"Google"}
                        companyLink={"https://www.google.com/"}
                        time={"2022-Present"}
                        address={"Mountain View, CA"}
                        work={"Worked on a team responsible for developing new features for Google's                      search engine, including improving the accuracy and relevance of search results and                       developing new tools for data analysis and visualization. "}

                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience