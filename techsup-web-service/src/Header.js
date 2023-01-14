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
      <Link to='/'>
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
        <Link to='/login' >
          <div className='header__option' >
            <span className='header__optionLineOne'>Misafir</span>
            <span className='header__optionLineTwo'>Giriş Yap</span>
          </div>
        </Link>

        <div className='header__option' >
          <span className='header__optionLineOne'>Ana menü</span>
          <span className='header__optionLineTwo'>& Siparişler</span>
        </div>
              
        <div className='header__option' >
          <span className='header__optionLineOne'>Kişisel </span>
          <span className='header__optionLineTwo'>Profil</span>
        </div>

        <Link to='/checkout' >
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