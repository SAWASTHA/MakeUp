

import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
export default function Contact() {
  return (
    <>
    <div className="contact-page ">
      <section className="w-full ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="space-y-2 my-5">
              <h1 className="text-3xl  text-black font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Have a question or want to book an appointment? Fill out the form below or reach out to us directly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-5">
        <div className="container  px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 ">
            <div>
              <h2 className="text-2xl font-bold text-black">Contact Form</h2>
              <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-black">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label text-black">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-dark my-2 custom-button">
                  Send Message
                </button>
              </div>
            </form>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-black">Contact Info</h2>
              <div className="col-12">
            <div className="d-flex align-items-center mt-3">
              <IoLocationOutline className="me-2 icon text-black" />
              <p className="mb-0 add text-black">
                Preet Makeover, Sangram Nagar, Aurangabad, Maharashtra-431005
              </p>
            </div>
            <div className="d-flex align-items-center mt-3">
              <IoCallOutline className="me-2 icon text-black" />
              <p className="mb-0 add text-black">+91 9146585763</p>
            </div>
            <div className="d-flex align-items-center mt-3 text-black">
              <IoMailOutline className="me-2 icon" />
              <p className="mb-0 add text-black">rohit98waghmare@gmail.com</p>
            </div>
            <div className="d-flex align-items-center mt-3">
              <a href="https://instagram.com" className="me-3 icon text-black"><FaInstagram /></a>
              <a href="https://wa.me" className="me-3 icon text-black"><FaWhatsapp /></a>
              <a href="https://youtube.com" className="me-3 icon text-black"><AiOutlineYoutube /></a>
            </div>
          </div>


            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}