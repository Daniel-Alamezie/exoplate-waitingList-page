import { object } from "zod";
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export default function ExoplateOffer() {
  const features = [
    {  title: 'Earn as an Artist',
    description: "Exoplate bridges artists of all levels with art lovers, offering a unique opportunity to earn by transforming your art into distinctive metal posters. It's a seamless way to connect, share, and monetize your creativity."
     },
    { title: 'High-Quality Prints',
    description: 'Showcase your art in the best light with Exoplate\'s high-quality metal printing. Elevate your artwork with a durable, vibrant medium that stands out in any collection.' },
    { title: 'Diverse Community', description: 'Join a diverse community of artists and art lovers from around the world, share your work, and get inspired.' },
    { title: 'Secure and Easy Transactions',
    description: 'Sell your art without worry. Exoplate ensures secure transactions, making it easy for artists to sell and buyers to collect with confidence.'
    },
    // Add more features as needed
  ];

  return (
    <div className='flex flex-col items-center antialiased px-4 py-8'>
      <section className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <p className="text-5xl font-extrabold text-slate-900"> Built for <span className="text-blue-700">Artists</span> and <span className="text-blue-700">Art Enthusiasts</span> </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <Card key={index} className={cn('p-4')}>
              <CardContent key={index} className={cn('pt-1')}>
                <h2 className="text-xl font-extrabold text-slate-800">{feature.title}</h2>
              <Separator className={cn('bg-[#a08f8f] mt-4')}/>
                <p className="text-slate-700 font-medium">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
