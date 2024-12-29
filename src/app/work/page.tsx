import { ShootingStarsComponent } from "@/components/ShootingStars.component";
import WorkPageComponent from "@/components/WorkPage.component";
import FooterComponent from "@/components/Footer.component";
import FullPageNav from "@/components/Navbar.component";

export default function WorkPage() {
  return (
  
      <div className="relative w-[100vw]">
        {/* fullpage navbar */}
        <FullPageNav />
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        {/* Work Page Content */}
        <WorkPageComponent />

        {/* Footer */}
        <FooterComponent />
      </div>
     
  );
}
