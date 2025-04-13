// // Solicitar los números al usuario
// const numero1 = parseInt(prompt("Ingrese el primer número:"));
// const numero2 = parseInt(prompt("Ingrese el segundo número:"));

// // Solicitar las operaciones al usuario
// let suma = prompt("¿Quieres sumar? (si/no)");
// let resta = prompt("¿Quieres restar? (si/no)");

// // Declarar la función para realizar los cálculos
// const calcular = (numero1, numero2, suma, resta) => {
//   if (suma === "si") {
//     let resultadoSuma = numero1 + numero2;
//     alert(`La suma de ${numero1} + ${numero2} es: ${resultadoSuma}`);
//   }

//   if (resta === "si") {
//     let resultadoResta = numero1 - numero2;
//     alert(`La resta de ${numero1} - ${numero2} es: ${resultadoResta}`);
//   }

//   if (suma !== "si" && resta !== "si") {
//     alert("No se realizó ninguna operación.");
//   }
// };

// // Llamar a la función
// calcular(numero1, numero2, suma, resta);

// class Persona {
//     constructor(nombre, apellido) {
//         this._nombre = nombre;
//         this._apellido = apellido;
//     }

//     // Getter para obtener el nombre completo
//     get nombre() {
//         return this._nombre; // Devuelve solo el nombre
//     }

//     // Getter para obtener el apellido
//     get apellido() {
//         return this._apellido; // Devuelve solo el apellido
//     }

//     // Setter para modificar el nombre con validación
//     set nombre(nuevoNombre) {
//         if (nuevoNombre.length >= 3) {
//             this._nombre = nuevoNombre;
//         } else {
//             console.log("Nombre muy corto");
//         }
//     }

//     // Setter para modificar el apellido con validación
//     set apellido(nuevoApellido) {
//         if (nuevoApellido.length >= 3) { // Corregido "lenght" a "length"
//             this._apellido = nuevoApellido;
//         } else {
//             console.log("Apellido muy corto");
//         }
//     }
// }

// // Crear una instancia de la clase Persona
// const p = new Persona("Ana", "Lopez");

// // Mostrar el nombre y apellido iniciales
// console.log(p.nombre, p.apellido); // Ana Lopez
// document.write(p.nombre, p.apellido); // Ana Lopez

// // Intentar cambiar el nombre y apellido con valores inválidos
// p.nombre = "Al"; // Nombre muy corto
// p.apellido = "Lol"; // Apellido muy corto

// // Mostrar el nombre y apellido después de los intentos de cambio
// console.log(p.nombre, p.apellido); // Ana Lopez



//     class Rectangulo {
//         constructor(alto, ancho) {
//         this.alto = alto;
//         this.ancho = ancho;
//         }
//         // Getter
//         get area() {
//             let calculo = this.calcArea() + this.esCuadrado(); // Declarar la variable calculo
//             return calculo;
//         }
//         // Método
//         calcArea() {
//         return this.alto * this.ancho;
//         }
//         esCuadrado(){
//             if (this.alto === this.ancho) {
//                 return " Es un cuadrado";
//             } else if (this.alto > this.ancho || this.alto<this.ancho){
//                 return " Es un rectángulo";
//             }
//             else {
//                 return "No es un cuadrado ni un rectángulo";
//             }
//         }

//     }
    
// let lado1=parseInt(prompt("Ingrese el lado 1:"));
// let lado2=parseInt(prompt("Ingrese el lado 2:"));


//     const figura = new Rectangulo(lado1, lado2);
    
//     console.log(figura.area); // 100
    


    // class Personaje {
    //     constructor(name, energy, ataque) {
    //         this.name = name;
    //         this.energy = energy;
    //         this.ataque = ataque;
    //     }
    
    
    //     get status() {
    //     let ejecutar = '⭐'.repeat(this.energy) +"     El personaje es ->"+ this.name +"<br>"+ "El daño a causar es ->   "+ this.ataque +"<br>";   
    //     let dañoRecibido=this.energy - this.ataque; 
    //         return ejecutar + "la energia restante es de:   " + dañoRecibido; 
            
    //     }
    // }
     
    // const mario = new Personaje(prompt("Ingrese el nombre del personaje"), parseInt(prompt("Ingrese la energía del personaje")), parseInt(prompt("Ingresa daño a causar a tu personaje")));
    // document.write(mario.status); 
    


        // class Animal {
        //     constructor() {
        //     console.log("Ha nacido un pato. 🦆");
        //     }
        
        //     hablar() {
        //     return "Cuak";
        //     }
        // }
        
        // // Creación de instancia/objeto
        // const pato = new Animal();  // 'Ha nacido un pato' (Se ha ejecutado implicitamente el constructor)
        // pato.hablar();              // 'Cuak' (Se ha ejecutado explícitamente el método hablar)
        // console.log(pato.hablar()); // 'Cuak' (Se ha ejecutado explícitamente el método hablar)

        class Animal {
            constructor() {
            console.log("Ha nacido un pato. 🦆");
            }
        
            hablar() {
            return "Cuak";
            }
        }
        
        // Creación de instancia/objeto
        const pato = new Animal();  // 'Ha nacido un pato' (Se ha ejecutado implicitamente el constructor)
        pato.hablar();              // 'Cuak' (Se ha ejecutado explícitamente el método hablar)
        console.log(pato.hablar()); // 'Cuak' (Se ha ejecutado explícitamente el método hablar)