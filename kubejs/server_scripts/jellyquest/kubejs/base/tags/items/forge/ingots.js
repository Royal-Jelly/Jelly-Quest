events.listen('item.tags', function (event) {
    event.get('forge:ingots')
         .add('immersiveengineering:ingot_aluminum')
         .add('immersiveengineering:ingot_lead')
         .add('immersiveengineering:ingot_silver')
         .add('immersiveengineering:ingot_nickel')
         .add('immersiveengineering:ingot_uranium')
         .add('immersiveengineering:ingot_constantan')
         .add('immersiveengineering:ingot_electrum')
         .add('immersiveengineering:ingot_hop_graphite');

    event.get('forge:ingots/copper').add('immersiveengineering:ingot_copper');
    event.get('forge:ingots/gaia').add('botania:gaia_ingot');
    event.get('forge:ingots/gaia_spirit').add('botania:gaia_ingot');
    event.get('forge:ingots').add('botania:gaia_ingot');
});
