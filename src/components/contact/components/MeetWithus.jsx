import React from "react";

const MeetWithus = () => {
  return (
    <div className="container w-full items-center justify-between px-4">
      <h1 className="text-red-600 text-[32px] md:text-[45px] text-center mt-10 font-semibold">
        Lat's Meet
      </h1>
      <p className="text-gray-500 text-[18px] md:text-[20px] text-center">
        Coffee Is On Us
      </p>

      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between rounded-xl gap-8 mt-10 p-6 md:p-16">
        {/* Left Box */}
        <div className="rounded-xl p-6 w-full md:w-1/3 text-center">
          <h1 className="text-2xl font-semibold">Give Us A Call</h1>
          <p className="text-gray-400 text-lg mt-2">+92-343-5743690</p>
        </div>

        {/* Right Boxes */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-2/3 text-center">
          <div className="bg-white shadow-2xl rounded-xl rounded-bl-4xl p-8 md:p-16 flex-1">
            <h2 className="text-lg font-semibold">NextSol.pk</h2>
            <p className="text-gray-400 mt-2">
              Office # 15, Floor 6th, Gohar Center, <br /> Muslim Town Lahore
            </p>
          </div>

          <div className="bg-white shadow-2xl rounded-xl rounded-bl-4xl p-8 md:p-16 flex-1">
            <h2 className="text-lg font-semibold">Send Us Message At</h2>
            <p className="text-gray-400 mt-2">
              +92-313-4612829 <br /> info@nextsol.pk
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27218.008751058713!2d74.297829!3d31.513754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919059c5e959193%3A0x887bf3457f5785e4!2sNext%20Solutions!5e0!3m2!1sen!2s!4v1731936710000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};
export default MeetWithus;
