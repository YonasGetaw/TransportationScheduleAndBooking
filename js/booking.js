/**
 * WinnerGo Transportation Booking - Booking JavaScript File
 * Handles the multi-step booking process, including route selection, seat selection,
 * passenger details, payment options, and confirmation.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements and sections
    const bookingForm = document.getElementById('bookingForm');
    const steps = document.querySelectorAll('.booking-section');
    const nextBtns = document.querySelectorAll('.next-step');
    const prevBtns = document.querySelectorAll('.prev-step');
    const selectRouteBtn = document.getElementById('selectRouteBtn');
    const proceedToDetailsBtn = document.getElementById('proceedToDetails');
    const payLaterBtn = document.getElementById('payLaterBtn');
    const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');

    // Initialize current step and variables
    let currentStep = 1;
    let selectedRoute = null;
    let selectedSeats = [];
    let isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    // Check if we have saved booking state (returning from login)
    const savedState = localStorage.getItem('bookingState');
    if (savedState) {
        const state = JSON.parse(savedState);
        localStorage.removeItem('bookingState');
        
        // Restore the booking state
        document.getElementById('bookingFrom').value = state.from;
        document.getElementById('bookingTo').value = state.to;
        document.getElementById('bookingDate').value = state.date;
        document.querySelector(`input[name="vehicleType"][value="${state.vehicleType}"]`).checked = true;
        selectedRoute = state.selectedRoute;
        
        // Go directly to step 3 (seat selection)
        showStep(3);
        generateSeatMap();
    }

    // Cities
    const cities = ['addis-ababa', 'bahir-dar', 'hawassa', 'gondar', 'mekele', 'dire-dawa', 'jimma'];

    // Distances between cities (in km)
    const distances = {
        'addis-ababa-bahir-dar': 560, 'bahir-dar-addis-ababa': 560,
        'addis-ababa-hawassa': 280, 'hawassa-addis-ababa': 280,
        'addis-ababa-gondar': 730, 'gondar-addis-ababa': 730,
        'addis-ababa-mekele': 780, 'mekele-addis-ababa': 780,
        'addis-ababa-dire-dawa': 515, 'dire-dawa-addis-ababa': 515,
        'addis-ababa-jimma': 350, 'jimma-addis-ababa': 350,
        'bahir-dar-hawassa': 840, 'hawassa-bahir-dar': 840,
        'bahir-dar-gondar': 180, 'gondar-bahir-dar': 180,
        'bahir-dar-mekele': 600, 'mekele-bahir-dar': 600,
        'bahir-dar-dire-dawa': 900, 'dire-dawa-bahir-dar': 900,
        'bahir-dar-jimma': 700, 'jimma-bahir-dar': 700,
        'hawassa-gondar': 1010, 'gondar-hawassa': 1010,
        'hawassa-mekele': 1060, 'mekele-hawassa': 1060,
        'hawassa-dire-dawa': 600, 'dire-dawa-hawassa': 600,
        'hawassa-jimma': 250, 'jimma-hawassa': 250,
        'gondar-mekele': 350, 'mekele-gondar': 350,
        'gondar-dire-dawa': 950, 'dire-dawa-gondar': 950,
        'gondar-jimma': 900, 'jimma-gondar': 900,
        'mekele-dire-dawa': 550, 'dire-dawa-mekele': 550,
        'mekele-jimma': 1100, 'jimma-mekele': 1100,
        'dire-dawa-jimma': 750, 'jimma-dire-dawa': 750
    };

    // Vehicle types with rate per km, seats, and amenities
    const vehicleTypes = {
        'standard-bus': { rate: 1, seats: 51, amenities: ['Wifi', 'AC'] },
        'luxury-bus': { rate: 1.5, seats: 40, amenities: ['Wifi', 'AC', 'Snacks'] },
        'minivan': { rate: 2, seats: 8, amenities: ['AC'] }
    };

    // Departure times for 3 routes per day per vehicle type
    const departureTimes = ['06:00 AM', '12:00 PM', '06:00 PM'];

    // Generate dates from May 18 to May 31, 2025
    const startDate = new Date('2025-05-18');
    const endDate = new Date('2025-05-31');
    const dates = [];
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
        dates.push(d.toISOString().split('T')[0]);
    }

    // Generate all available routes
    const availableRoutes = [];
    for (const date of dates) {
        for (let i = 0; i < cities.length; i++) {
            for (let j = 0; j < cities.length; j++) {
                if (i !== j) {
                    const from = cities[i];
                    const to = cities[j];
                    const distance = distances[`${from}-${to}`];
                    if (distance) {
                        for (const vehicleType of Object.keys(vehicleTypes)) {
                            for (const departureTime of departureTimes) {
                                const rate = vehicleTypes[vehicleType].rate;
                                const price = Math.round(distance * rate); // Round for clean pricing
                                const durationHours = distance / 60; // Assuming 60 km/h average speed
                                const arrivalTime = calculateArrivalTime(departureTime, durationHours);
                                const seats = vehicleTypes[vehicleType].seats;
                                const amenities = vehicleTypes[vehicleType].amenities;
                                availableRoutes.push({
                                    from,
                                    to,
                                    date,
                                    departureTime,
                                    arrivalTime,
                                    duration: calculateDuration(distance),
                                    price,
                                    vehicleType,
                                    amenities,
                                    totalSeats: seats
                                });
                            }
                        }
                    }
                }
            }
        }
    }

    // Booked seats (in-memory simulation)
    let bookedSeats = {};

    /**
     * Calculates the arrival time based on departure time and duration.
     * @param {string} departureTime - Departure time in 'HH:MM AM/PM' format.
     * @param {number} durationHours - Duration in hours.
     * @returns {string} Arrival time in 'HH:MM AM/PM' format.
     */
    function calculateArrivalTime(departureTime, durationHours) {
        const [time, period] = departureTime.split(' ');
        let [hours, minutes] = time.split(':').map(Number);
        if (period === 'PM' && hours < 12) hours += 12;
        if (period === 'AM' && hours === 12) hours = 0;
        const departureDate = new Date();
        departureDate.setHours(hours, minutes, 0, 0);
        const arrivalDate = new Date(departureDate.getTime() + durationHours * 60 * 60 * 1000);
        let arrivalHours = arrivalDate.getHours();
        const arrivalMinutes = arrivalDate.getMinutes().toString().padStart(2, '0');
        const arrivalPeriod = arrivalHours >= 12 ? 'PM' : 'AM';
        arrivalHours = arrivalHours % 12 || 12;
        return `${arrivalHours}:${arrivalMinutes} ${arrivalPeriod}`;
    }

    /**
     * Calculates the duration string from distance.
     * @param {number} distance - Distance in km.
     * @returns {string} Duration in 'Xh Ym' format.
     */
    function calculateDuration(distance) {
        const hours = Math.floor(distance / 60);
        const minutes = Math.round((distance / 60 - hours) * 60);
        return `${hours}h ${minutes}m`;
    }

    /**
     * Shows the specified step and hides others.
     * @param {number} stepNumber - The step to display.
     */
    function showStep(stepNumber) {
        steps.forEach((step, index) => {
            step.classList.toggle('active', index + 1 === stepNumber);
        });
        currentStep = stepNumber;
    }

    /**
     * Loads available routes based on user selections.
     */
    function loadAvailableRoutes() {
        const from = document.getElementById('bookingFrom').value;
        const to = document.getElementById('bookingTo').value;
        const date = document.getElementById('bookingDate').value;
        const vehicleType = document.querySelector('input[name="vehicleType"]:checked').value;

        const routes = availableRoutes.filter(route =>
            route.from === from && route.to === to && route.date === date && route.vehicleType === vehicleType
        );

        const routesContainer = document.getElementById('availableRoutes');
        routesContainer.innerHTML = '';

        if (routes.length === 0) {
            routesContainer.innerHTML = '<p class="no-routes-message">No routes found for your selection. Please adjust your search.</p>';
            selectRouteBtn.disabled = true;
            return;
        }

        routes.forEach(route => {
            const routeKey = getRouteKey(route);
            const booked = bookedSeats[routeKey] || [];
            const availableSeats = route.totalSeats - booked.length;
            const card = document.createElement('div');
            card.classList.add('schedule-card');
            card.innerHTML = `
                <h4>${route.from} to ${route.to}</h4>
                <p>Departure: ${route.departureTime}</p>
                <p>Arrival: ${route.arrivalTime}</p>
                <p>Duration: ${route.duration}</p>
                <p>Vehicle Type: ${route.vehicleType}</p>
                <p>Price: ${route.price} ETB</p>
                <p>Available Seats: ${availableSeats}</p>
                <p>Amenities: ${route.amenities.join(', ')}</p>
            `;
            card.addEventListener('click', () => {
                selectedRoute = route;
                document.querySelectorAll('.schedule-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectRouteBtn.disabled = false;
            });
            routesContainer.appendChild(card);
        });
    }

    /**
     * Generates the seat map based on the selected vehicle type.
     */
    function generateSeatMap() {
        const vehicleType = selectedRoute.vehicleType;
        const totalSeats = vehicleTypes[vehicleType].seats;
        const routeKey = getRouteKey(selectedRoute);
        const booked = bookedSeats[routeKey] || [];
        const seatMapContainer = document.getElementById('seatMap');
        seatMapContainer.innerHTML = '';

        for (let index = 0; index < totalSeats; index++) {
            const isBooked = booked.includes(index + 1);
            const status = isBooked ? 'booked' : 'available';
            const seat = document.createElement('div');
            seat.classList.add('seat', status);
            seat.textContent = index + 1;
            if (!isBooked) {
                seat.addEventListener('click', () => {
                    if (!isLoggedIn) {
                        // Save the current booking state in localStorage
                        localStorage.setItem('bookingState', JSON.stringify({
                            selectedRoute,
                            currentStep: 3, // Seat selection step
                            from: document.getElementById('bookingFrom').value,
                            to: document.getElementById('bookingTo').value,
                            date: document.getElementById('bookingDate').value,
                            vehicleType: document.querySelector('input[name="vehicleType"]:checked').value
                        }));
                        
                        // Set a message to show after login
                        localStorage.setItem('redirectMessage', 'Please select your seats to continue your booking');
                        
                        // Redirect to login with return URL
                        window.location.href = `login.html?return=${encodeURIComponent(window.location.href)}`;
                        return;
                    }
                    
                    seat.classList.toggle('selected');
                    if (seat.classList.contains('selected')) {
                        selectedSeats.push(index + 1);
                    } else {
                        selectedSeats = selectedSeats.filter(s => s !== index + 1);
                    }
                    updateSeatSelectionMessage();
                });
            }
            seatMapContainer.appendChild(seat);
        }
    }

    /**
     * Updates the seat selection message with the number of selected seats.
     */
    function updateSeatSelectionMessage() {
        const count = selectedSeats.length;
        document.getElementById('selectedSeatsCount').textContent = count;
        proceedToDetailsBtn.disabled = count === 0;
    }

    /**
     * Generates passenger input fields based on the number of selected seats.
     */
    function generatePassengerInputs() {
        const passengerDetailsInputs = document.getElementById('passengerDetailsInputs');
        passengerDetailsInputs.innerHTML = '';

        selectedSeats.forEach(seat => {
            const passengerDiv = document.createElement('div');
            passengerDiv.classList.add('form-group');
            passengerDiv.innerHTML = `
                <h4>Passenger for Seat ${seat}</h4>
                <label for="fullName${seat}">Full Name</label>
                <input type="text" id="fullName${seat}" required>
                <label for="phone${seat}">Phone Number</label>
                <input type="tel" id="phone${seat}" required>
            `;
            passengerDetailsInputs.appendChild(passengerDiv);
        });
    }

    /**
     * Handles the payment step, including ticket preview and summary.
     */
    function handlePayment() {
        document.getElementById('previewRoute').textContent = `${selectedRoute.from} to ${selectedRoute.to}`;
        document.getElementById('previewDate').textContent = selectedRoute.date;
        document.getElementById('previewDeparture').textContent = selectedRoute.departureTime;
        document.getElementById('previewArrival').textContent = selectedRoute.arrivalTime;
        document.getElementById('previewVehicle').textContent = selectedRoute.vehicleType;
        document.getElementById('previewSeats').textContent = selectedSeats.join(', ');
        document.getElementById('previewTotal').textContent = `${selectedRoute.price * selectedSeats.length} ETB`;

        document.getElementById('summaryOrderId').textContent = `ORDER-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        document.getElementById('summaryRoute').textContent = `${selectedRoute.from} to ${selectedRoute.to}`;
        document.getElementById('summaryDate').textContent = selectedRoute.date;
        document.getElementById('summaryDeparture').textContent = selectedRoute.departureTime;
        document.getElementById('summaryPassengers').textContent = selectedSeats.length;
        document.getElementById('summaryTotal').textContent = `${selectedRoute.price * selectedSeats.length} ETB`;
    }

    /**
     * Starts the countdown timer for the pay later option.
     */
    function startPayLaterCountdown() {
        const countdownElement = document.getElementById('countdownTimer');
        let timeLeft = 3600; // 1 hour in seconds

        const countdownInterval = setInterval(() => {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                alert('Payment time expired. Please book again.');
                window.location.href = 'booking.html';
            }
            timeLeft--;
        }, 1000);
    }

    /**
     * Gets the unique key for a route.
     * @param {object} route - The route object.
     * @returns {string} The route key.
     */
    function getRouteKey(route) {
        return `${route.from}-${route.to}-${route.date}-${route.departureTime}-${route.vehicleType}`;
    }

    // Event Listeners
    nextBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.getAttribute('data-step'), 10);
            if (nextStep === 2) {
                loadAvailableRoutes();
            } else if (nextStep === 3) {
                generateSeatMap();
            } else if (nextStep === 4) {
                generatePassengerInputs();
            } else if (nextStep === 5) {
                handlePayment();
            }
            showStep(nextStep);
        });
    });

    prevBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const prevStep = parseInt(btn.getAttribute('data-step'), 10);
            showStep(prevStep);
        });
    });

    payLaterBtn.addEventListener('click', () => {
        document.getElementById('payLaterCountdown').style.display = 'block';
        startPayLaterCountdown();
    });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Update booked seats
        const routeKey = getRouteKey(selectedRoute);
        if (!bookedSeats[routeKey]) {
            bookedSeats[routeKey] = [];
        }
        bookedSeats[routeKey] = bookedSeats[routeKey].concat(selectedSeats);
        // Show confirmation
        showStep(6);
        document.getElementById('confirmedBookingId').textContent = document.getElementById('summaryOrderId').textContent;
        document.getElementById('confirmedRoute').textContent = document.getElementById('summaryRoute').textContent;
        document.getElementById('confirmedDate').textContent = document.getElementById('summaryDate').textContent;
        document.getElementById('confirmedDeparture').textContent = document.getElementById('summaryDeparture').textContent;
        document.getElementById('confirmedSeats').textContent = selectedSeats.join(', ');
        document.getElementById('confirmedTotal').textContent = document.getElementById('summaryTotal').textContent;
        // Reset selected seats
        selectedSeats = [];
    });

    // Swap button functionality
    const swapBtn = document.querySelector('.swap-btn');
    swapBtn.addEventListener('click', () => {
        const fromSelect = document.getElementById('bookingFrom');
        const toSelect = document.getElementById('bookingTo');
        const temp = fromSelect.value;
        fromSelect.value = toSelect.value;
        toSelect.value = temp;
    });

    // Set date input constraints
    const bookingDateInput = document.getElementById('bookingDate');
    bookingDateInput.min = '2025-05-18';
    bookingDateInput.max = '2025-05-31';
});
// Generate unique booking IDs
function generateBookingId() {
    return 'BOOKING-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// In your booking form submit handler
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const bookingData = {
        id: generateBookingId(),
        from: document.getElementById('bookingFrom').value,
        to: document.getElementById('bookingTo').value,
        date: document.getElementById('bookingDate').value,
        departureTime: selectedRoute.departureTime,
        seats: selectedSeats,
        vehicleType: selectedRoute.vehicleType,
        totalPrice: selectedRoute.price * selectedSeats.length,
        bookingDate: new Date().toISOString(),
        completed: false,
        feedbackGiven: false
    };

    // Store completed booking
    const bookings = JSON.parse(localStorage.getItem('completedBookings')) || [];
    bookings.push(bookingData);
    localStorage.setItem('completedBookings', JSON.stringify(bookings));

    // Show confirmation and clear form
    showStep(6);
    // ... rest of your confirmation code ...
});