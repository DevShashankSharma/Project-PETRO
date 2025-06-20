const PetroLogo = () => {
    return (
        <svg
            width="130"
            height="40"
            viewBox="0 0 130 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Gradient Definition */}
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#007bff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6610f2" stopOpacity="1" />
                </linearGradient>
            </defs>

            {/* "Petro" Text */}
            <text
                x="10"
                y="35"
                fontFamily="Arial, sans-serif"
                fontSize="40"
                fontWeight="bold"
                fill="url(#grad1)"
                stroke="#000"
                strokeWidth="2"
                strokeOpacity="0.2"
            >
                Petro
            </text>

            {/* Oil Drop Icon
            <path
                d="M175 30C175 45 160 55 160 55C160 55 145 45 145 30C145 20 155 5 155 5C155 5 175 20 175 30Z"
                fill="url(#grad1)"
                stroke="#000"
                strokeWidth="2"
                strokeOpacity="0.2"
            /> */}
        </svg>
    );
};

export default PetroLogo;
