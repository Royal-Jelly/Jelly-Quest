events.listen('recipes', function (event) {
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

    event.remove({ output: 'minecraft:bone_meal', input: 'architects_palette:withered_bone'})

    event.remove({ output: 'architects_palette:withered_bone_block', input: 'architects_palette:withered_bone'})
    event.remove({ output: 'architects_palette:withered_bone', input: 'architects_palette:withered_bone_block'})


    event.remove({ output: '#forge:dusts', input: 'immersiveengineering:hammer'})

    //event.remove({ output: '#quark:candles'});

    //event.remove({ output: 'immersiveengineering:ingot_hop_graphite'});

    //event.remove({ input: 'immersiveengineering:hammer'});
    //event.remove({ input: 'immersiveengineering:wirecutter'});

    //event.remove({type: 'minecraft:shaped', input: 'twilightforest:fiery_tears'});
    //event.remove({type: 'minecraft:shaped', input: 'twilightforest:fiery_blood'});

    event.remove({ mod: 'coins'});

    var outputRemovals = [
        //'create:crushing/obsidian',

        'immersiveengineering:ingot_hop_graphite',

        '#quark:candles'
    ];

    var idRemovals = [
        //'create:mechanical_crafting/integrated_circuit',
        //'create:pressing/lapis_block',
        //'create:fill_minecraft_bucket_with_create_honey',

        'immersiveengineering:crafting/hammercrushing_aluminum',
        'immersiveengineering:crafting/hammercrushing_ardite',
        'immersiveengineering:crafting/hammercrushing_cobalt',
        'immersiveengineering:crafting/hammercrushing_copper',
        'immersiveengineering:crafting/hammercrushing_gold',
        'immersiveengineering:crafting/hammercrushing_iron',
        'immersiveengineering:crafting/hammercrushing_lead',
        'immersiveengineering:crafting/hammercrushing_nickel',
        'immersiveengineering:crafting/hammercrushing_osmium',
        'immersiveengineering:crafting/hammercrushing_platinum',
        'immersiveengineering:crafting/hammercrushing_silver',
        'immersiveengineering:crafting/hammercrushing_tin',
        'immersiveengineering:crafting/hammercrushing_tungsten',
        'immersiveengineering:crafting/hammercrushing_uranium',
        'immersiveengineering:crafting/hammercrushing_zinc',

        'immersiveengineering:metalpress/electrode',

        'quark:building/crafting/tallow_from_block',
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    global.disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:crushing'
    });

    //event.remove({ type: 'pedestals:pedestal_crushing', output: '#forge:dyes' });
    //event.remove({ type: 'create:milling', output: '#forge:dyes' });
    //event.remove({ type: 'create:crushing', output: '#forge:dyes' });
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
