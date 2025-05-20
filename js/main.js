/**
 * WinnerGo Transportation Booking - Main JavaScript File
 * Improved version with error fixes and optimizations
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
    initLanguageSwitcher();
});

/**
 * Initialize the language switcher functionality with optimizations
 */
function initLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangSpan = document.querySelector('.current-lang');
    const langLinks = document.querySelectorAll('.lang-dropdown a');

    // Translations moved to a separate object for better maintainability
    const translations = {
        en: {
            home: 'Home',
            bookNow: 'Book Now',
            schedules: 'Schedules',
            trackRide: 'Track Ride',
            aboutUs: 'About Us',
            currentLang: 'English',
            heroTitle: 'Your Winning Choice for Ethiopian Transport',
            heroSubtitle: 'Book buses, minibuses, and taxis across Ethiopia with local payment options including Telebirr, Amole, and CBE Birr.',
            bookNowBtn: 'Book Now',
            viewSchedulesBtn: 'View Schedules',
            bookingSectionTitle: 'Plan Your Perfect Journey',
            bookingSectionSubtitle: 'Select your route, vehicle, and travel details',
            departureCity: 'Departure City',
            destinationCity: 'Destination City',
            travelDate: 'Travel Date',
            passengers: 'Passengers',
            chooseVehicle: 'Choose Your Vehicle',
            standardBus: 'Standard Bus',
            standardBusDetails: 'Comfortable seating • AC • WiFi',
            luxuryCoach: 'Luxury Coach',
            luxuryCoachDetails: 'Spacious seats • Entertainment • Snacks',
            executiveMinivan: 'Executive Minivan',
            executiveMinivanDetails: '6-8 passengers • Quick transfers',
            checkAvailabilityBtn: 'Check Availability & Prices',
            popularRoutes: 'Popular Routes & Schedules',
            today: 'Today',
            tomorrow: 'Tomorrow',
            weekend: 'Weekend',
            viewAllSchedules: 'View All Schedules',
            realTimeTracking: 'Real-Time Vehicle Tracking',
            trackMyRideBtn: 'Track My Ride',
            moving: 'Moving',
            stopped: 'Stopped',
            scheduled: 'Scheduled',
            whyChooseUs: 'Why Choose WinnerGo?',
            localPaymentOptions: 'Local Payment Options',
            localPaymentDetails: 'Pay with Telebirr, Amole, CBE Birr, or cash at our partner locations.',
            realTimeSchedules: 'Real-Time Schedules',
            realTimeSchedulesDetails: 'Get live updates on departure times and delays.',
            verifiedDrivers: 'Verified Drivers',
            verifiedDriversDetails: 'All our drivers are licensed and background-checked.',
            multiLanguageSupport: 'Multi-Language Support',
            multiLanguageSupportDetails: 'Use our service in English, Amharic',
            shareExperience: 'Share Your Journey Experience',
            feedbackSubtitle: 'Your feedback helps us improve and serve you better',
            yourName: 'Your Name',
            emailOptional: 'Email (Optional)',
            yourRating: 'Your Rating',
            yourExperience: 'Your Experience',
            submitFeedback: 'Submit Feedback',
            travelerExperiences: 'Traveler Experiences',
            viewAllTestimonials: 'View all testimonials',
            needHelp: 'Need Help?',
            helpSubtitle: 'Our support team is here to assist you with:',
            bookingIssues: 'Booking issues',
            routeInformation: 'Route information',
            paymentQuestions: 'Payment questions',
            accountHelp: 'Account help',
            callSupport: 'Call Support',
            emailUs: 'Email Us',
            winnerGoFooter: 'WinnerGo',
            footerDescription: 'Your winning choice for reliable transportation across Ethiopia.',
            quickLinks: 'Quick Links',
            company: 'Company',
            privacyPolicy: 'Privacy Policy',
            becomePartner: 'Become a Partner',
            careers: 'Careers',
            contactUs: 'Contact Us',
            address: 'Bole Road, Addis Ababa',
            copyright: '&copy; 2025 WinnerGo. All rights reserved.',
            login: 'Login',
            departurePlaceholder: 'Enter departure city',
            destinationPlaceholder: 'Enter destination city',
            selectPassengers: 'Select passengers',
            vehiclePriceStandard: 'Starting from ETB 150',
            vehiclePriceLuxury: 'Starting from ETB 250',
            vehiclePriceMinivan: 'Starting from ETB 300',
            feedbackNamePlaceholder: 'Your Name',
            feedbackEmailPlaceholder: 'Your Email (Optional)',
            feedbackCommentPlaceholder: 'Share your experience...'
        },
        am: {
            home: 'ቤት',
            bookNow: 'አሁን ያዝ',
            schedules: 'መርሃግብሮች',
            trackRide: 'ጉዞን ተከታተል',
            aboutUs: 'ስለ እኛ',
            currentLang: 'አማርኛ',
            heroTitle: 'በኢትዮጵያ የትራንስፖርት አገልግሎት የእርስዎ ምርጥ ምርጫ',
            heroSubtitle: 'በተሌብር፣ በአሞሌ እና በCBE ቢርን ጨምሮ በአካባቢ የክፍያ አማራጮች በአውቶቡሶች፣ በሚኒባሶች እና ታክሲዎች በኢትዮጵያ ይጓዙ።',
            bookNowBtn: 'አሁን ያዝ',
            viewSchedulesBtn: 'መርሃግብሮችን ይመልከቱ',
            bookingSectionTitle: 'ፍጹም ጉዞዎን ያቅዱ',
            bookingSectionSubtitle: 'መንገድዎን፣ ተሽከርካሪዎን እና የጉዞ ዝርዝሮችን ይምረጡ',
            departureCity: 'የመነሻ ከተማ',
            destinationCity: 'የመድረሻ ከተማ',
            travelDate: 'የጉዞ ቀን',
            passengers: 'ተሳፋሪዎች',
            chooseVehicle: 'ተሽከርካሪዎን ይምረጡ',
            standardBus: 'መደበኛ አውቶቡስ',
            standardBusDetails: 'ምቹ መቀመጫ • ኤሲ • ዋይፋይ',
            luxuryCoach: 'የቅንጦት አውቶቡስ',
            luxuryCoachDetails: 'ሰፊ መቀመጫዎች • መዝናኛ • መክሰስ',
            executiveMinivan: 'ልዩ ሚኒቫን',
            executiveMinivanDetails: '6-8 ተሳፋሪዎች • ፈጣን ዝውውሮች',
            checkAvailabilityBtn: 'ተገኝነት እና �ጋዎችን ያረጋግጡ',
            popularRoutes: 'ታዋቂ መንገዶች እና መርሃግብሮች',
            today: 'ዛሬ',
            tomorrow: 'ነገ',
            weekend: 'ሳምንት መጨረሻ',
            viewAllSchedules: 'ሁሉንም መርሃግብሮች ይመልከቱ',
            realTimeTracking: 'የተሽከርካሪዎች የቀጥታ ክትትል',
            trackMyRideBtn: 'ጉዞዬን ተከታተል',
            moving: 'በመንቀሳቀስ ላይ',
            stopped: 'ቆሟል',
            scheduled: 'የተያዘ',
            whyChooseUs: 'ለምን WinnerGoን ይመርጣሉ?',
            localPaymentOptions: 'የአካባቢ ክፍያ አማራጮች',
            localPaymentDetails: 'በተሌብር፣ በአሞሌ፣ በCBE ቢር ወይም በአጋር ቦታዎቻችን በጥሬ ገንዘብ ይክፈሉ።',
            realTimeSchedules: 'የቀጥታ መርሃግብሮች',
            realTimeSchedulesDetails: 'በመነሻ ሰዓቶች እና መዘግየቶች ላይ የቀጥታ ዝመናዎችን ያግኙ።',
            verifiedDrivers: 'የተረጋገጡ አሽከርካሪዎች',
            verifiedDriversDetails: 'ሁሉም አሽከርካሪዎቻችን ፈቃድ ያላቸው እና የጀርባ ታሪካቸው የተረጋገጠ ነው።',
            multiLanguageSupport: 'ባለብዙ ቋንቋ ድጋፍ',
            multiLanguageSupportDetails: 'አገልግሎታችንን በእንግሊዝኛ እና በአማርኛ ይጠቀሙ',
            shareExperience: 'የጉዞዎን ተሞክሮ ያካፍሉ',
            feedbackSubtitle: 'የእርስዎ ግብረመልስ እንድንሻሻል እና በተሻለ እንድናገለግል ይረዳናል።',
            yourName: 'ስምዎ',
            emailOptional: 'ኢሜል (አማራጭ)',
            yourRating: 'የእርስዎ ደረጃ',
            yourExperience: 'የእርስዎ ተሞክሮ',
            submitFeedback: 'ግብረመልስ ያስገቡ',
            travelerExperiences: 'የተጓዦች ተሞክሮዎች',
            viewAllTestimonials: 'ሁሉንም ምስክርነቶች ይመልከቱ',
            needHelp: 'እርዳታ ይፈልጋሉ?',
            helpSubtitle: 'የድጋፍ ቡድናችን እርስዎን ለመርዳት እዚህ አለ:',
            bookingIssues: 'የቦታ ማስያዣ ችግሮች',
            routeInformation: 'የመንገድ መረጃ',
            paymentQuestions: 'የክፍያ ጥያቄዎች',
            accountHelp: 'የመለያ እገዛ',
            callSupport: 'የድጋፍ ስልክ ይደውሉ',
            emailUs: 'ኢሜይል ይላኩልን',
            winnerGoFooter: 'WinnerGo',
            footerDescription: 'በኢትዮጵያ ውስጥ አስተማማኝ የትራንስፖርት አገልግሎት የእርስዎ ምርጥ ምርጫ።',
            quickLinks: 'ፈጣን አገናኞች',
            company: 'ኩባንያ',
            privacyPolicy: 'የግላዊነት መመሪያ',
            becomePartner: 'አጋር ይሁኑ',
            careers: 'ስራዎች',
            contactUs: 'ያግኙን',
            address: 'ቦሌ መንገድ, አዲስ አበባ',
            copyright: '&copy; 2025 WinnerGo. መብቱ በህግ የተጠበቀ ነው።',
            login: 'ግባ',
            departurePlaceholder: 'የመነሻ ከተማ ያስገቡ',
            destinationPlaceholder: 'የመድረሻ ከተማ ያስገቡ',
            selectPassengers: 'ተሳፋሪዎችን ይምረጡ',
            vehiclePriceStandard: 'ከETB 150 ጀምሮ',
            vehiclePriceLuxury: 'ከETB 250 ጀምሮ',
            vehiclePriceMinivan: 'ከETB 300 ጀምሮ',
            feedbackNamePlaceholder: 'ስምዎ',
            feedbackEmailPlaceholder: 'ኢሜልዎ (አማራጭ)',
            feedbackCommentPlaceholder: 'የእርስዎን ተሞክሮ ያካፍሉ...'
        }
    };

    let currentLanguage = localStorage.getItem('winnerGoLang') || 'en';
    
    // Initialize with current language
    updateText(currentLanguage);
    if (currentLangSpan) {
        currentLangSpan.textContent = translations[currentLanguage]?.currentLang || 'English';
    }

    // Language switcher toggle
    if (langSwitcher && langDropdown) {
        langSwitcher.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            if (!langSwitcher.contains(event.target)) {
                langDropdown.classList.remove('open');
            }
        });
    }

    // Language selection
    langLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (translations[lang]) {
                currentLanguage = lang;
                localStorage.setItem('winnerGoLang', lang);
                updateText(lang);
                if (currentLangSpan) {
                    currentLangSpan.textContent = translations[lang].currentLang;
                }
                if (langDropdown) {
                    langDropdown.classList.remove('open');
                }
            }
        });
    });

    /**
     * Update all text elements with translations
     * Optimized to reduce DOM queries
     */
    function updateText(lang) {
        const langData = translations[lang] || translations['en'];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(item => {
            const key = item.getAttribute('data-translate');
            const translation = langData[key];
            if (translation) {
                item.textContent = translation;
            }
        });

        // Update all placeholders with data-placeholder-translate
        document.querySelectorAll('[data-placeholder-translate]').forEach(item => {
            const key = item.getAttribute('data-placeholder-translate');
            const translation = langData[key];
            if (translation) {
                item.placeholder = translation;
            }
        });

        // Update buttons
        updateButtonText('.btn-primary.btn-large', langData.bookNowBtn);
        updateButtonText('.btn-outline.btn-large', langData.viewSchedulesBtn);
        updateButtonText('.btn-primary.btn-booking', langData.checkAvailabilityBtn);
        updateButtonText('#feedbackForm button[type="submit"]', langData.submitFeedback);
        updateButtonText('.live-tracking .section-header a', langData.trackMyRideBtn);
        updateButtonText('.help-actions a[href^="tel:"]', langData.callSupport);
        updateButtonText('.help-actions a[href^="mailto:"]', langData.emailUs);

        // Update section headers
        updateSectionText('.booking-header h2', langData.bookingSectionTitle);
        updateSectionText('.booking-header p', langData.bookingSectionSubtitle);
        updateSectionText('.live-schedule h2', langData.popularRoutes);
        updateSectionText('.live-tracking .section-header h2', langData.realTimeTracking);
        updateSectionText('.features h2', langData.whyChooseUs);
        updateSectionText('.feedback-section h2', langData.shareExperience);
        updateSectionText('.feedback-section p', langData.feedbackSubtitle);
        updateSectionText('#feedbackListSection h2', langData.travelerExperiences);
        updateSectionText('.help-box h3', langData.needHelp);
        updateSectionText('.help-box p', langData.helpSubtitle);
        updateSectionText('.footer-brand', langData.winnerGoFooter);
        updateSectionText('.footer-description', langData.footerDescription);
        updateSectionText('.footer-links h3:nth-child(1)', langData.quickLinks);
        updateSectionText('.footer-links h3:nth-child(2)', langData.company);
        
        // Update form labels
        updateLabelText('label[for="from"]', langData.departureCity);
        updateLabelText('label[for="to"]', langData.destinationCity);
        updateLabelText('label[for="date"]', langData.travelDate);
        updateLabelText('label[for="passengers"]', langData.passengers);
        updateLabelText('.vehicle-options + .section-header h3', langData.chooseVehicle);
        updateLabelText('#feedbackNameLabel', langData.yourName);
        updateLabelText('#feedbackEmailLabel', langData.emailOptional);
        updateLabelText('.rating-label', langData.yourRating);
        updateLabelText('#feedbackCommentLabel', langData.yourExperience);

        // Update vehicle options
        updateVehicleOption('standard-bus', langData.standardBus, langData.standardBusDetails, langData.vehiclePriceStandard);
        updateVehicleOption('luxury-bus', langData.luxuryCoach, langData.luxuryCoachDetails, langData.vehiclePriceLuxury);
        updateVehicleOption('minivan', langData.executiveMinivan, langData.executiveMinivanDetails, langData.vehiclePriceMinivan);

        // Update schedule tabs
        updateTabText('today', langData.today);
        updateTabText('tomorrow', langData.tomorrow);
        updateTabText('weekend', langData.weekend);

        // Update features
        updateFeatureText(1, langData.localPaymentOptions, langData.localPaymentDetails);
        updateFeatureText(2, langData.realTimeSchedules, langData.realTimeSchedulesDetails);
        updateFeatureText(3, langData.verifiedDrivers, langData.verifiedDriversDetails);
        updateFeatureText(4, langData.multiLanguageSupport, langData.multiLanguageSupportDetails);

        // Update help list
        updateHelpItem(1, langData.bookingIssues);
        updateHelpItem(2, langData.routeInformation);
        updateHelpItem(3, langData.paymentQuestions);
        updateHelpItem(4, langData.accountHelp);

        // Update footer links
        updateLinkText('.footer-links a[href="#privacy"]', langData.privacyPolicy);
        updateLinkText('.footer-links a[href="#partner"]', langData.becomePartner);
        updateLinkText('.footer-links a[href="#careers"]', langData.careers);
        updateLinkText('.footer-links a[href="#contact"]', langData.contactUs);
        updateLinkText('.navbar a[href="#login"]', langData.login);
        updateLinkText('.view-all a', langData.viewAllSchedules);
        updateLinkText('.view-all a', langData.viewAllTestimonials);

        // Update other text elements
        updateTextContent('.footer-contact p:nth-child(2)', langData.address);
        updateTextContent('.footer-bottom p', langData.copyright);
    }

    // Helper functions for updating specific elements
    function updateButtonText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    function updateSectionText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    function updateLabelText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    function updateVehicleOption(id, title, details, price) {
        const label = document.querySelector(`label[for="${id}"]`);
        if (label) {
            const titleElement = label.querySelector('h4');
            const detailsElement = label.querySelector('p');
            const priceElement = label.querySelector('.vehicle-price');
            
            if (titleElement && title) titleElement.textContent = title;
            if (detailsElement && details) detailsElement.textContent = details;
            if (priceElement && price) priceElement.textContent = price;
        }
    }

    function updateTabText(tabId, text) {
        const tab = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        if (tab && text) {
            tab.textContent = text;
        }
    }

    function updateLegendText(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.textContent = text;
        }
    }

    function updateFeatureText(index, title, details) {
        const feature = document.querySelector(`.features-grid .feature-card:nth-child(${index})`);
        if (feature) {
            const titleElement = feature.querySelector('h3');
            const detailsElement = feature.querySelector('p');
            
            if (titleElement && title) titleElement.textContent = title;
            if (detailsElement && details) detailsElement.textContent = details;
        }
    }

    function updateHelpItem(index, text) {
        const item = document.querySelector(`.help-list li:nth-child(${index})`);
        if (item && text) {
            item.textContent = text;
        }
    }

    function updateLinkText(selector, text) {
        const link = document.querySelector(selector);
        if (link && text) {
            link.textContent = text;
        }
    }

    function updateTextContent(selector, text) {
        const element = document.querySelector(selector);
        if (element && text) {
            element.innerHTML = text;
        }
    }
}

/**
 * Initialize the map with error handling
 */
function initMap() {
    const mapElement = document.getElementById('map');
    if (!mapElement) {
        console.warn('Map container not found');
        return;
    }

    try {
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
    } catch (error) {
        console.error('Failed to initialize map:', error);
        mapElement.innerHTML = '<div class="map-error">Map loading failed. Please try again later.</div>';
    }
}

/**
 * Initialize booking buttons with error handling
 */
function initBookingButtons() {
    const bookingButtons = document.querySelectorAll('.schedule-card .btn');
    if (!bookingButtons.length) return;

    bookingButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            try {
                const card = this.closest('.schedule-card');
                if (!card) return;

                const route = card.querySelector('.route')?.textContent || 'Unknown Route';
                const departure = card.querySelector('.departure')?.textContent || 'Unknown Time';
                const price = card.querySelector('.price')?.textContent || 'Unknown Price';

                showToast(`Booking ${route} at ${departure} for ${price}`);

                // In a real implementation, this would redirect to booking page with parameters
                setTimeout(() => {
                    window.location.href = `booking.html?route=${encodeURIComponent(route)}&time=${encodeURIComponent(departure)}&price=${encodeURIComponent(price)}`;
                }, 1000);
            } catch (error) {
                console.error('Booking button error:', error);
                showToast('Failed to process booking', 'error');
            }
        });
    });
}

/**
 * Quick Search Form Functionality with improved validation
 */
function initQuickSearchForm() {
    const quickSearchForm = document.getElementById('quickSearchForm');
    if (!quickSearchForm) return;

    const fromSelect = quickSearchForm.querySelector('#from');
    const toSelect = quickSearchForm.querySelector('#to');
    const dateInput = quickSearchForm.querySelector('#date');
    const passengersSelect = quickSearchForm.querySelector('#passengers');
    const swapBtn = quickSearchForm.querySelector('.swap-btn');

    // Swap 'from' and 'to' locations
    if (swapBtn) {
        swapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const tempValue = fromSelect.value;
            fromSelect.value = toSelect.value;
            toSelect.value = tempValue;
            
            // Trigger animation
            this.classList.add('animate-swap');
            setTimeout(() => {
                this.classList.remove('animate-swap');
            }, 300);
        });
    }

    // Form submission with validation
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

        // Validate date is not in the past
        const selectedDate = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        if (selectedDate < today) {
            showToast('Please select a future date', 'error');
            return;
        }

        // Get form values
        const fromCity = fromSelect.options[fromSelect.selectedIndex]?.text || fromSelect.value;
        const toCity = toSelect.options[toSelect.selectedIndex]?.text || toSelect.value;
        const date = new Date(dateInput.value).toLocaleDateString();
        const passengers = passengersSelect?.value || 1;

        console.log('Searching routes:', { fromCity, toCity, date, passengers });
        showToast(`Searching routes from ${fromCity} to ${toCity} on ${date} for ${passengers} passenger(s)`);

        // Simulate search delay
        setTimeout(() => {
            window.location.href = `booking.html?from=${encodeURIComponent(fromSelect.value)}&to=${encodeURIComponent(toSelect.value)}&date=${encodeURIComponent(dateInput.value)}&passengers=${encodeURIComponent(passengers)}`;
        }, 1000);
    });
}

/**
 * Schedule Tabs Functionality with error handling
 */
function initScheduleTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length === 0 || tabPanes.length === 0) return;

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            try {
                const tabId = this.getAttribute('data-tab');
                if (!tabId) return;

                // Update active tab button
                tabButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');

                // Show corresponding tab pane
                tabPanes.forEach(pane => pane.classList.remove('active'));
                const activePane = document.getElementById(tabId);
                if (activePane) {
                    activePane.classList.add('active');
                }
            } catch (error) {
                console.error('Tab switching error:', error);
            }
        });
    });
}

/**
 * Testimonial Slider Functionality with improved touch handling
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

    // Add event listeners
    testimonialSlider.addEventListener('touchstart', touchStart, { passive: true });
    testimonialSlider.addEventListener('touchend', touchEnd);
    testimonialSlider.addEventListener('touchmove', touchMove, { passive: false });
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
            
            // Prevent default for touchmove to prevent scrolling
            if (e.type === 'touchmove' && Math.abs(currentPosition - startPos) > 10) {
                e.preventDefault();
            }
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
        const testimonialWidth = testimonialSlider.children[0]?.offsetWidth || 300;
        currentTranslate = currentIndex * -(testimonialWidth + 32);
        prevTranslate = currentTranslate;
        setSliderPosition();
    }
}

/**
 * Support Button Functionality with improved modal
 */
function initSupportButton() {
    const supportButton = document.querySelector('.support-button');
    if (!supportButton) return;

    supportButton.addEventListener('click', function(e) {
        e.stopPropagation();
        showSupportModal();
    });

    function showSupportModal() {
        // Check if modal already exists
        if (document.querySelector('.support-modal')) return;

        const currentLang = localStorage.getItem('winnerGoLang') || 'en';
        const translations = {
            en: {
                needHelp: 'Need Help?',
                helpSubtitle: 'Our support team is here to assist you with:',
                bookingIssues: 'Booking issues',
                routeInformation: 'Route information',
                paymentQuestions: 'Payment questions',
                accountHelp: 'Account help',
                callSupport: 'Call Support',
                emailUs: 'Email Us'
            },
            am: {
                needHelp: 'እርዳታ ይፈልጋሉ?',
                helpSubtitle: 'የድጋፍ ቡድናችን እርስዎን ለመርዳት እዚህ አለ:',
                bookingIssues: 'የቦታ ማስያዣ ችግሮች',
                routeInformation: 'የመንገድ መረጃ',
                paymentQuestions: 'የክፍያ ጥያቄዎች',
                accountHelp: 'የመለያ እገዛ',
                callSupport: 'የድጋፍ ስልክ ይደውሉ',
                emailUs: 'ኢሜይል ይላኩልን'
            }
        };
        
        const langData = translations[currentLang] || translations['en'];

        const modalHTML = `
            <div class="support-modal" aria-modal="true" role="dialog" aria-labelledby="modal-title">
                <div class="modal-content">
                    <button class="close-modal" aria-label="Close support modal">&times;</button>
                    <h3 id="modal-title">${langData.needHelp}</h3>
                    <p>${langData.helpSubtitle}</p>
                    <ul class="help-list">
                        <li>${langData.bookingIssues}</li>
                        <li>${langData.routeInformation}</li>
                        <li>${langData.paymentQuestions}</li>
                        <li>${langData.accountHelp}</li>
                    </ul>
                    <div class="support-options">
                        <a href="tel:+251911234567" class="btn btn-outline">
                            <i class="fas fa-phone"></i> ${langData.callSupport}
                        </a>
                        <a href="mailto:support@winnergo.com" class="btn btn-outline">
                            <i class="fas fa-envelope"></i> ${langData.emailUs}
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

        // Focus trap for accessibility
        modal.querySelector('.close-modal').focus();

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
                            <input type="text" placeholder="Type your message..." aria-label="Type your message">
                            <button class="btn btn-small" aria-label="Send message"><i class="fas fa-paper-plane"></i></button>
                        </div>
                    </div>
                `;
                
                // Focus the chat input
                modal.querySelector('.chat-input input').focus();
            }, 2000);
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Close on Esc key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modal.remove();
            }
        });
    }
}

/**
 * Mobile Menu Functionality with improved accessibility
 */
function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.setAttribute('aria-label', 'Toggle menu');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';

    const header = document.querySelector('.header .container');
    if (header) {
        header.prepend(menuToggle);
    }

    menuToggle.addEventListener('click', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            const isExpanded = navbar.classList.toggle('active');
            menuToggle.setAttribute('aria-expanded', isExpanded.toString());
            menuToggle.innerHTML = isExpanded
                ? '<i class="fas fa-times"></i>'
                : '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu when clicking on links (event delegation)
    document.addEventListener('click', function(e) {
        if (e.target.closest('.navbar a')) {
            const navbar = document.querySelector('.navbar');
            if (navbar && navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                const menuToggle = document.querySelector('.menu-toggle');
                if (menuToggle) {
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        }
    });
}

/**
 * Form Validations with improved feedback
 */
function initFormValidations() {
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
        input.addEventListener('blur', function() {
            validateInput(this);
        });

        // Add aria attributes
        input.setAttribute('aria-invalid', 'false');
        if (!input.id) {
            input.id = `input-${Math.random().toString(36).substr(2, 9)}`;
        }
    });

    function validateInput(input) {
        const isValid = input.value.trim() !== '';
        input.classList.toggle('invalid', !isValid);
        input.classList.toggle('valid', isValid);
        input.setAttribute('aria-invalid', (!isValid).toString());
        
        // Add/remove error message
        let errorMessage = input.nextElementSibling;
        if (!isValid && (!errorMessage || !errorMessage.classList.contains('error-message'))) {
            errorMessage = document.createElement('span');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'This field is required';
            errorMessage.id = `${input.id}-error`;
            input.insertAdjacentElement('afterend', errorMessage);
            input.setAttribute('aria-describedby', errorMessage.id);
        } else if (isValid && errorMessage && errorMessage.classList.contains('error-message')) {
            errorMessage.remove();
            input.removeAttribute('aria-describedby');
        }
    }
}

/**
 * Initialize Date Pickers with min date restriction
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
 * Show Toast Notification with accessibility
 */
function showToast(message, type = 'success') {
    // Remove existing toasts
    document.querySelectorAll('.toast').forEach(toast => toast.remove());

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.textContent = message;

    document.body.appendChild(toast);

    // Trigger reflow for animation
    void toast.offsetWidth;

    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

/**
 * Enhanced Feedback System with input sanitization
 */
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

        const name = sanitizeInput(document.getElementById('feedbackName').value.trim());
        const email = sanitizeInput(document.getElementById('feedbackEmail').value.trim());
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const comment = sanitizeInput(document.getElementById('feedbackComment').value.trim());

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
            avatar: generateAvatar(email || name)
        };

        saveFeedback(feedback);
        feedbackForm.reset();
        ratingText.textContent = "Tap to rate";
        showToast('Thank you for sharing your experience!');
    });

    function generateAvatar(seed) {
        // Use a default avatar service with sanitized seed
        const sanitizedSeed = encodeURIComponent(seed);
        return `https://avatars.dicebear.com/api/initials/${sanitizedSeed}.svg?backgroundColors[]=yellow`;
    }

    function sanitizeInput(input) {
        // Basic HTML sanitization
        return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function saveFeedback(feedback) {
        try {
            const existingFeedback = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
            existingFeedback.unshift(feedback);
            localStorage.setItem('winnerGoFeedback', JSON.stringify(existingFeedback));
            loadFeedback();
        } catch (e) {
            console.error('Failed to save feedback:', e);
            showToast('Failed to save feedback', 'error');
        }
    }

    function loadFeedback() {
        try {
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
                            <img src="${feedback.avatar}" alt="${feedback.name}" class="user-avatar" loading="lazy">
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
        } catch (e) {
            console.error('Failed to load feedback:', e);
            feedbackList.innerHTML = '<p>Failed to load feedback. Please try again later.</p>';
        }
    }

    function formatDate(isoString) {
        return new Date(isoString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}

/**
 * Help Button Functionality
 */
function initHelpButton() {
    const helpButton = document.querySelector('.help-btn');
    const helpBox = document.querySelector('.help-box');
    const closeButton = document.querySelector('.close-help');

    if (!helpButton || !helpBox) return;

    // Toggle help box
    helpButton.addEventListener('click', function(e) {
        e.stopPropagation();
        helpBox.classList.toggle('active');
        helpButton.setAttribute('aria-expanded', helpBox.classList.contains('active').toString());
    });

    // Close help box
    closeButton.addEventListener('click', function() {
        helpBox.classList.remove('active');
        helpButton.setAttribute('aria-expanded', 'false');
        helpButton.focus();
    });

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (!helpBox.contains(e.target) && e.target !== helpButton) {
            helpBox.classList.remove('active');
            helpButton.setAttribute('aria-expanded', 'false');
        }
    });

    // Close on Esc key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && helpBox.classList.contains('active')) {
            helpBox.classList.remove('active');
            helpButton.setAttribute('aria-expanded', 'false');
            helpButton.focus();
        }
    });
}



function initMobileMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    menuToggle.setAttribute('aria-label', 'Toggle navigation menu');
    
    const navbar = document.querySelector('.navbar');
    document.querySelector('.header .container').prepend(menuToggle);

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuToggle.innerHTML = navbar.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });

    // Close menu on click outside
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
            navbar.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}





// Add to your JS code
function initScheduleTabs() {
    const scheduleData = {
        today: generateScheduleData(0),
        tomorrow: generateScheduleData(1),
        weekend: generateScheduleData(getDaysUntilWeekend())
    };

    const tabButtons = document.querySelectorAll('.tab-btn');
    const scheduleContent = document.querySelector('.schedule-content');

    function getDaysUntilWeekend() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday
        return dayOfWeek >= 5 ? 0 : 5 - dayOfWeek;
    }

    function generateScheduleData(daysOffset) {
        const routes = [
            { from: 'Addis Ababa', to: 'Hawassa', basePrice: 450, duration: '4h 30m' },
            { from: 'Bahir Dar', to: 'Gondar', basePrice: 320, duration: '2h 15m' },
            { from: 'Addis Ababa', to: 'Adama', basePrice: 180, duration: '1h 45m' },
            { from: 'Dire Dawa', to: 'Harar', basePrice: 280, duration: '1h 30m' },
            { from: 'Mekele', to: 'Axum', basePrice: 380, duration: '3h 00m' }
        ];

        const date = new Date();
        date.setDate(date.getDate() + daysOffset);
        
        return routes.map((route, index) => ({
            ...route,
            departure: generateDepartureTimes(daysOffset, index),
            price: calculateDynamicPrice(route.basePrice, daysOffset),
            operator: `WinnerGo ${index % 2 === 0 ? 'Express' : 'Shuttle'}`,
            date: date.toISOString().split('T')[0]
        }));
    }

    function generateDepartureTimes(daysOffset, index) {
        if (daysOffset === 0) { // Today
            const baseHour = 6 + Math.floor(index * 2.4);
            return `${baseHour % 12 || 12}:00 ${baseHour < 12 ? 'AM' : 'PM'}`;
        }
        if (daysOffset === 1) { // Tomorrow
            return `${8 + (index % 3)}:30 AM`;
        }
        // Weekend
        return index % 2 === 0 ? '10:00 AM' : '2:00 PM';
    }

    function calculateDynamicPrice(basePrice, daysOffset) {
        const multiplier = daysOffset === 0 ? 1 : daysOffset === 1 ? 1.1 : 1.2;
        return Math.round(basePrice * multiplier);
    }

    function createScheduleCard(schedule) {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <div class="route">${schedule.from} → ${schedule.to}</div>
            <div class="departure">${schedule.departure}</div>
            <div class="duration">${schedule.duration}</div>
            <div class="price">${schedule.price} ETB</div>
            <div class="operator">${schedule.operator}</div>
            <button class="btn btn-small" 
                data-route="${schedule.from.toLowerCase()}-${schedule.to.toLowerCase()}" 
                data-date="${schedule.date}"
                data-price="${schedule.price}">
                Book Now
            </button>
        `;
        return card;
    }

    function showTab(tabId) {
        scheduleContent.innerHTML = '';
        const schedules = scheduleData[tabId];
        const fragment = document.createDocumentFragment();
        
        schedules.forEach(schedule => {
            fragment.appendChild(createScheduleCard(schedule));
        });

        const pane = document.createElement('div');
        pane.className = 'tab-pane active';
        pane.appendChild(fragment);
        scheduleContent.appendChild(pane);
        
        // Reinitialize booking buttons for new cards
        initBookingButtons();
    }

    // Initial load
    showTab('today');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) return;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            showTab(this.dataset.tab);
        });
    });
}

// Update the initBookingButtons function
function initBookingButtons() {
    document.querySelectorAll('.schedule-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const route = this.parentNode.querySelector('.route').textContent;
            const departure = this.parentNode.querySelector('.departure').textContent;
            const price = this.parentNode.querySelector('.price').textContent;
            
            // Store booking data temporarily
            sessionStorage.setItem('selectedRoute', JSON.stringify({
                route,
                departure,
                price,
                date: this.dataset.date,
                routeId: this.dataset.route
            }));

            window.location.href = 'booking.html';
        });
    });
}

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... other initializations ...
    initScheduleTabs();
});


// Add to your JS code
function initScheduleTabs() {
    const scheduleData = {
        today: generateScheduleData(0),
        tomorrow: generateScheduleData(1),
        weekend: generateScheduleData(getDaysUntilWeekend())
    };

    const tabButtons = document.querySelectorAll('.tab-btn');
    const scheduleContent = document.querySelector('.schedule-content');

    function getDaysUntilWeekend() {
        const today = new Date();
        const dayOfWeek = today.getDay(); // 0 = Sunday
        return dayOfWeek >= 5 ? 0 : 5 - dayOfWeek;
    }

    function generateScheduleData(daysOffset) {
        const routes = [
            { from: 'Addis Ababa', to: 'Hawassa', basePrice: 450, duration: '4h 30m' },
            { from: 'Bahir Dar', to: 'Gondar', basePrice: 320, duration: '2h 15m' },
            { from: 'Addis Ababa', to: 'Adama', basePrice: 180, duration: '1h 45m' },
            { from: 'Dire Dawa', to: 'Harar', basePrice: 280, duration: '1h 30m' },
            { from: 'Mekele', to: 'Axum', basePrice: 380, duration: '3h 00m' }
        ];

        const date = new Date();
        date.setDate(date.getDate() + daysOffset);
        
        return routes.map((route, index) => ({
            ...route,
            departure: generateDepartureTimes(daysOffset, index),
            price: calculateDynamicPrice(route.basePrice, daysOffset),
            operator: `WinnerGo ${index % 2 === 0 ? 'Express' : 'Shuttle'}`,
            date: date.toISOString().split('T')[0]
        }));
    }

    function generateDepartureTimes(daysOffset, index) {
        if (daysOffset === 0) { // Today
            const baseHour = 6 + Math.floor(index * 2.4);
            return `${baseHour % 12 || 12}:00 ${baseHour < 12 ? 'AM' : 'PM'}`;
        }
        if (daysOffset === 1) { // Tomorrow
            return `${8 + (index % 3)}:30 AM`;
        }
        // Weekend
        return index % 2 === 0 ? '10:00 AM' : '2:00 PM';
    }

    function calculateDynamicPrice(basePrice, daysOffset) {
        const multiplier = daysOffset === 0 ? 1 : daysOffset === 1 ? 1.1 : 1.2;
        return Math.round(basePrice * multiplier);
    }

    function createScheduleCard(schedule) {
        const card = document.createElement('div');
        card.className = 'schedule-card';
        card.innerHTML = `
            <div class="route">${schedule.from} → ${schedule.to}</div>
            <div class="departure">${schedule.departure}</div>
            <div class="duration">${schedule.duration}</div>
            <div class="price">${schedule.price} ETB</div>
            <div class="operator">${schedule.operator}</div>
            <button class="btn btn-small" 
                data-route="${schedule.from.toLowerCase()}-${schedule.to.toLowerCase()}" 
                data-date="${schedule.date}"
                data-price="${schedule.price}">
                Book Now
            </button>
        `;
        return card;
    }

    function showTab(tabId) {
        scheduleContent.innerHTML = '';
        const schedules = scheduleData[tabId];
        const fragment = document.createDocumentFragment();
        
        schedules.forEach(schedule => {
            fragment.appendChild(createScheduleCard(schedule));
        });

        const pane = document.createElement('div');
        pane.className = 'tab-pane active';
        pane.appendChild(fragment);
        scheduleContent.appendChild(pane);
        
        // Reinitialize booking buttons for new cards
        initBookingButtons();
    }

    // Initial load
    showTab('today');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.classList.contains('active')) return;

            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            showTab(this.dataset.tab);
        });
    });
}

// Update the initBookingButtons function
function initBookingButtons() {
    document.querySelectorAll('.schedule-card .btn').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const route = this.parentNode.querySelector('.route').textContent;
            const departure = this.parentNode.querySelector('.departure').textContent;
            const price = this.parentNode.querySelector('.price').textContent;
            
            // Store booking data temporarily
            sessionStorage.setItem('selectedRoute', JSON.stringify({
                route,
                departure,
                price,
                date: this.dataset.date,
                routeId: this.dataset.route
            }));

            window.location.href = 'booking.html';
        });
    });
}

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... other initializations ...
    initScheduleTabs();
});








// Update the initFeedbackSystem function
function initFeedbackSystem() {
    const feedbackForm = document.getElementById('feedbackForm');
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    const averageRating = document.querySelector('.average-rating span');

    // Initial load of existing feedback
    loadFeedback();

    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = sanitizeInput(document.getElementById('feedbackName').value.trim());
        const email = sanitizeInput(document.getElementById('feedbackEmail').value.trim());
        const rating = document.querySelector('input[name="rating"]:checked')?.value;
        const comment = sanitizeInput(document.getElementById('feedbackComment').value.trim());

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
            avatar: generateAvatar(email || name)
        };

        saveFeedback(feedback);
        addFeedbackToUI(feedback);
        updateAverageRating();
        feedbackForm.reset();
        showToast('Thank you for sharing your experience!');
    });

    function generateAvatar(seed) {
        const sanitizedSeed = encodeURIComponent(seed);
        return `https://api.dicebear.com/7.x/initials/svg?seed=${sanitizedSeed}`;
    }

    function saveFeedback(feedback) {
        try {
            const existingFeedback = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
            existingFeedback.unshift(feedback);
            localStorage.setItem('winnerGoFeedback', JSON.stringify(existingFeedback));
        } catch (e) {
            console.error('Failed to save feedback:', e);
        }
    }

    function loadFeedback() {
        try {
            const existingFeedback = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
            existingFeedback.forEach(feedback => addFeedbackToUI(feedback));
            updateAverageRating();
        } catch (e) {
            console.error('Failed to load feedback:', e);
        }
    }

    function addFeedbackToUI(feedback) {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="user-info">
                <div class="avatar">
                    <img src="${feedback.avatar}" alt="${feedback.name}" loading="lazy">
                </div>
                <div class="user-details">
                    <h4>${feedback.name}</h4>
                    <div class="rating">
                        ${'★'.repeat(feedback.rating)}${'☆'.repeat(5 - feedback.rating)}
                    </div>
                </div>
            </div>
            <p class="testimonial-text">${feedback.comment}</p>
            <div class="testimonial-meta">
                <span class="date">${new Date(feedback.date).toLocaleDateString()}</span>
                <span class="route">New Feedback</span>
            </div>
        `;

        testimonialsSlider.prepend(testimonialCard);
    }

    function updateAverageRating() {
        try {
            const feedbacks = JSON.parse(localStorage.getItem('winnerGoFeedback')) || [];
            if (feedbacks.length === 0) return;

            const total = feedbacks.reduce((sum, f) => sum + f.rating, 0);
            const average = total / feedbacks.length;
            const formattedAverage = average.toFixed(1);
            
            // Update average rating display
            document.querySelector('.average-rating .stars').innerHTML = 
                '★'.repeat(Math.round(average));
                
            document.querySelector('.average-rating span').textContent =
                `${formattedAverage} from ${feedbacks.length} reviews`;
        } catch (e) {
            console.error('Error updating average rating:', e);
        }
    }

    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
}