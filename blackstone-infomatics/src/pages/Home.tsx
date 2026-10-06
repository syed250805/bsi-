import React from 'react';
import Layout from '../components/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="home">
        <h1>Welcome to Blackstone Infomatics</h1>
        <p>Your partner in innovative solutions and technology.</p>
        <section className="services-overview">
          <h2>Our Services</h2>
          <ul>
            <li>Consulting</li>
            <li>Software Development</li>
            <li>Data Analysis</li>
            <li>Cloud Solutions</li>
          </ul>
        </section>
        <section className="about-us">
          <h2>About Us</h2>
          <p>At Blackstone Infomatics, we strive to deliver the best technology solutions tailored to your needs.</p>
        </section>
      </div>
    </Layout>
  );
};

export default Home;