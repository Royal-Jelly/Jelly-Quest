events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:ores/nickel',
                output: item.of('emendatusenigmatica:nickel_dust', 2),
                secondary: [item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/gold',
                output: item.of('emendatusenigmatica:gold_dust', 2),
                secondary: [item.of('emendatusenigmatica:zinc_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/aluminum',
                output: item.of('emendatusenigmatica:aluminum_dust', 2),
                secondary: [item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/osmium',
                output: item.of('emendatusenigmatica:osmium_dust', 2),
                secondary: [item.of('emendatusenigmatica:tin_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/tin',
                output: item.of('emendatusenigmatica:tin_dust', 2),
                secondary: [item.of('emendatusenigmatica:osmium_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/zinc',
                output: item.of('emendatusenigmatica:zinc_dust', 2),
                secondary: [item.of('emendatusenigmatica:gold_dust').chance(0.1)]
            },
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
