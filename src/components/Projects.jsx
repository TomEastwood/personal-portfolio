import brewery from '../assets/brewery.jpg';
import dashboard from '../assets/dashboard.png';
import '../styles/projects.css';

export default function Projects () {
    return (
        <section className = "project-container">
            <div className = "project-section-title">
                <h1>Projects</h1>
            </div>
            <div className = "descriptions">
                <p> Here you will find some of my recent projects that I have been working on, feel free to click any of the titles or images provided 
                    to learn more about a specific project.
                </p>
            </div>
            <div className = "projects-list">
                <div className = "project">
                    <div className = "project-image">
                        <img src = {brewery} alt = "brewery" />
                    </div>
                    <div className = "project-title">
                        <h3>JSDOM Brewery API</h3>
                    </div>
                    <div className = "project-description">
                        <p>
                            Using API requests, I created a website that displays information about breweries in the United States.
                            The user can search for a brewery by name, city, or state. The user can also filter the results by brewery type.
                        </p>
                    </div>
                </div>
                <div className = "project">
                    <div className = "project-image">
                        <img src = {dashboard} alt = "dashboard" />
                    </div>
                    <div className = "project-title">
                        <h3>React Dashboard</h3>
                    </div>
                    <div className = "project-description">
                        <p>
                            Using React and React Router, I created a dashboard that displays information about a user's account.
                            The user can navigate to different pages using the navigation bar at the side of the page, view different
                            posts and their respective comments, and view an individual post and its comments.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}