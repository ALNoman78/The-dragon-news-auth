import SocialLogin from '../SocialLogin'
import FindUs from '../FindUs'

const RightNav = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
        </div>
    )
}

RightNav.propTypes = {}

export default RightNav