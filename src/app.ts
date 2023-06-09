
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


const compteur = document.querySelector('#compteur')

let i = 0;
const increment = (e: Event) => {
    e.preventDefault()
    i++;
    const span =  compteur?.querySelector('span') as HTMLSpanElement
    if(span) {
        span.innerText = i.toString();

    }
}

compteur?.addEventListener('click', increment)




// Type Narrowing
function printId(id: number | string ): void {
   if(typeof id == "number"){
    console.log((id * 2).toString())
   }else {
    console.log(id.toUpperCase())
   }
}

// Le Narrowing qui est le processus qui permet, via des conditions, de réduire les types possible. 

function padLeft(padding: number | string, input: string) {
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



// Alias @ generics   ous allons voir comment il est possible d'éviter la répétition dans la déclaration de type via les alias.
function first<Type> (arg: Type[]): Type{
 return arg[0]
}
const aad = first(['test1', 'test3', 3])
const aa = first(['test1', 'test3', 'test2'])

// 
type DateString = string
type Id = string | number
// type EventListener = (e: Event) => void 