import Image from 'next/image';

const TeamMembers = () => {
    const teamMembers = [
        {
            name: 'Aly Hani',
            job: 'Team Leader, Fullstack .NET Developer, Next.js',
            imgSrc: '/images/Home/Tourguide.jpg',
            social: {
                facebook: '#facebook',
                twitter: '#twitter',
                instagram: '#instagram',
            },
        },
        {
            name: 'Mostafa Mohammed',
            job: 'Fullstack .NET Developer, Next.js',
            imgSrc: '/images/Home/Tourguide.jpg',
            social: {
                facebook: '#facebook',
                twitter: '#twitter',
                instagram: '#instagram',
            },
        },
        {
            name: 'Eslam Eyman',
            job: 'Backend .NET Developer',
            imgSrc: '/images/Home/Tourguide.jpg',
            social: {
                facebook: '#facebook',
                twitter: '#twitter',
                instagram: '#instagram',
            },
        },
        {
            name: 'Sanaa Abdelaziz',
            job: 'Mobile Developer, Flutter',
            imgSrc: '/images/Home/Tourguide.jpg',
            social: {
                facebook: '#facebook',
                twitter: '#twitter',
                instagram: '#instagram',
            },
        },
        {
            name: 'Nada Atef',
            job: 'UI/UX Designer',
            imgSrc: '/images/Home/Tourguide.jpg',
            social: {
                facebook: '#facebook',
                twitter: '#twitter',
                instagram: '#instagram',
            },
        },
    ];
    return (
        <div className="grid gap-8 md:grid-cols-2 px-4 md:px-8">
            {teamMembers.map((member, index) => (
                <div key={index} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 mx-auto md:mx-4">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
                        <Image
                            src={member.imgSrc}
                            alt="profile picture"
                            className="object-cover w-full h-full"
                            layout="fill"
                        />
                    </div>
                    <div className="p-6 text-center">
                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {member.name}
                        </h4>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
                            {member.job}
                        </p>
                    </div>
                    <div className="flex justify-center p-6 pt-2 gap-7">
                        <a href={member.social.facebook} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href={member.social.twitter} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>
                        <a href={member.social.instagram} className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;
