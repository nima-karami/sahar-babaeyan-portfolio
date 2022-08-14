import { useEffect, useState } from "react";
// for work_images
import join_osl_img from "../assets/images/work_images/small/join-osl.jpeg";
import lilly_lashes_img from "../assets/images/work_images/small/lilly-lashes.jpeg";
import four_sigmatic_img from "../assets/images/work_images/small/four-sigmatic-april-fools.jpeg";
import joon_hair_care_img from "../assets/images/work_images/small/joon-hair-care.jpeg";
import hairtamin_scalp_serum_img from "../assets/images/work_images/small/hairtamin-scalp-serum.jpeg";
import bathe_with_nature_img from "../assets/images/work_images/small/bathe-with-nature.jpeg";
import chaladz_design_img from "../assets/images/work_images/small/chaladz-design.jpeg";
import lavido_beauty_social_img from "../assets/images/work_images/small/lavido-beauty-social.jpeg";
import osl_social_img from "../assets/images/work_images/small/osl-social.jpeg";
import four_sigmatic_social_img from "../assets/images/work_images/small/four-sigmatic-social.jpeg";
import raw_elements_social_img from "../assets/images/work_images/small/raw-elements-social.jpeg";

// blog image small
import android_apple_img from "../assets/images/blog_images/small/android-apple.jpeg";
import functional_coffee_img from "../assets/images/blog_images/small/functional-coffee.jpeg";
import hormones_img from "../assets/images/blog_images/small/hormones.jpeg";
import mushroom_101_img from "../assets/images/blog_images/small/mushroom-101.jpeg";
import retail_img from "../assets/images/blog_images/small/retail.jpeg";


import img1 from "../assets/images/slider/1.png";
import img2 from "../assets/images/slider/2.png";
import img3 from "../assets/images/slider/3.png";
import img4 from "../assets/images/slider/4.png";
import img5 from "../assets/images/slider/5.png";
import img6 from "../assets/images/slider/6.png";
import img7 from "../assets/images/slider/7.png";
import img8 from "../assets/images/slider/8.png";
//  icon use as img here
import instagramIcon from "../assets/images/icons/instagram-brands.svg";
import chessIcon from "../assets/images/icons/chess-solid.svg";
import shirtIcon from "../assets/images/icons/shirt-solid.svg";
import photoFilmIcon from "../assets/images/icons/photo-film-solid.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaBlogger, FaRegUser, FaAward } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

import { MdOutlineBusinessCenter, MdOutlineSchool } from "react-icons/md";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // filter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open
  const handleBlogsData = (id) => {
    const find = blogsData.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "1",
      tag: "Content Creation",
      title: "OSL Hiring Campaign Video",
      img: "",
      imgSmall: join_osl_img,
      vid: "https://www.youtube.com/watch?v=04J9O16hfnk" ,
      bg: "#f1fff5",
      client: "OSL",
      tools: "Photoshop, Figma",
      link: "https://oslrs.com/",
      linkText: "www.oslrs.com",
      description:
        "Video was created for OSL's quarterly hiring campaign. The strategy was to incorporate the logo into the brand messaging itself. With a successful paid advertising campaign, the company was able to double their applications in Q1.",
    },
    {
      id: "8",
      tag: "Graphic Design",
      title: "Lavido Beauty Social Media",
      img: lavido_beauty_social_img,
      imgSmall: lavido_beauty_social_img,
      vid: "" ,
      bg: "#FFF1FB",
      client: "Lavido Beauty",
      tools: "Canva, Photoshop",
      link: "https://www.lavido.com/",
      linkText: "www.lavido.com",
      description:
        "Created a social media brand presence for this client that was modern, professional, and integrated their existing brand aesthetics. I developed a content strategy and calendar that would post engaging content daily, as well as create graphics and videos as needed. This strategy also included content marketing, paid advertising, and organic growth.",
    },
    {
      id: "10",
      tag: "Graphic Design",
      title: "Four Sigmatic Social Media",
      img: four_sigmatic_social_img,
      imgSmall: four_sigmatic_social_img,
      vid: "" ,
      bg: "#FFF1FB",
      client: "Four Sigmatic",
      tools: "Canva, Photoshop",
      link: "https://us.foursigmatic.com/",
      linkText: "us.foursigmatic.com",
      description:
        "I worked with Four Sigmatic to help them create social media content that would resonate with their audience. I came up with concepts and copy for posts that would show off the brand's personality and highlight their products. I also worked with influencers and bloggers to get the word out about Four Sigmatic. In the end, we created a social media campaign that was successful in driving traffic and engagement.",
    },
    {
      id: "2",
      tag: "Content Creation",
      title: "Lilly Lashes Product Video",
      img: "",
      imgSmall: lilly_lashes_img,
      vid: "https://www.youtube.com/watch?v=I4Pvta8F-Ss" ,
      bg: "#f1fff5",
      client: "Lilly Lashes",
      tools: "Adobe Premiere",
      link: "https://ca.lillylashes.com/",
      linkText: "ca.lillylashes.com",
      description:
        "Product video shot and created for Lilly Lashes new line of magnetic lashes. This video was later used on their social channels and as part of a successful paid ad campaign.",
    },
    {
      id: "3",
      tag: "Content Creation",
      title: "Four Sigmatic April Fools",
      img: "",
      imgSmall: four_sigmatic_img,
      vid: "https://www.youtube.com/watch?v=OzWeA-L_MAU" ,
      bg: "#f1fff5",
      client: "Four Sigmatic",
      tools: "Adobe Premiere",
      link: "https://us.foursigmatic.com/",
      linkText: "us.foursigmatic.com",
      description:
        "Campaign video created for April Fools - This generated a lot of engagement and had everyone LOL-ing!",
    },
    {
      id: "11",
      tag: "Graphic Design",
      title: "Raw Elements Social Media",
      img: raw_elements_social_img,
      imgSmall: raw_elements_social_img,
      vid: "" ,
      bg: "#FFF1FB",
      client: "Raw Elements",
      tools: "Canva, Photoshop",
      link: "https://rawelements.ca/",
      linkText: "www.rawelements.ca",
      description:
        "Raw Elements is a wellness social media brand that helps people live their best lives. I worked with Raw Elements to help them create content that would inspire and motivate their audience. I wrote articles, created graphics, and developed strategies to help Raw Elements grow their online presence. My work with Raw Elements helped them reach a wider audience and continue to promote their message of living a healthy and balanced life.",
    },
    {
      id: "4",
      tag: "Content Creation",
      title: "Chaladz Design Promo",
      img: "",
      imgSmall: chaladz_design_img,
      vid: "https://youtu.be/nqVEUsFSs8I" ,
      bg: "#f1fff5",
      client: "Chaladz Design",
      tools: "Adobe Premiere",
      link: "https://chaladzdesign.com/",
      linkText: "www.chaladzdesign.com",
      description:
      "From location and model scouting, to directing, shooting and editing, this successful campaign promo and subsequent digital marketing campaign was created and managed by me from start to finish.",
    },
    {
      id: "5",
      tag: "Content Creation",
      title: "Hairtamin Scalp Serum Promo",
      img: "",
      imgSmall: hairtamin_scalp_serum_img,
      vid: "https://www.youtube.com/shorts/G49dckoPZww" ,
      bg: "#f1fff5",
      client: "Hairtamin",
      tools: "Adobe Premiere",
      link: "https://hairtamin.com/",
      linkText: "www.hairtamin.com",
      description:
        "Shot, designed and edited by me for hairtamin's annual 12 days of giving campaign.",
    },
    {
      id: "9",
      tag: "Graphic Design",
      title: "OSL Social Media",
      img: osl_social_img,
      imgSmall: osl_social_img,
      vid: "" ,
      bg: "#FFF1FB",
      client: "OSL",
      tools: "Canva, Photoshop",
      link: "https://www.oslrs.com",
      linkText: "www.oslrs.com",
      description:
        "For OSL I was responsible for creating content, managing the brand’s social media accounts, and engaging with their employee focused community. I created a strong visual presence for the brand and helped grow its following. I also implemented successful paid marketing campaigns that generated interest, new applicants and awareness.",
    },
    {
      id: "6",
      tag: "Content Creation",
      title: "Bathe With Nature",
      img: "",
      imgSmall: bathe_with_nature_img,
      vid: "https://youtu.be/C-NR08j0DEc" ,
      bg: "#f1fff5",
      client: "Lavido",
      tools: "Adobe Premiere",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "Campaign video created for online ads and promotions.",
    },
    {
      id: "7",
      tag: "Content Creation",
      title: "Joon Hair Care Promo",
      img: "",
      imgSmall: joon_hair_care_img,
      vid: "https://www.youtube.com/shorts/5vaWKIqp-yQ" ,
      bg: "#f1fff5",
      client: "Joon",
      tools: "Photoshop",
      link: "https://joonhaircare.com/",
      linkText: "www.joonhaircare.com",
      description:
        "product video produced to introduce Joon Hair Care on social media",
    },    
    
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: mushroom_101_img,
      imgSmall: mushroom_101_img,
      date: "April 17, 2021",
      category: "Life Style",
      title: "Medicinal Mushrooms 101: Reishi, Chaga and Lionsmane… OH MY!",
      link: "https://rawelements.ca/medicinal-mushrooms-101-reishi-chaga-and-lionsmane-oh-my/",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: hormones_img,
      imgSmall: hormones_img,
      date: "January 24, 2021",
      category: "Life Style",
      title: "Hormones!",
      link:"https://rawelements.ca/hormones/",
      bg: "#EEFBFF",
      description:
        "You might think that you are the controller of how your body functions, but if you’ve ever witnessed a woman that’s just run out of ice cream lose their marbles and cry, laugh and then instantly lash out within the span of 5 minutes then you have experienced the power of hormones! These crazy mood swings can make even the worst of toddler temper tantrums seem like a breeze.",
    },
    {
      id: "2",
      img: android_apple_img,
      imgSmall: android_apple_img,
      date: "January 14, 2021",
      category: "Technology",
      title: "Android vs iPhone: Choosing the Right Phone for Your Needs",
      link:"https://oslrs.com/wireless/android-vs-iphone-choosing-the-right-phone-for-your-needs/?cn-reloaded=1",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: retail_img,
      imgSmall: retail_img,
      date: "December 27, 2019",
      category: "Life Style",
      title: "How Retail Jobs Can Change Your Life",
      link:"https://oslrs.com/recruitment/how-retail-jobs-can-change-your-life/",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: functional_coffee_img,
      imgSmall: functional_coffee_img,
      date: "February 14, 2022",
      category: "Wellness",
      title: "Regular Coffee vs Functional Coffee",
      link:"https://us.foursigmatic.com/m/regular-coffee-vs-functional-coffee",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];
  // Menu items for Homepage
  const menuItem = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];

  // what i do items for about page
  const professionalTitlesArray = [
    {
      id: "1",
      icon: instagramIcon,
      title: "Social Media Management",
      des: "I can help you create and maintain a social media presence that will engage your audience and help you achieve your business goals. I’ll help you develop a content strategy, create content, and track and analyze your results so you can adjust your strategy as needed.",
      color: "#D566FF",
      bg: "#f1fff5",
    },
    {
      id: "2",
      icon: chessIcon,
      title: "Brand Strategy",
      des: "The best brand strategy services help you create a unique and differentiated brand that will drive business success. I can understand your customers, competitors, and industry to develop a brand strategy that will make you stand out and achieve your desired results.",
      color: "#DDA10C",
      bg: "#f1fff5",
    },
    {
      id: "3",
      icon: photoFilmIcon,
      title: "Content Creation",
      des: "I can help you develop blog posts, articles, social media content, and more. I have a knack for understanding what your audience wants to see, and I can help you create content that's both informative and engaging.",
      color: "#8774FF",
      bg: "#f1fff5",
    },
    {
      id: "4",
      icon: shirtIcon,
      title: "Fashion Design",
      des: "As the Owner and Head designer of Chaladz Design. I believe that fashion should be fun and expressive, and I strive to create designs that reflect that. I especially enjoy working with clients to create one-of-a-kind looks that reflect their personality and style.",
      color: "#8774FF",
      bg: "#f1fff5",
    },
  ];

  // Resume items for Resume page
  const educationArray = 
    {
      type: "Education",
      icon: MdOutlineSchool,
      array: [
        {
          id: "01",
          date: "2020",
          title: "Advanced Google Analytics Certification",
          place: "Google Inc.",
          bg: "#FFF1FB",
        },
        {
          id: "02",
          date: "2008-2012",
          title: "B.Sc. in Criminology ",
          place: "Simon Fraser University, Toronto, CA",
          bg: "#FFF1FB",
        }]
    }
    
    const experienceArray = {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      array: [{
          id: "04",
          date: "2017-Present",
          title: "Digital Marketing Manager",
          place: "Patch Design",
          bg: "#EEF5FA",
        },
        {
          id: "05",
          date: "2016-Present",
          title: "Founder & Creative Director",
          place: "Chaladz Design",
          bg: "#EEF5FA",
        },
        {
          id: "06",
          date: "2013-2019",
          title: "Social Media Manager",
          place: "Gap Inc.",
          bg: "#EEF5FA",
        }]
    }

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Content Creation",
      number: "100",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Analytics",
      number: "90",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Brand Strategy",
      number: "100",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Digital Advertising",
      number: "80",
    },
    {
      id: "04",
      color: "#AAFF00",
      name: "Copywriting",
      number: "100",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: "+452 666 386",
      item2: "+452 666 386",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "support@gmail.com",
      item2: "example@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "Maount View, Oval",
      item2: "Road, New York, USA",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    blogsData,
    handleBlogsData,
    menuItem,
    NavLink,
    professionalTitlesArray,
    sliderImg,
    educationArray,
    experienceArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
