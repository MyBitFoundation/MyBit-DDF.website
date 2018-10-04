import React from 'react';
import classNames from 'classnames'
import StyledMobileMenu from './StyledMobileMenu';
import StyledIconList from './StyledIconList';
import { SocialIcons } from '../../constants';
import Menu from '../Menu';

const SidebarMobile = ({links, open, closePopup, styling}) => {

  const linksToRender = links.map((link) => {
      return(
        <a
          key={link.linkTo}
          href={link.linkTo}
          className={
          classNames({
            'SidebarMobile__overlay-link': true,
            'SidebarMobile__overlay-link--is-visible' : open
          })
        }

          target={link.target || "_blank"}
          rel="noopener noreferrer"
        >
          {link.text}
        </a>
      )
    })

  const socialToRender = (
    <StyledIconList
      socialIcons={SocialIcons}
    >
      <div className="IconList">
      {
        SocialIcons.map(icon => {
          return (
            <a
              key={icon.name}
              href={icon.href}
              target="_blank"
              rel='noopener noreferrer'
            >
              <div className="socialIcon">
                <div className={`socialIcon__wrapper socialIcon--is-${icon.name}`} />
              </div>
            </a>
          )})
      }
      </div>
    </StyledIconList>
  )

  return(
    <StyledMobileMenu>
      <div className={
          classNames({
            'SidebarMobile': true,
            'SidebarMobile--is-visible' : open,
          })
        }
      >
          <a
            className={
              classNames({
                'SidebarMobile__overlay-btn-close': true,
                'SidebarMobile__overlay-btn-close--is-visible' : open,
              })
            }
            onClick={() => closePopup(false)}
          >
            &times;
          </a>
          <Menu
            onClick={() => {}}
            selectedKeys={[]}
            items={links}
            styling={styling}
            mode="inline"
          />
        {socialToRender}
      </div>
    </StyledMobileMenu>
  )
}

export default SidebarMobile;
