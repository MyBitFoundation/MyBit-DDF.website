const navigationItems = [
  {
    name: "Developer",
    linkTo: "https://mybit.io/developer",
    target: "_top",
  }, {
    name: "Fund",
    linkTo: "https://mybit.io/fund",
    target: "_top",
  }, {
    name: "Applications",
    linkTo: "https://mybit.io/applications",
    target: "_top",
  }, {
    name: "Resources",
    iconRight: "down",
    subNavigation: [
      {
        name: "Tokensale",
        linkTo: "/first-resource",
        external: true,
      }, {
        name: "Whitepaper",
        linkTo: "https://files.mybit.io/files/MyBit_Whitepaper_v3.0.0.pdf",
        external: true,
      }, {
        name: "Github",
        linkTo: "https://github.com/MyBitFoundation",
        external: true,
      }
    ]
  }, {
    name: "About",
    iconRight: "down",
    subNavigation: [
      {
        name: "Company",
        linkTo: "https://mybit.io/about",
        target: "_top",
      }, {
        name: "Token",
        linkTo: "https://mybit.io/token",
        target: "_top",
      }, {
        name: "Blog",
        linkTo: "https://medium.com/mybit-dapp",
        external: true,
      }
    ]
  }
]

export default navigationItems;
