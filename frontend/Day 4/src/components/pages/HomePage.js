import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

export default function HomePage() {
    // Sample data for chess academies
    const chessAcademies = [
        {
            name: "Chess Guru Academy",
            photoUrl: "https://i2.wp.com/sanantonioreport.org/wp-content/uploads/2020/01/ScottBall_san-antonio-chess-tournament-dreamweek-dream-week-education-competition-1-18-2020-3.jpg?fit=2040%2C1360",
            link: "/chess-guru-academy"
        },
        {
            name: "Checkmate Chess Academy",
            photoUrl: "https://cdn.9sportz.com/webcontent/upload/fbphotos/566292588534202.jpg",
            link: "/checkmate-chess-academy"
        },
        {
            name: "Rising king academy",
            photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-zYQre-o9p2GPnw0ir3l1ozPGke-Dbr0MA&usqp=CAU",
            link: "/rising-king-academy"
        }
    ];

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Welcome to Gambit Paradise</h1>
            
            {/* Rendering all chess academies */}
            <div className="academies-section">
                {chessAcademies.map((academy, index) => (
                    <Link to={academy.link} key={index} className="academy-item-link">
                        <div className="academy-item">
                            <div className="academy-info">
                                <img src={academy.photoUrl} alt={academy.name} className="academy-photo" />
                                <p className="academy-name">{academy.name}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Link to="/">
                <button className="primary-button">Log Out</button>
            </Link>
        </div>
    );
}

