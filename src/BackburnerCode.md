***Presentational code:
1) How to display infinite scroll of the recipe thumbnails on the display search results.

<div className="row">
      { props.recipe.map((recipe) => {
        return (
          <div key={recipe.title} className="col-md-4" style={{ marginBottom:"2rem" }}>
            <div className="recipes__box">
              <img 
              className="recipe__box-img"  
              src={recipe.image_url} 
              alt={recipe.title}/>
            <div className="recipe__text">
            <h5 className="recipes__title">
              { recipe.title.length < 20 ? '${recipe.title}' : '${recipe.title.substring(0, 25)}...'}
            </h5>
          </div>

            <button className="recipe_buttons">
              <Link to={{ 
                pathname: '/recipe/${recipe.recipe_id}',
                state: { recipe: recipe.title }
                }}>
                  View Recipe
              </Link>
            </button>
          </div>
        </div>
        );
      })}
    </div>