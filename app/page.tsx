import ExoplateOffer from "@/components/exoplateOffer";
import WaitListForm from "@/components/waitListForm";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import Image from "next/image";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ExoplateSpecialOfferDialog from "@/components/knowMore";
export default function Home() {

  // Generates a random number between min and max
  const random = (min: number, max: number) => Math.random() * (max - min) + min;

  // Generate a random angle in radians
  const randomAngle = () => random(0, 2 * Math.PI);

  // Call this function to generate a star element with random properties
  const generateStar = () => {
    const angle = randomAngle();
    const distance = Math.random() * 100; // Up to 100% of the viewport
    return {
      id: Math.random(),
      x: 50 + distance * Math.cos(angle), // 50% is the center; adjust for radial movement
      y: 50 + distance * Math.sin(angle),
      animationDuration: random(30, 200),
      animationDelay: random(-60, 0),
    };
  };

  // Create an array of stars
  const numberOfStars = 1000; // Set the number of stars you'd like
  const stars = Array.from({ length: numberOfStars }, generateStar);

  return (
    <div>

      <header className="absolute top-0 left-0 right-0 flex justify-between items-center lg:p-8 z-50 ">
        <div className="flex flex-col md:flex-row">
          <Image
          alt='exoplate logo'
          src={'/exoplate.png'}
          width={150}
          height={150}/>
        </div>
        <div className="flex flex-col md:flex-row">
          <Alert className={cn('mt-0')}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription className={cn('font-medium')}>
              Check what rewards you get on joining the waitlist.
              <span> </span><ExoplateSpecialOfferDialog/>
            </AlertDescription>
          </Alert>
        </div>
      </header>
    <main className="flex min-h-screen flex-col items-center justify-between p-24 antialiased mt-11">
        {/* Add your navigation bar here */}

      <div className="starry-background absolute top-0 left-0 w-full h-screen z-0">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              top: `${star.y}%`,
              left: `${star.x}%`,
              animationName: `moveStar${star.id}`,
              animationDuration: `${star.animationDuration}s`,
              animationDelay: `${star.animationDelay}s`,
              animationTimingFunction: 'linear',
              animationIterationCount: 'infinite',
              animationFillMode: 'forwards',
            }}
          >
          </div>
        ))}
      </div>
      <div className="flex flex-col item-center z-50">
        <WaitListForm />
      </div>
      <div className="z-50">
        <ExoplateOffer />
      </div>

    </main>
    </div>
  );
}
