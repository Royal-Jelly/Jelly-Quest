events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_leggings',
        'botania:manasteel_leggings',
        'botania:manaweave_leggings',
        'botania:terrasteel_leggings',
        'immersiveengineering:armor_faraday_legs',
        'immersiveengineering:armor_steel_legs',
        'minecraft:chainmail_leggings',
        'minecraft:diamond_leggings',
        'minecraft:golden_leggings',
        'minecraft:iron_leggings',
        'minecraft:leather_leggings',
        'minecraft:netherite_leggings',
        'alexsmobs:centipede_leggings'
    ];
    event.get('forge:armor').add(items);
    event.get('forge:armor/leggings').add(items);
});
