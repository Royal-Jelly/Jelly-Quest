events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_chestplate',
        'botania:manasteel_chestplate',
        'botania:manaweave_chestplate',
        'botania:terrasteel_chestplate',
        'immersiveengineering:armor_faraday_chest',
        'immersiveengineering:armor_steel_chest',
        'minecraft:chainmail_chestplate',
        'minecraft:diamond_chestplate',
        'minecraft:golden_chestplate',
        'minecraft:iron_chestplate',
        'minecraft:leather_chestplate',
        'minecraft:netherite_chestplate',
        'alexsmobs:crocodile_chestplate'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/chest').add(items);
});
