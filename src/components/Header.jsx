const Header = ({ search, onInputChange, onSearchClick, loggedIn }) => {
    return (
        <div className="jumbotron">
            <h5 className="display-1">Geniobits Private Limited assessment</h5>
            {loggedIn && (
                <div className="input-group w-50 mx-auto">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search Your Recipe..."
                        value={search}
                        onChange={onInputChange}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-dark"
                            onClick={onSearchClick}
                        >
                            Search Recipe
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
