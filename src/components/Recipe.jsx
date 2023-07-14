import RecipeItem from "./RecipeItem";

const Recipe = ({ recipes, loggedIn, onSaveRecipe }) => {
    return (
        <div className="card-columns">
            {recipes.map((recipe) => (
                <RecipeItem
                    key={Math.random() * 100}
                    name={recipe.recipe.label}
                    image={recipe.recipe.image}
                    ingredientLines={recipe.recipe.ingredientLines}
                    onSaveRecipe={onSaveRecipe}
                    showSaveButton={loggedIn}
                />
            ))}
        </div>
    );
};

export default Recipe;
