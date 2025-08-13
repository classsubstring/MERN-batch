import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListExpenses from "./components/ListExpenses";
import MyButton from "./components/MyButton";
import Banner from "./components/Banner";
import { Card } from "./components/Card";
import { IoLogoAndroid } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";
import { TbSocial } from "react-icons/tb";

import { FaApple, FaPaintBrush, FaCloud, FaRobot } from "react-icons/fa";
import { SiFlutter, SiFigma } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import Heading from "./components/Heading";
import AddExpense from "./components/expense/AddExpense";
import { ToastContainer, Flip } from "react-toastify";
import ShowPost from "./components/apicalling/ShowPosts";
function App() {
  // const buttons = [
  //   "click me",
  //   "login",
  //   "signup",
  //   "query",
  //   "buy now",
  //   "add",
  //   "update",
  // ];

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Android Development",
      content:
        "We build high-performance Android apps tailored to your business goals using Java and Kotlin.",
      buttonText: "Learn More",
      icon: <IoLogoAndroid size={80} />,
    },
    {
      id: 2,
      title: "Web Development",
      content:
        "Responsive and scalable web applications built using the latest frontend and backend technologies.",
      buttonText: "Learn More",
      icon: <CgWebsite size={80} />,
    },
    {
      id: 3,
      title: "iOS Development",
      content:
        "Native iOS apps developed with Swift to deliver seamless performance and stunning user experience.",
      buttonText: "Learn More",
      icon: <FaApple size={80} />,
    },
    {
      id: 4,
      title: "UI/UX Design",
      content:
        "Crafting intuitive and visually appealing interfaces using Figma and Adobe XD.",
      buttonText: "Explore Designs",
      icon: <FaPaintBrush size={80} />,
    },
    {
      id: 5,
      title: "Cloud Services",
      content:
        "Deploy, manage, and scale your applications with AWS and Azure cloud platforms.",
      buttonText: "Get Started",
      icon: <FaCloud size={80} />,
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      content:
        "Integrate intelligent AI models into your software to enhance user experience and automation.",
      buttonText: "Discover More",
      icon: <FaRobot size={80} />,
    },
    {
      id: 7,
      title: "Flutter Development",
      content:
        "Cross-platform mobile apps with a single codebase using Flutter and Dart.",
      buttonText: "View Projects",
      icon: <SiFlutter size={80} />,
    },
    {
      id: 8,
      title: "Azure Solutions",
      content:
        "Leverage Microsoft Azure for cloud storage, AI tools, and enterprise-grade deployments.",
      buttonText: "Explore Azure",
      icon: <CgWebsite size={80} />,
    },
    {
      id: 9,
      title: "Cybersecurity",
      content:
        "Protect your systems with advanced security protocols, firewalls, and threat detection.",
      buttonText: "Secure Now",
      icon: <MdSecurity size={80} />,
    },
  ]);

  function deleteService(id) {
    const newServices = services.filter((serv) => serv.id != id);
    setServices(newServices);
  }

  return (
    <div>
      <ToastContainer
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <ShowPost />
      <AddExpense />
      <Banner />

      <div>
        <Heading heading={`We provide ${services.length} services`} />
      </div>

      <div className="flex px-20 gap-5 flex-wrap">
        {services.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            buttonText={card.buttonText}
            icon={card.icon}
            id={card.id}
            deleteService={deleteService}
          />
        ))}

        {/* android wala card */}
        {/* <Card
          icon={<IoLogoAndroid color="gray" size={80} />}
          title="Android Dev"
          content="We are specialize in developing custom adnroid apps."
          buttonText="Contact Us"
        /> */}

        {/* web dev wala card hai */}
        {/* <Card
          icon={<CgWebsite size={80} />}
          title="Web Dev"
          content="We also web website and web applications."
          buttonText="Get Quote"
        /> */}

        {/* digital marketing wala card */}
        {/* <Card
          icon={<TbSocial size={80} />}
          title="Digital Marketing"
          content="We do digital marketing to promote your brand."
          buttonText="Get Help"
        /> */}
      </div>
    </div>
  );
}
export default App;
