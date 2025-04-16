import React from "react";
import { socials } from "../contants/indexs";

const Footer = () => {
  return (
    <footer>
      <div className="container py-10">
        <div className="w-full flex max-md:flex-col ">
          <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5 ">
            <p className="opacity-70 text-black">© Copyright Kaisros.</p>
          </div>
          <div className="flex items-center justify-center sm:ml-auto ">
            <p className="legal-after relative mr-9 text-black-100 transition-all duration-500 hover:text-p1">
              Privacy Policy
            </p>
            <p className="legal-after relative mr-9 text-black-100 transition-all duration-500 hover:text-p1">
              Terms of Use
            </p>
          </div>
          <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
            {socials.map(({ id, url, icon, title }) => (
              <li key={id}>
                <a className="social-icon" href={url}>
                  <img
                    className="size-1/3 object-contain"
                    src={icon}
                    alt={title}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;