import { Columns } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const servicesSubmenu = [
  {
    label: "Custom Software Development",
    submenu: [
      {
        label: "Startup MVP Development",
        path: "/services/startupmvpdev",
      },
      {
        label: "Web Development",
        path: "/services/webdev",
      },
      {
        label: "Mobile App Development",
        path: "/services/mobileappdev",
      },
      {
        label: "Android App Development",
        path: "/services/androidappdev",
      },
      {
        label: "Cross-Platform App Development",
        path: "/services/crossplatformdev",
      },
    ],
  },

  {
    label: "Intelligent Automation",
    submenu: [
      {
        label: "Digital Marketing Services",
        path: "/services/digitalmarketingserv",
      },
      {
        label: "Search Engine Optimization",
        path: "/services/searchengineoptimization",
      },
      {
        label: "PPC",
        path: "/services/ppc",
      },
      {
        label: "SMO/SMM",
        path: "/services/smosmm",
      },
      {
        label: "AI & ML Development",
        path: "/services/aimldev",
      },
    ],
  },

  {
    label: "Managed IT Services",

    submenu: [
      {
        label: "Cloud & DevOps Services",
        path: "/cloud-devops-services",
      },
    ],
  },
  {
    label: "Staff Augmentation",

    submenu: [
      {
        label: "Staff Augmentation",
        path: "/services/staffag",
      },
    ],
  },
  {
    label: "IT Consulting",

    submenu: [
      {
        label: "Discovery Phase",
        path: "/services/discoveryphase",
      },
    ],
  },
];

const industriesSubmenu = [
   {
    submenu:[
  {
    label: "Fintech",
    path: "/industries/fintech",
  },
  {
    label: "Healthcare",
    path: "/industries/healthcare",
  },
  {
    label: "Media & Entertainment",
    path: "/industries/mediaentertain",
  },
  {
    label: "Automotive",
    path: "/industries/automotive",
  },
  {
    label: "E-Commerce",
    path: "/industries/ecomm",
  },
  ]
  }

];

const techstackSubmenu = [
  {
    label: "Front-end",
    
    submenu: [
      {
        label: "Angular",
        path: "/techstack/angular",
      },
      {
        label: "React",
        path: "/techstack/react",
      },
    ],
  },
  {
    label: "Back-end",
    
    submenu: [
      {
        label: "Node",
        path: "/techstack/node",
      },
      {
        label: "PHP",
        path: "/techstack/php",
      },
      {
        label: ".NET",
        path: "/techstack/net",
      },
      {
        label: "Java",
        path: "/techstack/java",
      },
      {
        label: "Python",
        path: "/techstack/python",
      },
    ],
  },
  {
    label: "Mobile",
    
    submenu: [
      {
        label: "iOS",
        path: "/techstack/ios",
      },
      {
        label: "Android",
        path: "/techstack/anderiod",
      },
      {
        label: "React Native",
        path: "/techstack/reactnative",
      },
      {
        label: "Flutter",
        path: "/techstack/flutter",
      },
    ],
  },
];

const companySubmenu = [
      {
    submenu:[
  {
    label: "Referral Program",
    path: "/company/referralprogram",
  },
  {
    label: "Blogs",
    path: "/company/blogs",
  },
  {
    label: "Contact",
    path: "/company/contact",
  },
  {
    label: "About Us",
    path: "/company/about",
  },
  ],
  },
];

const SerInfo = () => {
  return (
    <>
      <div className=" px-5 ">
        <h1 className="text-xl font-medium">SERVICES</h1>
        <p className="text-sm">
          Explore our comprehensive range of development services designed to
          bring your digital products to life, from ideation to launch and
          beyond.
        </p>
      </div>
    </>
  );
};

const IndInfo = () => {
  return (
    <>
      <div className=" px-5 ">
        <div className="text-xl font-medium">INDUSTRIES</div>

        <div>
          Discover industry-specific solutions tailored to meet the unique
          challenges and opportunities of your sector, leveraging our extensive
          cross-industry expertise.
        </div>
      </div>
    </>
  );
};

const TecInfo = () => {
  return (
    <>
      <div className="px-5">
        <div className="text-xl font-medium">TECH STACK</div>

        <div>
          Dive into our arsenal of modern technologies, where we combine
          cutting-edge tools and proven frameworks to build scalable, robust,
          and innovative applications.
        </div>
      </div>
    </>
  );
};

const ComInfo = () => {
  return (
    <>
      <div className="px-5">
        <div className="text-xl font-medium">COMPANY</div>

        <div>
          Learn more about our mission, values, and the talented team behind our
          success. See how our commitment to excellence shapes every project we
          undertake.
        </div>
      </div>
    </>
  );
};

const navItems = [
  {
    label: "SERVICES",
    path: "/services",
    submenu: servicesSubmenu,
    subInfo: <SerInfo />,
    col:'columns-3'
  },
  {
    label: "INDUSTRIES",
    path: "/industries",
    submenu: industriesSubmenu,
    subInfo: <IndInfo />,
    col:'columns-2'
  },
  {
    label: "TECH STACK",
    path: "/tech-stack",
    submenu: techstackSubmenu,
    subInfo: <TecInfo />,
    col:'columns-3'
  },
  {
    label: "COMPANY",
    path: "/company",
    submenu: companySubmenu,
    subInfo: <ComInfo />,
    col:'columns-1'
  },
  { label: "PROJECTS", path: "/projects" },
];
export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (label) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header className="bg-white text-[#405EA9] shadow-md w-full">
      <div className="max-w-7xl m-auto px-4 sm:px-6 lg:px-0 flex items-center justify-between h-16">
        {/* Logo */}

        <Link to="/">
          <img
            width="50px"
            height="50px"
            className="object-contain cursor-pointer"
            src="/Logo.webp"
            alt="logo"
          />
        </Link>

        {/* Desktop Nav */}
        {/* <nav className="hidden md:flex space-x-6 relative items-center  ">
                   
                    {navItems.map(({ label, path, submenu, subInfo }) => (
                        <div key={label} className="group relative ">
                            <a
                                href={path}
                                className=" transition-colors px-3"
                            >
                                {label}
                            </a>
                            {submenu && (
                                <>
                                <div className="absolute left-0 sm:flex sm:max-h-screen sm:max-w-screen   bg-white text-[#405EA9] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                                    

                                        <div className="w-70 sm:max-h-screen  flex items-center justify-center sm:min-h-60 bg-gray-50 "> {subInfo}</div>
                                        <div className="w-100 pt-10 sm:max-h-screen sm:min-h-60 hover:text-amber-300">
                                        <ul className="py-9 columns-3 gap-6 bg-white sm:max-h-screen sm:min-h-60 ">
                                        {submenu.map((item) => (
                                            <li key={item.label} className="justify-center py-4 ">
                                                {item.path ? (
                                                    <a
                                                        href={item.path}
                                                        className="block px-4 py-2  text-sm font-semibold text-[#405EA9]"
                                                    >
                                                        {item.label}
                                                    </a>
                                                ) : (
                                                    <span className="block px-4 py-2 text-sm font-semibold text-gray-500 cursor-default ">
                                                        {item.label}
                                                    </span>
                                                )}
                                                {item.submenu && (
                                                    <ul className="pl-4">
                                                        {item.submenu.map((subItem) => (
                                                            <li key={subItem.label}>
                                                                {subItem.path ? (
                                                                    <a
                                                                        href={subItem.path}
                                                                        className="block px-4 py-1  text-sm text-[#405EA9]"
                                                                    >
                                                                        {subItem.label}
                                                                    </a>
                                                                ) : (
                                                                    <span className="block px-4 py-1 text-sm text-gray-700 cursor-default ">
                                                                        {subItem.label}
                                                                    </span>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                        </ul>
                                        </div>
                                    
                                </div>
                                </>
                                )}
                        </div>
                    ))}
                  
                </nav> */}

        <nav className="hidden md:flex space-x-6 relative items-center">
          {navItems.map(({ label, path, submenu, subInfo, col }) => (
            <div key={label} className="group relative">
              <Link to={path} className="transition-colors px-3 font-semibold">
                {label}
              </Link>

              {submenu && (
                <div className="absolute left-0 sm:flex sm:max-h-screen sm:max-w-screen bg-white text-[#405EA9] rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-opacity duration-200 z-50">
                  <div className="w-70 sm:max-h-screen flex items-center justify-center sm:min-h-60 bg-gray-50">
                    {subInfo}
                  </div>
                  <div className="w-100  sm:max-h-screen sm:min-h-60 ">
                    <ul className={`py-5 ${col} gap-6 bg-white sm:max-h-screen sm:min-h-60 block items-center`}>
                      {submenu.map((item) => (
                        <li key={item.label} className="justify-center py-4 ">
                          {item.path ? (
                            <Link
                              to={item.path}
                              className="block px-4 py-2 text-base font-semibold text-[#405EA9] "
                            >
                              {item.label}
                            </Link>
                          ) : (
                            <span className="block px-4 py-2 text-base font-semibold text-gray-500 cursor-default ">
                              {item.label}
                            </span>
                          )}

                          {item.submenu && (
                            <ul className="pl-4">
                              {item.submenu.map((subItem) => (
                                <li key={subItem.label}>
                                  {subItem.path ? (
                                    <Link
                                      to={subItem.path}
                                      className="block px-4 py-1 text-sm text-[#405EA9] hover:text-amber-300 font-semibold"
                                    >
                                      {subItem.label}
                                    </Link>
                                  ) : (
                                    <span className="block px-4 py-1 text-sm text-gray-700 cursor-default">
                                      {subItem.label}
                                    </span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div>
          <button
            onClick={() => setShowModal(true)}
            className="ml-4 bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded invisible sm:visible "
          >
            BOOK A CALL
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6 text-[#405EA9]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          {navItems.map(({ label, path, submenu }) => (
            <div key={label}>
              <div className="flex justify-between items-center py-2 border-b border-gray-700">
                <a href={path} className="text-[#405EA9] font-semibold">
                  {label}
                </a>
                {submenu && (
                  <button
                    onClick={() => toggleSubmenu(label)}
                    className="text-[#405EA9] focus:outline-none"
                  >
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        openSubmenus[label] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>

              {submenu && openSubmenus[label] && (
                <ul className="pl-4 text-sm text-[#405EA9] space-y-1">
                  {submenu.map((item) => (
                    <li key={item.label}>
                      {item.path ? (
                        <a
                          href={item.path}
                          className="block py-1 font-semibold"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <span className="block py-1 font-semibold text-gray-700 cursor-default">
                          {item.label}
                        </span>
                      )}
                      {item.submenu && (
                        <ul className="pl-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label}>
                              {subItem.path ? (
                                <a
                                  href={subItem.path}
                                  className="block py-1 text-[#405EA9]"
                                >
                                  {subItem.label}
                                </a>
                              ) : (
                                <span className="block py-1 text-gray-700 cursor-default">
                                  {subItem.label}
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <button
            onClick={() => setShowModal(true)}
            className="w-full bg-[#284181] hover:bg-blue-500 text-white font-bold py-2 rounded"
          >
            BOOK A CALL
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-7xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 p-2"
            >
              <img src="xicon.png" alt="xicon" />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-3/5 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">
                  BOOKING A CALL
                </h2>
                <p className="text-base md:text-lg text-[#405EA9]">
                  Give us a call today to discuss how we can bring your vision
                  to life with our expert solutions!
                </p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
                  />
                  <input
                    type="email"
                    placeholder="Email address *"
                    className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Phone number (optional)"
                    className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
                  />
                  <input
                    type="text"
                    placeholder="Company name (optional)"
                    className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
                  />
                  <textarea
                    placeholder="How can we help you? *"
                    className="md:col-span-2 border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2 h-24"
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-[#ED8628] text-white py-2 px-4 rounded-md hover:bg-[#FFDBA1] transition"
                  >
                    SEND
                  </button>
                </form>
              </div>

              <div className="md:w-2/5 bg-[#405EA9] p-6 md:p-8 text-white ">
                <h1 className="text-xl font-bold">TELL US ABOUT YOUR NEEDS</h1>
                <p className="text-base pt-4">
                  Just fill out the form or contact us via email or phone
                </p>

                <div className="flex gap-4 pt-6 items-center">
                  <img src="email.png" alt="email" className="w-5 h-5" />
                  <div className="text-[#ED8628] font-semibold hover:underline cursor-pointer">
                    career@go-techsolution.com
                  </div>
                </div>

                <div className="flex gap-4 pt-4 items-center">
                  <img src="phone.png" alt="phone" className="w-5 h-5" />
                  <div className="text-[#ED8628] font-semibold hover:underline cursor-pointer">
                    +91-8769365375
                  </div>
                </div>

                <div className="flex gap-4 pt-4 items-start">
                  <img
                    src="location.png"
                    alt="location"
                    className="w-6 h-6 mt-1"
                  />
                  <div className="text-[#ED8628] font-semibold">
                    512-517, 5th floor, Amrit Shree, University Road, Udaipur,
                    Rajasthan 313001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
