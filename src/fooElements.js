import fooImg from './icons8-github.svg';

export default function fooElementCreate(){
    const foo = document.querySelector('.foo');
    const fooA = document.createElement('a');
    fooA.href = "https://github.com/Harshahari1207";
    foo.appendChild(fooA);
    const fooImg1 = document.createElement('img');
    fooImg1.src = fooImg;
    fooA.appendChild(fooImg1);
}