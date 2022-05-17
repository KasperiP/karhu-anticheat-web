const lang = {
    nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        developers: 'Developers',
        purchase: 'Purchase Karhu Anticheat',
    },

    hero: {
        name: 'Karhu Anticheat',

        title_start: 'An advanced Minecraft',
        title_highlight: 'anticheat solution',
        title_end: 'for your server',

        subtitle:
            'Lightweight, customizable and reliable minecraft anticheat solution for 1.8-1.18. Test on our server test.karhu.ac or buy the trial package to test on your own server!',

        button_left: 'View our pricing',
        button_right: 'Discord server',
    },

    features: {
        title: 'What do we offer for you?',
        subtitle:
            'Karhu team wants to offer you the best anticheat experience for low pricing, it all started from a network that didnt want to pay too much for an anticheat.',
        list: [
            {
                title: 'Advanced checks',
                subtitle:
                    'Our checks try to simulate minecraft game actions, with simplier code. Movement checks are not 1:1 accurate, but we aim for still good accuracy.',
            },
            {
                title: 'Fast support',
                subtitle:
                    'Our support team is fast, and will be pleased to answer your questions on our discord.',
            },
            {
                title: 'Lightweight',
                subtitle:
                    "We aim to leave minimal mark of usage on the main thread. Same thing also on our own threads. Karhu shouldn't affect your server's performance.",
            },
            {
                title: 'Ghost detections',
                subtitle:
                    'Karhu is very good at detecting ghost cheaters. Picking up 3.01 reach and 99.99% horizontal & vertical velocity.',
            },
            {
                title: 'Customizability',
                subtitle:
                    'Karhu offers you a great amount of customization, wether it be the anticheat name or changing messages.',
            },
            {
                title: 'Packet based',
                subtitle:
                    'Unlike some other anticheats on the market, we track stuff with packets and not with spigot api or bukkit events.',
            },
        ],
    },
    pricing: {
        card_plan_includes: 'Plan includes:',
        card_plan_view_features: 'View features',
        card_looking_download_start: 'Looking for a download link?',
        card_looking_download_end: 'Join to our',
        card_pricing: 'Our pricing',
        card_pricing_subtitle:
            'We have highly competitive pricing compared to some other anticheats.',

        card1: {
            desc_title_start: 'Ready to stop',
            desc_title_highlight: 'cheaters',
            desc_subtitle_start:
                'We want to offer you a cheap and reliable way to stop cheaters ruining your players experience.',
            desc_subtitle_end:
                'Your players can feel better when they know that other players are not cheating either.',
        },
        card2: {
            title: 'Still unsure? Purchase trial first!',
            desc_title: 'Trial',
            desc_duration: '7 days plan',
            desc_purchase: 'Purchase trial plan',
            price: '5€',
            features: [
                'Way to test Karhu on your own server without paying full price',
                'Same premium experince for limited time with only 5€',
            ],
        },
        card3: {
            desc_title: 'Premium',
            desc_duration: 'Lifetime plan',
            desc_purchase: 'Purchase premium plan',
            price: '25€',
            features: [
                'Total of 100+ checks',
                'Prioritised support',
                'High customizability',
                'Constant updates',
            ],
        },
    },
    sponsor: {
        title: 'Karhu Anticheat x Tietokettu.net',
        subtitle:
            'Tietokettu is a hosting provider located in Finland, which offers its customers high-quality online services for very cheap prices. Our hosting is provided by Tietokettu.',
        button: "Let's check it out",
    },
    footer: {
        text: 'Providing cheap anticheat service since 2020.',
        links_title: 'Links',
        legal_title: 'Legal',
        links: [
            {
                title: 'Home',
                url: '/',
            },
            {
                title: 'Features',
                url: '/features',
            },
            {
                title: 'Pricing',
                url: '/#pricing',
            },
            {
                title: 'Developers',
                url: 'https://github.com/Karhu-Anticheat/KarhuAPI',
            },
        ],
        legal: [
            {
                title: 'Terms and Conditions',
                url: '#',
            },
            {
                title: 'Privacy policy',
                url: '#',
            },
        ],
        credits_build_by: 'Built by',
        credits_source_code: 'Source code available on',
        credits_rights_reserved: 'All rights reserved',
    },
}
export default lang
