import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  getPokemons } from "../../redux/actions";
import styles from "../home/home.module.css"
import Cards from "../../components/cards/cards"
import NavBar from "../../components/navBar/navBar"

function Home(){

    const dispatch = useDispatch()
    const allPokemons = useSelector((state)=>state.allPokemons)

    useEffect(()=>{
        dispatch(getPokemons())
        return (()=>{
            //aqui podria LIMPIAR el estado cuando salga de la pagina
        })
    }, [dispatch]) //el segundo parametro, un array de dependencias, decide en que momento quiero que se ejecute la funcion, en este caso cuando se haga el dispatch

    return(
        <div className={styles.container}>
            <h2 className={styles.title}>Home</h2>
            <NavBar/>
            <Cards allPokemons = {allPokemons} /> {/*Envio allPokemons como props */}
        </div>
    )
}

export default Home;