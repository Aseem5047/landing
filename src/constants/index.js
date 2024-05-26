import {

    meta,
    starbucks,
    tesla,
    shopify,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "carrers",
        title: "Carrers",
    },
    {
        id: "contact",
        title: "Contact",
    },
];




const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#383E56",
        date: "March 2020 - April 2021",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    ,
    {
        testimonial:
            "I am thoroughly impressed by Rick's ability to deliver high-quality work under tight deadlines.",
        name: "James Anderson",
        designation: "Operations Manager",
        company: "Streamline Inc",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "Rick's work exceeded our expectations. Our website's performance and design have never been better.",
        name: "Olivia Thomas",
        designation: "HR Manager",
        company: "Talent Solutions",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
        testimonial:
            "We saw a significant boost in our online engagement after Rick revamped our site. Highly recommend their services!",
        name: "Daniel White",
        designation: "Digital Strategist",
        company: "Engage Media",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    }
];



// CAMP SECTION
export const PEOPLE_URL = [
    '/assets/person-1.png',
    '/assets/person-2.png',
    '/assets/person-3.png',
    '/assets/person-4.png',
];

// FEATURES SECTION
export const FEATURES = [
    {
        title: 'Real maps can be offline',
        icon: '/assets/map.svg',
        variant: 'green',
        description:
            'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
        title: 'Set an adventure schedule',
        icon: '/assets/calendar.svg',
        variant: 'green',
        description:
            "Schedule an adventure with friends. On holidays, there are many interesting offers from Enriched Care. That way, there's no more discussion",
    },
    {
        title: 'Technology using augment reality',
        icon: '/assets/tech.svg',
        variant: 'green',
        description:
            'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
        title: 'Many new locations every month',
        icon: '/assets/location.svg',
        variant: 'orange',
        description:
            'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'Learn More',
        links: [
            'About Enriched Care',
            'Press Releases',
            'Environment',
            'Jobs',
            'Privacy Policy',
            'Contact Us',
        ],
    },
    {
        title: 'Our Community',
        links: ['Climbing xixixi', 'Enriched Care', 'Enriched Care kinthill'],
    },
];

export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Admin Officer', value: '123-456-7890' },
        { label: 'Email Officer', value: 'Enriched Care@akinthil.com' },
    ],
};

export const SOCIALS = {
    title: 'Social',
    links: [
        '/assets/facebook.svg',
        '/assets/instagram.svg',
        '/assets/twitter.svg',
        '/assets/youtube.svg',
        '/assets/wordpress.svg',
    ],
};

export { experiences, testimonials };