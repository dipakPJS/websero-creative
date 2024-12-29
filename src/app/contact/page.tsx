"use client";

import MainContactFormComponent from "@/components/ContactForm/MainContactForm.component";
import FooterComponent from "@/components/Footer.component";
import FullPageNav from "@/components/Navbar.component";
import { ShootingStarsComponent } from "@/components/ShootingStars.component";

export default function ContactPage() {
  return (
    <div className="h-full w-[100vw] relative">
      <FullPageNav />
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        <MainContactFormComponent />
        <FooterComponent />
      </div>
    </div>
  );
}
