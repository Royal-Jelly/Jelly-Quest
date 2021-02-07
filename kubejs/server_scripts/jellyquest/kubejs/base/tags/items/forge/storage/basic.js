events.listen('item.tags', function (event) {
    var items = [
        'cookingforblockheads:cabinet',
        'cookingforblockheads:corner',
        'cookingforblockheads:counter',
        'cookingforblockheads:fruit_basket',
        'cookingforblockheads:hanging_corner',
        'cookingforblockheads:spice_rack',
        'cookingforblockheads:tool_rack',
        //'engineersdecor:labeled_crate',
        'farmersdelight:basket',
        'farmersdelight:oak_pantry',
        'farmersdelight:birch_pantry',
        'farmersdelight:spruce_pantry',
        'farmersdelight:jungle_pantry',
        'farmersdelight:acacia_pantry',
        'farmersdelight:dark_oak_pantry',
        'farmersdelight:crimson_pantry',
        'farmersdelight:warped_pantry',
        'immersiveengineering:crate',
        'immersiveengineering:minecart_reinforcedcrate',
        'immersiveengineering:minecart_woodencrate',
        'immersiveengineering:reinforced_crate',
        /*
        'ironchest:copper_chest',
        'ironchest:crystal_chest',
        'ironchest:diamond_chest',
        'ironchest:dirt_chest',
        'ironchest:gold_chest',
        'ironchest:iron_chest',
        'ironchest:obsidian_chest',
        'ironchest:silver_chest',
        */
        'minecraft:barrel',
        'minecraft:black_shulker_box',
        'minecraft:blue_shulker_box',
        'minecraft:brown_shulker_box',
        'minecraft:chest',
        'minecraft:chest_minecart',
        'minecraft:cyan_shulker_box',
        'minecraft:dispenser',
        'minecraft:dropper',
        'minecraft:ender_chest',
        'minecraft:gray_shulker_box',
        'minecraft:green_shulker_box',
        'minecraft:light_blue_shulker_box',
        'minecraft:light_gray_shulker_box',
        'minecraft:lime_shulker_box',
        'minecraft:orange_shulker_box',
        'minecraft:pink_shulker_box',
        'minecraft:purple_shulker_box',
        'minecraft:red_shulker_box',
        'minecraft:shulker_box',
        'minecraft:trapped_chest',
        'minecraft:white_shulker_box',
        'minecraft:yellow_shulker_box',
        'quark:acacia_chest',
        'quark:acacia_trapped_chest',
        'quark:birch_chest',
        'quark:birch_trapped_chest',
        'quark:crimson_chest',
        'quark:crimson_trapped_chest',
        'quark:dark_oak_chest',
        'quark:dark_oak_trapped_chest',
        'quark:jungle_chest',
        'quark:jungle_trapped_chest',
        'quark:mushroom_chest',
        'quark:mushroom_trapped_chest',
        'quark:nether_brick_chest',
        'quark:nether_brick_trapped_chest',
        'quark:oak_chest',
        'quark:oak_trapped_chest',
        'quark:prismarine_chest',
        'quark:prismarine_trapped_chest',
        'quark:purpur_chest',
        'quark:purpur_trapped_chest',
        'quark:spruce_chest',
        'quark:spruce_trapped_chest',
        'quark:warped_chest',
        'quark:warped_trapped_chest',
        'tetra:rack'
    ];

    event.get('forge:storage').add(items);
    event.get('forge:storage/basic').add(items);
});