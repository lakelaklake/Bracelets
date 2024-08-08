document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        name: name,
        email: email,
        message: message
    };
    
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was an error sending your message. Please try again later.');
    });
});

function showProductDetails(productId) {
    const productDetails = {
        product1: {
            title: 'Fuchsia Fantasy',
            description: 'This dazzling piece showcases a mesmerizing blend of hot pink and deep purple, intertwining to create an alluring spectrum of hues that catch the light from every angle. Each section of the bracelet sparkles with a radiant sheen, enhancing the playful and luxurious feel.',
            price: '9 AED',
            image: 'https://www.bing.com/images/blob?bcid=RJeUWLRkqFoHim0FR8mJIyN8wPfb.....6o'
        },
        product2: {
            title: 'Ocean Whisper',
            description: 'Ocean Whisper" evokes a sense of calm and tranquility, like the gentle sounds of the sea. The light yellow, light blue, and light green colors of your bracelet can be seen as a reflection of the serene, natural hues found by the ocean—think of sandy shores, gentle waves, and seafoam. It suggests a subtle elegance and a soothing connection to nature, making it perfect for a bracelet with such soft, inviting colors.',
            price: '9.5 AED',
            image: 'https://www.bing.com/images/blob?bcid=RMtmSzyWr1oHim0FR8mJIyN8wPfb.....9U'
        },
        product3: {
            title: 'Tiggy Eye',
            description: 'Embrace the power and elegance of the Tiger’s Eye with this stunning bracelet. Known for its rich, golden-brown hues and captivating chatoyancy, the Tiger’s Eye stone exudes strength and confidence. Each bead is meticulously polished to showcase its natural luster and unique patterns, making every bracelet a one-of-a-kind piece.',
            price: '9.5',
            image: 'https://www.bing.com/images/blob?bcid=RBB7Z5PhYFoHim0FR8mJIyN8wPfb.....4I'
        },
      product4:{
            title: 'Rose',
            description: 'Indulge in the delicate charm of our Pink Rose Bracelet, a true testament to elegance and grace. This enchanting piece features soft pink hues reminiscent of blooming roses, creating a timeless and romantic accessory. The bracelet is adorned with intricately designed rose-shaped beads, each crafted to capture the gentle beauty and allure of a fresh blossom.',
            price: '8',
            image: 'https://www.bing.com/images/blob?bcid=RBPoHN1tEFoHim0FR8mJIyN8wPfb.....34'
        },
      product5:{
            title: 'Blues',
            description: 'This elegant bracelet features a harmonious blend of various shades of blue stones or beads, creating a captivating visual effect reminiscent of a tranquil ocean or a clear, cloudless sky. Each bead is carefully selected and crafted to reflect light and color beautifully, offering a touch of sophistication and calm. Whether it is deep navy, vibrant turquoise, or soft cerulean, the Blues Bracelet is designed to complement any outfit with its subtle yet striking color palette.',
            price: '8',
            image: 'https://www.bing.com/images/blob?bcid=RIHg8MqEK1oHim0FR8mJIyN8wPfb.....3k'
        },
      product6:{
            title: 'Angel Myst',
            description: 'This bracelet features a refined matte finish, providing a soft, understated shine that enhances the natural beauty of its design.The matte finish gives it a contemporary and elegant look, making it a versatile piece that complements both casual and formal attire.',
            price: '8.5',
            image: 'https://www.bing.com/images/blob?bcid=RMQ3Lel69FoHim0FR8mJIyN8wPfb.....6E'
        },
      
    };
    
    const product = productDetails[productId];
    
    if (product) {
        document.getElementById('productDetails').innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.image}" alt="${product.title}" style="max-width: 100%; height: auto;">
            <p>${product.description}</p>
            <p><strong>Price:</strong> ${product.price}</p>
        `;
        document.getElementById('productModal').style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('productModal').style.display = 'none';
}

// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll and add/remove classes
function handleScroll() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isElementInViewport(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });

    // For product, testimonial, faq-item, and contact-info
    const animatedItems = document.querySelectorAll('.product, .testimonial, .faq-item, .contact-info');
    animatedItems.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initial check
handleScroll();