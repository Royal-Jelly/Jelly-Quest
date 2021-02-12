events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'quark:glowshroom',
                results: [{ item: 'quark:glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'quark:glowshroom' }
            },
            {
                input: 'minecraft:crimson_fungus',
                results: [{ item: 'minecraft:crimson_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:crimson_nylium' }, { item: 'minecraft:warped_nylium' }],
                render: { type: 'generic', block: 'minecraft:crimson_fungus' }
            },
            {
                input: 'minecraft:warped_fungus',
                results: [{ item: 'minecraft:warped_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:crimson_nylium' }, { item: 'minecraft:warped_nylium' }],
                render: { type: 'generic', block: 'minecraft:warped_fungus' }
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.cloche({
            type: 'immersiveengineering:cloche',
            results: recipe.results,
            input: { item: recipe.input },
            soil: recipe.soils,
            time: recipe.time,
            render: recipe.render
        });
    });
});
