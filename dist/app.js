"use strict";
// const a: string = "hello driss"
// const n: number = 12321
// const b: boolean = true
// const nu: null = null
// const arr: string[] = ["kjdk","kkdk"]
// const arry: any[] = ["kjdk","kkdk", 3]
// const user: {
//     firstname: string,
//     lastname?: string
// }
// = {
//     firstname: " driss",
//     lastname: "alaoui"
// }
// const userkey: {
//     firstname: string,
//    [key:string]:string
// }
// = {
//     firstname: " driss",
//     lastname: "alaoui"
// }
// const data: Date = new Date()
// // void => return
// const cd : (e: MouseEvent) => void =(e: MouseEvent): number => {
//     return 3
// }
// function printId(id: number | string ): void {
//     console.log(id.toString())
// }
// const compteur = document.querySelector('#compteur') as HTMLButtonElement
const compteur = document.querySelector('#compteur');
let i = 0;
const increment = (e) => {
    e.preventDefault();
    i++;
    const span = compteur === null || compteur === void 0 ? void 0 : compteur.querySelector('span');
    if (span) {
        span.innerText = i.toString();
    }
};
compteur === null || compteur === void 0 ? void 0 : compteur.addEventListener('click', increment);