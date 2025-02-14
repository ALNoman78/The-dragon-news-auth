import moment from 'moment/moment'
import LogoImage from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex-col flex gap-5 items-center justify-center py-3'>
            <div className="logo">
                <img src={LogoImage} alt="" />
            </div>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>
            <p className='font-medium'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    )
}

Header.propTypes = {}

export default Header