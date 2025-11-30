import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import imgTechflex from '../assets/techflex.png';
import imgMindcare from '../assets/MindcareApp.png';
import imgGovimadala from '../assets/govimadala.png';
import imgBOC from '../assets/BOCApp.png';
import imgNoir from '../assets/noir.png';
import imgMe from '../assets/me.png';
import logoTechflex from '../assets/TechFlex_logo.png';
import logoMindcare from '../assets/MindCare_logo.png';
import logoGovimadala from '../assets/govimadala_logo.png';
import imgcoffeeHouse from '../assets/coffee_house.png';
import imgmovieweb from '../assets/movies.png';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaLinkedin, FaGlobe, FaPaperPlane } from 'react-icons/fa';
import { SiFlutter, SiFigma, SiAdobephotoshop, SiGithub, SiFirebase, SiBehance } from 'react-icons/si';

function IconSparkle({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 2l1.8 3.7L18 7l-3.6 1.3L12 12 10.8 8.3 7.2 7 10 5.7 12 2z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconCode({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const Home = () => {
  const [activeTab, setActiveTab] = useState('designs');
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const subtitles = [
    "I'm a UI/UX Engineer crafting intuitive designs and building web & mobile apps that users love. I blend empathy, creativity, and code to bring ideas to life.",
    "I'm a Frontend Developer creating stunning web experiences with modern technologies. I transform designs into interactive, responsive, and performant applications.",
    "I'm a Flutter Developer building beautiful Android mobile apps. I develop high-quality native experiences optimized for Android devices and the Google Play ecosystem."
  ];

  useEffect(() => {
    const currentText = subtitles[currentSubtitle];
    let currentIndex = 0;
    setDisplayedText('');
    setIsTyping(true);

    const typeInterval = setInterval(() => {
      if (currentIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
        
        // Wait before starting next subtitle
        setTimeout(() => {
          setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
        }, 2000);
      }
    }, 30); // Faster typing speed: 30ms per character

    return () => clearInterval(typeInterval);
  }, [currentSubtitle]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      const response = await fetch('https://formsubmit.co/ajax/6d409b3a47b70d772094ca079cf97f01', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(''), 5000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  // Initialize the first subtitle immediately
  useEffect(() => {
    setDisplayedText('');
    setCurrentSubtitle(0);
  }, []);

  return (
    <>
    {/* Hero Section */}
    <main className="home-hero" id="home">
      {/* small decorative icons */}
      <div className="dec dec-top-left"><IconSparkle className="dec-icon sparkle"/></div>
      <div className="dec dec-top-right"><IconCode className="dec-icon code"/></div>
      <div className="dec dec-bottom-left"><svg viewBox="0 0 24 24" className="dec-icon palette" aria-hidden><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6"/></svg></div>
      <div className="dec dec-bottom-right"><svg viewBox="0 0 24 24" className="dec-icon star" aria-hidden><path d="M12 2l2.4 5.1L20 9l-4 3.1L17 20l-5-2.8L7 20l1-7.9L4 9l5.6-1.9L12 2z" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>

      <div className="hero-inner">
        <h4 className="greeting">Hello! I'm</h4>
        <h1 className="hero-name">Senuki Perera<span className="hero-dot">.</span></h1>
        <p className="subtitle typewriter">
          {displayedText}
          <span className={`cursor ${isTyping ? 'blinking' : ''}`}>|</span>
        </p>
      </div>
    </main>
    
    {/* About Me Section */}
      <section className="about-section" id="about">
        <div className="about-container">
        <div className="about-intro">
          <div className="about-text">
          <div className="about-title-div">
            <h2 className="about-title">
            <span className="title-line"></span>About Me
          </h2>
          </div>
          <p className="about-description">
            I'm Senuki Perera, a passionate UI/UX Engineer and Frontend Developer with a keen eye for design and a love for creating digital experiences that matter.
          </p>
          <p className="about-description">
            My journey in technology combines creativity with technical skills, specializing in React.js for web development and Flutter for Android applications. I believe in user-centered design and clean, efficient code that brings ideas to life.
          </p>
          <p className="about-description"><strong>Moving forward, I’m excited to keep learning, growing, and collaborating with others to create digital experiences that truly matter.</strong></p>
          </div>
          <div className="about-image">
          <img src={imgMe} alt="Senuki Perera" className="profile-image" />
          <div className="image-decoration"></div>
          </div>
        </div>
        
        <div className="about-skills">
          <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon design-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            </div>
            <h4>Design</h4>
          </div>
          <div className="skill-tags">
            <span className="skill-tag">UI/UX Design</span>
            <span className="skill-tag">Wireframing</span>
            <span className="skill-tag">Prototyping</span>
            <span className="skill-tag">User Research</span>
            <span className="skill-tag">Visual Design</span>
          </div>
          </div>
          
          <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon dev-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"/>
              <polyline points="8 6 2 12 8 18"/>
            </svg>
            </div>
            <h4>Development</h4>
          </div>
          <div className="tech-logos dev-layout">
            <div className="tech-row">
            <div className="tech-logo html">
              <FaHtml5 />
            </div>
            <div className="tech-logo css">
              <FaCss3Alt />
            </div>
            <div className="tech-logo js">
              <FaJs />
            </div>
            </div>
            <div className="tech-row">
            <div className="tech-logo react">
              <FaReact />
            </div>
            <div className="tech-logo flutter">
              <SiFlutter />
            </div>
            </div>
          </div>
          </div>
          
          <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon tools-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
            </svg>
            </div>
            <h4>Tools</h4>
          </div>
          <div className="tech-logos tools-layout">
            <div className="tech-row">
            <div className="tech-logo figma">
              <SiFigma />
            </div>
            <div className="tech-logo photoshop">
              <SiAdobephotoshop />
            </div>
            <div className="tech-logo github">
              <SiGithub />
            </div>
            </div>
            <div className="tech-row">
            <div className="tech-logo firebase">
              <SiFirebase />
            </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </section>
      
      {/* projects section */}
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="projects-title">
            <span className="title-line"></span>My Projects
          </h2>
          <p className="projects-subtitle">
            A collection of my design and development work showcasing creativity and technical expertise.
          </p>
        </div>
        
        <div className="process-tabs">
          <button 
            className={`process-tab ${activeTab === 'designs' ? 'active' : ''}`} 
            onClick={() => setActiveTab('designs')}
          >
            UI/UX Designs
          </button>
          <button 
            className={`process-tab ${activeTab === 'developments' ? 'active' : ''}`} 
            onClick={() => setActiveTab('developments')}
          >
            Developments
          </button>
        </div>
        
        <div className="projects-timeline">
          <div className="timeline-line"></div>
          
          {activeTab === 'designs' && (
            <div className="timeline-content">
              <div className="timeline-item" data-number="01">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">01</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgTechflex} alt="TechFlex Project" className="project-image" />
                      </div>
                      <div className="project-info">
                        <img src={logoTechflex} alt="TechFlex" className="project-logo" />
                        <p className="project-description">
                          Helping job seekers connect with the right opportunities through a user-friendly, personalized job-matching experience.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: End-to-end mobile app</span>
                      <span className="project-category">Role: UI/UX designer</span>
                      <span className="project-category">Industry: Careers, Recruitment</span>
                    </div>
                    <a href="https://www.behance.net/gallery/232731703/TechFlex-A-Part-Time-ICT-Job-Finder-App" target="_blank" rel="noopener noreferrer" className="project-button">View Case Study</a>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="02">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">02</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgGovimadala} alt="MindCare Project" className="project-image" />
                      </div>
                      <div className="project-info">
                        <img src={logoGovimadala} alt="Govimadala" className="project-logo" />
                        <p className="project-description">
                          Designing a web platform to streamline fertilizer access for paddy farmers in Sri Lanka by improving transparency, tracking, and timely delivery.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Web platform + Group project</span>
                      <span className="project-category">Role: UI/UX Designer (Team Collaboration)</span>
                      <span className="project-category">Industry: Agriculture, Supply Chain</span>
                    </div>
                    <a href="https://www.figma.com/proto/2ktutqFjOQcE6LE36Y6x1X/HelaDesignX?page-id=0%3A1&node-id=11-3652&viewport=277%2C205%2C0.1&t=bCDVmm16E1ayI331-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2%3A12&hide-ui=1" target="_blank" rel="noopener noreferrer" className="project-button">View Case Study</a>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="03">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">03</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgMindcare} alt="Govimadala Project" className="project-image" />
                      </div>
                      <div className="project-info">
                        <img src={logoMindcare} alt="Mindcare" className="project-logo" />
                        <p className="project-description">
                          Designing a safe, supportive space to help users care for their mental well-being with empathy and privacy.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Mobile app + Group Project</span>
                      <span className="project-category">Role: UI/UX Designer (Team Collaboration)</span>
                      <span className="project-category">Industry: Health, Mental Wellness</span>
                    </div>
                    <a href="https://www.behance.net/gallery/212051693/MindCare-A-Mental-Health-Support-Platform" target="_blank" rel="noopener noreferrer" className="project-button">View Case Study</a>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="04">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">04</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgBOC} alt="BOC Smart Banking Project" className="project-image" />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">BOC Smart Banking App</h3>
                        <p className="project-description">
                          Redesigning the banking experience to improve usability, modernize the interface, and deliver a more consistent user journey.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Case Study + UI/UX Design</span>
                      <span className="project-category">Role: UI/UX designer</span>
                      <span className="project-category">Industry: Banking, Fintech</span>
                    </div>
                    <a href="https://www.behance.net/gallery/214326641/BOC-Online-Banking-App-Redesign" target="_blank" rel="noopener noreferrer" className="project-button">View Case Study</a>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="05">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">05</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgNoir} alt="Noir Athena Project" className="project-image" />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">Noir<strong>Athena</strong></h3>
                        <p className="project-description">
                          Creating a focused e-commerce experience for women who love timeless, all-black fashion.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: E-commerce website + Case Study</span>
                      <span className="project-category">Role: UI/UX Designer + Brand Designer</span>
                      <span className="project-category">Industry: Fashion, Retail</span>
                    </div>
                    <a href="https://www.behance.net/gallery/213652159/All-Black-Womens-Wear-Minimalist-E-commerce-Design" target="_blank" rel="noopener noreferrer" className="project-button">View Case Study</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'developments' && (
            <div className="timeline-content development-projects">
              <div className="timeline-item" data-number="01">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">01</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgcoffeeHouse} alt="Coffee House website" className="project-image" />
                      </div>
                      <div className="project-info">
                        <h4>Coffee House</h4>
                        <p className="project-description">
                          A modern, responsive café website featuring an elegant menu display, online ordering system, and interactive customer experience. Built with vanilla JavaScript for smooth animations and dynamic content loading.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Web Development</span>
                      <span className="project-category">Role: Frontend Developer</span>
                      <span className="project-category">Tech: HTML, CSS, JavaScript</span>
                    </div>
                    <div className="project-links">
                      <a href="https://senukiperera.github.io/Coffee-Shop-Website/index.html" className="project-icon-button" title="Visit Website">
                        <FaGlobe />
                      </a>
                      <a href="https://github.com/SenukiPerera/Coffee-Shop-Website" className="project-icon-button" title="View on GitHub">
                        <SiGithub />
                      </a>
                      <a href="https://www.linkedin.com/posts/senukiperera_webdev-ecommerce-coffee-activity-7154893460821426176-2urc?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzOxWkBf3rTyuYkxQLXg93f2OaOb9_nsXA" className="project-icon-button" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="02">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">02</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgmovieweb} alt="K-SERIES" className="project-image" />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">K-SERIES</h3>
                        <p className="project-description">
                          A fully responsive Korean drama and series streaming platform with advanced search filters, categorization, and detailed show information. Features include trailer previews, user ratings, and an intuitive browsing experience.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Web Development</span>
                      <span className="project-category">Role: Frontend Developer</span>
                      <span className="project-category">Tech: HTML, CSS, JavaScript</span>
                    </div>
                    <div className="project-links">
                      <a href="https://senukiperera.github.io/Movies-Website/" className="project-icon-button" title="Visit Website">
                        <FaGlobe />
                      </a>
                      <a href="https://github.com/SenukiPerera/Movies-Website" className="project-icon-button" title="View on GitHub">
                        <SiGithub />
                      </a>
                      <a href="https://www.linkedin.com/posts/senukiperera_webdevelopment-responsivedesign-html-activity-7270091068342181889-Mi2M?utm_source=share&utm_medium=member_desktop&rcm=ACoAADzOxWkBf3rTyuYkxQLXg93f2OaOb9_nsXA" className="project-icon-button" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* <div className="timeline-item" data-number="03">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">03</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgBOC} alt="BOC Banking System" className="pro</a>ject-image" />
                      </div>
                      <div className="project-info">
                        <h3 className="project-title">BOC Banking System</h3>
                        <p className="project-description">
                          Secure banking application with advanced encryption and multi-factor authentication. Built with React Native for cross-platform compatibility and seamless user experience.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Mobile App Development</span>
                      <span className="project-category">Role: Full-Stack Developer</span>
                      <span className="project-category">Tech: React Native, Node.js</span>
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-icon-button" title="Visit Website">
                        <FaGlobe />
                      </a>
                      <a href="#" className="project-icon-button" title="View on GitHub">
                        <SiGithub />
                      </a>
                      <a href="#" className="project-icon-button" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="timeline-item" data-number="04">
                <div className="timeline-circle">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <div className="timeline-card">
                  <div className="card-content">
                    <div className="project-number">04</div>
                    <div className="card-top">
                      <div className="project-image-container">
                        <img src={imgMindcare} alt="MindCare Wellness App" className="project-image" />
                      </div>
                      <div className="project-info">
                        <img src={logoMindcare} alt="MindCare Wellness App" className="project-logo" />
                        <p className="project-description">
                          Mental health tracking application with AI-powered insights. Developed with Flutter, featuring mood analytics, meditation timers, and personalized recommendations.
                        </p>
                      </div>
                    </div>
                    <div className="project-meta">
                      <span className="project-category">Project type: Mobile App Development</span>
                      <span className="project-category">Role: Full-Stack Developer</span>
                      <span className="project-category">Tech: Flutter, AI/ML</span>
                    </div>
                    <div className="project-links">
                      <a href="#" className="project-icon-button" title="Visit Website">
                        <FaGlobe />
                      </a>
                      <a href="#" className="project-icon-button" title="View on GitHub">
                        <SiGithub />
                      </a>
                      <a href="#" className="project-icon-button" title="LinkedIn">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </section>

    {/* Contact Section */}
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2 className="projects-title">
            <span className="title-line"></span>Get in Touch
          </h2>
          <p className="projects-subtitle">Have a project in mind? Let's work together!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new projects and opportunities. Feel free to reach out!</p>
            
            <div className="social-links">
              <a href="https://www.linkedin.com/in/senukiperera/" target="_blank" rel="noopener noreferrer" className="social-button" title="LinkedIn">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/SenukiPerera" target="_blank" rel="noopener noreferrer" className="social-button" title="GitHub">
                <SiGithub />
                <span>GitHub</span>
              </a>
              <a href="https://www.behance.net/senukiperera" target="_blank" rel="noopener noreferrer" className="social-button" title="Behance">
                <SiBehance />
                <span>Behance</span>
              </a>
            </div>

            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <a href="mailto:senukimanthini2001@gmail.com">senukimanthini2001@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={formStatus === 'sending'}>
                {formStatus === 'sending' ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-message error">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* Footer Section */}
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Senuki Perera</h3>
            <p className="footer-tagline">UI/UX Designer & Frontend Developer</p>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Senuki Perera. All rights reserved.</p>
            
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Home;
