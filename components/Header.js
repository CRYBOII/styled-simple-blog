import { Category, People, Search, Setting } from "react-iconly"

import { StyledHeader } from "./styles/Header.styled"

const Header = () => {
  return (
    <StyledHeader>
      <div className='headerLeft'>
        <People set='broken' className='logo' />
        <h3>Hello World</h3>
      </div>
      <div className='headerRight'>
        <div className='searchBar'>
          <form>
            <input type='text' />
            <button>
              <Search set='broken' />
            </button>
          </form>
        </div>
        <Setting set='broken' className='set' />
      </div>
    </StyledHeader>
  )
}

export default Header
