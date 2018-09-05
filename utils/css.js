const generateIconsCss = (socialIcons) => {
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

export default generateIconsCss;
