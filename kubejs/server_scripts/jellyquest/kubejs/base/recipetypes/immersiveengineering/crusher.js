events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:netherrack',
                output: item.of('create:cinder_flour', 2),
                secondary: [item.of('create:cinder_flour').chance(0.1)]
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            mod: 'immersiveengineering',
            type: 'immersiveengineering:crusher'
        });
        event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
    });
});
