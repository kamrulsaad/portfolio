import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects | Kamrul Saad</title>
                <meta name="description" content="Projects of Kamrul Saad" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText
                        text={"Imagination Trumps Knowledge!"}
                    ></AnimatedText>
                    
                </Layout>

            </main>
        </>
    )
}

export default projects