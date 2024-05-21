import { Button } from "./ui/button";
import { DialogTrigger, DialogContent, Dialog } from "./ui/dialog";

function CourseCard({ imageSrc, title, description, duration, price, learn }) {
  return (
    <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow  hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900   mt-3">
              Learn More
            </Button>
          </DialogTrigger>
          <DialogContent className="w-fullp-6">
            <CourseDetails
              title={title}
              description={description}
              duration={duration}
              price={price}
              learn={learn}
              imageSrc={imageSrc}
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
}) {
  return (
    <div className="space-y-4">
      <img
        src={imageSrc}
        alt="Course Image"
        className="h-64 w-full rounded-t-lg object-cover"
        style={{ aspectRatio: "400/300", objectFit: "cover" }}
      />
      <div className="">
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
      </div>

      <div>
        <h4 className="text-lg font-medium">What You'll Learn</h4>
        <ul className="list-disc space-y-2 pl-4 text-gray-500 dark:text-gray-400">
          {learn.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end gap-2">
        <Button>Buy Now</Button>
      </div>
    </div>
  );
}

export default function Course() {
  const courses = [
    {
      imageSrc:
        "https://img.freepik.com/free-photo/beautiful-women-looking-mirror_23-2148398698.jpg?t=st=1716137028~exp=1716140628~hmac=7b6f410f75fc9d2b55629b5a45df85feaf0578ab73effb33fa681412ef11c658&w=900",
      title: "Beginner Makeup",
      description: "Learn the basics of makeup application and techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Foundation application",
        "Eyeshadow techniques",
        "Contouring and highlighting",
        "Lip color application",
      ],
    },
    {
      imageSrc:
        "https://img.freepik.com/free-photo/front-view-make-up-model_23-2148398664.jpg?t=st=1716137050~exp=1716140650~hmac=5bae0b563ddb08bd66fa56387272d9b6a08ad4873299a8a7e090d9d61d712cf1&w=826",
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
        "https://img.freepik.com/free-photo/group-women-with-make-up-brush-lipstick_23-2148431585.jpg?t=st=1716137158~exp=1716140758~hmac=910712520862b1f047e8db49d3c7c6f9b411e2b3f9237d14ab8699204a656454&w=900",
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
        "https://img.freepik.com/free-photo/professional-make-up-artist-working-studio_23-2148398688.jpg?t=st=1716137251~exp=1716140851~hmac=9d88d4340906df08b51696c9512bcd0dea0f5db0f7661d37fbf12895ee3e0c8a&w=826",
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
        "https://img.freepik.com/free-photo/looking-mirror-young-beautiful-girl-sits-table-with-makeup-tools-applying-eyeshadow-with-makeup-brush-isolated-orange-wall_141793-106021.jpg?t=st=1716137288~exp=1716140888~hmac=f2649aa48df50166940839554ed3fd93234d34ee5de9cb9e1257f788f1fb05b6&w=826",
      title: "Flawless Foundation",
      description:
        "Achieve a flawless, airbrushed complexion with our foundation techniques.",
      duration: "8 weeks",
      price: "$499",
      learn: [
        "Foundation application",
        "Eyeshadow techniques",
        "Contouring and highlighting",
        "Lip color application",
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

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props) {
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
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function WalletCardsIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" ry="2" />
      <path d="M2 10h20" />
    </svg>
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
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
      <path d="M20 10.59V4a2 2 0 0 0-2-2H13.41a2 2 0 0 0-1.42.59L3.59 10.59a2 2 0 0 0 0 2.83l7.59 7.59a2 2 0 0 0 2.83 0l7.59-7.59a2 2 0 0 0 .59-1.42V10.59a2 2 0 0 0-.59-1.42z" />
      <line x1="7" x2="7" y1="7" y2="7" />
    </svg>
  );
}
