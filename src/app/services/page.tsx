"use client";

import ServicesListComponent from "@/components/ServicesList.component"; 
import ServiceIndustriesComponent from "@/components/ServiceIndustries.component";
import { ShootingStarsComponent } from "@/components/ShootingStars.component";
import ServiceBookingComponent from "@/components/ServicesBooking.component";
import { AnimatedTestimonialsComponent } from "@/components/AnimatedTestimonials.component";
import WorkflowComponent from "@/components/WorkFlow.component";
import ContactGradientComponent from "@/components/ContactGradient.component";
import FooterComponent from "@/components/Footer.component";
import ServiceIntroComponent from "@/components/ServiceIntro.component";
import FullPageNav from "@/components/Navbar.component";
 

export default function ServicesPage() {
 

  return (
    <div className="min-h-screen w-[100vw] bg-black text-white relative overflow-x-hidden">
      {/* full page nav */}
      <FullPageNav />
      {/* shooting stars component */}
      <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>

      {/* Services Intro Section */}
     <ServiceIntroComponent />
      <ServicesListComponent />
      <ServiceIndustriesComponent />
      <ServiceBookingComponent />
      <AnimatedTestimonialsComponent bgColor="transparent"/>
      <WorkflowComponent />
      <ContactGradientComponent />
      <FooterComponent />
    </div>
  );
}
