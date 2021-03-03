events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_sword',
        'botania:ender_dagger',
        'botania:manasteel_sword',
        'botania:star_sword',
        'botania:terra_sword',
        'botania:thunder_sword',
        'immersiveengineering:sword_steel',
        'minecraft:diamond_sword',
        'minecraft:golden_sword',
        'minecraft:iron_sword',
        'minecraft:netherite_sword',
        'minecraft:stone_sword',
        'minecraft:wooden_sword'
    ];
    event.get('forge:weapons').add(items);
    event.get('forge:weapons/melee').add(items);
});
