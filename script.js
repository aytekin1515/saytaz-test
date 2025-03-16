
const domenData = [
    { name: ".az", price: "₼40/il" },
    { name: ".com", price: "₼25/il" },
    { name: ".net", price: "₼38/il" },
    { name: ".info", price: "₼55/il" },
    { name: ".biz", price: "₼30/il" },
    { name: ".org", price: "₼35/il" }
]

const workData = [
    { img: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png", title: "BİOPHYSİCS.AZ" },
    { img: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png", title: "UREB.COM" },
    { img: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png", title: "UG.NEWS" },
    { img: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png", title: "FOOTBALL.BİZ" },
    { img: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png", title: "WISHER.AZ" },
    { img: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png", title: "IMEXCOMMODITIES.COM" },
]

const domens = document.getElementById('domens')
const domainSDL = document.getElementById('domainSDL')
const infoDomen = document.getElementById('infoDomen')
const workCard = document.getElementById('workCard')
const year = document.getElementById('year')
const month = document.getElementById('month')
const il1 = document.getElementById('il1')
const il2 = document.getElementById('il2')
const il3 = document.getElementById('il3')
let years = true;
let months = false;

year.onclick = function () {
    years = true;
    months = false;
    if (years == true && months == false) {
        year.style.background = "#b800ff"
        month.style.background = "white"
        il1.innerHTML = `
    ₼60
    <span class="text-base font-normal text-gray-500">
        /il
    </span>`
        il2.innerHTML = `
    ₼120
    <span class="text-base font-normal text-gray-500">
        /il
    </span>`
        il3.innerHTML = `
    ₼240
    <span class="text-base font-normal text-gray-500">
        /il
    </span>`
    }
};

month.onclick = function () {
    years = false;
    months = true;
    if (months = true && years == false) {
        month.style.background = '#b800ff'
        year.style.background = 'white'
        il1.innerHTML = `
    ₼5
    <span class="text-base font-normal text-gray-500">
        /ay
    </span>`
        il2.innerHTML = `
    ₼10
    <span class="text-base font-normal text-gray-500">
        /ay
    </span>`
        il3.innerHTML = `
    ₼20
    <span class="text-base font-normal text-gray-500">
        /ay
    </span>`
    }
};

function showDomen() {
    domens.innerHTML = ""
    domenData.forEach((item) => {
        domens.innerHTML += `
        <div onclick="domenOption('${item.name}')" class="flex flex-col gap-2 items-center cursor-pointer">
            <span class="text-purple-500 font-semibold text-2xl cursor-pointer">${item.name}</span>
            <span class="text-purple-500 font-semibold px-3 cursor-pointer">${item.price}</span>
        </div>
    `
        if (![...domainTDL.options].some(opt => opt.value === item.name)) {
            domainTDL.innerHTML += `<option value="${item.name}">${item.name}</option>`;
        }
    });
}
function domenOption(selectedDomen) {
    domainTDL.value = selectedDomen;
}
showDomen();

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    mobileMenu.classList.toggle('translate-x-full');
}

function toggleDropdown(id) {
    document.querySelectorAll('[id^="menu"]').forEach(menu => {
        if (menu.id !== id) {
            menu.classList.add('hidden')
        }
    })
    document.getElementById(id).classList.toggle('hidden');
}


domainSDL.addEventListener('input', function () {
    const domainValue = domainSDL.value.trim();
    const validDomainRegex = /^[a-zA-Z0-9-]+$/;

    if (domainValue === "") {
        infoDomen.innerHTML = "*Domen adı düzgün deyil. Domen adında yalnız hərf, rəqəm və '-' işarəsi ola bilər";
    } else if (domainValue.length < 3) {
        infoDomen.innerHTML = "*Domen adı 3 hərfdən az ola bilməz.";
    } else if (!validDomainRegex.test(domainValue)) {
        infoDomen.innerHTML = "*Domen adı düzgün deyil. Domen adında yalnız hərf, rəqəm və '-' işarəsi ola bilər"
    } else {
        infoDomen.innerHTML = ''
    }
})

document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault()
})

function showWorkACard() {
    workCard.innerHTML = ''
    workData.forEach((item) => {
        let cardHTML = `
        <div><img alt="BİOP" loading="lazy" width="608" height="360" decoding="async" data-nimg="1"
                class="w-full xl:h-[380px] lg:h-[320px] md:h-[240px] sm:h-[200px] h-[120px] object-contain rounded-[15px]"
                src="${item.img}"
                style="color: transparent;"></div>
        <div class="xmd2:text-xl text-sm font-semibold text-mainDarkPurple pt-6">${item.title}</div>
    </a>
        `
    })
    workCard.innerHTML += cardHTML
}
showWorkACard()


