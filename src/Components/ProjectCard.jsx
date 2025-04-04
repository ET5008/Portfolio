
export default function ProjectCard(prop) {
    return (
        <div className="border-2 p-4 rounded-sm mb-4 mr-4 hover:cursor-pointer">
            <div className="flex flex-row justify-between">
                <div>
                    <h1 className="text-left text-xl">{prop.title}</h1>
                    <p className="text-left text-sm text-gray-400">{prop.techStack}</p>
                </div>
                <svg width="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 18L18 6M18 6H9M18 6V15" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            
    
            <p className="text-left mt-8">{prop.description}</p>
        </div>
    )
}