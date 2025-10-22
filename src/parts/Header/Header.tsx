import logoBlue from "@assets/images/logo_blue.svg";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <img src={logoBlue} alt="Sapic" className="w-8 h-8" />
                        <span className="text-xl font-semibold text-gray-900 font-mono">Sapic</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Hello_
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
                            Home
                        </a>
                    </nav>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Join Waitlist
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
