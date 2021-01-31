import React from 'react'
import image from '../img/slider2.jpg';

export default function Home(){
    return (
        <main>
            <img 
                src={image} 
                alt="galaxy" 
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <div>
                    <div className="text-6xl text-black font-bold cursive leading-none lg:leading-snug home-name bg-purple-600 bg-opacity-50">Hi, I'm SonTran!!!</div>
                </div>
            </section>
        </main>
    )
}