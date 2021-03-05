events.listen('recipes', (event) => {
    var data = {
        recipes: [
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
    });
});
