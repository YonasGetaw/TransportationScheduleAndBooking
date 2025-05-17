document.addEventListener('DOMContentLoaded', () => {
    // Get references to form elements and message displays
    const bookingForm = document.getElementById('bookingForm');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('email');
    const startingPointInput = document.getElementById('startingPoint');
    const destinationInput = document.getElementById('destination');
    const travelDateInput = document.getElementById('travelDate');
    const vehicleTypeSelect = document.getElementById('vehicleType');
    const numberOfSeatsInput = document.getElementById('numberOfSeats');
    const priceInput = document.getElementById('price');
    const formMessage = document.getElementById('formMessage');

    // Get references to individual error message divs
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const phoneNumberError = document.getElementById('phoneNumberError');
    const emailError = document.getElementById('emailError');
    const startingPointError = document.getElementById('startingPointError');
    const destinationError = document.getElementById('destinationError');
    const travelDateError = document.getElementById('travelDateError');
    const vehicleTypeError = document.getElementById('vehicleTypeError');
    const numberOfSeatsError = document.getElementById('numberOfSeatsError');
    const paymentMethodError = document.getElementById('paymentMethodError'); // Error for payment method

    // Define vehicle prices per seat in Ethiopian Birr (ETB) - UPDATED
    const vehiclePrices = {
        economy: 150.00, // Price per seat in ETB
        minibus: 250.00,
        coaster: 350.00,
        luxury: 500.00
    };

    /**
     * Displays a specific error message for an input field.
     * @param {HTMLElement} inputElement - The input or select element (can be null for radio groups).
     * @param {HTMLElement} errorElement - The div to display the error message.
     * @param {string} message - The error message text.
     */
    function showError(inputElement, errorElement, message) {
        if (inputElement) inputElement.classList.add('invalid');
        if (errorElement) errorElement.textContent = message;
    }

    /**
     * Clears any existing error message for an input field.
     * @param {HTMLElement} inputElement - The input or select element (can be null for radio groups).
     * @param {HTMLElement} errorElement - The div displaying the error message.
     */
    function clearError(inputElement, errorElement) {
        if (inputElement) inputElement.classList.remove('invalid');
        if (errorElement) errorElement.textContent = '';
    }

    /**
     * Shows a general message to the user (success or error for the whole form).
     * @param {string} message - The message to display.
     * @param {string} type - 'success' or 'error'.
     */
    function showFormMessage(message, type) {
        if (formMessage) {
            formMessage.textContent = message;
            formMessage.className = `message-box ${type}`; // Apply styling classes
            formMessage.style.display = 'block'; // Make it visible

            // Hide message after a few seconds, only if not an error that needs attention
            if (type === 'success') {
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        }
    }

    /**
     * Calculates and updates the total price based on selected vehicle type and number of seats.
     */
    function updateTotalPrice() {
        const selectedVehicle = vehicleTypeSelect.value;
        const numberOfSeats = parseInt(numberOfSeatsInput.value, 10);

        let totalPrice = 0;

        // Ensure a valid vehicle type is selected and seats are a positive number
        if (selectedVehicle && vehiclePrices[selectedVehicle] && !isNaN(numberOfSeats) && numberOfSeats > 0) {
            totalPrice = vehiclePrices[selectedVehicle] * numberOfSeats;
        }

        // Update the price input with the formatted value - UPDATED CURRENCY
        priceInput.value = `${totalPrice.toFixed(2)} ETB`; // Format to 2 decimal places with ETB
    }

    /**
     * Sets the minimum date for the travel date input to today, preventing past date selection.
     */
    function setMinTravelDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
        const day = String(today.getDate()).padStart(2, '0');
        travelDateInput.min = `${year}-${month}-${day}`;
    }

    // --- Input Event Listeners for Real-time Validation & Price Update ---
    firstNameInput.addEventListener('input', () => firstNameInput.value.trim() ? clearError(firstNameInput, firstNameError) : null);
    lastNameInput.addEventListener('input', () => lastNameInput.value.trim() ? clearError(lastNameInput, lastNameError) : null);
    phoneNumberInput.addEventListener('input', () => {
        const phone = phoneNumberInput.value.trim();
        if (/^09\d{8}$/.test(phone)) {
            clearError(phoneNumberInput, phoneNumberError);
        } else if (phone === '') {
            clearError(phoneNumberInput, phoneNumberError); // Clear error if empty, let required handle it on submit
        }
    });
    emailInput.addEventListener('input', () => {
        // Simple email validation, allowing empty as it's optional
        if (emailInput.value.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            clearError(emailInput, emailError);
        }
    });
    startingPointInput.addEventListener('input', () => startingPointInput.value.trim() ? clearError(startingPointInput, startingPointError) : null);
    destinationInput.addEventListener('input', () => destinationInput.value.trim() ? clearError(destinationInput, destinationError) : null);

    travelDateInput.addEventListener('change', () => {
        const selectedDate = new Date(travelDateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today's date for comparison
        if (travelDateInput.value && selectedDate >= today) {
            clearError(travelDateInput, travelDateError);
        }
    });

    vehicleTypeSelect.addEventListener('change', () => {
        updateTotalPrice();
        vehicleTypeSelect.value ? clearError(vehicleTypeSelect, vehicleTypeError) : null;
    });

    numberOfSeatsInput.addEventListener('input', () => {
        updateTotalPrice();
        const seats = parseInt(numberOfSeatsInput.value, 10);
        if (seats >= 1 && !isNaN(seats)) {
            clearError(numberOfSeatsInput, numberOfSeatsError);
        } else if (numberOfSeatsInput.value === '') {
            clearError(numberOfSeatsInput, numberOfSeatsError); // Clear error if empty, let required handle it on submit
        }
    });

    // Event listener for payment method radio buttons
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', () => {
            // When a payment method is selected, clear its error
            clearError(null, paymentMethodError); // Pass null for inputElement as it's a radio group error
        });
    });


    // Initial setup on page load
    updateTotalPrice();
    setMinTravelDate();

    /**
     * Generates a simple unique reference number for the booking.
     * Could be made more robust with timestamp + random string for uniqueness.
     */
    function generateReferenceNumber() {
        const timestamp = Date.now().toString(36).toUpperCase(); // Base36 timestamp
        const randomString = Math.random().toString(36).substring(2, 8).toUpperCase(); // Random string
        return `BOOK-${timestamp}-${randomString}`;
    }

    /**
     * Handles the booking form submission.
     * Performs client-side validation, gathers data, stores it, and redirects.
     */
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Clear previous form-wide message
        if (formMessage) {
            formMessage.style.display = 'none';
            formMessage.textContent = ''; // Clear text
            formMessage.className = 'message-box'; // Reset classes
        }

        let isValid = true; // Flag to track overall form validity

        // --- Client-Side Validation ---
        // Validate First Name
        if (firstNameInput.value.trim() === '') {
            showError(firstNameInput, firstNameError, 'First Name is required.');
            isValid = false;
        } else {
            clearError(firstNameInput, firstNameError);
        }

        // Validate Last Name
        if (lastNameInput.value.trim() === '') {
            showError(lastNameInput, lastNameError, 'Last Name is required.');
            isValid = false;
        } else {
            clearError(lastNameInput, lastNameError);
        }

        // Validate Phone Number
        const phoneNumber = phoneNumberInput.value.trim();
        if (phoneNumber === '') {
            showError(phoneNumberInput, phoneNumberError, 'Phone Number is required.');
            isValid = false;
        } else if (!/^09\d{8}$/.test(phoneNumber)) {
            showError(phoneNumberInput, phoneNumberError, 'Invalid phone number format. Must be 10 digits starting with 09.');
            isValid = false;
        } else {
            clearError(phoneNumberInput, phoneNumberError);
        }

        // Validate Email (Optional, but if entered, must be valid format)
        const email = emailInput.value.trim();
        if (email !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError(emailInput, emailError, 'Invalid email format.');
            isValid = false;
        } else {
            clearError(emailInput, emailError);
        }

        // Validate Starting Point
        if (startingPointInput.value.trim() === '') {
            showError(startingPointInput, startingPointError, 'Starting Point is required.');
            isValid = false;
        } else {
            clearError(startingPointInput, startingPointError);
        }

        // Validate Destination
        if (destinationInput.value.trim() === '') {
            showError(destinationInput, destinationError, 'Destination is required.');
            isValid = false;
        } else {
            clearError(destinationInput, destinationError);
        }

        // Validate Travel Date
        const travelDate = travelDateInput.value;
        const selectedDate = new Date(travelDate);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Normalize today's date for comparison

        if (travelDate === '') {
            showError(travelDateInput, travelDateError, 'Travel Date is required.');
            isValid = false;
        } else if (selectedDate < today) {
            showError(travelDateInput, travelDateError, 'Travel Date cannot be in the past.');
            isValid = false;
        } else {
            clearError(travelDateInput, travelDateError);
        }

        // Validate Vehicle Type
        if (vehicleTypeSelect.value === '') {
            showError(vehicleTypeSelect, vehicleTypeError, 'Please select a vehicle type.');
            isValid = false;
        } else {
            clearError(vehicleTypeSelect, vehicleTypeError);
        }

        // Validate Number of Seats
        const numberOfSeats = parseInt(numberOfSeatsInput.value, 10);
        if (isNaN(numberOfSeats) || numberOfSeats < 1) {
            showError(numberOfSeatsInput, numberOfSeatsError, 'Number of seats must be at least 1.');
            isValid = false;
        } else {
            clearError(numberOfSeatsInput, numberOfSeatsError);
        }

        // Validate Payment Method
        const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
        if (!selectedPaymentMethod) {
            // We don't have a specific input element for the radio group, so just show error text
            showError(null, paymentMethodError, 'Please select a payment method.');
            isValid = false;
        } else {
            clearError(null, paymentMethodError);
        }

        // If any validation failed, stop here and show overall message
        if (!isValid) {
            showFormMessage('Please correct the errors in the form before proceeding.', 'error');
            return;
        }

        // --- If all validation passes ---
        const bookingDetails = {
            referenceNumber: generateReferenceNumber(),
            firstName: firstNameInput.value.trim(),
            lastName: lastNameInput.value.trim(),
            phoneNumber: phoneNumber,
            email: email, // Optional, can be empty string
            startingPoint: startingPointInput.value.trim(),
            destination: destinationInput.value.trim(),
            travelDate: travelDate, // YYYY-MM-DD
            vehicleType: vehicleTypeSelect.options[vehicleTypeSelect.selectedIndex].text, // Display text
            numberOfSeats: numberOfSeats,
            totalPrice: priceInput.value, // Already formatted (e.g., "150.00 ETB")
            paymentMethod: selectedPaymentMethod ? selectedPaymentMethod.value : 'N/A' // Add payment method
        };

        try {
            // Store booking details in localStorage
            localStorage.setItem('currentBooking', JSON.stringify(bookingDetails));

            // Show success message and redirect
            showFormMessage('Booking successful! Redirecting to confirmation page...', 'success');

            // Redirect to confirmation page after a short delay
            setTimeout(() => {
                window.location.href = 'confirmation.html';
            }, 1500);

        } catch (e) {
            console.error("Failed to save booking details to localStorage:", e);
            showFormMessage('An error occurred while confirming your booking. Please try again.', 'error');
        }
    });
});
