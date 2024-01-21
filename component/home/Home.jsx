import Link from "next/link";
import Image from "next/image";
import Image1 from "/assets/png/image 21.png";
import Image2 from "/assets/png/image 100.png";
import Image3 from "/assets/png/image 8.png";
import Image4 from "/assets/png/image 72.png";
import Image5 from "/assets/png/image 108.png";
import Image6 from "/assets/png/image 103.png";
import AvatarGroup from "/assets/png/Avatar group.png";
import Avatar from "/assets/png/Avatar.png";
import Shopifysm from "/assets/svg/Shopify-small.svg";
import testimonia from "/assets/png/testimonial-group.png";
import freeTria from "/assets/png/Screen mockup.png";

import AI from "/assets/svg/Frame 10.svg";
import Stars from "/assets/svg/Stars.svg";
import Microphone from "/assets/svg/microphone-01.svg";
import Recorder from "/assets/svg/video-recorder.svg";
import Monitor from "/assets/svg/monitor-01.svg";
import Smile from "/assets/svg/face-smile.svg";
import Message from "/assets/svg/message-text-circle-02.svg";
import Setting from "/assets/svg/settings-01.svg";
import Arrow from "/assets/svg/Arrow.svg";
import ArrowRight from "/assets/svg/Arrow-left.svg";
import ArrowLeft from "/assets/svg/Arrow-right.svg";

import Shopify from "/assets/svg/Shopify.com svg.svg";
import CoinBase from "/assets/svg/Coinbase svg.svg";
import DropBox from "/assets/svg/Dropbox svg.svg";
import InterCom from "/assets/svg/Intercom svg.svg";
import Marvel from "/assets/svg/Marvel svg.svg";
import Automatic from "/assets/svg/Automattic svg.svg";
import HD from "/assets/svg/video-recorder.svg";
import Audio from "/assets/svg/recording-01.svg";
import Calendar from "/assets/svg/calendar.svg";
import Security from "/assets/svg/lock-unlocked-04.svg";
import Collage from "/assets/png/image-group.png";
import Nav from "../layout/Nav";

const Home = () => {
  const featuresData = [
    {
      image: HD,
      title: "Crystal-clear HD video",
      description:
        "No more pixelation or blurriness – just stunning, lifelike clarity that brings your team closer in meetings.",
    },
    {
      image: Audio,
      title: "Noise-canceling audio",
      description:
        "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
    },
    {
      image: Calendar,
      title: "Scheduling made easy",
      description:
        "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
    },
    {
      image: Security,
      title: "Bank-grade security",
      description:
        "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
    },
  ];
  const faqs = [
    {
      question: "How many participants can join a ClearLink video conference?",
      answer:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      question: "Can I use ClearLink on multiple devices?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question:
        "Is ClearLink compatible with other video conferencing platforms?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question:
        "How does ClearLink ensure the security of my video conferences?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "Do I need to download any software to use ClearLink?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
    {
      question: "What kind of customer support does ClearLink provide?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio corporis earum similique!",
    },
  ];

  return (
    <main className="flex flex-col py-4  w-full relative">
      <div className=" bg-hero-bg">
        <Nav />
        {/* hero */}
        <div className="relative">
          <div className="md:max-w-screen-xl md:mx-auto px-4 py-16 gap-16 grid grid-cols-1 lg:grid-cols-[1fr_400px] text-gray-600 overflow-hidden md:px-8 ">
            <div className="flex-1 space-y-4   p-4">
              <h1 className="text-4xl md:text-[64px] text-[#1D2939] font-semibold md:leading-[72px]">
                Uniting the world, <br /> one video call at a time
              </h1>
              <p className="text-xl md:text-[24px] text-[#667085] leading-[24px] max-w-2xl">
                Experience the future of communication with ClearLink – where
                crystal-clear video conferencing meets unparalleled simplicity.
              </p>
              <div className="md:flex items-center gap-x-3 sm:text-sm">
                <Link
                  href="/"
                  className="flex items-center justify-center gap-x-1 py-2 px-5 text-white text-lg font-medium bg-[#175CD3]/90 duration-150 hover:bg-[#175CD3] active:bg-gray-900 rounded-full md:inline-flex"
                >
                  Start your free trial
                </Link>
                <Link
                  href="/"
                  className="flex items-center justify-center gap-x-1 py-2 px-4 text-lg  text-[#175CD3]/90  hover:text-[#175CD3]/90 font-medium duration-150 md:inline-flex"
                >
                  <Image src={AI} alt="ai" />
                  Discover AI assistant
                </Link>
              </div>

              <div className="flex gap-4">
                <Image src={AvatarGroup} alt="avatar group" />
                <span>
                  <span className="flex gap-2">
                    <Image src={Stars} alt="stars" />
                    <p className="text-[#344054] text-base font-semibold">
                      5.0
                    </p>
                  </span>
                  <p className="text-[16px] text-[#475467] ">
                    from 3,000+ reviews
                  </p>
                </span>
              </div>
            </div>

            {/* images */}
            <div className=" bg-[#EFF8FF] rounded-3xl p-[32px] border border-[#B2DDFF] shadow-2xl ">
              <div className="grid gap-10 grid-cols-3 items-center justify-center">
                <span className="bg-[#FF9C66] w-max rounded-xl">
                  <Image src={Image1} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#D6BBFB] w-max rounded-xl">
                  <Image src={Image2} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#ACDC79] w-max rounded-xl">
                  <Image src={Image3} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#B3B8DB] w-max rounded-xl">
                  <Image src={Image4} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#FEC84B] w-max rounded-xl">
                  <Image src={Image5} width={100} height={100} alt="Image" />
                </span>
                <span className="bg-[#FEA3B4] w-max rounded-xl">
                  <Image src={Image6} width={100} height={100} alt="Image" />
                </span>
              </div>
              {/* icons */}
              <div className="flex gap-2 justify-center mt-8">
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Microphone} className="w-5" alt="" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Recorder} className="w-5" alt="" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Monitor} className="w-5" alt="" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Smile} className="w-5" alt="" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Message} className="w-5" alt="" />
                </button>
                <button className="p-2 w-9 bg-white border border-[#D1E9FF] rounded-full">
                  <Image src={Setting} className="w-5" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* logos */}
      <div className="px-4 md:px-8 w-full md:max-w-screen-xl md:mx-auto py-16 ">
        <p className="text-center md:text-xl text-[#475467] font-semibold">
          Join 1,500+ companies already video conferencing the ClearLink way
        </p>
        <div className="flex justify-center items-center gap-x-12  mt-6 overflow-x-auto overflow-hidden w-full">
          <Image src={Shopify} className="max-w-[10rem]" alt="Shopify" />
          <Image src={CoinBase} className="max-w-[10rem]" alt="CoinBase" />
          <Image src={DropBox} className="max-w-[10rem]" alt="Dropbox" />
          <Image src={InterCom} className="max-w-[10rem]" alt="Intercom" />
          <Image src={Marvel} className="max-w-[10rem]" alt="Marvel" />
          <Image src={Automatic} className="max-w-[10rem]" alt="Automattic" />
        </div>
      </div>

      {/* The ClearLink Advantage */}

      <div className="relative max-w-screen-xl mx-auto px-4 md:px-8 lg:px-4 py-20 space-y-20">
        <div className="space-y-2">
          <p className="text-[#175CD3] text-lg font-semibold">
            The ClearLink Advantage
          </p>
          <p className="text-[#1D2939] text-[48px] font-semibold">
            Why choose ClearLink?
          </p>
          <p className="text-[#667085] max-w-xl">
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers:
          </p>
        </div>
        <div className="hidden lg:block absolute right-[13.5rem] top-5">
          <svg
            className="z-10"
            xmlns="http://www.w3.org/2000/svg"
            width="283"
            height="244"
            viewBox="0 0 283 244"
            fill="none"
          >
            <path
              d="M202.47 235.718C202.025 236.729 202.483 237.909 203.494 238.355C204.505 238.8 205.686 238.341 206.131 237.33L202.47 235.718ZM113.314 118.038L111.623 119.105L111.623 119.106L113.314 118.038ZM197.936 96.9693L195.961 96.6584L195.961 96.6587L197.936 96.9693ZM45.3918 42.1969C44.4387 42.7551 44.1185 43.9803 44.6767 44.9334C45.2348 45.8866 46.46 46.2068 47.4132 45.6486L45.3918 42.1969ZM223.019 231.518C224.019 231.051 224.452 229.861 223.985 228.86C223.518 227.859 222.327 227.426 221.327 227.893L223.019 231.518ZM203.645 238.354L201.956 239.424C202.494 240.274 203.58 240.592 204.491 240.166L203.645 238.354ZM193.87 219.979C193.186 219.112 191.928 218.964 191.061 219.649C190.194 220.333 190.046 221.591 190.731 222.458L193.87 219.979ZM204.301 236.524C206.131 237.33 206.131 237.33 206.132 237.328C206.132 237.328 206.133 237.326 206.134 237.324C206.135 237.321 206.137 237.316 206.14 237.31C206.145 237.298 206.153 237.28 206.163 237.257C206.183 237.212 206.211 237.145 206.249 237.058C206.324 236.884 206.432 236.627 206.572 236.292C206.85 235.623 207.251 234.64 207.742 233.377C208.726 230.852 210.075 227.204 211.546 222.692C214.488 213.675 217.929 201.182 219.912 187.302C223.861 159.663 222.106 125.893 198.23 103.48L195.492 106.396C217.887 127.418 219.852 159.441 215.952 186.736C214.011 200.323 210.637 212.583 207.744 221.452C206.298 225.883 204.975 229.461 204.015 231.926C203.535 233.158 203.146 234.112 202.879 234.755C202.745 235.077 202.642 235.32 202.572 235.482C202.538 235.563 202.511 235.623 202.494 235.663C202.486 235.683 202.479 235.697 202.475 235.706C202.473 235.711 202.472 235.714 202.471 235.716C202.471 235.717 202.47 235.718 202.47 235.718C202.47 235.718 202.47 235.718 204.301 236.524ZM198.23 103.48C174.594 81.2938 149.344 78.6473 131.688 84.7651C122.905 87.8083 115.932 93.0529 112.096 99.2126C108.225 105.429 107.545 112.645 111.623 119.105L115.006 116.97C111.892 112.037 112.276 106.49 115.492 101.327C118.742 96.1076 124.879 91.3574 132.997 88.5447C149.142 82.9506 172.856 85.1477 195.492 106.396L198.23 103.48ZM111.623 119.106C115.548 125.321 122.643 129.967 130.942 132.768C139.272 135.579 149.022 136.606 158.538 135.408C177.597 133.009 196.093 121.574 199.912 97.2799L195.961 96.6587C192.495 118.706 175.872 129.195 158.039 131.44C149.109 132.564 139.968 131.592 132.221 128.978C124.442 126.352 118.273 122.145 115.005 116.97L111.623 119.106ZM199.912 97.2801C201.854 84.9374 196.987 72.8987 187.898 62.5135C178.81 52.1301 165.39 43.2487 149.795 37.0675C118.634 24.7162 78.2582 22.9504 45.3918 42.1969L47.4132 45.6486C78.9615 27.174 117.997 28.7664 148.322 40.786C163.47 46.7904 176.311 55.3476 184.888 65.1478C193.463 74.9462 197.664 85.836 195.961 96.6584L199.912 97.2801ZM221.327 227.893L202.799 236.542L204.491 240.166L223.019 231.518L221.327 227.893ZM203.645 238.354C205.335 237.284 205.335 237.284 205.335 237.284C205.335 237.284 205.335 237.283 205.335 237.283C205.334 237.283 205.334 237.282 205.333 237.281C205.332 237.28 205.331 237.277 205.328 237.273C205.324 237.267 205.318 237.256 205.309 237.243C205.292 237.216 205.267 237.177 205.234 237.125C205.168 237.021 205.072 236.869 204.948 236.674C204.7 236.285 204.344 235.725 203.908 235.044C203.038 233.681 201.851 231.831 200.585 229.881C198.084 226.028 195.188 221.648 193.87 219.979L190.731 222.458C191.905 223.945 194.681 228.133 197.23 232.059C198.489 233.998 199.671 235.84 200.538 237.197C200.971 237.876 201.326 238.433 201.572 238.82C201.695 239.014 201.791 239.165 201.856 239.268C201.889 239.319 201.914 239.358 201.931 239.385C201.939 239.398 201.945 239.408 201.949 239.414C201.952 239.418 201.953 239.42 201.954 239.422C201.955 239.422 201.955 239.423 201.955 239.423C201.955 239.424 201.955 239.424 201.956 239.424C201.956 239.424 201.956 239.424 203.645 238.354Z"
              fill="#004EEB"
            />
          </svg>
        </div>

        <div className="md:flex-row flex flex-col justify-between gap-20 text-[#475467]">
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="space-y-4">
                <div className="p-4 max-w-14 bg-[#F9FAFB] border border-[#EAECF0] rounded-full">
                  <Image src={feature.image} alt="" />
                </div>
                <p className="font-semibold text-[#101828] text-2xl">
                  {feature.title}
                </p>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="">
            <Image src={Collage} alt="college" />
          </div>
        </div>
      </div>
      {/* testimoia */}
      <div className="md:max-w-screen-xl md:mx-auto px-4 py-16 gap-8 grid grid-cols-1 lg:grid-cols-[1fr_450px] text-gray-600 overflow-hidden md:px-8 ">
        <div className="flex-1 space-y-6   p-4">
          <Image src={Shopifysm} alt="ai" />
          <Image src={Stars} alt="stars" />

          <h1 className="text-2xl md:text-[44px] text-[#101828] font-medium md:leading-[60px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, andtop-notch security make it essential for our
            team.{" "}
          </h1>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Image src={Avatar} alt="avatar group" />
              <span>
                <p className="text-black font-semibold">Sarah Thompson</p>
                <p className="text-[16px] text-[#475467] ">
                  Project Manager, Shopify{" "}
                </p>
              </span>
            </div>
            <div className="flex space-x-3 items-center">
              <span className="border border-blue-100 rounded-full p-1 bg-white">
                <Image src={ArrowRight} alt="avatarright" />
              </span>
              <span className="border border-blue-100 rounded-full p-1 bg-white">
                <Image src={ArrowLeft} alt="arrowleft" />
              </span>
            </div>
          </div>
        </div>

        <div className="md:h-[500px] md:w-[500px] w-full p-4 ">
          <Image src={testimonia} alt="testimoia" />
        </div>
      </div>
      {/* faq */}
      <div className="md:max-w-screen-xl md:mx-auto px-4 py-16 gap-10 grid grid-cols-1 lg:grid-cols-[500px_1fr] text-gray-600 overflow-hidden md:px-8 ">
        <div className="flex-1 space-y-6   p-4">
          <p className="text-[18px] text-blue-700">Support</p>
          <h1 className="text-2xl md:text-[48px] text-[#101828] font-medium md:leading-[60px]">
            FAQs
          </h1>
          <p className="md:text-[24px] text-[#667085] md:leading-[24px] max-w-xl">
            Everything you need to know about the product and billing. Can’t
            find the answer you’re looking for? Please{" "}
            <span className="underline ">chat to our friendly team</span>.
          </p>
        </div>

        <div className="flex-1 mt-10 divide-y divide-gray-100 rounded-xl border border-[#EAECF0] bg-[#F9FAFB]">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group p-6 [&_summary::-webkit-details-marker]:hidden bg-[#F9FAFB]"
              open={index === 0} // Open only the first FAQ by default
            >
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-[#101828]">
                <h2 className="text-[20px] font-medium">{faq.question}</h2>

                <span className="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-[#475467] text-lg">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {/* free trail */}
      <div className=" w-full py-16 md:pl-7  flex justify-center gap-12  flex-col lg:flex-row text-gray-600 overflow-hidden ">
        <div className=" space-y-6 p-4">
          <h1 className="text-2xl md:text-[44px] text-[#101828] font-medium md:leading-[60px]">
            Ready to clear the path to perfect communication?
          </h1>
          <div className="flex flex-col space-y-3 px-4">
            <div className="flex space-x-3 items-center">
              <Image src={Arrow} alt="testimoia" />
              <p className="text-[24px] text-[#475467]">30 days free trial</p>
            </div>
            <div className="flex  space-x-3 items-center">
              <Image src={Arrow} alt="testimoia" />
              <p className="text-[24px] text-[#475467]">Cancel at any time</p>
            </div>
            <div className="flex  space-x-3 items-center">
              <Image src={Arrow} alt="testimoia" />
              <p className="text-[24px] text-[#475467]">
                Access to all features
              </p>
            </div>
            <div className="flex  space-x-3 items-center">
              <Image src={Arrow} alt="testimoia" />
              <p className="text-[24px] text-[#475467]">
                Peronalized onboarding
              </p>
            </div>
          </div>

          <div className="lg:flex-row flex flex-col items-start gap-3 sm:text-sm">
            <Link
              href="/"
              className="flex items-center justify-center gap-x-1 py-2 px-5 text-lg font-medium border border-gray-200 duration-150  rounded-full md:inline-flex"
            >
              Talk to sales
            </Link>
            <Link
              href="/"
              className="flex items-center justify-center gap-x-1 py-2 px-5 text-white text-lg font-medium bg-[#175CD3]/90 duration-150 hover:bg-[#175CD3] active:bg-gray-900 rounded-full md:inline-flex"
            >
              Start your free trial
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Image src={freeTria} alt="testimoia" />
        </div>{" "}
      </div>
    </main>
  );
};

export default Home;
