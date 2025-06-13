import TechStackContent from "../common/TechStackContent";

const GeneralFramNode = () => {
  const title = "GENERAL-PURPOSE FRAMEWORKS";
  const description = "We leverage these versatile frameworks to create robust and high-performing Node.js applications. Whether your objective is to develop custom APIs, real-time applications, or intricate enterprise solutions, our expertise ensures the delivery of efficient and scalable products.";
  
  const stats = [
    "Crafting scalable web and mobile applications.",
    "Constructing sturdy APIs and backend services.",
    "Managing application routing and processing HTTP requests.",
    "Enabling database operations.",
    "Providing support for middleware configurations to handle requests and responses."
  ];

  const technologies = [
    { name: "Express.JS", image: "/express-js-1.png" },
    { name: "Feathers.js", image: "/feathersjs.png" },
    { name: "Hapi.js", image: "/hapijs.png" },
    { name: "Koa.js", image: "/koajs.png" },
    { name: "Loopback", image: "/loopback.png" },
    { name: "Meteor.js", image: "/meteor.png" },
    { name: "Nest.js", image: "/NestJS.png" },
    { name: "Sails.js", image: "/sails.png" },
    { name: "Strapi", image: "/strapi.png" },
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

export default GeneralFramNode