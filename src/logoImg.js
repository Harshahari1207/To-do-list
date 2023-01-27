import navLogo from './list-solid.svg';
export default function logoImgCall(){
    const navLogoBar = document.querySelector(".logo");
    const  logoImg = document.createElement('img');
    logoImg.classList.add('logoImg');
    logoImg.src = navLogo;
    navLogoBar.appendChild(logoImg);
}