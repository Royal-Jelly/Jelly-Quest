events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:netherrack',
                output: item.of('create:cinder_flour', 2),
                secondary: [item.of('create:cinder_flour').chance(0.1)]
            },
            {
                input: 'byg:pink_sandstone',
                output: item.of('byg:pink_sand', 2),
                secondary: [item.of('immersiveengineering:dust_saltpeter').chance(0.5)]
            },
            {
                input: 'byg:purple_sandstone',
                output: item.of('byg:purple_sand', 2),
                secondary: [item.of('immersiveengineering:dust_saltpeter').chance(0.5)]
            },
            {
                input: 'byg:blue_sandstone',
                output: item.of('byg:blue_sand', 2),
                secondary: [item.of('immersiveengineering:dust_saltpeter').chance(0.5)]
            },
            {
                input: 'byg:white_sandstone',
                output: item.of('byg:white_sand', 2),
                secondary: [item.of('immersiveengineering:dust_saltpeter').chance(0.5)]
            },
            {
                input: 'byg:black_sandstone',
                output: item.of('byg:black_sand', 2),
                secondary: [item.of('immersiveengineering:dust_saltpeter').chance(0.5)]
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
