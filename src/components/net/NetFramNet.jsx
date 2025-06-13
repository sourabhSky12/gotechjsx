import TechStackContent from "../common/TechStackContent";

const NetFramNet = () => {
  const title = ".NET FRAMEWORKS & LIBRARIES";
  const description = "Our .NET technology stack incorporates a range of frameworks and libraries, empowering robust, scalable, and efficient application development.";
  
  const stats = [
    "ASP.NET MVC for developing enterprise-grade web applications",
    "Entity Framework for streamlined data access and management",
    "SignalR for enabling real-time web functionality",
    ".NET Core for facilitating cross-platform development"
  ];

  const technologies = [
    { name: ".NET CORE", image: "/net-core-1.png" },
    { name: "ASP.NET MVC", image: "/asp.net-mvc-1.png" },
    { name: "Blazor", image: "/blazor.png" },
    { name: "Entity Framework", image: "/entity-framework.png" },
    { name: "SignalR", image: "/SignalR.png" },
    { name: "Xamarian", image: "/xamarian.png" },
   
  ];

  return (
    <TechStackContent
      title={title}
      description={description}
      stats={stats}
      technologies={technologies}
      
    />
  );
}

export default NetFramNet