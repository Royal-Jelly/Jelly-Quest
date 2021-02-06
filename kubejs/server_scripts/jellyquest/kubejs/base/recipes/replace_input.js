events.listen('recipes', function (event) {
    event.replaceInput({}, 'mapperbase:raw_bitumen', '#forge:gems/bitumen');
    event.replaceInput({}, '#forge:fillet_knife', '#forge:tools/knife');
    event.replaceInput({}, '#farmersdelight:tools/knife', '#forge:tools/knife');
    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen');
    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');


    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    event.replaceInput({}, 'quark:tallow', '#forge:tallow');


    event.replaceInput(
        { id: 'dustrial_decor:iron_bar_trapdoor' },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );

    event.replaceInput(
        { id: 'bloodmagic:alchemytable/basic_cutting_fluid' },
        'minecraft:potion',
        item.of('minecraft:potion', { Potion: 'minecraft:water' })
    );

    event.replaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        ingredient.of('#forge:dusts/obsidian')
    );

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
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'aluminum',
                items: [
                    'bloodmagic:soulforge'
                ]
            },

            {
                type: 'storage_blocks',
                replace: 'iron',
                replaceWith: 'lead',
                items: [ 'bloodmagic:alchemicalreactionchamber']
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'bronze',
                items: [
                    'bloodmagic:alchemytable',
                    'bloodmagic:altar',
                    'bloodmagic:sacrificialdagger',
                    'bloodmagic:experiencebook',
                    'bloodmagic:soulforge',
                    'minecraft:clock'
                ]
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'copper',
                items: [
                    'mekanismgenerators:electromagnetic_coil',
                    'mekanism:energy_tablet',
                    'mininggadgets:upgrade_magnet',
                    'xnet:controller',
                    'thermal:rf_coil_xfer_augment',
                    'thermal:rf_coil_storage_augment',
                    'thermal:rf_coil_augment',
                    'thermal:rf_coil',
                    'rftoolsstorage:storage_scanner',
                    'rftoolsbuilder:shield_block1',
                    'pneumaticcraft:vortex_tube',
                    'pneumaticcraft:heat_sink',
                    'modularrouters:speed_upgrade',
                    'xnet:connector_blue',
                    'xnet:connector_red',
                    'xnet:connector_green'
                ]
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'silver',
                items: ['torchmaster:feral_flare_lantern', 'mekanism:teleportation_core', 'botania:mana_spreader']
            },
            {
                type: 'ingots',
                replace: 'gold',
                replaceWith: 'tin',
                items: ['pneumaticcraft:memory_stick']
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
                    'buildersaddition:arcade',
                    'minecraft:compass',
                    'minecraft:piston',
                    'engineersdecor:metal_bar'
                ]
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
                type: 'ingots',
                replace: 'iron',
                replaceWith: 'tin',
                items: ['bloodmagic:soulsnare']
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
                '#forge:' + recipe.type + '/' + recipe.replace,
                '#forge:' + recipe.type + '/' + recipe.replace + '_' + recipe.replaceWith
            );
        });
    });
});
