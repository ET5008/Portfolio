
export default function Header(){

    const handleClickNav = (section) => {
        document.getElementById(section).scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    }

    return (
        <header className='flex flex-row items-center justify-around w-[100vw] bg-slate-500/95 py-6 fixed'>
            <h1 className="text-4xl font-medium">ET</h1>
            <nav className="items-center">
                <ul className="flex flex-row align-middle gap-4">
                    <li className='text-xl hover:text-blue-400  transition-all duration-150'> <button className="" onClick={() => handleClickNav('About')} >About Me</button></li>
                    <li className='text-xl hover:text-blue-400  transition-all duration-150'> <button className="" onClick={() => handleClickNav('Projects')} >Projects</button></li>
                    <li className='text-xl hover:text-blue-400  transition-all duration-150'> <button className="" onClick={() => handleClickNav('Contact')} >Contact</button></li>
                </ul>
            </nav>
        </header>
    )
}