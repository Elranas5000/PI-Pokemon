Redux es un manejador de estados.
Estos estados le dicen a react cuando debe renderizar componentes.
Este estado se encuentra en un solo lugar, en este caso en redux.

Consiste en 3 cosas:

STORE:
Donde se almacena el estado, que es un objeto {}

REDUCER:
Esto se encuentra dentro de la Store. Aqui el estado es declarado, puede haber varios reducers.

ACTIONS:
Son funciones, se encargan de ejecutarse para enviar informacion a la Store.

Ahora bien, el flujo de trabajo es el siguiente:

El estado inicialmente viajará a un componente de react. Este componente va a solicitar informacion por medio de una Action. Luego, la Action llegará a la store y por consecuente, al reducer.
Dependiendo del tipo de funcion que se haya ejecutado, el reducer decidirá que hacer con ella (si dejarla pasar o no). En dado caso de que esa Action tenga el valor necesario para acceder al estado, el reducer transformará el estado y lo devolverá todo aquel componente que se encuentre suscrito a dicho estado.
