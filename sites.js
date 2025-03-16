const sites = [
    { url: "https://api.websiteca.com/storage/wKyykqEbaB5lQ5Q4bq6r5KcpP91bZytQXDtBopDY.png", title: "biophysics.az" },
    { url: "https://api.websiteca.com/storage/Mupn6xSf0FTlbBj0ilDZAqXuLiLrwFGjZct4gQLH.png", title: "ureb.com" },
    { url: "https://api.websiteca.com/storage/ZYfooZQ12g9cwbdUYdc9wEsHDXjshxZmRmQB5z9h.png", title: "ug.news" },
    { url: "https://api.websiteca.com/storage/2MQEImHKxKRLKbEGPUt9xQY2QiSlQw1gWE7RdkKm.png", title: "football.biz" },
    { url: "https://api.websiteca.com/storage/mMkkjJ32v64o4mN5tuMBvn7SWWkd1dPBBM1ZBzE2.png", title: "wisher.az" },
    { url: "https://api.websiteca.com/storage/7ZV1bRucrPWExvpsJqLyFiELk7fHAOk6ZtPVHpNl.png", title: "imexcommodites.com" },
    { url: "https://api.websiteca.com/storage/l7CnTnqSgXj1XA2ZMFtVvo4E8j2nZ4wgElrDehh7.png", title: "azfennttq.az" },
    { url: "https://api.websiteca.com/storage/vjciI2KyS5K2wrvpm1JlLFKdcd7WlG4wB0GTlItY.png", title: "notehub.az" },
    { url: "https://api.websiteca.com/storage/7g8cGPiEFNN7KfmRLC7Hes27A0xj9UD85yxLjSXZ.png", title: "azeholidays.az" },
    { url: "https://api.websiteca.com/storage/J0npE6PgAdvfSUmaUYdqdbQHplamTsx4RiOGB7wJ.png", title: "vipconsulting.az" },
    { url: "https://api.websiteca.com/storage/2Nr06VCFo72kSNXyGBNM6Vp8sl95xifE8PDKUnXO.png", title: "zemed.az" },
    { url: "https://api.websiteca.com/storage/STK6FPMjjvSWhL030mPfPDDzeUFvpoAEKVSYfgkw.png", title: "esco.az" },
    { url: "https://api.websiteca.com/storage/oHGuQndVvObtojo1JtE49ALXsbAcUSxsj5M56Qf3.png", title: "caspilimo.com" },
    { url: "https://api.websiteca.com/storage/XzKhKHLtvsO8AtHomdKnhWMZp4r7FKMyXkWwrlqG.png", title: "baymak.az" },
    { url: "https://api.websiteca.com/storage/tKp5LvACzbuA7RTDYVhRO3Jvq60x2JZjzq7lYVZK.png", title: "seljannovruzlu.com" },
    { url: "https://api.websiteca.com/storage/F1dmQj4FgeeUXLxfRPSBI8ftmELJuCtsWCF1kHOj.png", title: "qarmon.az" },
    { url: "https://api.websiteca.com/storage/jZI68lSJ4mkBfuzPd5jD5hOvcbweYv8046gfQO9f.png", title: "naftalansanatoriya.com" },
    { url: "https://api.websiteca.com/storage/gcY5xpQUdl0l1w08pdcojI3lYKIOpbRsTA7I59SP.png", title: "docfarhad.az" },
];

const itemsPerPage = 6; // Number of items to display per page
let currentPage = 1; // Current page

// Function to display items for the current page
function displayItems(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = sites.slice(startIndex, endIndex);

    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = ''; // Clear existing content

    // Add new items to the content container
    paginatedItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'bg-purple-100 rounded-lg overflow-hidden shadow-md p-4';
        itemElement.innerHTML = `
            <div class="aspect-video w-full overflow-hidden rounded-xl mb-4">
                <img src="${item.url}" alt="${item.title}" class="w-full h-full object-cover">
            </div>
            <h3 class="text-center text-purple-800 uppercase font-medium">${item.title}</h3>
        `;
        contentContainer.appendChild(itemElement);
    });
}

// Function to update pagination buttons
function updatePaginationButtons() {
    const totalPages = Math.ceil(sites.length / itemsPerPage);
    const paginationContainer = document.querySelector('ul[role="navigation"]');
    const prevButton = paginationContainer.querySelector('a[rel="prev"]').parentElement;
    const nextButton = paginationContainer.querySelector('a[rel="next"]').parentElement;

    // Clear existing pagination buttons (except prev and next)
    paginationContainer.innerHTML = '';
    paginationContainer.appendChild(prevButton);

    // Add page buttons
    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `border border-grey-200 w-10 h-10 rounded-lg text-slate-400 grid bg-white hover:bg-mainLightPurpleHover hover:text-white active:bg-mainLightPurpleActive place-items-center m-1 ${i === currentPage ? 'selected' : ''}`;
        li.innerHTML = `<a class="w-full h-full grid place-items-center" tabindex="0" role="button" aria-label="Page ${i}" data-page="${i}">${i}</a>`;
        paginationContainer.appendChild(li);
    }

    // Add next button
    paginationContainer.appendChild(nextButton);

    // Add event listeners to page buttons
    paginationContainer.querySelectorAll('a[data-page]').forEach(button => {
        button.addEventListener('click', () => {
            currentPage = parseInt(button.getAttribute('data-page'));
            displayItems(currentPage);
            updatePaginationButtons();
        });
    });

    // Update previous and next button states
    prevButton.classList.toggle('disabled', currentPage === 1);
    nextButton.classList.toggle('disabled', currentPage === totalPages);

    prevButton.querySelector('a').addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayItems(currentPage);
            updatePaginationButtons();
        }
    });

    nextButton.querySelector('a').addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayItems(currentPage);
            updatePaginationButtons();
        }
    });
}

// Initial display
displayItems(currentPage);
updatePaginationButtons();