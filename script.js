let flag = false

function changeIcon() {
    document.querySelector('.hamburger-icon').addEventListener('click', () => {
        if (!flag) { 
            document.querySelector('.nav-items-dropdown').style.display = 'flex';
            document.querySelector('.hamburger-icon').innerHTML = `
            <i class="ri-close-line"></i>   `
            flag = true;
        }
        else {
            document.querySelector('.nav-items-dropdown').style.display = 'none';
        document.querySelector('.hamburger-icon').innerHTML = `
        <i class="ri-menu-line"></i>   `
            flag = false;
        }
    }) 
}

changeIcon();

// document.querySelector('.hamburger-icon').addEventListener('click', () => {
//     document.querySelector('.nav-items-dropdown').style.display = 'none';
//     document.querySelector('.close-icon').innerHTML = `
//     <i class="ri-menu-line"></i>   `
// })