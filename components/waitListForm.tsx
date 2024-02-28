'use client'
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { AuthCredentialsValidator, TEmailValidator } from "@/lib/validators/email-validator";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";


export default function WaitListForm() {
  const supabase = supabaseBrowser();
  const [userEmail, setUserEmail] = useState('');
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [interestLevel, setInterestLevel] = useState('');
  const [attractionPoint, setAttractionPoint] = useState('');
  const [behaviour, setbehaviour] = useState('');
  const [thankYouDialogOpen, setThankYouDialogOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TEmailValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  });
  const handleSaveToDB = async () => {
    // Logic to save to the database
    const normalizedEmail = userEmail.trim().toLowerCase();
    try {
      // First, check if the email already exists in the user_waiting_list
      const { data: existingUsers, error: selectError } = await supabase
        .from('user_waiting_list')
        .select('email')
        .eq('email', normalizedEmail);

      // Handle any error from the select query
      if (selectError) {
        console.error('Error checking for existing email:', selectError);
        // Set some state to show an error message to the user
        return;
      }

      // If the email already exists, show an error message to the user
      if (existingUsers.length > 0) {
        console.log('Email already exists.');
        toast.message('You already have place in the mailing list 😊 ')
        // Set some state to show an error message to the user
        return;
      }

      // Since the email doesn't exist, proceed with insertion
      const { error } = await supabase
        .from('user_waiting_list')
        .insert([{
          email: normalizedEmail, // Use the normalized email
          interest_level: interestLevel,
          attraction_point: attractionPoint,
          user_behavior: behaviour,
        }]);

      if (error) {
        console.error('Error inserting new user:', error);
        // Set some state to show an error message to the user
        return;
      }
      if (!error) {
        setThankYouDialogOpen(true);
      }
      // Handle success (e.g., showing a thank you message or closing the dialog)
      setDialogOpen(false); // Close the dialog or navigate the user away

    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error saving to the database", error);
      // Set some state to show an error message to the user
    }
  };

  const onSubmit = async ({ email }: TEmailValidator) => {
    console.log(email);
    const normalizedEmail = email.trim().toLowerCase();
    try {
      setUserEmail(normalizedEmail);
      setDialogOpen(true); // Open the dialog
      reset();
    } catch (error) {
    }
  }
  return (
    <div className='flex flex-col items-center space-y-5 p-4 md:p-8 antialiased'>
      <div className='text-center w-full md:w-3/4 lg:w-1/2'>
        <h1 className='text-sm md:text-md lg:text-lg font-semibold text-muted-foreground'>
          🔥 Buy, Sell, and Earn on Exoplate, where Art Meets Innovation
        </h1>
      </div>
      <div className='text-center w-full md:w-3/4 lg:w-1/2'>
        <p className='text-2xl md:text-4xl lg:text-7xl text-wrap text-slate-800 font-extrabold'>
          Join The Waitinglist For Exoplate Today!
        </p>
        <div className="mt-5">
          <p className="text-sm md:text-md  font-semibold text-slate-500 ">
            Exoplate is not just a marketplace; it&apos;s a revolution in art display. Transforming every brushstroke into a stunning piece of metal art, we invite you to join a community where artists flourish and collectors find unique treasures. Whether you&apos;re looking to showcase your artwork or to bring an artist&apos;s vision into your space, Exoplate is the canvas for the future.
          </p>
        </div>
      </div>

      <div className='w-full md:w-3/4 lg:w-1/2'>
        <div className='w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center">
            <Input
              id="email"
              placeholder="Enter your email address"
              className="flex-grow p-2"
              {...register("email")}
               />
            <Button className={cn({ "focus-visible:ring-red-500 w-full md:w-auto px-6 py-2": errors.email })}>Join Waitlist!</Button>
            <div className="flex">

              {isDialogOpen && (
                <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Share your thoughts</DialogTitle>
                      <DialogDescription>
                        Help us understand your preferences.
                      </DialogDescription>
                    </DialogHeader>
                    <Carousel>
                      <CarouselContent>
                        {/* Render your questions as CarouselItem components */}
                        <CarouselItem>
                          <div className="space-y-3">
                            <div className="w-full ">
                              <Label className={cn('font-bold text-sm w-full')}>
                                How interested are you in buying or selling art through metal posters on a scale from 1 to 5?
                              </Label>
                            </div>
                            <RadioGroup defaultValue={interestLevel} onValueChange={setInterestLevel}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="interest-option1" id="interest-option1" />
                                <Label htmlFor="interest-option1">1</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="interest-option2" id="interest-option2" />
                                <Label htmlFor="interes-option2">2</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="interest-option3" id="interest-option3" />
                                <Label htmlFor="interes-option3">3</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="interest-option4" id="interest-option4" />
                                <Label htmlFor="interes-option4">4</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="interest-option5" id="interest-option5" />
                                <Label htmlFor="interes-option5">5</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="space-y-3">
                            <div className="w-full ">
                              <Label className={cn('font-bold text-sm w-full')}>
                                What attracts you most to the idea of metal posters?
                              </Label>
                            </div>
                            <RadioGroup defaultValue={attractionPoint} onValueChange={setAttractionPoint}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option1" id="preference-option1" />
                                <Label htmlFor="preference-option1">Unique art medium</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option2" id="preference-option2" />
                                <Label htmlFor="preference-option2">Durability and quality</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option3" id="preference-option3" />
                                <Label htmlFor="preference-option3">Innovative way to display art</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option4" id="preference-option4" />
                                <Label htmlFor="preference-option4">Opportunity to discover new artists</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </CarouselItem>
                        <CarouselItem>
                          <div className="space-y-3">
                            <div className="w-full ">
                              <Label className={cn('font-bold text-sm w-full')}>
                                Would you be more inclined to:
                              </Label>
                            </div>
                            <RadioGroup defaultValue={behaviour} onValueChange={setbehaviour}>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option1" id="preference-option1" />
                                <Label htmlFor="preference-option1"> Buy curated art pieces</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option2" id="preference-option2" />
                                <Label htmlFor="preference-option2">Sell your own artwork</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option3" id="preference-option3" />
                                <Label htmlFor="preference-option3">Upload your own artwork to purchase custom metal posters.</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="preference-option4" id="preference-option4" />
                                <Label htmlFor="preference-option4">Both buy and sell curated art works</Label>
                              </div>
                            </RadioGroup>
                            <Button
                              disabled={!userEmail || !interestLevel || !attractionPoint}
                              className="mt-4"
                              onClick={handleSaveToDB}>Finish</Button>
                          </div>
                        </CarouselItem>
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </form>
        </div>
        {/* Thank You Dialog */}
        <Dialog open={thankYouDialogOpen} onOpenChange={setThankYouDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Welcome to the Club!</DialogTitle>
              <DialogDescription>
                Thank you for joining our mailing list. We&apos;re excited to have you with us and look forward to keeping you updated with the latest news and offers from Exoplate.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={() => setThankYouDialogOpen(false)}>Close</Button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
