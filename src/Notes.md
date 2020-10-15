*Inside of a JS expression {{}} you can use the template literals.

-Containers: should have all the logic. 

-Function Components - deals with the look of things


TROUBLESHOOTING QUESTIONS:
10/14: 
1. Is my async for faves and servings correct?
2. I want the servings search to only search from the results of the favorites search. So
that means that it will not be fetching - it will really use the data from the faveRecipeResults and filter that data. So probably we are not fetching at all for the servings search form. We are 
only taking the 'faveRecipeData' and putting it through a filter by size, using <,>,=

FAVORITES:
BACKEND--
CONTROLLER--
1. CREATE- to like
2. DELETE- to unlike
3. INDEX- to list



1. FavoritesSearch.js: Fetch recipes from the favorites table according to search query.
    a. This will be nearly identical to the recipeSearchAsync.js file.
2. ServingsSearch: Fetch and sort recipes from favorites table and sort for *the size needed*, whether small, med, lg, or party.
    a. If user clicked "small" button, then the frontend will do an
        if/then statement to only grab and present the small size
        recipes to the user on the favorites page.
