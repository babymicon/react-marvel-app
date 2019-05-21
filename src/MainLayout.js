import React from 'react';
import { Link, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import CharactersPage from './Pages/CharactersPage';
import './MainLayout.css' ;

const AboutPage = () => <div>This is an About Page</div>;
const NotFoundPage = () => <div>Not Found</div>;

const MainLayout = () => (
    <div className="wrap">
        <header className={"header"}>
            <p>Simple React App with Marvel API</p>
            <nav className={"nav"} c>
                <ul>
                    <li><Link to='/'>Characters |</Link></li>
                    <li><Link to='/about'>About |</Link></li>
                </ul>
            </nav>
        </header>
        <div className="container">
            <Switch>
                <Route path="/" exact component={CharactersPage} />
                <Route path="/about" component={AboutPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>

        <footer className={"footer"}>

        </footer>
    </div>
);

export default MainLayout;
