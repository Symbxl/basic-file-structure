import styled from 'styled-components';
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <List>
      <Item>
        <StyledLink to="#">footer link</StyledLink>
      </Item>
    </List>
  );
}

export default Footer;

const List = styled.ul`
  
`

const Item = styled.li`
  
`

const StyledLink = styled(Link)`
  
`

