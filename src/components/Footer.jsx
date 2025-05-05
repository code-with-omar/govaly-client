import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="font-sans">
      <div className="flex flex-col md:flex-row text-center text-white ">
        <div className="bg-[#1F2937]  basis-1/2  md:py-24 py-8">
          <h2 className="md:text-4xl text-xl font-medium">CONTACT US</h2>
          <h4 className="md:text-lg text-base leading-9 font-medium my-3">
            123 ABS Street, Uni 21, Bangladesh
          </h4>
          <h4 className="md:text-lg text-base leading-9 font-medium my-3">
            +88 123456789
          </h4>
          <h4 className="md:text-lg text-base leading-9 font-medium my-3">
            Mon - Fri: 08:00 - 22:00
          </h4>
          <h4 className="md:text-lg text-base leading-9 font-medium my-3">
            Sat - Sun: 10:00 - 23:00
          </h4>
        </div>
        <div className="bg-[#111827] basis-1/2 md:py-24 py-8">
          <h2 className="text-4xl font-medium mb-6">Follow US</h2>
          <h4 className="md:text-lg text-base leading-9 font-medium my-3">
            Join us on social media
          </h4>
          <div className="grid grid-flow-col gap-x-6 cursor-pointer place-content-center">
            <FaFacebookF className="bg-[#111827] text-2xl "></FaFacebookF>
            <FaInstagram className="bg-[#111827] text-2xl "></FaInstagram>
            <FaTwitter className="bg-[#111827] text-2xl "></FaTwitter>
          </div>
        </div>
      </div>
      <div className="bg-[#151515] py-5 text-center md:text-xl text-base text-white font-medium">
        <p>Design and Developemet by Md. Omar Faruk</p>
      </div>
    </footer>
  );
};

export default Footer;
