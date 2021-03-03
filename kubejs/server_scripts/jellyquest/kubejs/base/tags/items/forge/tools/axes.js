events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_axe',
        'botania:manasteel_axe',
        'botania:terra_axe',
        'immersiveengineering:axe_steel',
        'minecraft:diamond_axe',
        'minecraft:golden_axe',
        'minecraft:iron_axe',
        'minecraft:netherite_axe',
        'minecraft:stone_axe',
        'minecraft:wooden_axe'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/axe').add(items);
});
