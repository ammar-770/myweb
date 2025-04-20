document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript for the Dashboard Header Profile Hover ---
    const profileLogo = document.getElementById('profileLogo');
    const profileHoverInfo = document.querySelector('.profile-hover-info');

    if (profileLogo && profileHoverInfo) {
        profileLogo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing immediately
            profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
        });

        // Close the hover info when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                profileHoverInfo.style.display = 'none';
            }
        });
    }

    // --- JavaScript for Contact Form Submission Handling ---
    const contactForm = document.getElementById('contact-form');
    const contactError = document.getElementById('contact-error');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic client-side validation
            if (name === '' || email === '' || message === '') {
                contactError.textContent = 'Please fill in all fields.';
                contactSuccess.textContent = '';
                return;
            }

            if (!isValidEmail(email)) {
                contactError.textContent = 'Please enter a valid email address.';
                contactSuccess.textContent = '';
                return;
            }

            // Simulate form submission (replace with your actual backend logic)
            console.log('Form submitted:', { name, email, message });

            // Simulate success response
            setTimeout(() => {
                contactError.textContent = '';
                contactSuccess.textContent = 'Your message has been sent successfully!';
                contactForm.reset(); // Clear the form
            }, 1500);

            // In a real application, you would use fetch or XMLHttpRequest
            // to send the data to your server-side endpoint.

            // Example using fetch (replace '/api/contact' with your actual endpoint):
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    contactError.textContent = '';
                    contactSuccess.textContent = 'Your message has been sent successfully!';
                    contactForm.reset();
                } else {
                    contactSuccess.textContent = '';
                    contactError.textContent = 'An error occurred while sending your message. Please try again later.';
                    console.error('Submission error:', data.error);
                }
            })
            .catch(error => {
                contactSuccess.textContent = '';
                contactError.textContent = 'Network error. Please try again later.';
                console.error('Network error:', error);
            });
            */
        });
    }

    // --- Helper function for basic email validation ---
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});

// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.

document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript for the Dashboard Header Profile Hover ---
    const profileLogo = document.getElementById('profileLogo');
    const profileHoverInfo = document.querySelector('.profile-hover-info');

    if (profileLogo && profileHoverInfo) {
        profileLogo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing immediately
            profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
        });

        // Close the hover info when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                profileHoverInfo.style.display = 'none';
            }
        });
    }

    // --- JavaScript for Contact Form Submission Handling ---
    const contactForm = document.getElementById('contact-form');
    const contactError = document.getElementById('contact-error');
    const contactSuccess = document.getElementById('contact-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Basic client-side validation
            if (name === '' || email === '' || message === '') {
                contactError.textContent = 'Please fill in all fields.';
                contactSuccess.textContent = '';
                return;
            }

            if (!isValidEmail(email)) {
                contactError.textContent = 'Please enter a valid email address.';
                contactSuccess.textContent = '';
                return;
            }

            // Simulate form submission (replace with your actual backend logic)
            console.log('Form submitted:', { name, email, message });

            // Simulate success response
            setTimeout(() => {
                contactError.textContent = '';
                contactSuccess.textContent = 'Your message has been sent successfully!';
                contactForm.reset(); // Clear the form
            }, 1500);

            // In a real application, you would use fetch or XMLHttpRequest
            // to send the data to your server-side endpoint.

            // Example using fetch (replace '/api/contact' with your actual endpoint):
            /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    contactError.textContent = '';
                    contactSuccess.textContent = 'Your message has been sent successfully!';
                    contactForm.reset();
                } else {
                    contactSuccess.textContent = '';
                    contactError.textContent = 'An error occurred while sending your message. Please try again later.';
                    console.error('Submission error:', data.error);
                }
            })
            .catch(error => {
                contactSuccess.textContent = '';
                contactError.textContent = 'Network error. Please try again later.';
                console.error('Network error:', error);
            });
            */
        });
    }

   // --- Helper function for basic email validation ---
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
}); // This closing brace is likely misplaced
// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.


        // JavaScript to dynamically set the course title (if you are using the URL parameter method)
        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        document.addEventListener('DOMContentLoaded', function() {
            const courseTitle = getQueryParam('title');
            const pageTitleElement = document.querySelector('title');
            const headerTitleElement = document.getElementById('courseTitle');

            if (courseTitle) {
                pageTitleElement.textContent = decodeURIComponent(courseTitle) + " - Course Content";
                headerTitleElement.textContent = decodeURIComponent(courseTitle);
            }
        });

        const profileLogo = document.getElementById('profileLogo');
        const profileHoverInfo = document.querySelector('.profile-hover-info');

        if (profileLogo && profileHoverInfo) {
            profileLogo.addEventListener('click', function(event) {
                event.stopPropagation(); // Prevent click from closing immediately
                profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
            });

            // Close the hover info when clicking outside
            document.addEventListener('click', function(event) {
                if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                    profileHoverInfo.style.display = 'none';
                }
            });
        }

        document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript for the Dashboard Header Profile Hover ---
    const profileLogo = document.getElementById('profileLogo');
    const profileHoverInfo = document.querySelector('.profile-hover-info');

    if (profileLogo && profileHoverInfo) {
        profileLogo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing immediately
            profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
        });

        // Close the hover info when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                profileHoverInfo.style.display = 'none';
            }
        });
    }

    // --- JavaScript to dynamically set the course title ---
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const courseTitle = getQueryParam('title');
    const pageTitleElement = document.querySelector('title');
    // There is no element with id 'headerTitle' in this HTML.
    // If you intend to display the course title in the header,
    // you'll need to add an element with that ID.
    // For now, we'll just update the page title.

    if (courseTitle) {
        pageTitleElement.textContent = decodeURIComponent(courseTitle) + " - Course Content";
    }

    // --- JavaScript to make the lesson links navigate to the lesson page ---
    const lessonLinks = document.querySelectorAll('.lesson-item .lesson-link');
    lessonLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const lessonUrl = this.getAttribute('href');
            const courseTitleForLesson = getQueryParam('title'); // Get the current course title
            if (lessonUrl && courseTitleForLesson) {
                window.location.href = `${lessonUrl}?course=${encodeURIComponent(courseTitleForLesson)}`;
            } else if (lessonUrl) {
                window.location.href = lessonUrl;
            }
            // The lesson pages (lesson1-1.html, etc.) will need to
            // handle the 'course' query parameter if you want to
            // display the course title on those pages as well.
        });
    });

    // --- No specific JavaScript needed for the "Back to Courses" button
    // --- as it's a simple link. If you wanted to do something
    // --- more complex with it, you would add an event listener here.
});

// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.

document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript for the Dashboard Header Profile Hover ---
    const profileLogo = document.getElementById('profileLogo');
    const profileHoverInfo = document.querySelector('.profile-hover-info');

    if (profileLogo && profileHoverInfo) {
        profileLogo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing immediately
            profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
        });

        // Close the hover info when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                profileHoverInfo.style.display = 'none';
            }
        });
    }

    // --- JavaScript for "Learn More" buttons to navigate to course content ---
    const courseButtons = document.querySelectorAll('.course-card .course-button');
    courseButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const courseTitle = this.parentElement.querySelector('h3').textContent;
            const encodedTitle = encodeURIComponent(courseTitle);
            window.location.href = `Course-Content.html?title=${encodedTitle}`;
        });
    });
});

// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.

document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript for the Dashboard Header Profile Hover ---
    const profileLogo = document.getElementById('profileLogo');
    const profileHoverInfo = document.querySelector('.profile-hover-info');

    if (profileLogo && profileHoverInfo) {
        profileLogo.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from closing immediately
            profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
        });

        // Close the hover info when clicking outside
        document.addEventListener('click', function(event) {
            if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
                profileHoverInfo.style.display = 'none';
            }
        });
    }

    // --- JavaScript for Typing Welcome Text Animation ---
    const welcomeTitle = document.querySelector('.welcome-banner h2.typing-text');
    if (welcomeTitle) {
        const text = welcomeTitle.textContent;
        welcomeTitle.textContent = ''; // Clear the original text
        let charIndex = 0;
        const speed = 100; // Adjust typing speed (milliseconds per character)

        function type() {
            if (charIndex < text.length) {
                welcomeTitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(type, speed);
            }
        }

        type(); // Start the typing animation
    }

    // --- JavaScript for Continue Learning Buttons (Basic Functionality) ---
    const continueLearningButtons = document.querySelectorAll('.continue-learning-button');
    continueLearningButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const courseTitle = this.closest('.course-card').querySelector('.course-title').textContent;
            // In a real application, you would likely navigate to a specific
            // learning page for this course. For now, we'll just log the action.
            console.log(`Continue learning: ${courseTitle}`);
            // You might want to redirect the user to a specific URL based on the course.
            // Example: window.location.href = `/course/${encodeURIComponent(courseTitle)}`;
        });
    });

    // --- No specific JavaScript needed for the Announcements section
    // --- as it's static content in this HTML. If you wanted dynamic
    // --- loading or interaction, you would add that logic here.
});

// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.

document.getElementById("edit-profile-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Profile updated successfully!");
    // You can later add actual backend handling here.
  });

  document.addEventListener('DOMContentLoaded', function() {
  // --- Basic Form Submission Alert (Enhanced) ---
  const editProfileForm = document.getElementById('edit-profile-form');

  if (editProfileForm) {
      editProfileForm.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission

          // Get form data (for demonstration purposes)
          const fullName = this.querySelector('input[type="text"]').value.trim();
          const email = this.querySelector('input[type="email"]').value.trim();
          const newPassword = this.querySelector('input[type="password"]').value.trim();
          const profilePicture = this.querySelector('input[type="file"]').files[0];

          // You would typically send this data to your server-side endpoint
          // using fetch or XMLHttpRequest.

          console.log('Form submitted with data:', {
              fullName,
              email,
              newPassword,
              profilePicture: profilePicture ? profilePicture.name : null
          });

          // Simulate a successful update message
          alert('Profile updated successfully!');

          // Optionally, you can add code here to:
          // - Redirect the user to another page (e.g., dashboard).
          // - Update the displayed profile information on the current page.
          // - Clear the form fields.
          // this.reset(); // To clear the form after "submission"
      });
  }

  // --- No specific JavaScript needed for Particles.js
  // --- as its initialization is already in the <script> tag.

  // --- No specific JavaScript needed for the "Go to Home" link
  // --- as it's a standard HTML link.
});
// JS logic for Explore button (already has href, but this makes it smoother)
document.getElementById("exploreBtn").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "courses.html";
  });

  document.addEventListener('DOMContentLoaded', function() {
  // --- Function to get a query parameter from the URL ---
  function getQueryParam(name) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(name);
  }

  // --- JavaScript for the Dashboard Header Profile Hover ---
  const profileLogo = document.getElementById('profileLogo');
  const profileHoverInfo = document.querySelector('.profile-hover-info');

  if (profileLogo && profileHoverInfo) {
      profileLogo.addEventListener('click', function(event) {
          event.stopPropagation(); // Prevent click from closing immediately
          profileHoverInfo.style.display = profileHoverInfo.style.display === 'block' ? 'none' : 'block';
      });

      // Close the hover info when clicking outside
      document.addEventListener('click', function(event) {
          if (!profileHoverInfo.contains(event.target) && event.target !== profileLogo) {
              profileHoverInfo.style.display = 'none';
          }
      });
  }

  // --- JavaScript for the Testimonial Slider (Basic - Manual) ---
  const testimonials = document.querySelectorAll('.testimonial');
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          testimonial.classList.remove('active');
          if (i === index) {
              testimonial.classList.add('active');
          }
      });
      currentTestimonialIndex = index;
  }

  // You could add automatic sliding or navigation buttons here
  // For a basic manual slider, you might leave it as is,
  // or add controls like:

  // const nextTestimonial = document.createElement('button');
  // nextTestimonial.textContent = 'Next';
  // nextTestimonial.addEventListener('click', () => {
  //     let nextIndex = (currentTestimonialIndex + 1) % testimonials.length;
  //     showTestimonial(nextIndex);
  // });

  // const prevTestimonial = document.createElement('button');
  // prevTestimonial.textContent = 'Previous';
  // prevTestimonial.addEventListener('click', () => {
  //     let prevIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  //     showTestimonial(prevIndex);
  // });

  // const testimonialSlider = document.querySelector('.testimonial-slider');
  // if (testimonialSlider) {
  //     testimonialSlider.appendChild(prevTestimonial);
  //     testimonialSlider.appendChild(nextTestimonial);
  // }

  // --- JavaScript for the "Learn More" buttons on course cards to navigate to course content ---
  const courseButtons = document.querySelectorAll('.course-card .course-button');
  courseButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          const courseTitle = this.parentElement.querySelector('h3').textContent;
          const encodedTitle = encodeURIComponent(courseTitle);
          window.location.href = `Course-Content.html?title=${encodedTitle}`;
      });
  });
});

// --- JavaScript for Particles.js (Initialization is already in the <script> tag) ---
// The initialization for particles.js is within the <script> tag in the HTML.
// No further JavaScript is typically needed unless you want to dynamically
// control or update the particle effect.

// --- JavaScript for Explore Button (already present in the <script> tag) ---
// The logic for the "Explore Courses" button is already included in the HTML.

  // Optional: You can also add slider JS for testimonials if needed later

  document.addEventListener('DOMContentLoaded', function() {
    // --- JavaScript to dynamically set the lesson title and "Back to Content" link ---
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const lessonTitleParam = getQueryParam('lesson');
    const courseTitleParam = getQueryParam('course');
    const lessonTitleElement = document.querySelector('.lesson-title');
    const pageTitleElement = document.querySelector('title');
    const backToContentLink = document.querySelector('.back-to-content');

    if (lessonTitleParam) {
        const decodedLessonTitle = decodeURIComponent(lessonTitleParam);
        lessonTitleElement.textContent = decodedLessonTitle;
        pageTitleElement.textContent = decodedLessonTitle + " - Cybersecurity Fundamentals";
    }

    if (courseTitleParam) {
        backToContentLink.href = `Course-Content.html?title=${encodeURIComponent(courseTitleParam)}`;
    } else {
        // Fallback if course title is not available
        backToContentLink.href = 'Course-Content.html';
    }

    // --- No specific JavaScript needed for Particles.js
    // --- as its initialization is already in the <script> tag.
});



document.addEventListener('DOMContentLoaded', function() {
    // --- DOM Element References ---
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginError = document.getElementById('login-error');
    const registerError = document.getElementById('register-error');

    // --- Event Listeners for Form Switching ---
    if (showRegister && registerForm && loginForm) {
        showRegister.addEventListener('click', () => {
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
            // Clear any previous error messages when switching forms
            if (loginError) loginError.textContent = '';
            if (registerError) registerError.textContent = '';
        });
    }

    if (showLogin && registerForm && loginForm) {
        showLogin.addEventListener('click', () => {
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
            // Clear any previous error messages when switching forms
            if (loginError) loginError.textContent = '';
            if (registerError) registerError.textContent = '';
        });
    }

    // --- Event Listener for Login Form Submission ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const emailInput = this.querySelector('input[type="email"]');
            const passwordInput = this.querySelector('input[type="password"]');
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();

            // --- Basic Client-Side Validation (Add more robust checks) ---
            if (!email) {
                if (loginError) loginError.textContent = 'Please enter your email.';
                return;
            }
            if (!password) {
                if (loginError) loginError.textContent = 'Please enter your password.';
                return;
            }

            // --- Simulate Login Request (Replace with actual API call) ---
            console.log('Attempting login with:', { email, password });

            // Simulate a successful login after a short delay
            setTimeout(() => {
                // In a real application, you would check the credentials against a server.
                const isLoginSuccessful = true; // Replace with actual authentication logic

                if (isLoginSuccessful) {
                    window.location.href = "courses.html"; // Redirect on successful login
                } else {
                    if (loginError) loginError.textContent = 'Invalid email or password.';
                }
            }, 1500); // Simulate network request time
        });
    }

    // --- Event Listener for Register Form Submission ---
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelectorAll('input[type="email"]')[0]; // Assuming the first email input is for registration
            const passwordInput = this.querySelectorAll('input[type="password"]')[0]; // Assuming the first password input is for registration
            const confirmPasswordInput = this.querySelectorAll('input[type="password"]')[1]; // Assuming the second password input is for confirmation

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const password = passwordInput.value.trim();
            const confirmPassword = confirmPasswordInput.value.trim();

            // --- Basic Client-Side Validation (Add more robust checks) ---
            if (!name) {
                if (registerError) registerError.textContent = 'Please enter your name.';
                return;
            }
            if (!email) {
                if (registerError) registerError.textContent = 'Please enter your email.';
                return;
            }
            if (!password) {
                if (registerError) registerError.textContent = 'Please enter a password.';
                return;
            }
            if (password !== confirmPassword) {
                if (registerError) registerError.textContent = 'Passwords do not match.';
                return;
            }

            // --- Simulate Registration Request (Replace with actual API call) ---
            console.log('Attempting registration with:', { name, email, password });

            // Simulate a successful registration after a short delay
            setTimeout(() => {
                // In a real application, you would send this data to a server to create a new account.
                const isRegistrationSuccessful = true; // Replace with actual registration logic

                if (isRegistrationSuccessful) {
                    alert('Registered successfully! Redirecting to courses...');
                    window.location.href = "courses.html"; // Redirect on successful registration
                } else {
                    if (registerError) registerError.textContent = 'Registration failed. Please try again.';
                }
            }, 2000); // Simulate network request time
        });
    }

    // --- No specific JavaScript needed for Particles.js
    // --- as its initialization is already in the <script> tag.
});