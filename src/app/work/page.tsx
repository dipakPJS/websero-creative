import { ShootingStarsComponent } from "@/components/ShootingStars.component";
import WorkPageComponent from "@/components/WorkPage.component";
import FooterComponent from "@/components/Footer.component";

export default function WorkPage() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0">
          <ShootingStarsComponent />
        </div>
        {/* Work Page Content */}
        <WorkPageComponent />

        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  );
}
