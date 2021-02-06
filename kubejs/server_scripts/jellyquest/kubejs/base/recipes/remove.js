events.listen('recipes', function (event) {
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:stonecutting', input: '#forge:chunks'});

    event.remove({ input: 'emendatusenigmatica:enigmatic_hammer'});
    event.remove({ output: 'emendatusenigmatica:enigmatic_hammer'});

    event.remove({ input: 'immersiveengineering:wirecutter'});

    event.remove({ mod: 'coins'});

    var outputRemovals = [
        'create:crushing/obsidian',

        'craftingstation:crafting_station',

        'akashictome:tome',

        'minecraft:sticky_piston'
    ];

    var idRemovals = [

        'bloodmagic:smelting/ingot_netherite_scrap',

        'botania:fertilizer_dye',

        'create:mechanical_crafting/integrated_circuit',
        'create:pressing/lapis_block',
        'create:fill_minecraft_bucket_with_create_honey',

        'engineersdecor:dependent/slag_brick_block_recipe',

        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',

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
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveengineering',
        type: 'immersiveengineering:metal_press'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveposts'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_gear/',
        mod: 'immersiveengineering'
    });

    event.remove({
        input: '#forge:ores',
        mod: 'create',
        type: 'create:milling'
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
