
const Footer = () => {
  return (
      <>
          <footer className="bg-gray-900 text-gray-300 py-16">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                      {/* Categories */}
                      <div>
                          <h4 className="text-white text-lg font-semibold mb-6">Categories</h4>
                          <ul className="space-y-3">
                              <li><a href="#" className="hover:text-white transition">Women</a></li>
                              <li><a href="#" className="hover:text-white transition">Men</a></li>
                              <li><a href="#" className="hover:text-white transition">Shoes</a></li>
                              <li><a href="#" className="hover:text-white transition">Watches</a></li>
                          </ul>
                      </div>

                      {/* Help */}
                      <div>
                          <h4 className="text-white text-lg font-semibold mb-6">Help</h4>
                          <ul className="space-y-3">
                              <li><a href="#" className="hover:text-white transition">Track Order</a></li>
                              <li><a href="#" className="hover:text-white transition">Returns</a></li>
                              <li><a href="#" className="hover:text-white transition">Shipping</a></li>
                              <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                          </ul>
                      </div>

                      {/* Get in touch */}
                      <div>
                          <h4 className="text-white text-lg font-semibold mb-6">GET IN TOUCH</h4>
                          <p className="text-sm">
                              Any questions? Let us know at 8th floor, 379 Hudson St, New York, NY 10018
                              or call us on (+1) 96 716 6879
                          </p>

                          <div className="flex items-center gap-5 mt-6">
                              <a href="#" className="hover:text-white text-xl"><i className="fa fa-facebook" /></a>
                              <a href="#" className="hover:text-white text-xl"><i className="fa fa-instagram" /></a>
                              <a href="#" className="hover:text-white text-xl"><i className="fa fa-pinterest-p" /></a>
                          </div>
                      </div>

                      {/* Newsletter */}
                      <div>
                          <h4 className="text-white text-lg font-semibold mb-6">Newsletter</h4>

                          <form className="space-y-4">
                              <input
                                  type="text"
                                  placeholder="email@example.com"
                                  className="w-full bg-transparent border border-gray-500 px-4 py-2 rounded focus:outline-none focus:border-white"
                              />

                              <button className="w-fit bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition">
                                  Subscribe
                              </button>
                          </form>
                      </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-12 border-t border-gray-700 pt-8 text-center">

                      

                      <p className="text-sm text-gray-400">
                          Copyright © {new Date().getFullYear()} All rights reserved |
                          Made with ❤️ by Colorlib & distributed by ThemeWagon
                      </p>
                  </div>
              </div>
          </footer>

          
    </>
  )
}

export default Footer
    