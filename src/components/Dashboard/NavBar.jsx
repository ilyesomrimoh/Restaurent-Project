import {useContext} from 'react'
import UserNav from './UserNav'
import { UserContext } from '../../contexts/UserContext'

const NavBar = () => {
  const {restau} = useContext(UserContext);
  return (
    <div className='w-full p-5 bg-white h-14 flex justify-between items-center sticky top-0 z-20'>
        <div></div>
      < UserNav img={restau?.photoId ||"/images/icons/avatar.png"} />
    </div>
  )
}

export default NavBar
