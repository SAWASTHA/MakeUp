/* eslint-disable jsx-a11y/img-redundant-alt */
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import transition from "../transaction";


function Contact() {
  return (
    <>
      <div className="contact-page ">
      <section className="w-full ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-2 text-center">
            <div className="space-y-2 my-5">
              <h1 className="text-3xl  text-black font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">Get in Touch</h1>
              <p className="mx-auto max-w-[700px] text-dark md:text-xl ">
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
  );
}



export default transition(Contact);
