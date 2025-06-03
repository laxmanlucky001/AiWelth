"use client"
import React, {useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'

const HerosSection = () => {
    const imageRef = useRef(null);

    useEffect(()=>{
        const imageElement = imageRef.current
        const handleScroll=()=>{
            const scrollPosition = window.scrollY
            const scrollThreshold = 100 // Adjust this value as needed
            if(scrollPosition > scrollThreshold){
                imageElement.classList.add("scrolled");
            }else{
                imageElement.classList.remove("scrolled");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);
  return (
    <div className='pb-20 px-4'>
        <div className='container mx-auto text-center'>
            <h1 className='text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>Manage Your Finances <br/> with Inteligence </h1>
            <p>
                An AI-powered personal finance app that helps you track your expenses, set budgets, and achieve your financial goals.
            </p>
            <div className='flex justify-center space-x-4 mt-5'>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8">
                        Get Started
                    </Button>
                </Link>
                <Link href="/dashboard">
                    <Button size="lg" className="px-8" variant="outline">
                        Watch Demo
                    </Button>
                </Link>
            </div>
            <div className='hero-image-wrapper'>
                <div className='hero-image' ref={imageRef}>
                    <Image src='/banner.jpeg'
                        alt='Dashboard preview'
                        width={1280}
                        height={720}
                        className='rounded-lg shadow-2xl border mx-auto'
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HerosSection