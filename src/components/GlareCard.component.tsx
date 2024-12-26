import { GlareCard } from "./ui/glare-card";

interface Prices {
    id: number;
    title: string;
    price: string;
    description: string;
    pages: string;
    duration: string;
    additional: string[];
  }
  

export default function GlareCardComponent(items: Prices) {

    const {id, title, price, description, pages, duration, additional} = items;

  return (
    <GlareCard className="flex flex-col items-center justify-center h-full w-full">
     
      <p className="text-white font-bold text-xl mt-4">{title}</p>
    </GlareCard>
  );
}
