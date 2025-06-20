
const HomePage = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center bg-gray-100">
            {/* Header */}
            <div className="relative w-full bg-blue-600 py-4 shadow-md text-white text-center text-2xl font-bold">
                Complaint Registration Portal
            </div>

            {/* Welcome Section */}
            <section className="w-full text-center py-6">
                <h1 className="text-3xl font-bold text-gray-800">Welcome to Petro</h1>
                <p className="text-gray-600 max-w-md mx-auto mt-2">
                    Petro is a complaint registration portal where you can easily submit your concerns and get timely resolutions.
                </p>
            </section>

            {/* Main Content */}
            <main className="flex flex-col items-center mt-10 w-full px-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Register Your Complaint</h2>
                <p className="text-gray-600 text-center mb-6 max-w-md">
                    If you&apos;re facing any issues, let us know. We’re here to help!
                </p>

                {/* Register Complaint Button */}
                <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all">
                    Register Complaint
                </a>
            </main>

            {/* Features Section */}
            <section className="w-full mt-10 px-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
                <ul className="text-gray-600 mt-4 space-y-2">
                    <li>✅ Easy complaint submission</li>
                    <li>✅ Quick response from support team</li>
                    <li>✅ Track your complaint status</li>
                    <li>✅ Secure and confidential</li>
                </ul>
            </section>

            {/* Footer */}
            <footer className="w-full bg-gray-800 text-white text-center py-3 mt-10">
                &copy; 2025 Complaint Portal | All rights reserved.
            </footer>
        </div>
    );
};

export default HomePage;
