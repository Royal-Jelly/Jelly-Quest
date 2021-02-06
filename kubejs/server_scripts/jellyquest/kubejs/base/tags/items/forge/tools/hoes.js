events.listen('item.tags', function (event) {
    var items = [
        'immersiveengineering:hoe_steel',
        'minecraft:diamond_hoe',
        'minecraft:golden_hoe',
        'minecraft:iron_hoe',
        'minecraft:netherite_hoe',
        'minecraft:stone_hoe',
        'minecraft:wooden_hoe'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/hoe').add(items);
});
