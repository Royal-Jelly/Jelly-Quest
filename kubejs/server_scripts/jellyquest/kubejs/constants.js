//priority: 1000

const air = 'minecraft:air';

const beamRecipes = [];

// priority of which mod output should come from, if applicable
const modPriorities = [
    'immersiveengineering',
    'minecraft',
    'kubejs',
    'create',
    'botania',
    'quark',
    'bloodmagic'
];

// Used for recipes/tags that use colors
const colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// Used for tag generation
const createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria'];

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock;

    //suffix exceptions
    switch (logType) {
        case 'bulbis':
            logSuffix = '_stem';
            woodSuffix = '_wood';
            break;
        case 'sythian':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'embur':
            logSuffix = '_pedu';
            woodSuffix = '_hyphae';
            break;
        case 'grongle':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';

    // Exceptions
    switch (logType) {
        case 'palo_verde':
            plankBlock = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
        default:
    }

    var woodVariant = {
        modId: modId,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock
    };

    buildWoodVariants.push(woodVariant);
});

// Items added here will get the 'valid_apiary' tag, and be usable as Apiary multiblock walls
const validApiaryBlocks = [
    'botania:bifrost_pane',
    'botania:bifrost_perm',
    'botania:elf_glass_pane',
    'botania:mana_glass_pane',
    'botania:elf_glass',
    'botania:mana_glass',

    'minecraft:soul_sand',
    '#minecraft:stone_bricks'
];

// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone'
];
const generatableBasalt = [];

const honeyVarieties = [];

const candles =[];

const dyeSources = [
    {
        input: 'farmersdelight:wild_beetroots',
        type: 'small',
        primary: 'minecraft:beetroot_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_cabbages',
        type: 'small',
        primary: 'farmersdelight:cabbage_seeds',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_carrots',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_onions',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_potatoes',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'farmersdelight:wild_rice',
        type: 'small',
        primary: 'farmersdelight:rice',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_tomatoes',
        type: 'small',
        primary: 'farmersdelight:tomato_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:allium',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:azure_bluet',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:beetroot',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'minecraft:blue_orchid',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'minecraft:bone',
        type: 'small',
        primary: 'minecraft:bone_meal',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:bone_meal'
    },
    {
        input: 'minecraft:bone_meal',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:brain_coral',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:brain_coral_fan',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:bubble_coral',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:bubble_coral_fan',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:cocoa_beans',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'minecraft:cornflower',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'minecraft:dandelion',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:fire_coral',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fire_coral_fan',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral_fan',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:large_fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:lilac',
        type: 'large',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:lily_of_the_valley',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:orange_tulip',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:oxeye_daisy',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'minecraft:peony',
        type: 'large',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:pink_tulip',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:poppy',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'minecraft:red_tulip',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:rose_bush',
        type: 'large',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sea_pickle',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sunflower',
        type: 'large',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:tube_coral',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:tube_coral_fan',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:white_tulip',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:wither_rose',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:gray_dye'
    }
];

colors.forEach((color) => {
    var botaniaTypes = ['petal', 'mushroom'];
    botaniaTypes.forEach((type) => {
        dyeSources.push({
            input: 'botania:' + color + '_' + type,
            type: 'petal',
            primary: 'minecraft:' + color + '_dye',
            secondary: 'minecraft:' + color + '_dye',
            tertiary: 'minecraft:' + color + '_dye'
        });
    });
});
