import { images } from "@/src/assets";
import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-5">
      <Container>
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white text-sm">
          <p>© 2021 Winstore. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
