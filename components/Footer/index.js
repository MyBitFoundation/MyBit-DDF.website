import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StyledFooter from './StyledFooter';
import StyledFooterWrapper from './StyledFooterWrapper';
import StyledColumnSection from './StyledColumnSection';
import Img from '../Img';
import StyledIcon from './StyledIcon';
import StyledRow from './StyledRow';
import StyledColumn from './StyledColumn';
import Anchor from './Anchor';

const getRowIcon = (src, srcHover, alt, styling) => {
  return (
    <StyledIcon
      src={src}
      srcHover={srcHover}
      alt={alt}
      styling={styling || {}}
      key={src}
    />
  )
}

const handleColumn = section =>
  <StyledColumn styling={section.styling || {}}>
    {section.title && <h6>{section.title}</h6>}
    {section.content.map(content => {
      //can be an image, link or just text
      if(content.src && content.linkTo && content.external){
        return(
          <a key={content.linkTo} href={content.linkTo} target='_blank' rel='noopener noreferrer'>
            {getRowIcon(content.src, content.srcHover, content.alt, content.styling)}
          </a>
        )
      }
      else if(content.src && content.linkTo){
        return(
          <Link key={content.linkTo} to={content.linkTo} >
            {getRowIcon(content.src, content.srcHover, content.alt, content.styling)}
          </Link>
        )
      }
      else if(content.src){
        return(
          getRowIcon(content.src, content.srcHover, content.alt, content.styling)
        )
      }
      else if(content.name && content.linkTo && (content.external || content.target)){
        return(
          <Anchor key={content.linkTo} href={content.linkTo} target={content.target || "_blank"} rel='noopener noreferrer' styling={content.styling || {}}>
            {content.name}
          </Anchor>
        )
      }
      else if(content.name && content.linkTo){
        return(
          <Link key={content.linkTo} to={content.linkTo} >
            {content.name}
          </Link>
        )
      }
      else {
        return(
          <p key={content.name}>{content.name}</p>
        )
      }
    })}
  </StyledColumn>

const handleRow = section => (
  <StyledRow>
    {section.content.map(content =>
      <p key={content}>{content}</p>
    )}
  </StyledRow>
)

const handleSectionWithColumns = section =>
  <StyledColumnSection styling={{breakAt: section.breakAt}}>
    {section.content.map(handleColumn)}
  </StyledColumnSection>


const handleSections = (section) => {
  return section.columns ? handleSectionWithColumns(section) : handleRow(section);
}

const Footer = ({styling, footerDetails}) => {
  const { sections } = footerDetails;
  return(
    <StyledFooter styling={styling}>
      <StyledFooterWrapper styling={styling}>
        {sections.map(handleSections)}
      </StyledFooterWrapper>
    </StyledFooter>
  )
}

Footer.propTypes = {
  styling: PropTypes.object.isRequired,
  footerDetails: PropTypes.object.isRequired,
};

export default Footer;
