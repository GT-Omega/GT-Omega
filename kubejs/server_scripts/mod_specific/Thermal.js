//i wonder why they named these thermal, maybe because setting up these recipes is kinda HOT

ServerEvents.recipes(event => {
    event.shaped(
        'thermal:device_collector', 
        [
            'VYV',
            'XCX',
            'VWV',
        ], {
            V: 'gtceu:tin_alloy_plate',
            W: 'ulvcovm:ulv_electric_motor',
            X: 'gtceu:tin_rotor',
            Y: 'minecraft:hopper',
            C: 'kubejs:treated_wood_casing'
        } 
    )

    event.shaped(
//i'd rather have my blood sucked out by leaches. Then craft one more of you.
        'thermal:machine_furnace',
        [   
            ' A ', 
            'BCB', 
            'DED'
        ], {
            A: 'gtceu:vacuum_tube',
            B: 'gtceu:coke_oven_bricks',
            C: 'gtceu:ulv_machine_hull',
            D: 'gtceu:small_copper_gear',
            E: 'thermal:rf_coil'
        }
    ).id('thermal:machine_furnace')


    event.shaped(
        'thermal:machine_pulverizer',
        [
            ' F ',
            'GHG',
            'IJI'
        ], {
            F: 'ulvcovm:ulv_electric_piston',
            G: 'gtceu:vacuum_tube',
            H: 'gtceu:ulv_machine_hull',
            I: 'gtceu:small_copper_gear',
            J: 'thermal:rf_coil'
        }
    ).id('thermal:machine_pulverizer')


//im an evil person 
//im surprised that the player can stand this one, its akin to walking into a induction smelter naked and burning to a crisp.
    event.shaped(
        'thermal:machine_smelter',
        [
            ' K ',
            'LML',
            'NON',
        ], {
            K:'thermal:machine_furnace',
            L:'gtceu:firebricks',
            M:'gtceu:ulv_machine_hull',
            N: 'gtceu:small_copper_gear',
            O: 'thermal:rf_coil'
        }
    ).id('thermal:machine_smelter')

    //nah the last one was tame THIS TIME I AM THE VILLAN  
    //this recipe should make the player want to shove themself into a forge hammer.
    //id rather spend eternity eating shards of glass then to actually do this recipe
    event.shaped(
        'thermal:machine_press',
        [
            ' P ',
            'QRQ',
            'STU',
        ], {
            P: 'minecraft:anvil',
            Q: 'gtceu:vacuum_tube',
            R: 'gtceu:ulv_machine_hull',
            S: 'ulvcovm:ulv_electric_motor',
            T: 'thermal:rf_coil',
            U: 'ulvcovm:ulv_electric_piston'
        }
    
    ).id('thermal:machine_press')

    // Aqueous accumulator
    event.shaped(
        'thermal:device_water_gen',
        [
            'Z1Z',
            '2C3',
            'Z5Z'
        ], {
            Z: 'gtceu:tin_alloy_plate',
            1: 'gtceu:copper_normal_fluid_pipe',
            2: 'ulvcovm:ulv_fluid_regulator',
            3: 'ulvcovm:ulv_electric_pump',
            5: 'gtceu:tin_rotor',
            C: 'kubejs:treated_wood_casing'
        }
    )

    //GTCEUM Plates     event.recipes.thermal.press('2x gtceu:tin_plate', '3x gtceu:tin_ingot'
    event.recipes.thermal.press('2x gtceu:copper_plate', '3x minecraft:copper_ingot')
    event.recipes.thermal.press('2x gtceu:tin_plate', '3x gtceu:tin_ingot')
    event.recipes.thermal.press('2x gtceu:lead_plate', '3x gtceu:lead_ingot')  
    event.recipes.thermal.press('2x gtceu:steel_plate', '3x gtceu:steel_ingot')
    event.recipes.thermal.press('2x gtceu:iron_plate', '3x gtceu:tin_ingot')
    event.recipes.thermal.press('2x gtceu:copper_plate', '3x minecraft:ingot_ingot')
    event.recipes.thermal.press('2x gtceu:red_alloy_plate', '3x gtceu:red_alloy_ingot')
})
