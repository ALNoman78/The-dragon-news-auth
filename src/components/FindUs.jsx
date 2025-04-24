import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

const FindUs = () => {
    
    return (
        <div className="px-6 mt-3 ">
            <h3 className="font-semibold mb-3 text-xl">Find Us On</h3>
            <div className="join flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>
                    Facebook
                </button>
                <button className="btn join-item justify-start">
                    <FaTwitter></FaTwitter>
                    Twitter
                </button>
                <button className="btn join-item justify-start">
                    <FaInstagram></FaInstagram>
                    Instagram
                </button>
            </div>
        </div>
    )
}

FindUs.propTypes = {}

export default FindUs