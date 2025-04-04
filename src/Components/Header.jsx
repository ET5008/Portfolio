
export default function Header(){
    return (
        <header className='flex flex-row items-center justify-around w-[100vw] bg-slate-500/95 py-6 fixed'>
            <h1 className="text-4xl font-medium">ET</h1>
            <nav className="items-center">
                <ul className="flex flex-row align-middle gap-4">
                    <li className='text-lg hover:border-b-[2px] transition-all duration-150'> <a href="#About">About Me</a></li>
                    <li className='text-lg hover:border-b-[2px] transition-all duration-150'> <a href="#Projects">Projects</a></li>
                    <li className='text-lg hover:border-b-[2px] transition-all duration-150'> <a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}