export const socialIcons = [
    { name: 'reddit', href: 'https://www.reddit.com/user/MyBit_DApp/', icon: '/static/socialIcons/reddit.svg', iconHover: '/static/socialIcons/reddit-hover.svg'},
    { name: 'twitter', href: 'https://twitter.com/MyBit_DApp', icon: '/static/socialIcons/twitter.svg', iconHover: '/static/socialIcons/twitter-hover.svg'},
    { name: 'youtube', href: 'https://www.youtube.com/channel/UCtLn7Vi-3VbsY5F9uF1RJYg', icon: '/static/socialIcons/youtube.svg', iconHover: '/static/socialIcons/youtube-hover.svg'},
    { name: 'facebook', href: 'https://www.facebook.com/MyBitDApp/', icon: '/static/socialIcons/facebook.svg', iconHover: '/static/socialIcons/facebook-hover.svg'},
    { name: 'discord', href: 'https://discord.gg/pfNkVkJ', icon: '/static/socialIcons/discord.svg', iconHover: '/static/socialIcons/discord-hover.svg' },
    { name: 'telegram', href: 'https://t.me/mybitio', icon: '/static/socialIcons/telegram.svg', iconHover: '/static/socialIcons/telegram-hover.svg'},
    { name: 'linkedin', href: 'https://www.linkedin.com/company/mybit/', icon: '/static/socialIcons/linkedin.svg', iconHover: '/static/socialIcons/linkedin-hover.svg'},
  ]


export const generateIconsCss = () => {
  const css = socialIcons.map(icon => {
    return`
      .socialIcon--is-${icon.name} {
        background: url(${icon.icon});
      }
      .socialIcon--is-${icon.name}:hover {
        background: url(${icon.iconHover});
      }
    `;
  })
  return css;
}
