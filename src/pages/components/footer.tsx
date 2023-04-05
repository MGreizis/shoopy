import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">HELP & INFORMATION</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Help</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Track my order</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Delivery & returns</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Student discount</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">MORE FROM SHOOPY</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Mobile app</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Gift vouchers</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Info for sellers</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800" href="/">Marketplace</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" id="footer-field" name="footer-field" placeholder="Email"/>
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cambridge border-0 py-2 px-6 focus:outline-none hover:bg-celadon rounded">Sign Up</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Want to receive our latest offers?
              <br className="lg:block hidden" />Just sign up to our newsletter!
            </p>
          </div>
        </div>
      </div>
    </footer>
     
  );
};

export default Footer;
