import Image from 'next/image';

const TeamCard = () => {
    const teamMembers = [
        {
            name: 'Aly Hani',
            job: 'Team Leader, Fullstack .NET Developer, Next.js',
            imgSrc: '/images/testimonials/Alyhani.jpg',
            quote: 'Very easy this was to integrate. If you care for your time, I hands down would go with this.',
        },
        {
            name: 'Mostafa Mohammed',
            job: 'Fullstack .NET Developer, Next.js',
            imgSrc: '/images/testimonials/Btt.jpg',
            quote: 'Solid foundation for any project. Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!',
        },
        {
            name: 'Eslam Eyman',
            job: 'Backend .NET Developer',
            imgSrc: '/images/testimonials/EslamEyman.jpg',
            quote: 'Mindblowing workflow. Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application.',
        },
        {
            name: 'Sanaa Abdelaziz',
            job: 'Mobile Developer, Flutter',
            imgSrc: '/images/Home/Tourguide.jpg',
            quote: 'Efficient Collaborating. You have many examples that can be used to create a fast prototype for your team.',
        },
        {
            name: 'Nada Atef',
            job: 'UI/UX Designer',
            imgSrc: '/images/Home/Tourguide.jpg',
            quote: 'Innovative designs and seamless integration with modern tools. A true asset for any development team.',
        },
    ];

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 px-4 md:px-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="relative flex flex-col md:flex-row bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] mx-auto md:mx-4">
                    <div className="relative w-full md:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-t-xl md:rounded-none md:rounded-l-xl shrink-0">
                        <Image
                            src={member.imgSrc}
                            alt="profile picture"
                            className="object-cover w-full h-full"
                            layout="fill"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
                            {member.job}
                        </h6>
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {member.name}
                        </h4>
                        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                            {member.quote}
                        </p>
                        <a href="#" className="inline-block">
                            <button className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20" type="button">
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;
