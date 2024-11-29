import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white">
      <div className="footer-top py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Footer Contact */}
            <div className="footer-contact">
              <h3 className="text-yellow-500 text-2xl mb-4">E Shop</h3>
              <p className="text-sm text-gray-400">
                Firozabad <br /> Uttar Pradesh <br /> India <br />
                <br />
                <strong>Phone:</strong> +000000000000000 <br />
                <strong>Email:</strong> info@E-Shop.com <br />
              </p>
            </div>

            {/* Useful Links */}
            <div className="footer-links">
              <h4 className="text-xl mb-4">Useful Links</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">Home</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">About us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Terms of service</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Privacy policy</a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-links">
              <h4 className="text-xl mb-4">Our Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">T-Shirt</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Shoes</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Pants</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Laptop</a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">Smart Phone</a>
                </li>
              </ul>
            </div>

            {/* Social Networks */}
            <div className="footer-links">
              <h4 className="text-xl mb-4">Our Social Networks</h4>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, ipsam.
              </p>
              <div className="social-links flex space-x-3">
                <a href="#" className="social-icon">
                  <i className="bx bxl-twitter text-2xl"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-facebook text-2xl"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-instagram text-2xl"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-skype text-2xl"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="bx bxl-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Credits */}
      <div className="container py-4">
        <div className="text-center">
          <div className="copyright">
            &copy; Copyright <strong>
              <span className="text-yellow-500">E Shop</span>
            </strong>. All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="#" className="text-yellow-500">SA coding</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
