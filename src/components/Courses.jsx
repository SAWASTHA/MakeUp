
import {Link} from "react-router-dom";

export default function Component() {
  return (
    <section className="container mx-auto py-12 md:py-16 lg:py-20">
      <h6 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"> Makeup Courses</h6>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
          <img
            alt="Course Image"
            className="h-64 w-full rounded-t-lg object-cover"
            height="300"
            src="https://firebasestorage.googleapis.com/v0/b/medimate-6e21c.appspot.com/o/c1.jpg?alt=media&token=c2a03448-1be0-47a5-99dd-0cd01674d7ea"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">Beginner Makeup</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Learn the basics of makeup application and techniques.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
          <img
            alt="Course Image"
            className="h-64 w-full rounded-t-lg object-cover"
            height="300"
            src="https://img.freepik.com/free-photo/beautiful-women-looking-mirror_23-2148398698.jpg?t=st=1716117222~exp=1716120822~hmac=93f425f575a1061bd89d3601b0bafc48f902be1efd803339b0e199969235f242&w=900"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">Eyeshadow Masterclass</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Elevate your eye makeup game with our advanced eyeshadow techniques.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
          <img
            alt="Course Image"
            className="h-64 w-full rounded-t-lg object-cover"
            height="300"
            src="https://img.freepik.com/free-photo/artist-applying-eye-shadow-model_23-2148398666.jpg?t=st=1716117242~exp=1716120842~hmac=93b840686f8dc00aa98d59399f408eaeea639f27656c678ab0d4c53413c653db&w=360"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">Bridal Makeup Essentials</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Master the art of flawless bridal makeup for the big day.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
          <img
            alt="Course Image"
            className="h-64 w-full rounded-t-lg object-cover"
            height="300"
            src="https://img.freepik.com/free-photo/make-up-artist-applying-mascara-eyelashes_23-2148332509.jpg?t=st=1716117269~exp=1716120869~hmac=eab1502244857a3cc6a23c65a0da777489256faac42d3dd757a4eac08f6ce996&w=900"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">Contouring and Highlighting</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Sculpt and define your features with our contouring and highlighting techniques.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="rounded-lg bg-white shadow-md dark:bg-gray-900">
          <img
            alt="Course Image"
            className="h-64 w-full rounded-t-lg object-cover"
            height="300"
            src="https://img.freepik.com/free-photo/make-up-artist-applying-eyeshadow-woman-with-brush_23-2148332523.jpg?t=st=1716117290~exp=1716120890~hmac=4989b7ee6bf829ec1feedd170c4bd5ca01a77061c0b6b139bf4f46d0110ddb14&w=900"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="p-4">
            <h3 className="mb-2 text-xl font-bold">Flawless Foundation</h3>
            <p className="mb-4 text-gray-500 dark:text-gray-400">
              Achieve a flawless, airbrushed complexion with our foundation techniques.
            </p>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}