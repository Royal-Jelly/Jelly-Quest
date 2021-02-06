events.listen('item.tags', function (event) {
    var items = [
        'botania:elementium_pickaxe',
        'botania:glass_pickaxe',
        'botania:manasteel_pick',
        'botania:terra_pick',
        'immersiveengineering:pickaxe_steel',
        'minecraft:diamond_pickaxe',
        'minecraft:golden_pickaxe',
        'minecraft:iron_pickaxe',
        'minecraft:netherite_pickaxe',
        'minecraft:stone_pickaxe',
        'minecraft:wooden_pickaxe',
        'bloodmagic:soulpickaxe'
    ];
    event.get('forge:tools').add(items);
    event.get('forge:tools/pickaxe').add(items);
});
