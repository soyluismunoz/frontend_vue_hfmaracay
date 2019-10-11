const _nav = [
    {
        icon: "mdi-plus",
        text: "ITEM",
        link: "/item"
    },
    {
        icon: "mdi-chevron-up",
        "icon-alt": "mdi-chevron-down",
        text: "ITEMS LIST",
        model: true,
        children: [
            {
                icon: "mdi-plus",
                text: "ITEM A"
            },
            {
                icon: "mdi-plus",
                text: "ITEM B"
            },
            {
                icon: "mdi-plus",
                text: "ITEM C"
            },
        ]
    },
];

export default _nav;
