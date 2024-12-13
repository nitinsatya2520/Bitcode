import React from 'react';
import ServiceCard from '../components/ServiceCard';

function Services() {
  const services = [
    {
      title: 'Software Development \n&\n Solutions',
      description: 'Custom software solutions, enterprise applications, business applications, and gaming software tailored to your needs. We also provide software maintenance and support to ensure your systems run smoothly.',
      image: '/assets/images/software.jpg',
      link: '/services/software-development'
    },
    {
      title: 'Advisory',
      description: 'Expert tech consulting and strategic advice to optimize your business processes and implement scalable solutions. We also offer custom application development to improve workflow.',
      image: '/assets/images/advisory.jpg',
      link: '/services/advisory'
    },
    {
      title: 'Design Services',
      description: 'Visually appealing and responsive web design, UI/UX design, and brand identity development to enhance user experience and help your brand stand out.',
      image: '/assets/images/design.jpg',
      link: '/services/Design'
    },
    {
      title: 'Digital Marketing \n&\n Strategy',
      description: 'Data-driven SEO, SEM, and social media marketing strategies to boost your online presence, drive traffic, and generate sales. We also create digital campaigns tailored to your business goals.',
      image: '/assets/images/digital-marketing.jpg',
      link: '/services/digital-marketing'
    },
    {
      title: 'SEO Services',
      description: 'Comprehensive SEO strategies including on-page, off-page, and local SEO to improve your website’s search engine rankings, increase visibility, and drive organic traffic.',
      image: '/assets/images/seo.jpg',
      link: '/services/seo'
    },
    {
      title: 'Film Production',
      description: 'Full-service short film production from concept to post-production, including creative direction and professional editing to deliver impactful visual storytelling.',
      image: '/assets/images/film-production.jpg',
      link: '/services/film-production'
    },
    {
      title: 'Internship \n&\n Training',
      description: 'Internship programs and workshops to help students and young professionals gain hands-on experience in tech, design, marketing, and film production.',
      image: '/assets/images/internship.jpg',
      link: '/services/internship'
    }
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="service-cards">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            title={service.title} 
            
            image={service.image} 
            link={service.link}  // Pass the link prop to the ServiceCard component
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
