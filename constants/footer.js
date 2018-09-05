const footerColumns = [
  {
    content: [
      {
        src: "/static/socialIcons/telegram.svg",
        srcHover: "/static/socialIcons/telegram-hover.svg",
        linkTo: "https://t.me/mybitio/",
        external: true
      }, {
        src: "/static/socialIcons/medium.svg",
        srcHover: "/static/socialIcons/medium-hover.svg",
        linkTo: "https://medium.com/mybit-dapp/",
        external: true
      }, {
        src: "/static/socialIcons/facebook.svg",
        srcHover: "/static/socialIcons/facebook-hover.svg",
        linkTo: "https://www.facebook.com/MyBitDApp/",
        external: true
      }, {
        src: "/static/socialIcons/reddit.svg",
        srcHover: "/static/socialIcons/reddit-hover.svg",
        linkTo: "https://www.reddit.com/user/MyBit_DApp/",
        external: true
      }, {
        src: "/static/socialIcons/twitter.svg",
        srcHover: "/static/socialIcons/twitter-hover.svg",
        linkTo: "https://twitter.com/MyBit_DApp/",
        external: true
      }
    ],
    styling:{
      hideAt: "1100px",
    }
  }, {
    title: "Products",
    content: [{
        name: "SKDs",
        linkTo: "/",
        external: true
      }, {
        name:"MyBit Go",
        linkTo: "/",
        external: true
      },{
        name:"Other dApps",
        linkTo: "/",
        external: true
      }],
    }, {
      title: "Resources",
      content: [{
        name: "Tokensale",
        linkTo: "/",
        external: true
      }, {
        name:"Whitepaper",
        linkTo: "/",
        external: true
      },{
        name:"Github",
        linkTo: "/",
        external: true
      }],
      isColumn: true,
    }, {
      title: "About",
      content: [{
        name: "Company",
        linkTo: "/",
        external: true
      }, {
        name:"Token",
        linkTo: "/",
        external: true
      },{
        name:"Blog",
        linkTo: "/",
        external: true
      }],
    }, {
      title: "Resources",
      content: [{
        name: "Tokensale",
        linkTo: "/",
        external: true
      }, {
        name:"Whitepaper",
        linkTo: "/",
        external: true
      },{
        name:"Github",
        linkTo: "https://github.com/MyBitFoundation",
        external: true
      }],
    }, {
      title: "Social",
      content: [{
        name: "Telegram",
        linkTo: "https://t.me/mybitio/",
        external: true
      }, {
        name:"Medium",
        linkTo: "https://medium.com/mybit-dapp/",
        external: true
      }, {
        name:"Reddit",
        linkTo: "https://www.reddit.com/user/MyBit_DApp/",
        external: true
      }, {
        name:"Facebook",
        linkTo: "https://www.facebook.com/MyBitDApp/",
        external: true
      }, {
        name:"Twitter",
        linkTo: "https://twitter.com/MyBit_DApp/",
        external: true
      }]
    }, {
      content: [{
        src:"/static/logo.svg",
        alt: "MyBit Logo",
        styling:{
          width: "90px",
          height: "65px",
          position: "relative",
          transform: "translate(-100%,0%)",
          left: "100%",
        }
      }, {
        name: "MyBit Foundation. Dammstrasse 16,",
      }, {
        name: "6300 Zug, Switzerland.",
      }, {
        name: "Registration no. CHE-177.186.963",
      }, {
        name:"Terms and Conditions",
        linkTo: "/",
        external: true,
        styling: {
          textDecoration: "underline",
        }
      }],
      styling:{
        textAlign: "right",
      },
    },
]

const footer = {
  sections: [{
    content: footerColumns,
    columns: true,
    breakAt: "900px",
  }, {
    content: ["Copyright © MyBit Foundation 2018. All Rights Reserved."],
  }]
}

export default footer;
