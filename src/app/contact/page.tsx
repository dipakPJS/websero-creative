"use client";

import MainContactFormComponent from "@/components/ContactForm/MainContactForm.component";
import FooterComponent from "@/components/Footer.component";
import { ShootingStarsComponent } from "@/components/ShootingStars.component";

export default function ContactPage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          {/* <ShootingStarsComponent /> */}
        </div>
        <MainContactFormComponent />
        <FooterComponent />
      </div>
    </>
  );
}
