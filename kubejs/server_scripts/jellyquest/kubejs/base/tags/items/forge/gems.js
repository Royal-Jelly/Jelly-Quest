events.listen('item.tags', function (event) {
    var gems = 'forge:gems';
    var gems_ender = gems + '/ender';

    event
        .get(gems)
        .add('minecraft:ender_pearl')
        .add('immersivepetroleum:bitumen')
    event.add(gems + '/coal_coke', [
        'emendatusenigmatica:coke_gem',
        'immersiveengineering:coal_coke'
    ]);
    event.get(gems_ender).add('minecraft:ender_pearl');
    event.get('forge:gems/charcoal').add('minecraft:charcoal');
    event
        .get('forge:gems/bitumen')
        .add('immersivepetroleum:bitumen')
});
