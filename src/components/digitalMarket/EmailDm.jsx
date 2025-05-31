import TechStackContent from "../common/TechStackContent";

const EmailDm = () => {
   const title = "E-MAIL MARKETING";
  const description = "Empower your business with the best practices, followed by the leading Software Development company in Udaipur. We incorporate strong e-mail marketing tools to ensure that you build stronger business relations with your customers and further enable you to drive sales. E-mail marketing is a powerful tool for businesses to engage with their audience, generate leads, and enhance conversion rates. ";
  
  const stats = [
    "Integration with CRM Systems",
    "A/B Testing and Optimization",
    "Compliance with Email Marketing Regulations (e.g., CAN-SPAM Act, GDPR)",
    "Measuring Email Marketing Performance (e.g., open rates, click-through rates)",
    "Email Marketing Strategy Development",
  ];

  const technologies = [
    { name: "Angular", image: "Angular-icon.png" },
   
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

export default EmailDm