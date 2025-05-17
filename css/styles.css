/* Base Styles & Variables */
:root {
    --primary: #1E3A8A;
    --primary-light: #3B82F6;
    --primary-dark: #1E40AF;
    --background: #F9FAFB;
    --text: #111827;
    --text-light: #6B7280;
    --gray: #E5E7EB;
    --white: #FFFFFF;
    --success: #10B981;
    --warning: #F59E0B;
    --danger: #EF4444;
    --border-radius: 8px;
    --box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Noto Sans Ethiopic', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--background);
    color: var(--text);
    line-height: 1.6;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

img {
    max-width: 100%;
    height: auto;
}


.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
}

h1 { font-size: 2.5rem; }
h2 { font-size: 2rem; }
h3 { font-size: 1.75rem; }
h4 { font-size: 1.5rem; }
h5 { font-size: 1.25rem; }
h6 { font-size: 1rem; }

p {
    margin-bottom: 1rem;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.btn-primary {
    background-color: var(--primary);
    color: var(--white);
}

.btn-primary:hover {
    background-color: var(--primary-dark);
}

.btn-outline {
    background-color: transparent;
    border-color: var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background-color: var(--primary);
    color: var(--white);
}

.btn-large {
    padding: 1rem 2rem;
    font-size: 1.1rem;
}

.btn-small {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
}

/* Header Styles */
.header {
    background-color: var(--white);
    box-shadow: var(--box-shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
    padding: 1rem 0;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.logo img {
    height: 40px;
}

.logo h1 {
    margin-bottom: 0;
    color: var(--primary);
    font-size: 1.5rem;
}

.navbar ul {
    display: flex;
    gap: 1.5rem;
}

.navbar a {
    font-weight: 600;
    padding: 0.5rem 0;
    position: relative;
}

.navbar a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
}

.navbar a:hover::after,
.navbar a.active::after {
    width: 100%;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.auth-buttons {
    display: flex;
    gap: 1rem;
}

.language-switcher {
    position: relative;
    cursor: pointer;
}

.current-lang {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
}

.lang-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    padding: 0.5rem 0;
    min-width: 120px;
    display: none;
    z-index: 100;
}

.lang-dropdown a {
    display: block;
    padding: 0.5rem 1rem;
}

.lang-dropdown a:hover {
    background-color: var(--gray);
}

.language-switcher:hover .lang-dropdown {
    display: block;
}

/* Hero Section */
.hero {
    padding: 4rem 0;
    background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
    color: var(--white);
}

.hero .container {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.hero-content {
    flex: 1;
}

.hero-content h2 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.hero-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
}

.hero-cta {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

.hero-image {
    flex: 1;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.hero-image img {
    width: 100%;
    height: auto;
    display: block;
}

/* Quick Search Section */
.quick-search {
    padding: 3rem 0;
    background-color: var(--white);
}

.quick-search h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.quick-search-form {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--background);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

.form-row {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    align-items: flex-end;
}

.form-group {
    flex: 1;
    margin-bottom: 0;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text);
}

.form-group input,
.form-group select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    font-size: 1rem;
}

.form-group input:focus,
.form-group select:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.swap-btn-container {
    margin-bottom: 1.5rem;
}

.swap-btn {
    background: var(--gray);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.swap-btn:hover {
    background: var(--primary-light);
    color: white;
}

/* Live Schedule Section */
.live-schedule {
    padding: 4rem 0;
}

.live-schedule h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.schedule-tabs {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
}

.tab-btn {
    padding: 0.75rem 1.5rem;
    background-color: transparent;
    border: none;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab-btn.active {
    background-color: var(--primary);
    color: var(--white);
}

.tab-btn:not(.active):hover {
    background-color: var(--gray);
}

.schedule-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.schedule-card {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.schedule-card .route {
    font-weight: 600;
    color: var(--primary);
}

.schedule-card .departure {
    font-weight: 600;
}

.schedule-card .price {
    font-weight: 600;
    color: var(--success);
}

.schedule-card .operator {
    color: var(--text-light);
    font-size: 0.9rem;
}

.view-all {
    text-align: center;
    margin-top: 2rem;
}

/* Live Tracking Section */
.live-tracking {
    padding: 4rem 0;
    background-color: var(--background);
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
}

.map-container {
    height: 400px;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
}

.tracking-legend {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 1rem;
}

.legend-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.legend-item .icon {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.legend-item .moving {
    background-color: var(--success);
}

.legend-item .stopped {
    background-color: var(--danger);
}

.legend-item .scheduled {
    background-color: var(--warning);
}

/* Bus Marker Styles */
.bus-marker {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 50%;
}

.bus-marker.moving {
    background-color: var(--success);
}

.bus-marker.stopped {
    background-color: var(--danger);
}

/* Features Section */
.features {
    padding: 4rem 0;
    background-color: var(--white);
}

.features h2 {
    text-align: center;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-card {
    background-color: var(--background);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    transition: transform 0.3s ease;
    text-align: center;
}

.feature-card:hover {
    transform: translateY(-5px);
}

.feature-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
}

.feature-icon.payment {
    background-color: var(--success);
}

.feature-icon.schedule {
    background-color: var(--primary);
}

.feature-icon.driver {
    background-color: var(--warning);
}

.feature-icon.language {
    background-color: var(--danger);
}

.feature-card h3 {
    margin-bottom: 0.75rem;
}

/* Operators Section */
.operators {
    padding: 4rem 0;
    background-color: var(--background);
}

.operators h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.operator-logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    align-items: center;
}

.operator-logos img {
    max-height: 80px;
    width: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
}

.operator-logos img:hover {
    filter: grayscale(0%);
    opacity: 1;
}


/* Testimonials Section */
.testimonials {
    padding: 4rem 0;
    background-color: var(--white);
}

.testimonials h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.testimonial-slider {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
}

.testimonial {
    min-width: 300px;
    max-width: 400px;
    background-color: var(--background);
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    scroll-snap-align: start;
}

.rating {
    color: var(--warning);
    margin-bottom: 1rem;
}

.testimonial p {
    font-style: italic;
    margin-bottom: 1.5rem;
}

.author {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.author span {
    font-weight: 600;
}
/* Help Button Styles */
.help-button {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}

.help-btn {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.help-btn:hover {
  background-color: var(--primary-dark);
  transform: scale(1.1);
}

.help-box {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.help-box.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.help-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.help-header h3 {
  margin: 0;
  color: var(--primary);
}

.close-help {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-light);
  transition: color 0.2s;
}

.close-help:hover {
  color: var(--primary);
}

.help-content ul {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.help-content li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.help-content i {
  color: var(--primary);
  width: 20px;
  text-align: center;
}

.help-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1.5rem;
}

.help-action {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: var(--background);
  border-radius: 8px;
  color: var(--text);
  text-decoration: none;
  transition: all 0.2s ease;
}

.help-action:hover {
  background: var(--primary-light);
  color: white;
}

.help-action i {
  color: inherit;
}

/* Responsive Design */
@media (max-width: 576px) {
  .help-box {
    width: 280px;
    right: -20px;
  }
}
/* Footer Styles */
.footer {
    background-color: var(--primary);
    color: var(--white);
    padding: 4rem 0 0;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-col h3 {
    color: var(--white);
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
}

.footer-col ul li {
    margin-bottom: 0.75rem;
}

.footer-col ul li i {
    margin-right: 0.5rem;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.social-links a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.social-links a:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}

.footer-bottom {
    padding: 1.5rem 0;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsive Styles */
@media (max-width: 992px) {
    .hero .container {
        flex-direction: column;
    }
    
    .hero-content,
    .hero-image {
        flex: none;
        width: 100%;
    }
    
    .hero-content {
        text-align: center;
        margin-bottom: 2rem;
    }
    
    .hero-content p {
        margin-left: auto;
        margin-right: auto;
    }
    
    .sms-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .header .container {
        flex-direction: column;
        gap: 1.5rem;
    }
    
    .navbar ul {
        flex-wrap: wrap;
        justify-content: center;
    }
    
    .header-right {
        width: 100%;
        justify-content: center;
    }
    
    .form-row {
        flex-direction: column;
    }
    
    .swap-btn-container {
        margin-bottom: 0;
        align-self: center;
    }
}

@media (max-width: 576px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    
    .hero-content h2 {
        font-size: 2rem;
    }
    
    .hero-content p {
        font-size: 1rem;
    }
    
    .btn-large {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }
}

/* Beautiful Feedback Section Styles */
/* Enhanced Feedback Section Styles */
.feedback-section {
  padding: 5rem 0;
  background-color: #f8fafc;
  position: relative;
  overflow: hidden;
}

.feedback-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path fill="%231E3A8A" fill-opacity="0.03" d="M0,0 L100,0 L100,100 Q50,80 0,100 Z"></path></svg>');
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: top center;
  z-index: 0;
}

.section-intro {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;
}

.section-intro h2 {
  font-size: 2.5rem;
  color: var(--primary-dark);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.section-intro .subtitle {
  color: var(--text-light);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem auto;
  width: 200px;
}

.divider-line {
  flex: 1;
  height: 1px;
  background-color: rgba(30, 58, 138, 0.2);
}

.divider-icon {
  color: var(--primary);
  margin: 0 1rem;
  font-size: 0.9rem;
}

.feedback-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Feedback Form Styles */
.feedback-form-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feedback-form-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.feedback-form-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, var(--primary), var(--primary-light));
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.form-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-right: 1rem;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.form-header h3 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin: 0;
}

.floating-label {
  position: relative;
  margin-bottom: 1.5rem;
}

.floating-label input,
.floating-label textarea {
  width: 100%;
  padding: 1rem 0.5rem 0.5rem;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  font-size: 1rem;
  background-color: transparent;
  transition: all 0.3s ease;
}

.floating-label textarea {
  min-height: 100px;
  resize: vertical;
}

.floating-label label {
  position: absolute;
  top: 1rem;
  left: 0.5rem;
  color: var(--text-light);
  pointer-events: none;
  transition: all 0.3s ease;
}

.floating-label .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, var(--primary), var(--primary-light));
  transition: width 0.3s ease;
}

.floating-label input:focus,
.floating-label textarea:focus {
  outline: none;
}

.floating-label input:focus ~ label,
.floating-label textarea:focus ~ label,
.floating-label input:valid ~ label,
.floating-label textarea:valid ~ label {
  top: 0;
  font-size: 0.8rem;
  color: var(--primary);
}

.floating-label input:focus ~ .underline,
.floating-label textarea:focus ~ .underline {
  width: 100%;
}

.rating-group {
  margin: 2rem 0;
}

.rating-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text);
  font-weight: 500;
}

.star-rating {
  display: flex;
  direction: rtl;
}

.star-rating input {
  display: none;
}

.star-rating label {
  color: #e0e0e0;
  font-size: 1.8rem;
  padding: 0 0.2rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.star-rating label:hover,
.star-rating label:hover ~ label,
.star-rating input:checked ~ label {
  color: #ffc107;
  transform: scale(1.1);
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
}

.submit-btn i {
  margin-left: 0.5rem;
  font-size: 0.9rem;
}

/* Testimonials Styles */
.testimonials-container {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonials-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.testimonials-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, var(--success), #34d399);
}

.testimonials-header {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  position: relative;
}

.header-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--success), #34d399);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.testimonials-header h3 {
  font-size: 1.5rem;
  color: var(--primary-dark);
  margin: 0 0 0.5rem;
}

.average-rating {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.average-rating .stars {
  color: #ffc107;
  margin-right: 0.5rem;
}

.average-rating span {
  color: var(--text-light);
  font-size: 0.9rem;
}

.testimonials-slider {
  overflow-y: auto;
  max-height: 500px;
  padding-right: 0.5rem;
}

.testimonials-slider::-webkit-scrollbar {
  width: 6px;
}

.testimonials-slider::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.testimonials-slider::-webkit-scrollbar-thumb {
  background: var(--primary-light);
  border-radius: 10px;
}

.testimonial-card {
  background: #f9fafb;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.user-info {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  border: 3px solid white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-details h4 {
  margin: 0 0 0.2rem;
  font-size: 1rem;
  color: var(--text);
}

.rating {
  color: #ffc107;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

.testimonial-text {
  font-style: italic;
  color: var(--text);
  line-height: 1.6;
  margin-bottom: 1rem;
  position: relative;
}

.testimonial-text::before {
  content: "\201C";
  font-size: 3rem;
  color: rgba(30, 58, 138, 0.1);
  position: absolute;
  top: -1.5rem;
  left: -1rem;
  font-family: Georgia, serif;
  line-height: 1;
}

.testimonial-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: var(--text-light);
}

.view-all-link {
  text-align: center;
  margin-top: 1.5rem;
}

.view-all-link a {
  color: var(--primary);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
}

.view-all-link a:hover {
  color: var(--primary-dark);
}

.view-all-link i {
  margin-left: 0.3rem;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.view-all-link a:hover i {
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 992px) {
  .feedback-container {
    grid-template-columns: 1fr;
  }
  
  .section-intro h2 {
    font-size: 2rem;
  }
}

@media (max-width: 576px) {
  .feedback-section {
    padding: 3rem 0;
  }
  
  .feedback-form-container,
  .testimonials-container {
    padding: 1.5rem;
  }
  
  .form-icon,
  .header-icon {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }
  
  .form-header h3,
  .testimonials-header h3 {
    font-size: 1.3rem;
  }
}

.form-card {
  border-top: 4px solid var(--primary);
}

.testimonials-card {
  border-top: 4px solid var(--success);
}

.feedback-form .form-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.feedback-form .form-group {
  position: relative;
  margin-bottom: 2rem;
  flex: 1;
}

.feedback-form label {
  display: block;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: var(--text);
  transition: all 0.3s ease;
}

.feedback-form input,
.feedback-form textarea {
  width: 100%;
  padding: 0.75rem 0;
  border: none;
  border-bottom: 1px solid var(--gray);
  font-size: 1rem;
  background: transparent;
  transition: all 0.3s ease;
}

.feedback-form textarea {
  resize: vertical;
  min-height: 100px;
}

.input-underline,
.textarea-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--primary);
  transition: width 0.3s ease;
}

.feedback-form input:focus ~ .input-underline,
.feedback-form textarea:focus ~ .textarea-underline {
  width: 100%;
}

.feedback-form input:focus,
.feedback-form textarea:focus {
  outline: none;
  border-color: transparent;
}

.rating-group {
  margin: 2rem 0;
}

.rating-stars {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  position: relative;
}

.rating-stars input {
  display: none;
}

.rating-stars label {
  font-size: 2.2rem;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-right: 0.5rem;
}

.rating-stars input:checked ~ label,
.rating-stars label:hover,
.rating-stars label:hover ~ label {
  color: #ffc107;
  text-shadow: 0 0 5px rgba(255, 193, 7, 0.3);
}

.rating-text {
  position: absolute;
  right: 0;
  bottom: -25px;
  font-size: 0.9rem;
  color: var(--text-light);
  font-style: italic;
}

.btn-submit {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  margin-top: 1rem;
}

.testimonials-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.average-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(16, 185, 129, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
}

.average-rating .stars {
  font-weight: 700;
  color: var(--success);
}

.feedback-list {
  display: grid;
  gap: 1.5rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.feedback-list::-webkit-scrollbar {
  width: 6px;
}

.feedback-list::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.feedback-list::-webkit-scrollbar-thumb {
  background: var(--primary-light);
  border-radius: 10px;
}

.feedback-item {
  padding: 1.5rem;
  background: rgba(249, 250, 251, 0.7);
  border-radius: 12px;
  border-left: 3px solid var(--primary-light);
}

.feedback-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.feedback-author {
  font-weight: 600;
  color: var(--primary);
}

.feedback-date {
  color: var(--text-light);
  font-size: 0.85rem;
}

.feedback-rating {
  color: #ffc107;
  letter-spacing: 2px;
  margin: 0.5rem 0;
}

.feedback-comment {
  line-height: 1.6;
  color: var(--text);
}

/* Responsive Design */
@media (max-width: 992px) {
  .feedback-container {
    grid-template-columns: 1fr;
  }
  
  .feedback-card {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .feedback-form .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
}

/* Beautiful Booking Form Styles */
.booking-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.booking-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  max-width: 900px;
  margin: 0 auto;
}

.booking-header {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
  color: white;
}

.booking-header h2 {
  margin: 0;
  font-size: 1.8rem;
}

.booking-header p {
  opacity: 0.9;
  margin: 0.5rem 0 0;
}

.form-section {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f0f0f0;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.section-header i {
  font-size: 1.2rem;
  color: var(--primary);
}

.section-header h3 {
  margin: 0;
  font-size: 1.2rem;
  color: var(--text);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1.5rem;
  align-items: flex-end;
}

.animated-input {
  position: relative;
}

.animated-input label {
  position: absolute;
  top: 12px;
  left: 15px;
  color: var(--text-light);
  pointer-events: none;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.animated-input select,
.animated-input input {
  width: 100%;
  padding: 1.5rem 1rem 1rem 2.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #f9f9f9;
}

.animated-input select:focus,
.animated-input input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  background-color: white;
}

.animated-input select:focus + label,
.animated-input input:focus + label,
.animated-input select:valid + label,
.animated-input input:valid + label {
  top: 6px;
  font-size: 0.8rem;
  color: var(--primary);
}

.swap-btn {
  background: var(--primary-light);
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
}

.swap-btn:hover {
  background: var(--primary);
  transform: rotate(180deg);
}

.vehicle-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.vehicle-card {
  position: relative;
}

.vehicle-card input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.vehicle-card label {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border: 2px solid #f0f0f0;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 100%;
}

.vehicle-card input[type="radio"]:checked + label {
  border-color: var(--primary);
  background-color: rgba(59, 130, 246, 0.05);
}

.vehicle-card input[type="radio"]:focus + label {
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
}

.vehicle-icon {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.vehicle-info h4 {
  margin: 0 0 0.5rem;
  color: var(--text);
}

.vehicle-info p {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  color: var(--text-light);
}

.vehicle-price {
  font-weight: 600;
  color: var(--success);
  margin-top: 0.5rem;
}

.btn-booking {
  width: 100%;
  padding: 1.25rem;
  font-size: 1.1rem;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  
  .swap-btn {
    transform: rotate(90deg);
    margin: 0 auto 1rem;
  }
  
  .booking-header {
    padding: 1.5rem;
  }
  
  .form-section {
    padding: 1.5rem;
  }
}

@media (max-width: 576px) {
  .vehicle-options {
    grid-template-columns: 1fr;
  }
  
  .booking-section {
    padding: 2rem 0;
  }
}
