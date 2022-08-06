# Prueba técnica Leganux
- En la carpeta Ejercicio 1 se encuentran las propuestas de solución para el ejercicio de mismo nombre.
- En la carpeta Ejercicio 2 se encuentra la propuesta de solución para el ejercicio de mismo nombre.

## Ejercicio 1a:

En (Javascript vanilla o Typescript) realice el siguiente programa, documente el proceso de
solución(descripción), algoritmo(los pasos que realiza el programa) y documente las pruebas
unitarias realizadas al programa. Realice una calculadora de operaciones básicas que resuelva las operaciones dada una
cadena. Por ejemplo: Si el usuario introduce 4-7+8+9/2*3 el programa deberá mostrar como
resultado 18.5

Recuerde:
- Deberá realizar las 4 operaciones básicas en la misma cadena suma +, resta -,
- Multiplicación *, División /
- La longitud máxima a ingresar de la cadena serán 30 caracteres.
- Se deberán respetar la prioridad de los operadores (/,*,+-).
- Punto extra si se utilizan paréntesis para agrupamiento y multiplicación
- Punto Extra si se realiza potencia o raíz cuadrada
- Punto Extra si se realizan operaciones de 2 o mas números (23-14+123/3*49) = 2018
- Queda prohibido utilizar la función EVAL o equivalentes, o en su defecto incluir
- Alguna librería que realice todo el proceso.

### R/ El archivo index.html fue creado para colaborar con el archivo Test1.js donde se encuentra implementada la solución para el ejercicio 1a:

## Ejercicio 1b:
Una de las tiendas en México ofrece cupones de descuento basados en un problema
desconcertante. Hay N etiquetas donde cada etiqueta tiene un valor denotado por va[i].
Un cliente debe elegir el etiquetas de tal manera que la suma de los valores sea par.
El objetivo es encontrar la máxima suma posible de valores de etiquetas que se pueden elegir.

Nota:
- Se garantiza que hay al menos una etiqueta con un valor par.
- Las etiquetas pueden tener valores positivos o negativos.
- Puede ser posible elegir ninguna etiqueta en absoluto

Ejemplo: 
- Los valores de etiqueta son val = [2, 3, 6, -5, 10, 1, 1]. 
- Considere algunas de las siguientes etiquetas elegidas y sus correspondientes sumas:

![image](https://user-images.githubusercontent.com/80186443/183233128-3d4729f3-9895-47d1-abac-9a82c9c9e035.png)

- Las etiquetas [2, 3, 6, 10, 1] suman 22 que es par y es el máximo posible. Por lo tanto, la respuesta es 22

En (JavaScript Vanilla o TypeScript) realice una función que dada una serie de numero en un
array calcule el caso mostrado en el ejemplo superior. Debe retornar solo el valor entero.

### R/En el archivo Test2.js se encuentra implementada la propuesta de solución para este ejercicio. (para comprobar distintos valores, cambiar el arreglo en el console.log)

## Ejercicio 2:

Con ayuda de NodeJS, ExpressJS y Moongose Desarrolle una API-REST CRUD que permita
- Crear
- Listar
- Actualizar
- Eliminar

Los elementos de los 2 modelos mostrados a continuación, posteriormente cree un formulario
en HTML (vista) donde integre el API-REST para crear y listar los elementos del mismo.

Modelo 1: ClassRoom
- Class:string
- Order:number
- numberOfStudents:number
- active:boolean (default true)
- students: (list of referenced students)

Modelo 2: Student
- name:string
- age:number
- active:boolean (default false)

### R/En la carpeta Ejercicio 2 se encuentra implementada la propuesta de solución al ejercicio.
