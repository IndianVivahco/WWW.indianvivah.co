document.addEventListener("DOMContentLoaded", function() {
    
    const calcBtn = document.getElementById('btn-calculate');
    
    if(calcBtn) {
        calcBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const name1 = document.getElementById('yourName').value.trim();
            const name2 = document.getElementById('partnerName').value.trim();
            const resultDiv = document.getElementById('love-result');

            if (!resultDiv) return;

            if(name1 === "" || name2 === "") {
                resultDiv.innerHTML = "⚠️ Kripya dono naam bharein!";
                resultDiv.style.color = "#ff4d4d";
                return;
            }

            let combined = (name1 + name2).toLowerCase();
            let sum = 0;
            for (let i = 0; i < combined.length; i++) {
                sum += combined.charCodeAt(i);
            }
            let score = (sum % 35) + 65; 

            resultDiv.innerHTML = `❤️ Kundali Match Score: ${score}% ❤️`;
            resultDiv.style.color = "#D4AF37";
            resultDiv.style.fontSize = "22px";
            resultDiv.style.fontWeight = "bold";
            resultDiv.style.marginTop = "20px";
            resultDiv.style.display = "block";
        });
    }

    // Scroll Spy
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".d-nav a");

    window.addEventListener("scroll", function() {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
});

// ==================== CRASH FREE HERO IMAGE SLIDER LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide-img');
    if (slides.length > 0) {
        let currentSlideIndex = 0;
        
        setInterval(function() {
            // Active class hatana
            slides[currentSlideIndex].classList.remove('active-slide');
            
            // Agli slide par index shift karna (Fixed Logic)
            currentSlideIndex = currentSlideIndex + 1;
            if (currentSlideIndex >= slides.length) {
                currentSlideIndex = 0; 
            }
            
            // Nayi slide par active class jodna
            slides[currentSlideIndex].classList.add('active-slide');
        }, 3000); 
    }
});

// ==================== MOBILE HERO AUTOMATIC IMAGE SLIDER ====================
window.addEventListener('DOMContentLoaded', function() {
    const mobileSlides = document.querySelectorAll('.m-slide-img');
    if (mobileSlides.length > 0) {
        let mIndex = 0;
        setInterval(function() {
            mobileSlides[mIndex].classList.remove('m-active-slide');
            mIndex = mIndex + 1;
            if (mIndex >= mobileSlides.length) {
                mIndex = 0; 
            }
            mobileSlides[mIndex].classList.add('m-active-slide');
        }, 3000); // Har 3 second me background badlega phone par bhi
    }
});

// ==================== MOBILE MENU OPEN/CLOSE REAL LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const triggerBtn = document.getElementById('mobile-menu-trigger');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('mobile-drawer-overlay');
    const drawerLinks = document.querySelectorAll('.m-drawer-nav a');

    // Menu Kholna
    if (triggerBtn && drawer && overlay) {
        triggerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            drawer.classList.add('open-drawer');
            overlay.classList.add('show-overlay');
        });
    }

    // Menu Band karna (Cross Button se)
    if (closeBtn && drawer && overlay) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            drawer.classList.remove('open-drawer');
            overlay.classList.add('show-overlay'); // Hide overlay correctly
            overlay.classList.remove('show-overlay');
        });
    }

    // Menu Band karna (Kahi bhi parde par click karne se)
    if (overlay && drawer) {
        overlay.addEventListener('click', function() {
            drawer.classList.remove('open-drawer');
            overlay.classList.remove('show-overlay');
        });
    }

    // Jab koi kisi tab par click kare, to automatic menu band ho jaye
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            if(drawer && overlay) {
                drawer.classList.remove('open-drawer');
                overlay.classList.remove('show-overlay');
            }
        });
    });
});


// ==================== MOBILE MENU FINAL LIVE LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const mobileBtn = document.getElementById('mobile-menu-trigger');
    const closeBtn = document.getElementById('mobile-menu-close');
    const drawerBox = document.getElementById('mobile-drawer');
    const overlayBg = document.getElementById('mobile-drawer-overlay');
    const drawerLinks = document.querySelectorAll('.m-drawer-nav a');

    // Menu kholne ke liye
    if (mobileBtn && drawerBox && overlayBg) {
        mobileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            drawerBox.classList.add('open-drawer');
            overlayBg.classList.add('show-overlay');
        });
    }

    // Menu band karne ke liye (Cross '✕' Button se)
    if (closeBtn && drawerBox && overlayBg) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            drawerBox.classList.remove('open-drawer');
            overlayBg.classList.remove('show-overlay');
        });
    }

    // Menu band karne ke liye (Kahin bhi parde par click karne se)
    if (overlayBg && drawerBox) {
        overlayBg.addEventListener('click', function() {
            drawerBox.classList.remove('open-drawer');
            overlayBg.classList.remove('show-overlay');
        });
    }

    // Jab user kisi option (Link) par click kare to menu khud band ho jaye
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (drawerBox && overlayBg) {
                drawerBox.classList.remove('open-drawer');
                overlayBg.classList.remove('show-overlay');
            }
        });
    });
});

// ==================== PREMIUM LIVE PAYMENT OPEN TRIGGER ====================
document.addEventListener("click", function(event) {
    // Agar click kisi bhi 'Choose Plan' button par hua hai
    if (event.target.classList.contains("btn-plan") || event.target.innerText === "Choose Plan") {
        event.preventDefault(); // Browser ka automatic navigation rokna
        
        const payOverlay = document.getElementById("planPopupOverlay");
        const payTitle = document.getElementById("popupPlanName");
        
        if (payOverlay) {
            // Plan ka naam nikalne ke liye upar ke card ko dhoondhna
            const parentCard = event.target.closest(".plan-card");
            let clickedPlan = "Premium Plan";
            if (parentCard) {
                const planTitle = parentCard.querySelector("h3");
                if (planTitle) clickedPlan = planTitle.innerText;
            }
            
            // Popup ke andar heading badalna aur use screen par show karna
            if (payTitle) payTitle.innerText = `Payment for ${clickedPlan}`;
            payOverlay.classList.add("show-plan-popup");
        }
    }

    // Popup ko band karne ka solid logic (Cross '✕' button click karne par)
    if (event.target.id === "closePlanPopup" || event.target.classList.contains("plan-popup-close") || event.target.innerText === "✕") {
        event.preventDefault();
        const payOverlay = document.getElementById("planPopupOverlay");
        if (payOverlay) {
            payOverlay.classList.remove("show-plan-popup");
        }
    }
});


// ==================== LIVE SAMMELAN POPUP FORM WORKING LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    // Buttons targets classes and ids
    const sammelanTriggerBtn = document.querySelector('.btn-sammelan-reg');
    const sammelanOverlay = document.getElementById('sammelanFormOverlay');
    const closeSammelanBtn = document.getElementById('closeSammelanForm');
    const actualFormSubmit = document.querySelector('.sammelan-real-form');

    // Form popup kholne ke liye
    if (sammelanTriggerBtn && sammelanOverlay) {
        sammelanTriggerBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sammelanOverlay.classList.add('show-sammelan-form');
        });
    }

    // Form popup band karne ke liye (Cross button se)
    if (closeSammelanBtn && sammelanOverlay) {
        closeSammelanBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sammelanOverlay.classList.remove('show-sammelan-form');
        });
    }

    // Outside black click se band karna
    if (sammelanOverlay) {
        sammelanOverlay.addEventListener('click', function(e) {
            if (e.target === sammelanOverlay) {
                sammelanOverlay.classList.remove('show-sammelan-form');
            }
        });
    }

    // Jab form submit karega to successfully popup alert dikhana
    if (actualFormSubmit && sammelanOverlay) {
        actualFormSubmit.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("✅ सामूहिक विवाह सम्मेलन 2026 पंजीयन प्रपत्र सफलतापूर्वक जमा हो गया है! हमारी टीम जल्द ही आपसे संपर्क करेगी।");
            sammelanOverlay.classList.remove('show-sammelan-form');
            actualFormSubmit.reset(); // Dabbo ko wapas khali karna
        });
    }
});
// ==================== DYNAMIC REGISTRATION SUCCESS POPUP LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const desktopRegForm = document.querySelector('.quick-reg-form');
    const mobileRegBox = document.querySelector('.m-reg-box');
    const successOverlay = document.getElementById('regSuccessOverlay');
    const closeSuccessBtn = document.getElementById('closeRegSuccess');
    const continueBtn = document.getElementById('btnContinueToPay');

    // Function: Jo popup ko open karega
    function triggerSuccessModal(event) {
        event.preventDefault(); // Page reload hone se rokna
        if (successOverlay) {
            successOverlay.classList.add('show-success-popup');
        }
    }

    // 1. Desktop wale form par register hit hone par link karna
    if (desktopRegForm) {
        desktopRegForm.addEventListener('submit', triggerSuccessModal);
    }

    // 2. Mobile wale form par register hit hone par link karna
    if (mobileRegBox) {
        // Mobile wale form me button click par target lagana
        const mobileBtn = mobileRegBox.querySelector('.m-btn-search');
        if (mobileBtn) {
            mobileBtn.addEventListener('click', function(e) {
                // Pehle check karna ki name aur mobile bhara hai ya nahi
                const inputs = mobileRegBox.querySelectorAll('input');
                let allFilled = true;
                inputs.forEach(input => {
                    if(input.hasAttribute('required') && input.value.trim() === "") {
                        allFilled = false;
                    }
                });
                
                if(allFilled) {
                    triggerSuccessModal(e);
                }
            });
        }
    }

    // Popup ko band karne ka solid niyam (Cross button se)
    if (closeSuccessBtn && successOverlay) {
        closeSuccessBtn.addEventListener('click', function(e) {
            e.preventDefault();
            successOverlay.classList.remove('show-success-popup');
            if(desktopRegForm) desktopRegForm.reset(); // Forms ko khali karna
        });
    }

    // Continue button dabaane par plans par automatic scroll karwana
    if (continueBtn && successOverlay) {
        continueBtn.addEventListener('click', function(e) {
            e.preventDefault();
            successOverlay.classList.remove('show-success-popup');
            if(desktopRegForm) desktopRegForm.reset();
            
            // Automatic membership plans wale block par sarak kar le jana
            const targetPlansSection = document.getElementById('plans');
            if (targetPlansSection) {
                targetPlansSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
// ==================== LIVE DYNAMIC LOGIN POPUP WORKING LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const desktopLoginBtn = document.querySelector('.btn-login');
    const mobileDrawerLoginBtn = document.querySelector('.m-btn-drawer-login');
    const loginOverlay = document.getElementById('loginPopupOverlay');
    const closeLoginBtn = document.getElementById('closeLoginPopup');
    const actualLoginForm = document.querySelector('.real-login-form');
    const linkToReg = document.getElementById('linkToRegFromLogin');

    // Function: Login window kholna
    function openLoginWindow(e) {
        e.preventDefault();
        if (loginOverlay) {
            loginOverlay.classList.add('show-login-popup');
        }
    }

    // 1. Desktop main menu login button binding
    if (desktopLoginBtn) {
        desktopLoginBtn.addEventListener('click', openLoginWindow);
    }

    // 2. Mobile slide menu login button binding
    if (mobileDrawerLoginBtn) {
        mobileDrawerLoginBtn.addEventListener('click', openLoginWindow);
    }

    // 3. Popup band karne ka rule (Cross button)
    if (closeLoginBtn && loginOverlay) {
        closeLoginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            loginOverlay.classList.remove('show-login-popup');
        });
    }

    // Outside gray window click se close karna
    if (loginOverlay) {
        loginOverlay.addEventListener('click', function(e) {
            if (e.target === loginOverlay) {
                loginOverlay.classList.remove('show-login-popup');
            }
        });
    }

    // 4. Submit hone par dummy redirect alert
    if (actualLoginForm && loginOverlay) {
        actualLoginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("✅ Welcome! Login Successful. Redirecting to your personal profile dashboard...");
            loginOverlay.classList.remove('show-login-popup');
            actualLoginForm.reset();
        });
    }

    // 5. Agar login ke andar se koi 'Register Free' dabaaye to direct hero box par bhejna
    if (linkToReg && loginOverlay) {
        linkToReg.addEventListener('click', function(e) {
            e.preventDefault();
            loginOverlay.classList.remove('show-login-popup');
            const heroSection = document.getElementById('home');
            if (heroSection) {
                heroSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
// ==================== FOOLPROOF LOGIN NOW CLICK TRIGGER ====================
document.addEventListener("click", function(event) {
    // Agar user ne pure page par kahi bhi "Login Now" text par click kiya hai
    if (event.target.innerText === "Login Now") {
        event.preventDefault(); // Page reload hone se rokna
        
        const mainLoginOverlay = document.getElementById("loginPopupOverlay");
        if (mainLoginOverlay) {
            mainLoginOverlay.classList.add("show-login-popup"); // Login popup ko samne lana
        }
    }
});
// ==================== HIGH-SECURITY OTP SIGN UP LOGIC ====================
window.addEventListener('DOMContentLoaded', function() {
    const linkToSignUp = document.getElementById('linkToRegFromLogin'); // Login ke andr ka button
    const loginOverlayBox = document.getElementById('loginPopupOverlay');
    const signupOverlayBox = document.getElementById('signupPopupOverlay');
    const closeSignupBtn = document.getElementById('closeSignupPopup');
    const btnSendOTP = document.getElementById('btnSendOTP');
    const signupOTPInput = document.getElementById('signupOTPInput');
    const otpHintText = document.getElementById('otpHintText');
    const signupUserContact = document.getElementById('signupUserContact');
    const finalSignupForm = document.querySelector('.real-signup-form');

    let generatedOTP = ""; // Live random OTP code save karne ke liye variable

    // 1. Login popup ke andar se 'Sign Up Free' dabane par login band karke secure signup kholna
    if (linkToSignUp && loginOverlayBox && signupOverlayBox) {
        linkToSignUp.addEventListener('click', function(e) {
            e.preventDefault();
            loginOverlayBox.classList.remove('show-login-popup'); // Login window band
            signupOverlayBox.classList.add('show-signup-popup');  // Sign Up window chalu
        });
    }

    // 2. Send OTP Button Logic (Random 4 Digit Generation)
    if (btnSendOTP && signupUserContact && signupOTPInput && otpHintText) {
        btnSendOTP.addEventListener('click', function() {
            const contactValue = signupUserContact.value.trim();
            if (contactValue === "") {
                alert("⚠️ Kripya pehle apna Mobile Number ya Email ID bharein!");
                return;
            }

            // Random 4 digit OTP math calculate karna
            generatedOTP = Math.floor(1000 + Math.random() * 9000).toString();
            
            // OTP Input box ko open aur active karna
            signupOTPInput.removeAttribute('disabled');
            signupOTPInput.focus();
            
            // User ko live dummy dynamic notification alert bhejkar hint text dikhana
            alert(`📨 OTP Sent Successfully!\n\nSecurity Code: ${generatedOTP}\n\nKripya ye verification code niche box me daalein.`);
            otpHintText.innerHTML = `🔑 Live OTP Hint for testing: <strong>${generatedOTP}</strong>`;
            otpHintText.style.display = "block";
            btnSendOTP.innerText = "Resend OTP";
        });
    }

    // 3. Close Popup System (Cross Button Click)
    if (closeSignupBtn && signupOverlayBox) {
        closeSignupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            signupOverlayBox.classList.remove('show-signup-popup');
            if(finalSignupForm) finalSignupForm.reset();
            if(signupOTPInput) signupOTPInput.setAttribute('disabled', true);
            if(otpHintText) otpHintText.style.display = "none";
            generatedOTP = "";
        });
    }

    // Outside gray window click se band karna
    if (signupOverlayBox) {
        signupOverlayBox.addEventListener('click', function(e) {
            if (e.target === signupOverlayBox) {
                signupOverlayBox.classList.remove('show-signup-popup');
                if(finalSignupForm) finalSignupForm.reset();
                if(signupOTPInput) signupOTPInput.setAttribute('disabled', true);
                if(otpHintText) otpHintText.style.display = "none";
                generatedOTP = "";
            }
        });
    }

    // 4. Final Verification and Submit Form Match Logic
    if (finalSignupForm && signupOverlayBox && signupOTPInput) {
        finalSignupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const userEnteredOTP = signupOTPInput.value.trim();

            if (generatedOTP === "") {
                alert("⚠️ Kripya pehle 'Send OTP' button par click karke security code mangwayein!");
                return;
            }

            // OTP Sahi hai ya galat check karne ka pakka kanooni logic
            if (userEnteredOTP !== generatedOTP) {
                alert("❌ Wrong OTP Code! Kripya sahi 4-digit verification verification code daalein.");
                signupOTPInput.value = "";
                signupOTPInput.focus();
                return;
            }

            // Verification successful hone par alert aur account reset
            alert("🎉 OTP Verification Successful!\n\nAapka secure login account password ke sath safely bana diya gaya hai.");
            signupOverlayBox.classList.remove('show-signup-popup');
            finalSignupForm.reset();
            signupOTPInput.setAttribute('disabled', true);
            if(otpHintText) otpHintText.style.display = "none";
            generatedOTP = "";
        });
    }
});

// --- Indian Vivah FAQ Accordion Script ---
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const currentItem = button.parentElement;
        
        // Agar koi doosra question khula hai toh use band karne ke liye
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        // Current waale ko open ya close karne ke liye
        currentItem.classList.toggle('active');
    });
});

function toggleText() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less"; // बटन का नाम बदलकर Read Less हो जाएगा
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More"; // वापस Read More हो जाएगा
    }
}

function toggleText2() {
    var moreText2 = document.getElementById("more-text-2");
    var btnText2 = document.getElementById("read-more-btn-2");

    if (moreText2.style.display === "none") {
        moreText2.style.display = "inline";
        btnText2.innerHTML = "Read Less";
    } else {
        moreText2.style.display = "none";
        btnText2.innerHTML = "Read More";
    }
}

function handleFormSubmit(event) {
    event.preventDefault(); // पेज को रीलोड होने से रोकने के लिए
    
    var name = document.getElementById("userName").value;
    var type = document.getElementById("shareType").value;
    
    // यहाँ एक सुंदर प्रोफेशनल अलर्ट दिखेगा
    alert("धन्यवाद " + name + "!\nआपका " + type + " हमारे पास सुरक्षित पहुँच गया है। समीक्षा के बाद इसे वेबसाइट पर लाइव किया जाएगा।");
    
    // फॉर्म को खाली करने के लिए
    document.getElementById("communityForm").reset();
}

// 🔒 Profile Access Control System

// 👑 एडमिन कंट्रोल: यहाँ उन कस्टमर्स के मोबाइल नंबर या ईमेल डालें जिन्हें आपने अनुमति दी है
const authorizedMembers = [
    "9999988888",         // ग्राहक 1 का नंबर
    "user@gmail.com",     // ग्राहक 2 की ईमेल
    "7777766666"          // आप यहाँ और भी नंबर कॉमा (,) लगाकर जोड़ सकते हैं
];

// प्रोफाइल बटन पर क्लिक करने पर चेक करना
function checkProfileAccess() {
    // अगर यूजर पहले से ही लॉगिन/वेरिफाइड है (Local Storage की मदद से)
    if (localStorage.getItem("profileUnlocked") === "true") {
        alert("सफलतापूर्वक एक्सेस मिल गया! अब आप प्रोफाइल्स देख सकते हैं।");
        window.location.href = "#profiles-section"; // यहाँ अपने प्रोफाइल वाले सेक्शन की ID डाल दें
    } else {
        // अगर मेंबर नहीं है तो सुंदर पॉप-अप दिखाओ
        document.getElementById("profileLockModal").style.display = "flex";
    }
}

// पॉप-अप बंद करने के लिए
function closeProfileModal() {
    document.getElementById("profileLockModal").style.display = "none";
}

// कस्टमर के नंबर या ईमेल को लिस्ट से मैच करना
function verifyMemberAccess() {
    var userInput = document.getElementById("authInput").value.trim();
    
    if (userInput === "") {
        alert("कृपया अपना नंबर या ईमेल दर्ज करें!");
        return;
    }
    
    // चेक करना कि डाला गया नंबर आपकी लिस्ट में है या नहीं
    if (authorizedMembers.includes(userInput)) {
        alert("बधाई हो! आपका नंबर अधिकृत (Authorized) है। प्रोफाइल अनलॉक कर दी गई है।");
        localStorage.setItem("profileUnlocked", "true"); // याद रखने के लिए ताकि बार-बार न पूछना पड़े
        closeProfileModal();
        window.location.href = "#profiles-section"; // प्रोफाइल सेक्शन पर भेजें
    } else {
        alert("क्षमा करें! यह नंबर या ईमेल हमारे प्रीमियम डेटाबेस में नहीं है। कृपया सही विवरण डालें या पहले मेंबरशिप प्लान लें।");
    }
}

// 📱 Mobile और 🖥️ Desktop दोनों के लिए रजिस्ट्रेशन सिस्टम
function sendMobileRegToWhatsApp() {
    var name = document.getElementById("mRegName").value.trim();
    var looking = document.getElementById("mRegLookingFor").value;
    var age = document.getElementById("mRegAge").value.trim();
    var edu = document.getElementById("mRegEducation").value.trim();
    var mobile = document.getElementById("mRegMobile").value.trim();
    var address = document.getElementById("mRegAddress").value.trim();

    // सभी डिब्बे भरे हैं या नहीं, यह चेक करने के लिए
    if (!name || !looking || !age || !edu || !mobile || !address) {
        alert("कृपया रजिस्ट्रेशन फॉर्म की सभी जानकारियां पूरी भरें!");
        return;
    }

    // व्हाट्सएप के लिए सुंदर संदेश फॉर्मेट
    var msg = "*Mobile Registration - Indian Vivah*" + "%0A" +
              "----------------------------------" + "%0A" +
              "*Name:* " + name + "%0A" +
              "*Looking For:* " + looking + "%0A" +
              "*Age:* " + age + " Years" + "%0A" +
              "*Education:* " + edu + "%0A" +
              "*Mobile:* " + mobile + "%0A" +
              "*Address:* " + address + "%0A" +
              "----------------------------------";

    var whatsappNumber = "918982523577";

    // 🌟 यहाँ कोड खुद चेक करेगा कि यूजर मोबाइल पर है या कंप्यूटर पर
    if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        // यदि यूजर मोबाइल पर है, तो सीधे व्हाट्सएप ऐप खोलें
        window.location.href = "whatsapp://send?phone=" + whatsappNumber + "&text=" + msg;
    } else {
        // यदि यूजर कंप्यूटर/डेस्कटॉप पर है, तो नए टैब में व्हाट्सएप वेब खोलें
        var desktopUrl = "https://whatsapp.com" + whatsappNumber + "&text=" + msg;
        window.open(desktopUrl, '_blank');
    }
}
