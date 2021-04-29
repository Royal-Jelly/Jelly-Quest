events.listen('recipes', function (event) {
    //event.replaceInput({mod: 'create'}, '#minecraft:planks', '#forge:treated_wood')
    //event.replaceInput({mod: 'create'}, '#minecraft:buttons', '#forge:treated_wood_slab')

    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');

    colors.forEach((color) => {
        var dyeTag = `#forge:dyes/${color}`;

        // Replaces recipes not using forge:dyes tag for inputs
        event.replaceInput({}, `minecraft:${color}_dye`, dyeTag);

        event.remove({
            id: `minecraft:${color}_carpet_from_white_carpet`
        });
        event.shaped(Item.of(`minecraft:${color}_carpet`, 3), ['WW'], {
            W: `minecraft:${color}_wool`
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass_pane`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass_pane',
            D: dyeTag
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass',
            D: dyeTag
        });

        ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'].forEach(
            (blockName) => {
                var itemTag = `#forge:${blockName}`;
                var block = `minecraft:${color}_${blockName}`;

                if (blockName === 'stained_glass_pane') {
                    event.remove({ id: `${block}_from_glass_pane` });
                } else {
                    event.remove({ id: block });
                }

                event.shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                    S: itemTag,
                    D: dyeTag
                });
                event.shapeless(Item.of(block, 1), [dyeTag, itemTag]);
            }
        );
        event.shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
            dyeTag,
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel'
        ]);
    });
    var data = {
        recipes: [
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'brass',
                items: [
                    'minecraft:clock'
                ]
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'aluminum',
                items: [
                    'immersiveengineering:conveyor_splitter',
                    'immersiveengineering:conveyor_vertical',
                    'immersiveengineering:conveyor_basic',
                    'immersiveengineering:current_transformer',
                    'immersiveengineering:transformer_hv',
                    'immersiveengineering:transformer',
                    'immersiveengineering:dynamo',
                    'immersiveengineering:furnace_heater',
                    'immersiveengineering:toolupgrade_drill_lube',
                    'cookingforblockheads:preservation_chamber',
                    'minecraft:compass',
                    'minecraft:piston'                ]
            },
            {
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'copper',
                items: [
                    'immersiveengineering:charging_station',
                    'cookingforblockheads:heating_unit'                ]
            },
            {
                type: 'nuggets',
                replace: 'gold',
                replaceWith: 'silver',
                items: ['botania:spark']
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                '#forge:' + recipe.type + '/' + recipe.replaceWith
            );
        });
    });
});
