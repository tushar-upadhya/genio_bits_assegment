const RecipeItem = ({
    name,
    image,
    ingredientLines,
    onSaveRecipe,
    showSaveButton,
}) => {
    const handleSaveClick = () => {
        onSaveRecipe({ name, image, ingredientLines });
    };

    return (
        <div className="card py-2 text-center">
            <img
                src={image}
                className="img-fluid w-50 mx-auto rounded-circle"
                alt="Recipe"
            />
            <div className="card-body">
                <h5>{name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                {ingredientLines &&
                    ingredientLines.map((ingredient, index) => (
                        <li className="list-group-item" key={index}>
                            {ingredient}
                        </li>
                    ))}
            </ul>
            {showSaveButton && (
                <button className="btn btn-primary" onClick={handleSaveClick}>
                    Save Recipe
                </button>
            )}
        </div>
    );
};

export default RecipeItem;
