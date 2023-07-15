import styled from 'styled-components';
import { Link } from "react-router-dom"

const MainNavigation = () => {
  return (
    <List>
      <Item>
        <StyledLink to="/">Home</StyledLink>
      </Item>
    </List>
  );
}

export default MainNavigation;

const List = styled.ul`
  
`

const Item = styled.li`
  
`

const StyledLink = styled(Link)`
  
`

