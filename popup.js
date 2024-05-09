document.addEventListener('DOMContentLoaded', function() {
    const categories = document.querySelectorAll('.category');
    const linksContainer = document.querySelector('.links');

    const linksData = {
        work: [
            { img: 'images/1.png', text: 'Human Resources' },
            { img: 'images/2.png', text: 'Time Reporting' }
        ],
        studies: [
            { img: 'images/3.png', text: 'Course Portal' },
            { img: 'images/4.png', text: 'Assignment Submissions' }
        ],
        library: [
            { img: 'images/5.png', text: 'Book Catalog' },
            { img: 'images/6.png', text: 'Research Papers' }
        ],
        classes: [
            { img: 'images/7.png', text: 'Class Schedules' },
            { img: 'images/8.png', text: 'Virtual Classroom' }
        ]
    };

    function updateLinks(category) {
        const links = linksData[category];
        linksContainer.innerHTML = ''; // Clear current links
        links.forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.className = 'link';
            linkElement.innerHTML = `
                <img src="${link.img}" alt="">
                <span class="link-text">${link.text}</span>
            `;
            linksContainer.appendChild(linkElement);
        });
    }

    categories.forEach(category => {
        category.addEventListener('click', function() {
            document.querySelectorAll('.category').forEach(cat => cat.classList.remove('active'));
            this.classList.add('active');
            updateLinks(this.getAttribute('data-category'));
        });
    });

    // Initialize with the first category
    updateLinks(categories[0].getAttribute('data-category'));
    categories[0].classList.add('active');
});

document.addEventListener('DOMContentLoaded', function() {
    const countdownTimer = document.getElementById('countdown-timer');
    const endTime = new Date('April 30, 2024 10:00:00').getTime();
    const updates = [
        'הפסקה פעילה היום ב־12:00, מחכים לכם',
        'חיילי מילואים? עדכנו אותנו וקבלו מתנה שווה',
        'הרשמה למרתוני האגודה תשפ"ד תיפתח בקרוב מאוד! צפו להפתעות'
    ];
    const updateSound = document.getElementById('update-sound');

    function updateTimer() {
        const now = new Date().getTime();
        const distance = endTime - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        countdownTimer.innerHTML = `נותרו ${days} ימים ו${hours} שעות להפסקה הפעילה!`;

        if (distance < 0) {
            clearInterval(interval);
            countdownTimer.innerHTML = "הפסקה הפעילה התחילה";
        }
    }

    let interval = setInterval(updateTimer, 1000);

    updates.forEach((message, index) => {
        setTimeout(() => {
            const updatesList = document.getElementById('updates-list');
            const newUpdate = document.createElement('li');
            const imgElement = document.createElement('img');
            imgElement.src = "icons/omer.png"; // Path to your image
            imgElement.alt = "Profile Picture"; // Alternative text for the image
            imgElement.classList.add('profile-pic'); // Class for styling
            
            const text = document.createElement('span');
            text.textContent = message;

            newUpdate.appendChild(imgElement); // Append image to the list item
            newUpdate.appendChild(text); // Append text next to the image
            newUpdate.style.opacity = '0';

            newUpdate.animate([
                { opacity: 0 },
                { opacity: 1 }
            ], {
                duration: 2000,
                fill: 'forwards'
            });

            updatesList.appendChild(newUpdate);
            updateSound.play();
        }, 2000 * (index + 1)); // Delay each update by 2 seconds
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contact-btn').addEventListener('click', function() {
        window.location.href = 'contact.html';
    });
    document.getElementById('services-btn').addEventListener('click', function() {
        window.location.href = 'services.html';
    });
    document.getElementById('updates-btn').addEventListener('click', function() {
        window.location.href = 'aguda.html';
    });
    document.getElementById('general-btn').addEventListener('click', function() {
        window.location.href = 'popup.html';
    });
    document.getElementById('library-room-booking').addEventListener('click', function() {
        window.open('https://gilboaweb.yvc.ac.il/#/Dashboard?type=student', '_blank');
    });
    document.getElementById('college-library').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/library/', '_blank');
    });
    document.getElementById('info-station').addEventListener('click', function() {
        window.open('https://yedionsso.yvc.ac.il/yedion/fireflyweb.aspx?appname=BSHITA&prgname=login', '_blank');
    });
    document.getElementById('college-website').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/', '_blank');
    });
    document.getElementById('rules-procedures').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/rules-and-procedures/', '_blank');
    });
    document.getElementById('study-yearbooks').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/yearbooks/', '_blank');
    });
    document.getElementById('useful-forms').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/forms/', '_blank');
    });
    document.getElementById('academic-calendar').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/calendar/', '_blank');
    });
    document.getElementById('military-services').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/military-services/', '_blank');
    });
    document.getElementById('clinic').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/clinic/', '_blank');
    });
    document.getElementById('gym').addEventListener('click', function() {
        window.open('https://docs.google.com/spreadsheets/d/1pokHQNFsILtBCSryP6NixQOEohfXo8EYTX_KUIRHEwk/edit?usp=sharing', '_blank');
    });
    document.getElementById('tuition-fees').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/%D7%A9%D7%9B%D7%A8-%D7%9C%D7%99%D7%9E%D7%95%D7%93/', '_blank');
    });
    document.getElementById('leganto-system').addEventListener('click', function() {
        window.open('https://icc-yvc.leganto.exlibrisgroup.com/leganto/login?institute=972ICC_EMY&auth=SAML&idpCode=SAML_LEGANTO', '_blank');
    });
    document.getElementById('magic-system').addEventListener('click', function() {
        window.open('https://yvc-primo.hosted.exlibrisgroup.com/primo-explore/search?vid=972EMY_INST_V1', '_blank');
    });
    document.getElementById('clinical-studies').addEventListener('click', function() {
        window.open('https://simboost.yvc.ac.il/Register/RegisterGateway.aspx?Token=d375644a-15f8-4479-a1b3-0917c20c8878', '_blank');
    });
    document.getElementById('visual-communication').addEventListener('click', function() {
        window.open('https://www.yvc.ac.il/goren-visual-communication-school/', '_blank');
    });          
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('groups-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/groups/', '_blank');
    });
    document.getElementById('gallery-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/gallerys/', '_blank');
    });
    document.getElementById('discounts-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%94%d7%98%d7%91%d7%95%d7%aa-%d7%95%d7%94%d7%a0%d7%97%d7%95%d7%aa/', '_blank');
    });
    document.getElementById('student-card-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%97%d7%a9%d7%91%d7%95%d7%9f-%d7%a9%d7%9c%d7%99/student_cart/', '_blank');
    });
    document.getElementById('course-ratings-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/unv_course/', '_blank');
    });
    document.getElementById('private-teachers-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%9e%d7%90%d7%92%d7%a8-%d7%9e%d7%95%d7%a8%d7%99%d7%9d-%d7%a4%d7%a8%d7%98%d7%99%d7%99%d7%9d/', '_blank');
    });
    document.getElementById('scholarships-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%9e%d7%90%d7%92%d7%a8-%d7%9e%d7%9c%d7%92%d7%95%d7%aa/', '_blank');
    });
    document.getElementById('summary-cloud-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/cloud/', '_blank');
    });
    document.getElementById('council-meetings-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%a9%d7%a7%d7%99%d7%a4%d7%95%d7%aa/', '_blank');
    });
    document.getElementById('legal-advice-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%99%d7%a2%d7%95%d7%a5-%d7%9e%d7%a9%d7%a4%d7%98%d7%99/', '_blank');
    });
    document.getElementById('course-search-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%97%d7%99%d7%a4%d7%95%d7%a9-%d7%a7%d7%95%d7%a8%d7%a1/', '_blank');
    });
    document.getElementById('learning-system-room-booking').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%9e%d7%a2%d7%a8%d7%9b%d7%aa-%d7%9c%d7%9e%d7%99%d7%93%d7%94/', '_blank');
    });
    document.getElementById('aguda-instagram-room-booking').addEventListener('click', function() {
        window.open('https://instagram.com/emek_yezreel_academic/?hl=en', '_blank');
    });
    document.getElementById('aguda-facebook-room-booking').addEventListener('click', function() {
        window.open('https://www.facebook.com/AgudaEmekYzrael/?locale=he_IL', '_blank');
    });
    document.getElementById('android-app-room-booking').addEventListener('click', function() {
        window.open('https://play.google.com/store/apps/details?id=co.median.android.xnqrpb', '_blank');
    });
    document.getElementById('apple-app-room-booking').addEventListener('click', function() {
        window.open('https://apps.apple.com/il/app/%D7%90%D7%92%D7%95%D7%93%D7%AA-%D7%94%D7%A1%D7%98%D7%95%D7%93%D7%A0%D7%98%D7%99%D7%9D-%D7%A2%D7%9E%D7%A7-%D7%99%D7%96%D7%A8%D7%A2%D7%90%D7%9C/id6474135178', '_blank');
    });
});


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('tech-responsible').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    document.getElementById('team').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%a6%d7%95%d7%95%d7%aa-%d7%94%d7%90%d7%92%d7%95%d7%93%d7%94/', '_blank');
    });
    document.getElementById('phone-list').addEventListener('click', function() {
        window.open('https://yvcwebsite.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/06/25164833/%D7%A8%D7%A9%D7%99%D7%9E%D7%AA-%D7%A7%D7%A9%D7%A8-%D7%AA%D7%A9%D7%A2%D7%98.pdf', '_blank');
    });
    document.getElementById('teacher-announcement').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    document.getElementById('summary-announcement').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    document.getElementById('accessibility').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    document.getElementById('scholarship-announcement').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    document.getElementById('job-announcement').addEventListener('click', function() {
        window.open('https://emeky.co.il/%d7%99%d7%a6%d7%99%d7%a8%d7%aa-%d7%a7%d7%a9%d7%a8/', '_blank');
    });
    
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('Information').addEventListener('click', function() {
        window.open('https://www.youtube.com/watch?v=kWv72uCrCuA', '_blank');
    });
});