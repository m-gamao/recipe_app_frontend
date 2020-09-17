import React from 'react'

const SearchResults = ({ recipes }) => {
    return (
        <>
            {/* BELOW CODE DISPLAYS THE SEARCH RESULTS**************************** */}
            {/* THE ONLY ATTRIBS WE'RE FETCHING IS THE LABEL, URL, AND IMAGE**************** */}
            {/* Line 57 is the link the user clicks to navigate to the single recipe they choose */}
            {recipes ? (
                <div id="recipes-container">
                {this.state.recipes.map((hit, index) => (
                    <div class="recipe-list" key={index}>
                    <h2>{hit.recipe.label}</h2>
                    <a href={hit.recipe.url} target="_blank">
                    <img src={hit.recipe.image} alt="recipe-thumbnail" />
                    </a>
                    </div>
                ))}
                </div>
            ) : (
                <p>Try searching for a recipe</p>
            )}
        </>
    )
}

export default SearchResults
