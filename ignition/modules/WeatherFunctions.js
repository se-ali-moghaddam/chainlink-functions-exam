//0x68e8175A889A6503eA17ad6516993367C7b56A24
const { buildModule } = require('@nomicfoundation/hardhat-ignition/modules');

module.exports = buildModule('WeatherFunctionsModule', m => {
    const WeatherFunctionsModule = m.contract('WeatherFunctions', [
        14596
    ]);

    return { WeatherFunctionsModule };
});