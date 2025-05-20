/**
 * WinnerGo Transportation Booking - Confirmation Page JavaScript File
 * Displays the confirmed booking details to the user.
 */

document.addEventListener('DOMContentLoaded', function() {
    displayBookingDetails();
});

/**
 * Retrieves and displays booking details from sessionStorage.
 * This is the primary method for passing data between multi-step forms.
 */
function displayBookingDetails() {
    const displayBookingId = document.getElementById('displayBookingId');
    const displayRoute = document.getElementById('displayRoute');
    const displayDate = document.getElementById('displayDate');
    const displayDepartureTime = document.getElementById('displayDepartureTime');
    const displayPassengers = document.getElementById('displayPassengers');
    const displayTotalPaid = document.getElementById('displayTotalPaid');

    // Retrieve the confirmed booking object from sessionStorage
    const confirmedBooking = JSON.parse(sessionStorage.getItem('confirmedBooking'));

    if (confirmedBooking) {
        // Populate the HTML elements with the retrieved data
        displayBookingId.textContent = confirmedBooking.bookingId || 'N/A';
        displayRoute.textContent = confirmedBooking.route || 'N/A';
        displayDate.textContent = confirmedBooking.date || 'N/A';
        displayDepartureTime.textContent = confirmedBooking.departureTime || 'N/A';
        displayPassengers.textContent = confirmedBooking.passengers || 'N/A';
        displayTotalPaid.textContent = confirmedBooking.totalPaid || 'N/A';

        // Important: Clear sessionStorage after displaying to prevent stale data
        // if the user refreshes the page or navigates back and forth.
        sessionStorage.removeItem('confirmedBooking');
        console.log("Booking details displayed from sessionStorage and cleared.");
    } else {
        // If no data is found in sessionStorage, it means the page was likely
        // accessed directly or the session expired/was cleared.
        // You can display 'N/A' or redirect the user.
        console.warn("No booking details found in sessionStorage. Displaying 'N/A'.");
        displayBookingId.textContent = 'N/A';
        displayRoute.textContent = 'N/A';
        displayDate.textContent = 'N/A';
        displayDepartureTime.textContent = 'N/A';
        displayPassengers.textContent = 'N/A';
        displayTotalPaid.textContent = 'N/A';

        // Optional: Provide feedback to the user and redirect if data is missing
        // This 'showToast' function is assumed to be in main.js
        if (typeof showToast === 'function') {
            showToast('No booking details found. Please book your ride again.', 'warning');
            // Redirect back to the booking page after a short delay
            setTimeout(() => {
                window.location.href = 'booking.html';
            }, 3000);
        }
    }
}
/**
 * WinnerGo Transportation Booking - Main JavaScript File
 * Contains global utility functions, shared initializations,
 * and common event listeners for the entire website.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize common functionalities when the DOM is ready
    initFormValidations(); // Basic form validation for required fields
    initDatePickers(); // Sets min date for date inputs
    // Add any other site-wide initializations here
    // e.g., initMobileNavToggle(); if you add a hamburger menu
});

/**
 * Displays a toast notification.
 * This function should be callable from any page's JS (booking.js, signup.js, etc.).
 * @param {string} message - The message to display.
 * @param {string} type - The type of toast (e.g., 'success', 'error', 'info', 'warning').
 */
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) {
        console.warn("Toast element with ID 'toast' not found. Please ensure it's in your HTML.");
        return;
    }
    toast.textContent = message;
    toast.className = `toast ${type} show`; // Apply classes for styling and visibility
    toast.setAttribute('role', 'alert'); // For accessibility (screen readers)
    toast.setAttribute('aria-live', 'assertive'); // For accessibility (announces changes immediately)

    // Hide the toast after a delay
    setTimeout(() => {
        toast.classList.remove('show');
        toast.removeAttribute('role');
        toast.removeAttribute('aria-live');
    }, 3000); // Toast disappears after 3 seconds
}

/**
 * Initializes basic client-side form validation for inputs marked as 'required'.
 * This adds the 'invalid' class and populates a sibling '.error-message' div.
 * More specific validation (e.g., email format, password strength) should be in page-specific JS.
 */
function initFormValidations() {
    document.querySelectorAll('input[required], select[required], textarea[required]').forEach(input => {
        // Event listener to clear 'invalid' state and error message when user starts typing/inputting
        input.addEventListener('input', function() {
            this.classList.remove('invalid');
            const errorMessageElement = this.nextElementSibling;
            if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
                errorMessageElement.textContent = '';
            }
            this.removeAttribute('aria-invalid');
            this.removeAttribute('aria-describedby');
        });

        // Event listener to validate when user leaves the field (blur)
        input.addEventListener('blur', function() {
            if (!this.value.trim()) { // Check if the field is empty or just whitespace
                this.classList.add('invalid');
                const errorMessageElement = this.nextElementSibling;
                if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
                    // Attempt to get the label text for a more user-friendly message
                    const labelText = this.previousElementSibling && this.previousElementSibling.tagName === 'LABEL'
                                      ? this.previousElementSibling.textContent.replace(':', '').trim()
                                      : 'This field';
                    errorMessageElement.textContent = `${labelText} is required.`;
                    this.setAttribute('aria-invalid', 'true'); // For accessibility
                    this.setAttribute('aria-describedby', errorMessageElement.id || ''); // Link to error message for accessibility
                }
            } else {
                this.classList.remove('invalid'); // Remove invalid state if field is now valid
                this.removeAttribute('aria-invalid');
                this.removeAttribute('aria-describedby');
                const errorMessageElement = this.nextElementSibling;
                if (errorMessageElement && errorMessageElement.classList.contains('error-message')) {
                    errorMessageElement.textContent = ''; // Clear error message
                }
            }
        });
    });
}

/**
 * Initializes date input fields to set the minimum date to today,
 * preventing users from selecting past dates in date pickers.
 */
function initDatePickers() {
    const dateInputs = document.querySelectorAll('input[type="date"]');
    // Get today's date in YYYY-MM-DD format (required by HTML date input min attribute)
    const today = new Date().toISOString().split('T')[0];

    dateInputs.forEach(input => {
        input.setAttribute('min', today); // Set minimum selectable date to today
        // Optionally, set default value to today if the input is initially empty
        if (!input.value) {
            input.value = today;
        }
    });
}

// You can add more general-purpose functions here as your project grows, such as:
// - A function to dynamically highlight the active navigation link (based on current page URL)
// - A function for smooth scrolling when clicking anchor links
// - General utility functions like formatCurrency()


