/* eslint-disable jsx-a11y/alt-text */
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom';
import { useStateValue } from './StateProvider';


function Header() {
  const [{basket}, /*dispatch*/] = useStateValue();

  
  return (

    <div className='header'>
      <Link to='/' onClick={() => window.location.replace('/')}>
        {/*Header Logo */}
        <img className='header__logo' src={require('./img/TECHSUP_icon_transparent.png')} />
      </Link>

      {/*Search Bar */}
      <div className='header__search'>
        <input className='header__searchInput'
        type= 'text'/>
        {/* Logo */}
        <SearchIcon className='header__searchIcon'/>
        
      </div>

        {/* Sign-in / Sign-out catalogs on header */}
      <div className='header__nav'>
        <Link to='/login' onClick={() => window.location.replace('/login')}>
          <div className='header__option' >
            <span className='header__optionLineOne'>Hello Guest </span>
            <span className='header__optionLineTwo'>Sign In</span>
          </div>
        </Link>

        <div className='header__option' >
          <span className='header__optionLineOne'>Returns</span>
          <span className='header__optionLineTwo'>& Orders</span>
        </div>
              
        <div className='header__option' >
          <span className='header__optionLineOne'>Your </span>
          <span className='header__optionLineTwo'>Account</span>
        </div>

        <Link to='/checkout' onClick={() => window.location.replace('/checkout')}>
          <div className='header__optionBasket'>
            <ShoppingBagIcon/>
            <span className='header__optionBasket header__basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
                
      </div>
    </div>
  )
}

  export default Header