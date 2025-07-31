import Link from "next/link";
import { SiX, SiLinkedin, SiGithub, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            Apache DSP
            <p className="text-gray-400 mb-4">
              The complete data streaming platform for connecting, processing, and sharing data at scale.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiX className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiLinkedin className="h-5 w-5" />
                            </Link>

              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiGithub className="h-5 w-5" />
              </Link>
             <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiYoutube className="h-5 w-5" />
                          </Link>

            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Confluent Cloud</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Confluent Platform</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Connectors</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">ksqlDB</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Confluent, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
