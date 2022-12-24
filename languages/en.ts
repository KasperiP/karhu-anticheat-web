const lang = {
    nav: {
        home: 'Home',
        features: 'Features',
        pricing: 'Pricing',
        developers: 'Developers',
        purchase: 'Purchase Karhu Anticheat',
    },

    home_hero: {
        name: 'Karhu Anticheat',
        title_start: 'An advanced Minecraft',
        title_highlight: 'anticheat solution',
        title_end: 'for your server',
        subtitle_start:
            'Lightweight, customizable and reliable Minecraft anticheat solution for 1.8-1.18. Karhu detects large variety of cheats including killaura, reach, speed and much more! Test Karhu on our server',
        subtitle_highlight: 'test.karhu.ac',
        subtitle_end: 'or buy the trial package to test on your own server!',
        button_left: 'View our pricing',
        button_right: 'Discord server',
    },

    home_features: {
        title: 'What do we offer for you?',
        subtitle:
            "Karhu team wants to offer you the best anticheat experience for low pricing, it all started from a network that didn't want to pay too much for an anticheat.",
        list: [
            {
                title: 'Advanced checks',
                subtitle:
                    'Our checks try to simulate Minecraft game actions, with simplier code. Movement checks are not 1:1 accurate, but we aim for still good accuracy.',
            },
            {
                title: 'Fast support',
                subtitle:
                    'Our support team is fast, and will be pleased to answer your questions on our Discord.',
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
                    'Unlike some other anticheats on the market, we track actions with packets and not with spigot api or bukkit events.',
            },
        ],
    },
    home_pricing: {
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
            price: '20€',
            features: [
                'Total of 100+ checks',
                'Prioritised support',
                'High customizability',
                'Constant updates',
                'Now on sale normally 25€ now 20€',
            ],
        },
    },
    home_sponsor: {
        title: 'Karhu Anticheat x Tietokettu.net',
        subtitle:
            'Tietokettu is a hosting provider located in Finland, which offers its customers high-quality online services for very cheap prices. Our hosting is provided by Tietokettu.',
        button: "Let's check it out",
    },
    footer: {
        text: 'Karhu - Providing cheap and reliable Minecraft anticheat service since 2020. Guaranteed finnish quality',
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
    features_hero: {
        name: 'Features',
        title_start: 'We have over',
        title_highlight: '100',
        title_end: 'checks to detect large variety of cheats',
        subtitle_start:
            'Karhu has checks for almost every type of cheat. It offers a range of detections and features that vary from highly accurate',
        subtitle_highlight: '3.01',
        subtitle_end:
            'reach and velocity detection to unbypassable blatant checks such as speed, fly, timer, and more with minimal impact on server performance! Check out our configs to see how Karhu works.',
        button_left: 'Download Checks.yml',
        button_right: 'Download Config.yml',
    },
    features_checks: {
        name: 'Our features',
        subtitle:
            'Here is list of all our checks. Check out our configs above for more specific features.',
        checks: [
            {
                category: 'Combat',
                checks: [
                    {
                        title: 'Autoclicker',
                        count: 17,
                        description:
                            'Checks for basic mistakes in clickers + bad randomization.',
                    },
                    {
                        title: 'Velocity',
                        count: 2,
                        description:
                            '99.99% horizontal & vertical velocity detection.',
                    },
                    {
                        title: 'Reach',
                        count: 1,
                        description: 'Detects hits above client range (3.0).',
                    },
                    {
                        title: 'AimAssist',
                        count: 12,
                        description:
                            'Very basic checks to detect some bad aimassist.',
                    },
                    {
                        title: 'Killaura',
                        count: 13,
                        description:
                            'Checks detect autoblock, packet order and keepsprint.',
                    },
                    {
                        title: 'Hitbox',
                        count: 1,
                        description: 'Detects any expansion of hitbox.',
                    },
                    {
                        title: 'Analysis',
                        count: 5,
                        description:
                            'Heuristical analysis to detect some of the more advanced killauras, can still be bypassed by many clients with right settings.',
                    },
                ],
            },
            {
                category: 'Movement',
                checks: [
                    {
                        title: 'Fly',
                        count: 6,
                        description:
                            'Detects most fly hacks by checking if their movement follows game gravity formula.',
                    },
                    {
                        title: 'Motion',
                        count: 8,
                        description:
                            'Detects y-axis modifications in different scenarios.',
                    },
                    {
                        title: 'Speed',
                        count: 3,
                        description:
                            "Detect almost any movement that doesn't follow game x & z movement.",
                    },
                    {
                        title: 'Omnisprint',
                        count: 1,
                        description: 'Detects running backwards with sprint.',
                    },
                    {
                        title: 'Inventory',
                        count: 3,
                        description: 'Detects clicking inventory while moving.',
                    },
                    {
                        title: 'VehicleFly',
                        count: 1,
                        description: 'Detects flying with vehicles.',
                    },
                    {
                        title: 'Jesus',
                        count: 2,
                        description:
                            'Very basic checks that detect liquidwalking.',
                    },
                    {
                        title: 'Step',
                        count: 1,
                        description: 'Detects stepping over game limit (0.6).',
                    },
                ],
            },
            {
                category: 'Packet',
                checks: [
                    {
                        title: 'BadPackets',
                        count: 18,
                        description:
                            'Detects impossible packets that are caused by hacked client code issues.',
                    },
                    {
                        title: 'Timer',
                        count: 3,
                        description:
                            'Detects game tick speed modification quickly.',
                    },
                    {
                        title: 'Ping',
                        count: 1,
                        description:
                            'Detects pingspoofing, altought it is already detected by flagging nearly all movement checks, reach and hitbox because of lag compensation.',
                    },
                ],
            },
            {
                category: 'World',
                checks: [
                    {
                        title: 'Ground',
                        count: 3,
                        description: 'Detects fall damage preventing.',
                    },
                    {
                        title: 'Scaffold',
                        count: 18,
                        description:
                            'Detects blatant scaffolds. God bridge style legit scaffolds still bypass this if done correctly.',
                    },
                    {
                        title: 'NoLookBreak',
                        count: 1,
                        description:
                            'Detects breaking block without looking at it.',
                    },
                    {
                        title: 'BlockReach',
                        count: 1,
                        description: 'Detects breaking block too far away.',
                    },
                    {
                        title: 'FastBreak',
                        count: 3,
                        description:
                            'Detects breaking faster than the client can.',
                    },
                    {
                        title: 'GhostBreak',
                        count: 1,
                        description: 'Detects breaking through blocks.',
                    },
                ],
            },
        ],
    },
}
export default lang
