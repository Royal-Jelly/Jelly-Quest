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
                input: 'byg:sythian_fungus',
                results: [{ item: 'byg:sythian_fungus' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:sythian_fungus' }
            },
            {
                input: 'byg:green_mushroom',
                results: [{ item: 'byg:green_mushroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'minecraft:mycelium' }
            },
            {
                input: 'byg:weeping_milkcap',
                results: [{ item: 'byg:weeping_milkcap' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:weeping_milkcap' }
            },
            {
                input: 'byg:wood_blewit',
                results: [{ item: 'byg:wood_blewit' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:wood_blewit' }
            },
            {
                input: 'byg:black_puff',
                results: [{ item: 'byg:black_puff' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:black_puff' }
            },
            // No longer exists?
            // {
            //     input: 'byg:toadstool',
            // 	results: [{item: 'byg:toadstool'}],
            //     time: 480,
            //     soils: [{item: 'minecraft:mycelium'},{item: 'minecraft:podzol'}],
            // 	render: {type: 'generic', block: 'byg:toadstool'}
            // },
            {
                input: 'byg:death_cap',
                results: [{ item: 'byg:death_cap' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:death_cap' }
            },
            {
                input: 'byg:blue_glowshroom',
                results: [{ item: 'byg:blue_glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:blue_glowshroom' }
            },
            {
                input: 'byg:purple_glowshroom',
                results: [{ item: 'byg:purple_glowshroom' }],
                time: 480,
                soils: [{ item: 'minecraft:mycelium' }, { item: 'minecraft:podzol' }],
                render: { type: 'generic', block: 'byg:purple_glowshroom' }
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
            },
            {
                input: 'byg:shulkren_fungus',
                results: [{ item: 'byg:shulkren_fungus' }],
                time: 480,
                soils: [{ item: 'byg:shulkren_phylium' }],
                render: { type: 'generic', block: 'byg:shulkren_fungus' }
            },
            {
                input: 'byg:soul_shroom',
                results: [{ item: 'byg:soul_shroom' }],
                time: 480,
                soils: [{ item: 'byg:nylium_soul_sand' }],
                render: { type: 'generic', block: 'byg:soul_shroom' }
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
