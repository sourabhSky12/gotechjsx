
function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg w-full max-w-7xl relative overflow-y-auto max-h-[95vh] ">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 p-2"
          aria-label="Close modal"
        >
          <img src="/xicon.png" alt="Close" className="w-4 h-4" />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Left (Form) Section */}
          <div className="md:w-3/5 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">
              BOOKING A CALL
            </h2>
            <p className="text-base text-[#405EA9] mb-4">
              Give us a call today to discuss how we can bring your
              vision to life with our expert solutions!
            </p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="email"
                placeholder="Email address *"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Phone number (optional)"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Company name (optional)"
                className="border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2"
              />
              <textarea
                placeholder="How can we help you? *"
                className="md:col-span-2 border border-gray-300 focus:border-[#17A8E3] focus:outline-none rounded-md p-2 h-24 resize-none"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-[#ED8628] text-white py-2 px-4 rounded-md hover:bg-[#FFDBA1] transition"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right (Contact Info) Section */}
          <div className="md:w-2/5 bg-[#405EA9] p-6 md:p-8 text-white">
            <h3 className="text-xl font-bold">TELL US ABOUT YOUR NEEDS</h3>
            <p className="text-base pt-4">
              Just fill out the form or contact us via email or phone
            </p>

            <div className="flex gap-3 pt-6 items-center">
              <img src="/email.png" alt="Email" className="w-5 h-5" />
              <a
                href="mailto:career@go-techsolution.com"
                className="text-[#ED8628] font-semibold hover:underline"
              >
                career@go-techsolution.com
              </a>
            </div>

            <div className="flex gap-3 pt-4 items-center">
              <img src="/phone.png" alt="Phone" className="w-5 h-5" />
              <a
                href="tel:+918769365375"
                className="text-[#ED8628] font-semibold hover:underline"
              >
                +91-8769365375
              </a>
            </div>

            <div className="flex gap-3 pt-4 items-start">
              <img src="/location.png" alt="Location" className="w-6 h-6 mt-1" />
              <div className="text-[#ED8628] font-semibold">
                512-517, 5th floor, Amrit Shree, University Road,<br />
                Udaipur, Rajasthan 313001
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;
