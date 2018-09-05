const navigationItems = [
  {
    name: "Developer",
    linkTo: "/developer"
  }, {
    name: "Fund",
    linkTo: "/fund"
  }, {
    name: "Applications",
    linkTo: "/applications"
  }, {
    name: "Resources",
    iconRight: "down",
    subNavigation: [
      {
        name: "Tokensale",
        linkTo: "/first-resource"
      }, {
        name: "Whitepaper",
        linkTo: "/first-resource"
      }, {
        name: "Github",
        linkTo: "/first-resource"
      }
    ]
  }, {
    name: "About",
    iconRight: "down",
    subNavigation: [
      {
        name: "Company",
        linkTo: "/first-resource"
      }, {
        name: "Token",
        linkTo: "/first-resource"
      }, {
        name: "Blog",
        linkTo: "/first-resource"
      }
    ]

  }, {
    name: "Eng",
    iconRight: "down",
    iconLeft: "global",
    subNavigation: [
      {
        name: "Spanish",
        linkTo: "/first-resource"
      }
    ]
  }
]

export default navigationItems;
