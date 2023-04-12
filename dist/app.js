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
// Type Narrowing
function printId(id) {
    if (typeof id == "number") {
        console.log((id * 2).toString());
    }
    else {
        console.log(id.toUpperCase());
    }
}
// Le Narrowing qui est le processus qui permet, via des conditions, de réduire les types possible. 
function padLeft(padding, input) {
    if (typeof padding === "number") {
        // Avec cette condition, typescript sait maintenant que padding est un nombre 
        return new Array(padding + 1).join(" ") + input;
    }
    // Ici il sait que c'est une chaine de caractères
    return padding + input;
}
// Le Narrowing peut se faire grâce à plusieurs méthodes :
// typeof
// instanceof
// l'égalité entre 2 union type qui ont des types en commun
// L'opérateur in
// Certaines méthodes qui permettent de prédire le type : Array.isArray par exemple.
