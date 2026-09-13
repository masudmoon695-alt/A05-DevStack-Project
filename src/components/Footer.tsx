import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20 pt-10 pb-6 px-4">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row md:justify-between">

          <div className="mb-8 md:w-70">
            <div className="flex items-center mb-2">
              <img src={logo} alt="Dev Stack Logo" />
              
            </div>

            <p className="text-sm text-gray-500 mt-3 mb-5">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

              <span className="text-sm text-gray-600 mr-4">GitHub</span>
              <span className="text-sm text-gray-600 mr-4">Twitter</span>
              <span className="text-sm text-gray-600">LinkedIn</span>
  </div>

          <div className="mb-8 md:mb-0">
                <h4 className="font-semibold text-sm mb-3">PRODUCT</h4>
               <p className="text-sm text-gray-600 mb-2">Home</p>
               <p className="text-sm text-gray-600 mb-2">Technologies</p>
            <p className="text-sm text-gray-600">Projects</p>
          </div>

          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-sm mb-3">COMPANY</h4>
             
             <p className="text-sm text-gray-600 mb-2">About</p>

               <p className="text-sm text-gray-600 mb-2">Contact</p>

            <p className="text-sm text-gray-600">Careers</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-3">LEGAL</h4>

              <p className="text-sm text-gray-600 mb-2">Privacy Policy</p>

              <p className="text-sm text-gray-600">Terms of Service</p>
          </div>

        </div>

        <hr className="border-gray-200 mt-8 mb-5" />

        <div className="flex flex-col sm:flex-row sm:justify-between items-center text-sm text-gray-500">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <p className="mt-3 sm:mt-0">
            <span className="mr-5">Privacy</span>
            <span>Terms</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;