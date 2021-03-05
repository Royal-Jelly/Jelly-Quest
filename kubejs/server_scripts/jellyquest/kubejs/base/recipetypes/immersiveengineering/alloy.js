events.listen('recipes', (event) => {
    var data = {
        recipes: [
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2);
    });
});
