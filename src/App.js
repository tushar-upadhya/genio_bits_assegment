import axios from "axios";

import { useState, useEffect } from "react";

import "./App.css";

import Recipe from "./components/Recipe";
import Header from "./components/Header";
import Authentication from "./components/Authentication";
import SavedRecipes from "./components/SavedRecipes";

function App() {
    const [search, setSearch] = useState("");

    const [recipes, setRecipes] = useState([]);

    const [loggedIn, setLoggedIn] = useState(false);

    const [savedRecipes, setSavedRecipes] = useState([]);

    const APP_ID = "82e453da";
    const APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

    useEffect(() => {
        getRecipes();
    }, []);

    useEffect(() => {
        if (loggedIn) {
            const savedRecipesData = localStorage.getItem("savedRecipes");
            if (savedRecipesData) {
                setSavedRecipes(JSON.parse(savedRecipesData));
            }
        } else {
            setSavedRecipes([]);
        }
    }, [loggedIn]);

    const getRecipes = async () => {
        const res = await axios.get(
            `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        setRecipes(res.data.hits);
    };

    const onInputChange = (e) => {
        setSearch(e.target.value);
    };

    const onSearchClick = () => {
        getRecipes();
    };

    const handleSignUp = (username, password) => {
        const newUser = { username, password };
        localStorage.setItem("user", JSON.stringify(newUser));

        setLoggedIn(true);
    };

    const handleLogin = (username, password) => {
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        if (
            loggedInUser &&
            loggedInUser.username === username &&
            loggedInUser.password === password
        ) {
            setLoggedIn(true);
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
    };

    const handleSaveRecipe = (recipe) => {
        setSavedRecipes((prevSavedRecipes) => [...prevSavedRecipes, recipe]);

        localStorage.setItem(
            "savedRecipes",
            JSON.stringify([...savedRecipes, recipe])
        );
    };

    const handleRemoveRecipe = (recipe) => {
        setSavedRecipes((prevSavedRecipes) =>
            prevSavedRecipes.filter(
                (savedRecipe) => savedRecipe.label !== recipe.label
            )
        );

        localStorage.setItem(
            "savedRecipes",
            JSON.stringify(
                savedRecipes.filter(
                    (savedRecipe) => savedRecipe.label !== recipe.label
                )
            )
        );
    };

    return (
        <div className="App">
            <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}
                loggedIn={loggedIn}
                onLogout={handleLogout}
            />
            <div className="container">
                {!loggedIn ? (
                    <Authentication
                        onSignUp={handleSignUp}
                        onLogin={handleLogin}
                        onLogout={handleLogout}
                    />
                ) : (
                    <>
                        <SavedRecipes
                            savedRecipes={savedRecipes}
                            onRemoveRecipe={handleRemoveRecipe}
                        />
                        <Recipe
                            recipes={recipes}
                            loggedIn={loggedIn}
                            onSaveRecipe={handleSaveRecipe}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
