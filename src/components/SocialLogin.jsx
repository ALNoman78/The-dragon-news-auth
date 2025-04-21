import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="px-6 *:w-full space-y-2">
            <h3 className='font-semibold mb-2'>Login With</h3>
            <button className="btn">
            <FaGoogle></FaGoogle>
                Login with Google
            </button>
            <button className="btn">
                <FaGithub></FaGithub>
                Login With Github
            </button>
        </div>
    )
}

SocialLogin.propTypes = {}

export default SocialLogin