/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Button } from "./ui/button";
import { DialogTrigger, DialogContent, Dialog } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import axios from "axios";
import transition from "../transaction";

function CourseCard({ imageSrc, title, description, duration, price, learn }) {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="rounded-lg border-3 shadow-md ">
      <img
        alt="Course Image"
        className="h-64 w-full rounded-t-lg object-cover"
        height="300"
        src={imageSrc}
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
        width="400"
      />
      <div className="p-4">
        <h3 className="mb-2 text-xl text-black font-bold">{title}</h3>
        <p className="mb-4 text-gray-500 dark:text-gray-400">{description}</p>
        <div className="flex items-center space-x-2">
          <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">
            Duration: {duration}
          </p>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <TagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">Price: {price}</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild onClick={() => setIsDialogOpen(true)}>
            <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 mt-3">
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl w-full p-6 max-h-screen overflow-y-auto">
            <CourseDetails
              title={title}
              description={description}
              duration={duration}
              price={price}
              learn={learn}
              imageSrc={imageSrc}
              onClose={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

function CourseDetails({
  title,
  description,
  duration,
  price,
  learn,
  imageSrc,
  onClose,
}) {
  const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));

  const handleCancel = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    onClose(); // Call onClose function to close the dialog
  };

  // const [loading2, setLoading2]=useState(false);
  const data={
    name: 'Waleed',
    amount: 1,
    number: '9172949445',
    MUID: "MUID" + Date.now(),
    transactionId: 'T' + Date.now(),
  }

  const handlePayment=(e)=>{
    e.preventDefault();
    // setLoading2(true);
    // axios.post('api/payment',{...data}).then(res=>{
    //   setTimeout(()=>{
    //     // setLoading2(false);
    //   },1500);
    // })
    // .catch(error=>{
    //   // setLoading2(false);
    //   console.log(error);
    // });
  }

  return (
    <div className="space-y-4">
      <img
        src={imageSrc}
        alt="Course Image"
        className="h-64 w-full rounded-t-lg object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
        <div className="data flex-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <p>{description}</p>
          <div className="flex items-center space-x-2 mt-2">
            <ClockIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">
              Duration: {duration}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <TagIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <p className="text-gray-500 dark:text-gray-400">Price: {price}</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mt-4">What You'll Learn</h4>
            <ul className="list-disc space-y-2 pl-4 text-gray-500 dark:text-gray-400">
              {learn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <form className="space-y-4 md:w-1/3 w-full p-6 rounded-lg shadow-md">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Phone Number</Label>
              <Input
                id="number"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input id="amount" value={numericPrice} type="number" readOnly />
          </div>
          <div className="flex justify-between">
            <div className="flex-1 mr-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
            <div className="flex-1 ml-2">
              <Button onClick={handlePayment} className="bg-white"><p className="font-bold text-black">Coming Soon</p></Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

function Course() {
  const courses = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-women-looking-mirror_23-2148398698.jpg",
      title: "Beginner Makeup",
      description: "Learn the basics of makeup application and techniques.",
      duration: "8 weeks",
      price: "$200",
      learn: [
        "Foundation application",
        "Eyeshadow techniques",
        "Contouring and highlighting",
        "Lip color application",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/front-view-make-up-model_23-2148398664.jpg",
      title: "Eyeshadow Masterclass",
      description:
        "Elevate your eye makeup game with our advanced eyeshadow techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Eyeshadow color theory",
        "Blending techniques",
        "Smokey eye application",
        "Eyeliner and lash application",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/group-women-with-make-up-brush-lipstick_23-2148431585.jpg",
      title: "Bridal Makeup Essentials",
      description: "Master the art of flawless bridal makeup for the big day.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Skin prep and priming",
        "Flawless foundation application",
        "Bridal eye makeup techniques",
        "Lip color and finishing touches",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/professional-make-up-artist-working-studio_23-2148398688.jpg",
      title: "Contouring and Highlighting",
      description:
        "Sculpt and define your features with our contouring and highlighting techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Contour and highlight placement",
        "Blending techniques",
        "Sculpting the face",
        "Highlighting for a glowing complexion",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/looking-mirror-young-beautiful-girl-sits-table-with-makeup-tools-applying-eyeshadow-with-makeup-brush-isolated-orange-wall_141793-106021.jpg",
      title: "Flawless Foundation",
      description:
        "Achieve a flawless, airbrushed complexion with our foundation techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Foundation selection",
        "Application techniques",
        "Color matching",
        "Setting and finishing",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-woman-with-colorful-makeup_23-2148398654.jpg",
      title: "Advanced Makeup Techniques",
      description:
        "Take your makeup skills to the next level with our advanced techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Advanced blending",
        "Cut crease eyeshadow",
        "Baking and setting",
        "Creative makeup application",
      ],
    },
  ];

  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        Makeup Courses
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </section>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  );
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.59 13.41L13.41 20.59C13.22 20.78 12.96 20.89 12.69 20.89H4C3.45 20.89 3 20.44 3 19.89V11.31C3 11.04 3.11 10.78 3.3 10.59L10.48 3.41C10.78 3.11 11.28 3.11 11.58 3.41L20.59 12.42C20.89 12.72 20.89 13.22 20.59 13.52Z"></path>
      <line x1="7" y1="7" x2="7.01" y2="7"></line>
    </svg>
  );
}

export default transition(Course);