import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/logo.png";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Squash as Hamburger } from "hamburger-react";

function Navbar() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [isProductsVisible, setIsProductsVisible] = useState(false);
  const menuRef = useRef();
  const mobileMenuOpenRef = useRef(mobileMenuOpen);
  const hamburgerRef = useRef();

  const categoriesData = [
    {
      catid: "products",
      title: "Products",
      items: [
        {
          image:
            "https://ecobags.in/wp-content/uploads/2019/11/D-Cut-Cake-Take-Away-Bags.jpg",
          category: "Dcut Bags",
        },
        {
          image:
            "https://www.gogreennonwovenbags.com/wp-content/uploads/2023/10/file-2_page-0097.jpg",
          category: "Wcut Bags",
        },
        {
          image: "https://m.media-amazon.com/images/I/71hD1yng76L._UY1100_.jpg",
          category: "Box Bags",
        },
        {
          image:
            "https://5.imimg.com/data5/LA/RT/MY-44247063/natural-hd-granules-500x500.jpg",
          category: "Granules",
        },
        {
          image:
            "https://brownliving.in/cdn/shop/files/sustainable-ecofriendly-certified-compostable-biodegradable-pouches-pack-of-100-55-x-70-inch-by-sprucegel-at-brownliving-252411.jpg",
          category: "Pouches",
        },
      ],
    },
  ];
  useEffect(() => {
    mobileMenuOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the mobile menu is open, and the click is outside the menu AND not on the hamburger icon
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current && // Ensure hamburgerRef is available
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

  const handleMouseEnter = (catid) => {
    setActiveCategory(catid);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };
  const toggleBar = () => {
    const val = !mobileMenuOpen;
    setMobileMenuOpen(val);
  };
  const toggleProducts = () => {
    if (showProducts) {
      setShowProducts(false);
      setTimeout(() => {
        setIsProductsVisible(false);
      }, 300); // match your animation duration
    } else {
      setIsProductsVisible(true);
      setShowProducts(true);
    }
  };

  return (
    <header className="relative flex h-20 w-full items-center bg-white shadow">
      <div className="flex w-[80%] items-center justify-between mx-auto">
        {/* Logo */}
        <Link to="/" className="flex h-12 items-center">
          <img
            src={Logo}
            alt="Bio Returns"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {/* Static Links before Products */}
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
            {categoriesData.map((category, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(category.catid)}
                onMouseLeave={handleMouseLeave}
              >
                <span className="cursor-pointer py-4 text-sm xl:text-base text-dark hover:text-[#229000] transition">
                  {category.title}
                </span>

                {/* Dropdown */}
                {activeCategory === category.catid && (
                  <div
                    className={`fixed top-[80px] left-0 z-50 w-full bg-white shadow-md transition-all duration-300 ${
                      dropdownVisible
                        ? "opacity-100 visible"
                        : "opacity-0 invisible"
                    }`}
                  >
                    <div className="w-[80%] mx-auto px-8 py-4">
                      <div className="flex flex-row flex-wrap justify-center gap-x-12 gap-y-2">
                        {category.items.map((item, idx) => (
                          <Link
                            key={idx}
                            to={`/category/${item.category
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="group/item flex flex-col items-center gap-1 transition"
                          >
                            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded">
                              <img
                                src={item.image}
                                alt={item.category}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                              />
                            </div>
                            <span className="text-xs font-medium text-center">
                              {item.category}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}

            {/* Remaining Links */}
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
          {" "}
          {/* Attach ref here */}
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
          className={`fixed top-[90px] right-0 z-50 h-full w-[80%] max-w-xs bg-white shadow-lg transition-transform duration-300 ${
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
                <div
                  className={`flex flex-col gap-2 mt-2 pl-2 pb-2 transition-all duration-300 ease-out ${
                    showProducts ? "animate-slide-down" : "animate-slide-up"
                  }`}
                >
                  {categoriesData[0].items.map((item, idx) => (
                    <Link
                      key={idx}
                      to={`/category/${item.category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-50 transition"
                    >
                      <div className="h-9 w-9 flex items-center justify-center overflow-hidden rounded border border-gray-300">
                        <img
                          src={item.image}
                          alt={item.category}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-800">
                        {item.category}
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
