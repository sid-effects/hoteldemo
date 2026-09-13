const menuItems = [
    { name: "Chicken Biriyani", price: "₹250", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Mutton Biriyani", price: "₹350", img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Belgian Waffle", price: "₹150", img: "https://images.unsplash.com/photo-1562376552-0d160a2f9fa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Nutella Waffle", price: "₹180", img: "https://images.unsplash.com/photo-1557499691-897dbdbfb42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Al-Faham Chicken", price: "₹450", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Classic Chicken Burger", price: "₹120", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Beef Cheese Burger", price: "₹180", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Margherita Pizza", price: "₹200", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Pepperoni Pizza", price: "₹300", img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Alfredo Pasta", price: "₹220", img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Arrabbiata Pasta", price: "₹210", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Grilled Salmon", price: "₹550", img: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Virgin Mojito", price: "₹90", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Cold Coffee", price: "₹110", img: "https://images.unsplash.com/photo-1461023058943-07cb5ce69cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" },
    { name: "Chocolate Brownie", price: "₹130", img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" }
];

document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page");
    const reservationPage = document.getElementById("reservation-page");
    const menuPage = document.getElementById("menu-page");
    const btnReservation = document.getElementById("btn-reservation");
    const btnShowMenu = document.getElementById("btn-show-menu");
    const menuContainer = document.getElementById("menu-items-container");

    // Render Menu Items
    menuItems.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <div class="price">${item.price}</div>
            </div>
        `;
        menuContainer.appendChild(div);
    });

    // Navigation logic
    window.goHome = () => {
        reservationPage.style.display = "none";
        menuPage.style.display = "none";
        mainPage.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.showReservation = () => {
        mainPage.style.display = "none";
        menuPage.style.display = "none";
        reservationPage.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.showMenu = () => {
        mainPage.style.display = "none";
        reservationPage.style.display = "none";
        menuPage.style.display = "block";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.goToSection = (sectionId) => {
        if (mainPage.style.display === "none") {
            window.goHome();
        }
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 50);
    };

    btnReservation.addEventListener("click", window.showReservation);
    btnShowMenu.addEventListener("click", window.showMenu);
});
