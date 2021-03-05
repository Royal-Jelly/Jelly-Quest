events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: Item.of('#forge:dusts/hop_graphite', 8),
                output: '#forge:ingots/hop_graphite',
                mold: Item.of('kubejs:mold_ingot')
            },
            {
                input: Item.of('#forge:dusts/hop_graphite', 32),
                output: Item.of('immersiveengineering:graphite_electrode', {Damage:0}),
                mold: Item.of('immersiveengineering:mold_rod')
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            mod: 'immersiveengineering',
            type: 'immersiveengineering:metal_press'
        });
        event.remove({
            output: recipe.input,
            mod: 'immersiveengineering',
            type: 'immersiveengineering:metal_press'
        });
        event.recipes.immersiveengineering.metal_press(recipe.output, recipe.input, recipe.mold).energy(2400);
    });
});
