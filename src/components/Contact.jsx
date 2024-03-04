import React from "react";

const Contact = () => {
  return (
    <div
      className="object-cover flex text-white justify-between"
      style={{
        backgroundImage:
          'url("https://s3-alpha-sig.figma.com/img/f8fa/1a15/96d618c605574ff502cff765ecf7884a?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DCy9f~wZxD6syerDzgltZX7lSlOarIsU7N83xjHPLvqHk0AyHTclds8Gyfo0g5LJEf8XqPP6~OZx6y1RIFdfbcC1g~UtS-iqTbih9oUWRlAyh5UOun-avil~zv-yoQAyRcbuDAbsP90ubhKjToZnWsclgATTSwvNheq9EnpO9VHSdqi4at~B4tUd2kkGHgFgKt79EjL-Q8jQa-nkp8higJ9Pxi5k4QC7J6Cib4dhMpYFxpgIiGB~VvWq362Sk-mjEgWRrUNZjp6---6ciApjkzPXmtgXSUirYaghzf21ahPNY~2Hmd8W2tSxKsILLP~D0QIpNpZaTWTHH66M56l-tg__")',
      }}
    >
      <div className="logos">logos</div>
      <div className="email text-left flex flex-col p-5 gap-4">
        <div class="w-[20rem] border border-t bg-gradient-to-r from-transparent via-transparent to-black"></div>
        <p className="text-[45px] font-custom1">
          Let’s <span className="text-[#FF9000]">Create...</span>
        </p>
        <p className="text-[20px] w-[340px] text-[#8B8B8B]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
        <p className="text-[22px]">jayswarankar07@gmail.com</p>
      </div>
      <div className="form w-1/2 flex relative p-4 font-custom1">
        <form className="flex flex-col text-white">
          <input
            className="h-[45px] w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
          />
          <br />
          <input
            className="h-[45px]  w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="contact"
            name="contact"
            placeholder="Contact"
          />
          <br />
          <input
            className="h-[45px]  w-[410px] p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
          <br />
          <textarea
            className="h-[100px] w-[410px] mb-6 p-4 bg-black bg-opacity-0 border-t-[1px] border-l-[1px] border-white border-opacity-100 resize-none"
            id="message"
            name="message"
            placeholder="Message"
          ></textarea>
          <button className="p-1 h-[35px] w-[410px] bg-[#303030] text-[#A4A4A4]">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
