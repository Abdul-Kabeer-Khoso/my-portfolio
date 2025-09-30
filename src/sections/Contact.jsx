import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-auto mt-12 pt-2 pb-12 flex flex-col appear"
    >
      <SectionHeading sectionTitle="CONTACT US" />
      <div className="w-full flex flex-col items-center md:flex-row md:justify-between">
        <div className="sm:w-[60%] md:w-[50%] flex flex-col justify-center mt-10 sm:mt-10 md:mt-2">
          <p className="text-[white] text-[6vw] sm:text-3xl font-bold text-center sm:text-center bg-gradient-to-r from-teal-400 to-blue-500 bg-text-clip bg-clip-text text-transparent md:text-left">
            Get in Touch
          </p>
          <p className="text-[white] text-[4vw] sm:text-lg mt-4 text-center md:text-left">
            Have a question or want to work together? Drop us a message!
          </p>
          <div className="flex mt-12">
            <img
              src="../public/images/email.png"
              className="w-[9vw] h-[9vw] sm:w-[55px] sm:h-[55px]"
            />
            <div className="flex flex-col ml-5">
              <p className="text-[white] font-bold text-[5vw] sm:text-lg">
                Email
              </p>
              <p className="text-gray-300 text-[4vw] sm:text-[18px]">
                abdulkabeerkhoso082@gmail.com
              </p>
            </div>
          </div>

          <div className="flex mt-8">
            <img
              src="../public/images/location.png"
              className="w-[9vw] h-[9vw] sm:w-[55px] sm:h-[55px]"
            />
            <div className="flex flex-col ml-5">
              <p className="text-[white] font-bold text-[5vw] sm:text-lg">
                Location
              </p>
              <p className="text-gray-300 text-[4vw] sm:text-[18px]">
                Airport road Sukkur
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] sm:w-[70%] md:w-[50%]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
