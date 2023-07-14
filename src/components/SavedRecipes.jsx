import RecipeItem from "./RecipeItem";

const SavedRecipes = ({ savedRecipes, onRemoveRecipe }) => {
    return (
        <div>
            <h2>Saved Recipes</h2>
            {savedRecipes.length === 0 ? (
                <p>No saved recipes</p>
            ) : (
                <div className="card-columns">
                    {savedRecipes.map((recipe) => (
                        <RecipeItem
                            key={recipe.label}
                            name={recipe.label}
                            image={recipe.image}
                            ingredientLines={recipe.ingredientLines}
                            onSaveRecipe={() => onRemoveRecipe(recipe)}
                            showSaveButton={false}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SavedRecipes;
