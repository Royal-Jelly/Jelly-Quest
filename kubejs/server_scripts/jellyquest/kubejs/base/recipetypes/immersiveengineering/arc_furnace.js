events.listen('recipes', (event) => {
    var data = {
        recipes: [
        ]
    };
    event.remove({id: 'immersiveengineering:arcfurnace/alloy_brass'})
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
    });
});
