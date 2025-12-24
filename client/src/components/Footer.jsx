import React from 'react'
import {
    Instagram,
    Facebook,
    Twitter,
    Youtube
} from "lucide-react";

const Footer = () => {
  return (
    <>
          <footer class=" bg-black   pt-16 pb-8">
              <div class="max-w-[1440px] mx-auto px-6 lg:px-12">
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                      
                      <div class="lg:col-span-2">
                          <a class="flex items-center gap-2 mb-6" href="#">
                              <div class="size-6 text-primary">
                                  <svg fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M24 4L6 14V34L24 44L42 34V14L24 4Z" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-linejoin="round" stroke-width="4"></path>
                                  </svg>
                              </div>
                              <span class="text-xl font-bold font-serif text-white dark:text-white">LibasMitr</span>
                          </a>
                          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                              Your premium destination for multi-brand fashion. Experience the future of shopping with our virtual try-on technology.
                          </p>
                          <div class="flex gap-4">
                              <a class="text-gray-400 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">thumb_up</span></a> 
                              <a class="text-gray-400 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">photo_camera</span></a>
                              <a class="text-gray-400 hover:text-white transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
                          </div>
                      </div>
                      
                      <div>
                          <h4 class="font-bold text-gray-400 dark:text-white mb-6">Shop</h4>
                          <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                              <li><a class="hover:text-white transition-colors" href="#">Women</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Men</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Kids</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">New Arrivals</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Sale</a></li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="font-bold text-gray-400 dark:text-white mb-6">Company</h4>
                          <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                              <li><a class="hover:text-white transition-colors" href="#">About Us</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Careers</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Terms of Service</a></li>
                              <li><a class="hover:text-white transition-colors" href="#">Contact</a></li>
                          </ul>
                      </div>

                      <div>
                          <h4 class="font-bold text-gray-200 dark:text-white mb-6">Stay in the loop</h4>
                          <p class="text-xs text-gray-200 dark:text-gray-400 mb-4">Subscribe for latest updates and offers.</p>
                          <form class="flex flex-col gap-2">
                              <input class="bg-gray-100 dark:bg-white/5 border-none rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-primary w-full text-gray-900 dark:text-white" placeholder="Your email address" type="email" />
                              <button class="bg-white dark:bg-primary text-black text-sm font-bold py-3 rounded-lg hover:opacity-90 transition-opacity" type="button">
                                  Subscribe
                              </button>
                          </form>
                      </div>
                  </div>
                  <div class="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                      <p class="text-xs text-gray-400">© 2024 LibasMitr Fashion Pvt Ltd. All rights reserved.</p>
                      <div className="flex gap-6">
                          <Instagram className="text-gray-400 w-6 h-6 hover:text-pink-500 transition-colors cursor-pointer" />
                          <Facebook className="text-gray-400 w-6 h-6 hover:text-blue-500 transition-colors cursor-pointer" />
                          <Twitter className="text-gray-400 w-6 h-6 hover:text-sky-400 transition-colors cursor-pointer" />
                          <Youtube className="text-gray-400 w-6 h-6 hover:text-red-500 transition-colors cursor-pointer" />
                      </div>

                  </div>
              </div>
          </footer>
    </>
  )
}

export default Footer
    // < footer class="bg-emerald text-white py-12 px-6" >
    //     <div class="layout-container max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    //         <div>
    //             <div class="flex items-center gap-2 mb-4">
    //                 <span class="material-symbols-outlined">diamond</span>
    //                 <span class="font-serif text-xl font-bold">LibasMitr</span>
    //             </div>
    //             <p class="text-emerald-100 text-sm leading-relaxed">Redefining ethnic fashion with technology.
    //                 Experience the perfect fit from the comfort of your home.</p>
    //         </div>
    //         <div>
    //             <h4 class="font-bold mb-4">Shop</h4>
    //             <ul class="space-y-2 text-sm text-emerald-100">
    //                 <li><a class="hover:text-white" href="#">New Arrivals</a></li>
    //                 <li><a class="hover:text-white" href="#">Clothing</a></li>
    //                 <li><a class="hover:text-white" href="#">Accessories</a></li>
    //                 <li><a class="hover:text-white" href="#">Sale</a></li>
    //             </ul>
    //         </div>
    //         <div>
    //             <h4 class="font-bold mb-4">Help</h4>
    //             <ul class="space-y-2 text-sm text-emerald-100">
    //                 <li><a class="hover:text-white" href="#">Track Order</a></li>
    //                 <li><a class="hover:text-white" href="#">Returns &amp; Exchanges</a></li>
    //                 <li><a class="hover:text-white" href="#">Customer Support</a></li>
    //                 <li><a class="hover:text-white" href="#">Size Guide</a></li>
    //             </ul>
    //         </div>
    //         <div>
    //             <h4 class="font-bold mb-4">Subscribe</h4>
    //             <div class="flex gap-2">
    //                 <input
    //                     class="bg-emerald-900/50 border border-emerald-700 text-white placeholder-emerald-300 text-sm rounded px-3 py-2 flex-1 focus:ring-1 focus:ring-primary focus:border-primary"
    //                     placeholder="Your email" type="email" />
    //                 <button
    //                     class="bg-primary text-white px-4 py-2 rounded text-sm font-bold hover:bg-white hover:text-emerald transition-colors">Join</button>
    //             </div>
    //         </div>
    //     </div>
    //     </footer >