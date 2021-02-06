events.listen('item.tags', function (event) {
    var items = [
        'botania:crystal_bow',
        'botania:flare_chakram',
        'botania:livingwood_bow',
        'botania:thorn_chakram',
        'immersiveengineering:chemthrower',
        'immersiveengineering:railgun',
        'immersiveengineering:revolver',
        'minecraft:bow',
        'minecraft:crossbow',
        'minecraft:trident',
        'alexsmobs:blood_sprayer'
    ];
    event.get('forge:weapons').add(items);
    event.get('forge:weapons/ranged').add(items);
});
