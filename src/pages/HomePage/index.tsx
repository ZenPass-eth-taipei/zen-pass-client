import { Sparkles } from 'lucide-react';
import { BackgroundLinesDemo } from '../../components/ui/background-lines';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <BackgroundLinesDemo />

            <div className="bg-[#e2d5cd]">
                <section className="container mx-auto px-6 py-16 md:py-24 relative">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-8 md:p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-xl shadow-purple-500/5">
                        <p className="text-lg md:text-xl text-black leading-relaxed">
                            Designed for the Eth Taipei community, ZenPass
                            combines cutting-edge technologies—geo-fencing,
                            augmented reality, artificial intelligence, and
                            blockchain—with eco-conscious values to deliver a
                            dynamic Proof of Attendance Protocol (POAP)
                            experience. Whether you're exploring interactive
                            event zones or earning exclusive on-chain rewards,
                            ZenPass redefines how you engage with events.
                        </p>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <footer className="bg-white backdrop-blur-sm py-16 border-t border-white/10 text-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-8 md:mb-0">
                            <Sparkles className="h-6 w-6 text-purple-400" />
                            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                                ZenPass
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0  text-center">
                            <div>
                                <h4 className="font-bold mb-4 text-black">
                                    Company
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            About Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Careers
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-black">
                                    Resources
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Documentation
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Support
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold mb-4 text-black">
                                    Legal
                                </h4>
                                <ul className="space-y-3">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-black hover:text-white transition-colors"
                                        >
                                            Cookie Policy
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-white/10 mt-12 pt-8 text-center text-black">
                        <p>
                            &copy; {new Date().getFullYear()} ZenPass. All
                            rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
