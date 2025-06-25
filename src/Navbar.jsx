import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";
function Navbar({ products }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const menuRef = useRef();
  const mobileMenuOpenRef = useRef(mobileMenuOpen);
  const hamburgerRef = useRef();
  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = () => {
    setActiveCategory("products");
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const toggleProducts = () => {
    if (showProducts) {
      setShowProducts(false);
      setTimeout(() => {
        setIsProductsVisible(false);
      }, 300);
    } else {
      setIsProductsVisible(true);
      setShowProducts(true);
    }
  };

  return (
    <header className="relative flex h-20 w-full items-center bg-white shadow">
      <div className="flex w-[85%] items-center justify-between mx-auto">
        <Link to="/" className="flex h-12 items-center">
          <img
            src={Logo}
            alt="BioReturns"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {["Home", "About"].map((label) => (
              <li key={label}>
                <Link
                  to={
                    label === "Home"
                      ? "/"
                      : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  className="text-dark hover:text-[#229000] py-4 text-sm xl:text-base transition"
                >
                  {label}
                </Link>
              </li>
            ))}

            {/* Products Dropdown */}
            <li
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer py-4 text-sm xl:text-base text-dark hover:text-[#229000] transition">
                Products
              </span>

              {/* Dropdown */}
              {activeCategory === "products" && (
                <div
                  className={`fixed top-[80px] left-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${
                    dropdownVisible
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="w-[80%] mx-auto px-8 py-4">
                    <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-2">
                      {products.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="group/item flex flex-col items-center gap-1 transition"
                        >
                          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded">
                            <img
                              src={JSON.parse(product.image_urls)[0]}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                            />
                          </div>
                          <span className="text-xs font-medium text-center">
                            {product.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>

            {["Certificates", "Distributors", "Other", "Contact Us"].map(
              (label) => (
                <li key={label}>
                  <Link
                    to={`/${label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-dark hover:text-[#229000] py-4 text-sm xl:text-base transition"
                  >
                    {label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="lg:hidden z-10" ref={hamburgerRef}>
          <Hamburger
            toggled={mobileMenuOpen}
            toggle={setMobileMenuOpen}
            size={22}
            color="#333"
          />
        </div>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed top-[66px] right-0 z-50 h-full w-[85%] max-w-xs bg-white shadow-lg transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-4 flex flex-col gap-2 relative h-full overflow-y-auto pb-24">
            {[
              "Home",
              "About",
              "Certificates",
              "Distributors",
              "Other",
              "Contact Us",
            ].map((label) => (
              <Link
                key={label}
                to={
                  label === "Home"
                    ? "/"
                    : `/${label.toLowerCase().replace(/\s+/g, "-")}`
                }
                onClick={() => setMobileMenuOpen(false)}
                className="text-dark text-base font-medium border-b border-gray-200 py-3 hover:text-[#229000] transition"
              >
                {label}
              </Link>
            ))}

            {/* Products Accordion */}
            <div className="border-b border-gray-200">
              <button
                onClick={toggleProducts}
                className="flex justify-between items-center w-full text-dark text-base font-medium py-3 hover:text-[#229000] transition"
              >
                Products
                <span className="text-lg">
                  {showProducts ? (
                    <ChevronUp className="w-5 h-5 text-gray-700" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-700" />
                  )}
                </span>
              </button>

              {showProducts && (
                <div className="flex flex-col gap-2 mt-2 pl-2 pb-2">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-50 transition"
                    >
                      <div className="h-9 w-9 flex items-center justify-center overflow-hidden rounded border border-gray-300">
                        <img
                          src={JSON.parse(product.image_urls)[0]}
                          alt={product.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {product.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
