import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/work_images/1.jpg";
import work2 from "../assets/images/work_images/2.jpg";
import work3 from "../assets/images/work_images/3.jpg";
import work4 from "../assets/images/work_images/4.jpg";
import work5 from "../assets/images/work_images/5.jpg";
import work6 from "../assets/images/work_images/6.jpg";
import work7 from "../assets/images/work_images/7.jpg";
import work8 from "../assets/images/work_images/8.jpg";
import work9 from "../assets/images/work_images/9.jpg";
// works small images
import workSmall1 from "../assets/images/work_images/small/1.jpg";
import workSmall2 from "../assets/images/work_images/small/2.jpg";
import workSmall3 from "../assets/images/work_images/small/3.jpg";
import workSmall4 from "../assets/images/work_images/small/4.jpg";
import workSmall5 from "../assets/images/work_images/small/5.jpg";
import workSmall6 from "../assets/images/work_images/small/6.jpg";
import workSmall7 from "../assets/images/work_images/small/7.jpg";
import workSmall8 from "../assets/images/work_images/small/8.jpg";
import workSmall9 from "../assets/images/work_images/small/9.jpg";
// blog post images
import blog6 from "../assets/images/blog_images/6.jpg";
import blog4 from "../assets/images/blog_images/4.jpg";
import blog2 from "../assets/images/blog_images/2.jpg";
import blog1 from "../assets/images/blog_images/1.jpg";
import blog3 from "../assets/images/blog_images/3.jpg";
import blog5 from "../assets/images/blog_images/5.jpg";
// blog image small
import blogSmall6 from "../assets/images/blog_images/small/6.jpg";
import blogSmall4 from "../assets/images/blog_images/small/4.jpg";
import blogSmall2 from "../assets/images/blog_images/small/2.jpg";
import blogSmall1 from "../assets/images/blog_images/small/1.jpg";
import blogSmall3 from "../assets/images/blog_images/small/3.jpg";
import blogSmall5 from "../assets/images/blog_images/small/5.jpg";

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
import { AiOutlineHome } from "react-icons/ai";
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

  // fillter portfilo data
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
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "OSL",
      tools: "Photoshop, Figma",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "Video was created for OSL's quarterly hiring campaign. The strategy was to incorporate the logo into the brand messaging itself. With a successful paid advertising campaign, the company was able to double their applications in Q1.",
    },
    {
      id: "2",
      tag: "Content Creation",
      title: "Lilly Lashes Product Video",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Lilly Lashes",
      tools: "HTML, CSS, Javascript",
      link: "https://www.themeforest.net",
      linkText: "themeforest.net",
      description:
        "Product video shot and created for Lilly Lashes new line of magnetic lashes. This video was later used on their social channels and as part of a successful paid ad campaign.",
    },
    {
      id: "3",
      tag: "Content Creation",
      title: "Four Sigmatic April Fools",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF0F0",
      client: "Freepik",
      tools: "Illustrator",
      link: "https://www.freepik.com/free-photos-vectors/market-logo",
      linkText: "www.freepik.com",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "4",
      tag: "Content Creation",
      title: "Chaladz Design Promo",
      img: work4,
      imgSmall: workSmall4,
      bg: "#E9FAFF",
      client: "Chaladz Design",
      tools: "After Effect",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
      "From location and model scouting, to directing, shooting and editing, this successful campaign promo and subsequent digital marketing campaign was created and managed by me from start to finish.",
    },
    {
      id: "5",
      tag: "Content Creation",
      title: "Hairtamin Scalp Serum Promo",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFFAE9",
      client: "Hairtamin",
      tools: "Photoshop",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "Shot, designed and edited by me for hairtamin's annual 12 days of giving campaign.",
    },
    {
      id: "6",
      tag: "Content Creation",
      title: "Bathe With Nature",
      img: work6,
      imgSmall: workSmall6,
      bg: "#F4F4FF",
      client: "Lavido",
      tools: "Vimeo",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "Campaign video created for online ads and promotions.",
    },
    {
      id: "7",
      tag: "Content Creation",
      title: "OSL Pride Campaign Video",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF0F8",
      client: "OSL",
      tools: "Photoshop",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "This campaign was made in celebration of Pride 2022. Employees were invited to a zoom chat where various questions were asked. The footage was then taken to create a kick-off video for Pride month.",
    },
    {
      id: "8",
      tag: "Web Design",
      title: "Chul urina",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF0F8",
      client: "Envato",
      tools: "HTML, CSS, Javascript",
      link: "https://www.envato.com",
      linkText: "www.envato.com",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
    {
      id: "9",
      tag: "Logo",
      title: "Chul urina",
      img: work9,
      imgSmall: workSmall9,
      bg: "#FCF4FF",
      client: "Feepik",
      tools: "Figma",
      link: "https://www.freepik.com/free-photos-vectors/market-logo",
      linkText: "www.freepik.com",
      description:
        "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate non suscipit voluptatibus minima ullam maiores sequi nihil placeat error, vero eaque doloremque reiciendis amet pariatur consequuntur. Nostrum, dolore, amet eligendi ipsam enim quisquam, corrupti asperiores nihil excepturi aspernatur placeat iure.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section
  const blogsData = [
    {
      id: "1",
      img: blog1,
      imgSmall: blogSmall1,
      date: "177 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "4",
      img: blog4,
      imgSmall: blogSmall4,
      date: "000 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "2",
      img: blog2,
      imgSmall: blogSmall2,
      date: "21 April",
      category: "Web Design",
      title: "The window know to say beside you",
      bg: "#FFF0F0",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "5",
      img: blog5,
      imgSmall: blogSmall5,
      date: "27 April",
      category: "Inspiration",
      title: "Top 10 Toolkits for Deep Learning in 2021.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "3",
      img: blog3,
      imgSmall: blogSmall3,
      date: "27 April",
      category: "Inspiration",
      title: "How to Own Your Audience by Creating an Email List.",
      bg: "#FCF4FF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
    {
      id: "6",
      img: blog6,
      imgSmall: blogSmall6,
      date: "27 April",
      category: "Inspiration",
      title: "Everything You Need to Know About Web Accessibility.",
      bg: "#EEFBFF",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum conseqr quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consetur quo obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur. \n Lorem ipsum dolor, sit amet consectetur adipisicing  elit. Fuga consequatur delectus porro sapiente molestias, magni quasi sed, enim corporis omnis doloremque soluta inventore dolorum consequuntur quo obcaecati rerum sit non. ",
    },
  ];

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/home/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/homeTwo/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/homeTwo/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/homeTwo/works",
      icon: <FiCodesandbox />,
    },
    {
      id: "04",
      name: "Blogs",
      link: "/homeTwo/blogs",
      icon: <FaBlogger />,
    },
    {
      id: "05",
      name: "Contact",
      link: "/homeTwo/contact",
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

  // experience items for about page
  const experienceArray = [
    {
      id: "1",
      icon: instagramIcon,
      title: "Social Media Management",
      des: "I can help you create and maintain a social media presence that will engage your audience and help you achieve your business goals. I’ll help you develop a content strategy, create content, and track and analyze your results so you can adjust your strategy as needed.",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "2",
      icon: chessIcon,
      title: "Brand Strategy",
      des: "The best brand strategy services help you create a unique and differentiated brand that will drive business success. I can understand your customers, competitors, and industry to develop a brand strategy that will make you stand out and achieve your desired results.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "3",
      icon: photoFilmIcon,
      title: "Content Creation",
      des: "I can help you develop blog posts, articles, social media content, and more. I have a knack for understanding what your audience wants to see, and I can help you create content that's both informative and engaging.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
    {
      id: "4",
      icon: shirtIcon,
      title: "Fashion Design",
      des: "As the Owner and Head designer of Chaladz Design. I believe that fashion should be fun and expressive, and I strive to create designs that reflect that. I especially enjoy working with clients to create one-of-a-kind looks that reflect their personality and style.",
      color: "#8774FF",
      bg: "#FCF4FF",
    },
  ];

  // Resume items for Resume page
  const resumeArray = [
    {
      type: "Education",
      icon: MdOutlineSchool,
      id: "01",
      date: "2008-2012",
      title: "B.Sc. in Criminology ",
      place: "Simon Fraser University, Toronto, CA",
      bg: "#FFF4F4",

      id1: "02",
      date1: "2019 - Present",
      title1: "Some Certification",
      place1: "Google Inc.",
      bg1: "#FFF1FB",

      id2: "03",
      date2: "2021",
      title2: "Some Certification",
      place2: "University Of Melbourne, NA",
      bg2: "#FFF4F4",
    },
    {
      type: "Experience",
      icon: MdOutlineBusinessCenter,
      id: "04",
      date: "2017-2021",
      title: "Digital Marketing Manager",
      place: "Patch Design",
      bg: "#EEF5FA",

      id1: "05",
      date1: "2015-2017",
      title1: "Founder & Creative Director",
      place1: "Chaladz Design",
      bg1: "#F2F4FF",

      id2: "06",
      date2: "2008",
      title2: "Social Media Manager",
      place2: "Gap Inc.",
      bg2: "#EEF5FA",
    },
    {
      type: "Awards",
      icon: FaAward,
      id: "07",
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",

      id1: "08",
      date1: "2014 - 2015",
      title1: "Jr. Web Developer",
      place1: "Creative Gigs.",
      bg1: "#FCF9F2",

      id2: "09",
      date2: "2015-2017",
      title2: "Best Freelancer",
      place2: "Fiver & Upwork Level 2 & Top Rated",
      bg2: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "Communication",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Time-management",
      number: "95",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Canva",
      number: "65",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Photoshop",
      number: "75",
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
    menuItemTwo,
    experienceArray,
    sliderImg,
    resumeArray,
    lineArray,
    contactArray,
  };
};

export default AllData;
