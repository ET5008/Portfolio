import ConferencePhoto from '../assets/nlc2024.jpg'

export default function Hero() {
    return(
        <section className=" w-[100vw] flex justify-center flex-col h-[100vh]">
            <div className='items-center mx-100 my-50 flex flex-row justify-around'>
                <h1 className="text-5xl text-left mr-8">Hello! I'm Ethan, <br></br> I'm a Front-end developer</h1>
                <img src={ ConferencePhoto } alt="A photo of me with my friends at a conference" className='h-90 w-auto rounded-md border-2 border-sky-800'/>
            </div>   

            <p className='text-2xl'>Learn more</p>
            <svg className='mx-auto stroke-[1.2px]' width={100} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 9L12 15L18 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
        </section>
    )
}