import AdminSignupForm from "./AdminSignupForm";
import CitizenSignupForm from "./CitizenSignupForm";
import PropTypes from "prop-types";


const SignupForm = ({ userType }) => {

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
                {userType === "citizen" ? (
                    <CitizenSignupForm onSubmit={(e) => { e.preventDefault(); alert("Citizen Registered!"); }} />
                ) : (
                    <AdminSignupForm onSubmit={(e) => { e.preventDefault(); alert("Admin Registered!"); }} />
                )}
            </div>
        </div>
    )
};

SignupForm.propTypes = {
    userType: PropTypes.string.isRequired, 
};

export default SignupForm; 