events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_shovel',
        'botania:manasteel_shovel',
        'immersiveengineering:shovel_steel',
        'minecraft:diamond_shovel',
        'minecraft:golden_shovel',
        'minecraft:iron_shovel',
        'minecraft:netherite_shovel',
        'minecraft:stone_shovel',
        'minecraft:wooden_shovel'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/shovel').add(items);
});
