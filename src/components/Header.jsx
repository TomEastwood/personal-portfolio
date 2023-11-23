import "../styles/header.css";
import crosshair from "../assets/crosshair.svg";

export default function Header() {

    return (
        <header className = "header-container">
            <section className = "title">
                <h1>Tom Eastwood</h1>
            </section>
            <section className = "subtitle">
                <p>Front End Web Developer & Game Artist</p>
            </section>
            <section className = "icons">
            <img className= "crosshair" src= {crosshair} alt="crosshair" />
            </section>
        </header>
    )
}