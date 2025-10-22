const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu'); 

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

let filterItem = document.querySelector('.items-links');
let filterImages = document.querySelectorAll('.project-img');

window.addEventListener('load', () => {
    filterItem.addEventListener('click', (selectedItem) => {
        if (selectedItem.target.classList.contains('item-link')) {
            // remove current active
            document.querySelector('.menu-active')?.classList.remove('menu-active');
            
            // add active to clicked
            selectedItem.target.classList.add('menu-active'); 
            
            let filterName = selectedItem.target.getAttribute('data-name');

            filterImages.forEach((image) => {
                let imageName = image.getAttribute('data-name');
                if (imageName === filterName || filterName === 'all') {
                    image.style.display = 'block';
                } else {
                    image.style.display = 'none';
                }
            });
        }
    });
});
