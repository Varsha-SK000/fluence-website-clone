import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-10 mb-10">

          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-lg font-medium text-black">
                Fluence AI
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-6">
              Manage AI effortlessly
            </p>

            <div className="flex gap-4">
              <a href="https://facebook.com/" className="text-gray-600 hover:text-black">Facebook</a>
              <a href="https://x.com/" className="text-gray-600 hover:text-black">X</a>
              <a href="https://instagram.com/" className="text-gray-600 hover:text-black">Instagram</a>
              <a href="https://linkedin.com/" className="text-gray-600 hover:text-black">LinkedIn</a>
            </div>
          </div>

          {/* Use Link */}
          <div>
            <h4 className="font-medium mb-4 text-black">Use Link</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#feature" className="hover:text-black">Feature</a></li>
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#testimonial" className="hover:text-black">Testimonial</a></li>
              <li><a href="#pricing" className="hover:text-black">Pricing</a></li>
              <li><a href="https://fluence.framer.website/contact" className="hover:text-black">Contact</a></li>
              <li><a href="https://fluence.framer.website/blog" className="hover:text-black">Blog</a></li>
              <li><a href="https://fluence.framer.website/404" className="hover:text-black">404</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium mb-4 text-black">Company</h4>
            <p className="text-gray-600 text-sm">
              105 North 1st Street, #28<br />
              San Jose, CA 94748
            </p>
          </div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600"
        >
          <p>© 2025 Design & Developed by <a href="https://x.com/hello_amani" className="hover:text-black">Amani</a></p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://fluence.framer.website/privacy-policy" className="hover:text-black">Privacy Policy</a>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}