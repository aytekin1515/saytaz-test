const features = [
    { id: 'blog', name: 'Bloq', price: 150 },
    { id: 'responsive', name: 'Responsive', price: 200 },
    { id: 'messaging', name: 'Mesajlaşma', price: 250 },
    { id: 'gallery', name: 'Qalereya', price: 120 },
    { id: 'pageSearch', name: 'Saytda Axtarış', price: 100 },
    { id: 'reservation', name: 'Rezervasyon', price: 300 },
    { id: 'analytics', name: 'Analitika / İzləmə', price: 180 },
    { id: 'userProfile', name: 'Üzv girişi / Profillər', price: 220 },
    { id: 'forum', name: 'Forum', price: 280 },
    { id: 'liveChat', name: 'Canlı Söhbət', price: 350 },
    { id: 'contactForm', name: 'Əlaqə Forması', price: 80 },
    { id: 'geolocation', name: 'Xəritə Məlumatı / Geolocation', price: 150 },
    { id: 'socialMedia', name: 'Sosial Media inteqrasiyası', price: 120 },
    { id: 'adminPanel', name: 'Admin Panel', price: 400 }
];

const seoOptions = [
    { id: "meta", name: "Başlıqlar & Meta", price: 10 },
    { id: "keyword", name: "Açar söz", price: 5 },
    { id: "advanced", name: "+20 Qabaqcıl Texnika", price: 20 },
    { id: "tags", name: "Başlıq Teqləri", price: 8 },
    { id: "sitemap", name: "Sitemap", price: 7 },
];

const eCommerceOptions = [
    { id: "productCatalog", name: "Məhsul Kataloqu", price: 200 },
    { id: "shoppingCart", name: "Alış-veriş Səbəti", price: 150 },
    { id: "paymentGateway", name: "Ödəniş Gateway", price: 300 },
    { id: "userReviews", name: "İstifadəçi Rəyləri", price: 100 },
    { id: "discountCodes", name: "Endirim Kodları", price: 80 },
    { id: "orderTracking", name: "Sifariş İzləmə", price: 120 },
    { id: "inventoryManagement", name: "İnventar İdarəetmə", price: 250 },
    { id: "wishlist", name: "İstək Siyahısı", price: 90 },
];

const searchOptionContainer = document.getElementById("searchOption");
const searchPriceElement = document.getElementById("searchTotal");

function updateSearchTotal() {
    let total = 0;
    document.querySelectorAll(".seo-checkbox").forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.dataset.price);
        }
    });
    searchPriceElement.textContent = total;
    updateTotalCost();
}

seoOptions.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("flex", "items-center");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = option.id;
    checkbox.classList.add("seo-checkbox", "mr-2");
    checkbox.dataset.price = option.price;
    checkbox.addEventListener("change", updateSearchTotal);

    const label = document.createElement("label");
    label.htmlFor = option.id;
    label.textContent = option.name;
    label.classList.add("text-gray-700");

    div.appendChild(checkbox);
    div.appendChild(label);
    searchOptionContainer.appendChild(div);
});

const eCommerceContainer = document.getElementById("elektronTicaret");
const eCommercePriceElement = document.getElementById("elektronTotalPrice");

function updateECommerceTotal() {
    let total = 0;
    document.querySelectorAll(".ecommerce-checkbox").forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.dataset.price);
        }
    });
    eCommercePriceElement.textContent = total;
    updateTotalCost();
}

eCommerceOptions.forEach(option => {
    const div = document.createElement("div");
    div.classList.add("flex", "items-center", "p-3", "bg-gray-50", "rounded-lg");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = option.id;
    checkbox.classList.add("ecommerce-checkbox", "mr-2");
    checkbox.dataset.price = option.price;
    checkbox.addEventListener("change", updateECommerceTotal);

    const label = document.createElement("label");
    label.htmlFor = option.id;
    label.textContent = option.name;
    label.classList.add("text-gray-700");

    div.appendChild(checkbox);
    div.appendChild(label);
    eCommerceContainer.appendChild(div);
});

const logoComplexitySlider = document.getElementById('logoComplexitySlider');
const logoCostElement = document.getElementById('logoCost');

const logoPrices = [0, 100, 300]; // Ehtiyaç yoxdur, Sadə, Xüsusi

function updateLogoCost() {
    const complexity = parseInt(logoComplexitySlider.value);
    const cost = logoPrices[complexity];
    logoCostElement.textContent = `₼ ${cost}`;

    // Slider-in doldurulmuş hissəsini yenilə
    const value = ((complexity - logoComplexitySlider.min) / (logoComplexitySlider.max - logoComplexitySlider.min)) * 100;
    logoComplexitySlider.style.backgroundSize = `${value}% 100%`;

    updateTotalCost();
}

logoComplexitySlider.addEventListener('input', updateLogoCost);

function setupFeatures() {
    const container = document.getElementById('featuresContainer');

    features.forEach(feature => {
        const featureDiv = document.createElement('div');
        featureDiv.className = 'flex justify-between items-center p-3 bg-gray-50 rounded-lg';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'text-gray-800';
        nameSpan.textContent = feature.name;

        const toggleLabel = document.createElement('label');
        toggleLabel.className = 'toggle-switch';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = feature.id;
        checkbox.dataset.price = feature.price;
        checkbox.addEventListener('change', updateTotal);

        const sliderSpan = document.createElement('span');
        sliderSpan.className = 'toggle-slider';

        toggleLabel.appendChild(checkbox);
        toggleLabel.appendChild(sliderSpan);

        featureDiv.appendChild(nameSpan);
        featureDiv.appendChild(toggleLabel);

        container.appendChild(featureDiv);
    });
}

function updateTotal() {
    let total = 0;
    const checkboxes = document.querySelectorAll('#featuresContainer input[type="checkbox"]');

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            total += parseInt(checkbox.dataset.price);
        }
    });

    document.getElementById('totalPrice').textContent = total;
    updateTotalCost();
}

const pageCountSlider = document.getElementById('pageCountSlider');
const pageCountDisplay = document.getElementById('pageCountDisplay');
const designComplexitySlider = document.getElementById('designComplexitySlider');
const staticPagesTotalPrice = document.getElementById('staticPagesTotalPrice');

const basePrice = 100;

function updateSliderFill(slider) {
    const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
    slider.style.backgroundSize = value + '% 100%';
}

function calculateStaticPagesPrice() {
    const pageCount = parseInt(pageCountSlider.value);
    const designComplexity = parseInt(designComplexitySlider.value);

    let complexityMultiplier;
    switch (designComplexity) {
        case 1:
            complexityMultiplier = 1;
            break;
        case 2:
            complexityMultiplier = 1.5;
            break;
        case 3:
            complexityMultiplier = 2;
            break;
        default:
            complexityMultiplier = 1;
    }

    const totalPrice = Math.round(pageCount * basePrice * complexityMultiplier);

    pageCountDisplay.textContent = pageCount;
    staticPagesTotalPrice.textContent = `${pageCount} səhifə / ₼ ${totalPrice}`;

    updateSliderFill(pageCountSlider);
    updateSliderFill(designComplexitySlider);

    updateTotalCost();
}

pageCountSlider.addEventListener('input', calculateStaticPagesPrice);
designComplexitySlider.addEventListener('input', calculateStaticPagesPrice);

function updateTotalCost() {
    const staticPagesCost = parseInt(staticPagesTotalPrice.textContent.split('₼ ')[1]) || 0;
    const featuresCost = parseInt(document.getElementById('totalPrice').textContent) || 0;
    const seoCost = parseInt(searchPriceElement.textContent) || 0;
    const eCommerceCost = parseInt(eCommercePriceElement.textContent) || 0;
    const logoCost = parseInt(logoCostElement.textContent.split('₼ ')[1]) || 0;

    const totalCost = staticPagesCost + featuresCost + seoCost + eCommerceCost + logoCost;

    document.getElementById('staticPagesCost').textContent = `↑ ${staticPagesCost}`;
    document.getElementById('featuresCost').textContent = `↑ ${featuresCost}`;
    document.getElementById('seoCost').textContent = `↑ ${seoCost}`;
    document.getElementById('eCommerceCost').textContent = `↑ ${eCommerceCost}`;
    document.getElementById('logoCostDisplay').textContent = `↑ ${logoCost}`;

    document.getElementById('totalCost').textContent = `↑ ${totalCost}`;
}

setupFeatures();
calculateStaticPagesPrice();
updateTotal();
updateSearchTotal();
updateECommerceTotal();
updateLogoCost();