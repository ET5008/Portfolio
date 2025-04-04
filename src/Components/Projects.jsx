import ProjectCard from './ProjectCard'

export default function Projects() {
    return (
    <section className='mx-12 flex flex-col text-left mb-36'>
        <h2 id='Projects' className='text-2xl mb-6'>My Projects</h2>
        <div className='grid grid-cols-2'>
            <ProjectCard title="Bit by Bit" techStack="HTML TailwindCSS JavaScript" description="I created a gamified to-do list app to incentivize students to be more productive."/>
            <ProjectCard title="Bit by Bit" techStack="HTML TailwindCSS JavaScript" description="I created a gamified to-do list app to incentivize students to be more productive."/>
            <ProjectCard title="Bit by Bit" techStack="HTML TailwindCSS JavaScript" description="I created a gamified to-do list app to incentivize students to be more productive."/>
            <ProjectCard title="Bit by Bit" techStack="HTML TailwindCSS JavaScript" description="I created a gamified to-do list app to incentivize students to be more productive."/>
        </div>
        <div className='flex items-baseline'>
            <a href="" className='text-lg hover:underline hover:underline-offset-6 transition-all'>View all projects</a>
        </div>
    </section>
    )
    }