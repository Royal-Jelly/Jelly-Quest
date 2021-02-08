events.listen('recipes', function (event) {
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

    event.remove({ output: '#quark:candles'});

    event.remove({ output: 'immersiveengineering:ingot_hop_graphite'});

    event.remove({ input: 'immersiveengineering:hammer'});
    event.remove({ input: 'immersiveengineering:wirecutter'});

    event.remove({type: 'minecraft:shaped', input: 'twilightforest:fiery_tears'});
    event.remove({type: 'minecraft:shaped', input: 'twilightforest:fiery_blood'});

    event.remove({ mod: 'coins'});

    var outputRemovals = [
        'create:crushing/obsidian',

        'create:crushing/obsidian',

        'minecraft:sticky_piston',
        'minecraft:stonecutter'
    ];

    var idRemovals = [

        'bloodmagic:smelting/ingot_netherite_scrap',

        'create:mechanical_crafting/integrated_circuit',
        'create:pressing/lapis_block',
        'create:fill_minecraft_bucket_with_create_honey',

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

    event.remove({ type: 'pedestals:pedestal_crushing', output: '#forge:dyes' });
    event.remove({ type: 'create:milling', output: '#forge:dyes' });
    event.remove({ type: 'create:crushing', output: '#forge:dyes' });
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
