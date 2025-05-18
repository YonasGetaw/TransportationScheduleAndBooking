/**
 * WinnerGo Transportation Booking - Main JavaScript File
 * Contains all functionality for the website including map initialization
 */
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initQuickSearchForm();
    initScheduleTabs();
    initTestimonialSlider();
    initSupportButton();
    initMobileMenu();
    initFormValidations();
    initMap();
    initDatePickers();
    initBookingButtons();
    initFeedbackSystem();
    initHelpButton();
});

/**
 * Initialize the map with sample bus locations
 */
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) return;

    const map = L.map('map').setView([9.1450, 40.4897], 6);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // Add sample bus markers
    const cities = {
        'Addis Ababa': [9.0054, 38.7636],
        'Bahir Dar': [11.6000, 37.3833],
        'Hawassa': [7.0500, 38.4667],
        'Gondar': [12.6000, 37.4667],
        'Mekele': [13.4969, 39.4769],
        'Dire Dawa': [9.6009, 41.8501]
    };
    
    // Add moving buses (sample data)
    Object.entries(cities).forEach(([city, coords]) => {
        const randomOffset = () => (Math.random() - 0.5) * 0.5;
        L.marker([coords[0] + randomOffset(), coords[1] + randomOffset()], {
            icon: L.divIcon({
                className: 'bus-marker moving',
                html: '<i class="fas fa-bus"></i>',
                iconSize: [30, 30]
            })
        }).addTo(map).bindPopup(`<b>${city} Route</b><br>WinnerGo Bus #${Math.floor(1000 + Math.random() * 9000)}`);
    });
}

/**
 * Initialize booking buttons on schedule cards
 */
function initBookingButtons() {
    document.querySelectorAll('.schedule-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.schedule-card');
            const route = card.querySelector('.route').textContent;
            const departure = card.querySelector('.departure').textContent;
            const price = card.querySelector('.price').textContent;
            
            showToast(`Booking ${route} at ${departure} for ${price}`);
            
            // In a real implementation, this would redirect to booking page with parameters
            setTimeout(() => {
                window.location.href = `booking.html?route=${encodeURIComponent(route)}&time=${encodeURIComponent(departure)}&price=${encodeURIComponent(price)}`;
            }, 1000);
        });
    });
}



/**
 * Quick Search Form Functionality
 */
function initQuickSearchForm() {
    const quickSearchForm = document.getElementById('quickSearchForm');
    if (!quickSearchForm) return;

    const fromSelect = quickSearchForm.querySelector('#from');
    const toSelect = quickSearchForm.querySelector('#to');
    const dateInput = quickSearchForm.querySelector('#date');
    const swapBtn = quickSearchForm.querySelector('.swap-btn');

    // Swap 'from' and 'to' locations
    if (swapBtn) {
        swapBtn.addEventListener('click', function() {
            const tempValue = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = tempValue;
        });
    }

    // Form submission
    quickSearchForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form
        if (!fromSelect.value || !toSelect.value || !dateInput.value) {
            showToast('Please fill all fields', 'error');
            return;
        }

        if (fromSelect.value === toSelect.value) {
            showToast('Departure and destination cannot be the same', 'error');
            return;
        }

        // Get form values
        const fromCity = fromSelect.options[fromSelect.selectedIndex].text;
        const toCity = toSelect.options[toSelect.selectedIndex].text;
        const date = new Date(dateInput.value).toLocaleDateString();

        console.log('Searching routes:', { fromCity, toCity, date });
        showToast(`Searching routes from ${fromCity} to ${toCity} on ${date}`);

        // Simulate search delay
        setTimeout(() => {
            window.location.href = `booking.html?from=${fromSelect.value}&to=${toSelect.value}&date=${dateInput.value}`;
        }, 1000);
    });
}

/**
 * Schedule Tabs Functionality
 */
function initScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Show corresponding tab pane
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Testimonial Slider Functionality
 */
function initTestimonialSlider() {
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (!testimonialSlider) return;

    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID;
    let currentIndex = 0;

    testimonialSlider.addEventListener('touchstart', touchStart);
    testimonialSlider.addEventListener('touchend', touchEnd);
    testimonialSlider.addEventListener('touchmove', touchMove);
    testimonialSlider.addEventListener('mousedown', touchStart);
    testimonialSlider.addEventListener('mouseup', touchEnd);
    testimonialSlider.addEventListener('mouseleave', touchEnd);
    testimonialSlider.addEventListener('mousemove', touchMove);

    function touchStart(e) {
        if (e.type === 'touchstart') {
            startPos = e.touches[0].clientX;
        } else {
            startPos = e.clientX;
            e.preventDefault();
        }
        
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        testimonialSlider.style.cursor = 'grabbing';
    }

    function touchEnd() {
        isDragging = false;
        cancelAnimationFrame(animationID);
        
        const movedBy = currentTranslate - prevTranslate;
        
        if (movedBy < -100 && currentIndex < testimonialSlider.children.length - 1) {
            currentIndex += 1;
        }
        
        if (movedBy > 100 && currentIndex > 0) {
            currentIndex -= 1;
        }
        
        setPositionByIndex();
        testimonialSlider.style.cursor = 'grab';
    }

    function touchMove(e) {
        if (isDragging) {
            const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            currentTranslate = prevTranslate + currentPosition - startPos;
        }
    }

    function animation() {
        setSliderPosition();
        if (isDragging) requestAnimationFrame(animation);
    }

    function setSliderPosition() {
        testimonialSlider.style.transform = `translateX(${currentTranslate}px)`;
    }

    function setPositionByIndex() {
        const testimonialWidth = testimonialSlider.children[0].offsetWidth + 32;
        currentTranslate = currentIndex * -testimonialWidth;
        prevTranslate = currentTranslate;
        setSliderPosition();
    }
}

/**
 * Support Button Functionality
 */
function initSupportButton() {
    const supportButton = document.querySelector('.support-button');
    if (!supportButton) return;

    supportButton.addEventListener('click', function() {
        showSupportModal();
    });

    function showSupportModal() {
        const modalHTML = `
            <div class="support-modal">
                <div class="modal-content">
                    <button class="close-modal">&times;</button>
                    <h3>Need Help?</h3>
                    <p>Our support team is available 24/7 to assist you.</p>
                    <div class="support-options">
                        <a href="tel:+251911234567" class="btn btn-outline">
                            <i class="fas fa-phone"></i> Call Us
                        </a>
                        <a href="mailto:support@winnergo.com" class="btn btn-outline">
                            <i class="fas fa-envelope"></i> Email Us
                        </a>
                        <button class="btn btn-primary start-chat">
                            <i class="fas fa-comments"></i> Live Chat
                        </button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
        const modal = document.querySelector('.support-modal');

        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.remove();
        });

        modal.querySelector('.start-chat').addEventListener('click', function() {
            modal.querySelector('p').textContent = 'Connecting you to a support agent...';
            modal.querySelector('.support-options').innerHTML = `
                <div class="chat-connecting">
                    <div class="spinner"></div>
                    <p>Please wait while we connect you</p>
                </div>
            `;
            
            setTimeout(() => {
                modal.querySelector('.support-options').innerHTML = `
                    <div class="chat-connected">
                        <p>You're now connected with support agent</p>
                        <div class="chat-messages">
                            <div class="message agent">
                                <p>Hello! How can I help you today?</p>
                            </div>
                        </div>
                        <div class="chat-input">
                            <input type="text" placeholder="Type your message...">
                            <button class="btn btn-small"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                `;
            }, 2000);
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }
}

/**
 * Mobile Menu Functionality
 */
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    // menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.setAttribute('aria-label', 'Toggle menu');

    const header = document.querySelector('.header .container');
    if (header) {
        header.prepend(menuToggle);
    }

    menuToggle.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('active');
            menuToggle.innerHTML = navbar.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        }
    });

    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            const navbar = document.querySelector('.navbar');
            if (navbar && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

/**
 * Form Validations
 */
function initFormValidations() {
    document.querySelectorAll('input[required], select[required]').forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });
    });

    function validateInput(input) {
        if (!input.value) {
            input.classList.add('invalid');
            input.classList.remove('valid');
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    }
}

/**
 * Initialize Date Pickers
 */
function initDatePickers() {
    document.querySelectorAll('input[type="date"]').forEach(dateInput => {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
        
        if (!dateInput.value) {
            dateInput.value = today;
        }
    });
}

/**
 * Show Toast Notification
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * Track User Analytics Events
 */
function trackEvent(eventName, eventData = {}) {
    console.log(`Tracking event: ${eventName}`, eventData);
}

// Enhanced Feedback System JavaScript
function initFeedbackSystem() {
    const feedbackForm = document.getElementById('feedbackForm');
    const feedbackList = document.getElementById('feedbackList');
    const ratingText = document.getElementById('ratingText');
    const averageRating = document.getElementById('averageRating');
    
    if (!feedbackForm) return;

    // Rating labels
    const ratingLabels = {
        1: "Poor",
        2: "Below Average",
        3: "Average",
        4: "Good",
        5: "Excellent"
    };

    // Load existing feedback
    loadFeedback();

    // Star rating interaction
    document.querySelectorAll('.rating-stars input').forEach(star => {
        star.addEventListener('change', function() {
            const rating = parseInt(this.value);
            ratingText.textContent = ratingLabels[rating] || "Tap to rate";
        });
    });

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('feedbackName').value.trim();
        const email = document.getElementById('feedbackEmail').value.trim();
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const comment = document.getElementById('feedbackComment').value.trim();

        if (!name || !rating || !comment) {
            showToast('Please complete all required fields', 'error');
            return;
        }

        const feedback = {
            name,
            email: email || "Anonymous",
            rating: parseInt(rating),
            comment,
            date: new Date().toISOString(),
            avatar: `https://i.pravatar.cc/60?u=${email || name}`
        };

        saveFeedback(feedback);
        feedbackForm.reset();
        ratingText.textContent = "Tap to rate";
        showToast('Thank you for sharing your experience!');
    });

    function saveFeedback(feedback) {
        const existingFeedback = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
        existingFeedback.unshift(feedback);
        localStorage.setItem('winnerGoFeedback', JSON.stringify(existingFeedback));
        loadFeedback();
    }

    function loadFeedback() {
        const feedbackData = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
        
        // Calculate average rating
        if (feedbackData.length > 0) {
            const avg = (feedbackData.reduce((sum, item) => sum + item.rating, 0) / feedbackData.length).toFixed(1);
            averageRating.innerHTML = `${avg} <span class="stars">${'★'.repeat(Math.round(avg))}</span>`;
        }
        
        feedbackList.innerHTML = feedbackData.slice(0, 5).map(feedback => `
            <div class="feedback-item">
                <div class="feedback-header">
                    <div class="user-info">
                        <img src="${feedback.avatar}" alt="${feedback.name}" class="user-avatar">
                        <span class="feedback-author">${feedback.name}</span>
                    </div>
                    <span class="feedback-date">${formatDate(feedback.date)}</span>
                </div>
                <div class="feedback-rating">
                    ${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}
                </div>
                <p class="feedback-comment">${feedback.comment}</p>
            </div>
        `).join('');
    }

    function formatDate(isoString) {
        return new Date(isoString).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }
}

function initHelpButton() {
  const helpButton = document.querySelector('.help-btn');
  const helpBox = document.querySelector('.help-box');
  const closeButton = document.querySelector('.close-help');

  if (!helpButton || !helpBox) return;

  // Toggle help box
  helpButton.addEventListener('click', function(e) {
    e.stopPropagation();
    helpBox.classList.toggle('active');
  });

  // Close help box
  closeButton.addEventListener('click', function() {
    helpBox.classList.remove('active');
  });

  // Close when clicking outside
  document.addEventListener('click', function(e) {
    if (!helpBox.contains(e.target) && e.target !== helpButton) {
      helpBox.classList.remove('active');
    }
  });

  // Close on Esc key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      helpBox.classList.remove('active');
    }
  });
}

// Enhanced Booking Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Initialize form
  const bookingForm = document.getElementById('tripForm');
  const swapBtn = document.querySelector('.swap-btn');
  
  if (!bookingForm) return;
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').setAttribute('min', today);
  
  // Location swap functionality
  swapBtn.addEventListener('click', function() {
    const fromSelect = document.getElementById('from');
    const toSelect = document.getElementById('to');
    const tempValue = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = tempValue;
    
    // Trigger animation
    this.classList.add('animate-swap');
    setTimeout(() => {
      this.classList.remove('animate-swap');
    }, 300);
  });
  
  // Form submission
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;
    
    // Validate form
    if (!from || !to || !date || !vehicleType) {
      showToast('Please complete all required fields', 'error');
      return;
    }
    
    if (from === to) {
      showToast('Departure and destination cannot be the same', 'error');
      return;
    }
    
    // Process booking
    processBooking(from, to, date, vehicleType, passengers);
  });
  
  function processBooking(from, to, date, vehicleType, passengers) {
    // Get vehicle details
    const vehicleName = document.querySelector(`input[name="vehicleType"][value="${vehicleType}"] + label h4`).textContent;
    const vehiclePrice = document.querySelector(`input[name="vehicleType"][value="${vehicleType}"] + label .vehicle-price`).textContent;
    
    // Show confirmation
    showToast(`
      Searching ${vehicleName} from ${getCityName(from)} 
      to ${getCityName(to)} on ${new Date(date).toLocaleDateString()} 
      for ${passengers} passenger(s) • ${vehiclePrice}
    `);
    
    // In real app, redirect to booking page:
    // window.location.href = `booking.html?from=${from}&to=${to}&date=${date}&vehicle=${vehicleType}&passengers=${passengers}`;
  }
  
  function getCityName(cityValue) {
    const cities = {
      'addis-ababa': 'Addis Ababa',
      'bahir-dar': 'Bahir Dar',
      'hawassa': 'Hawassa'
    };
    return cities[cityValue] || cityValue;
  }
});
