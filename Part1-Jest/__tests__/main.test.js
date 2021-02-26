const formatVolumeIconPath = require("../assets/scripts/main");

describe('volume icon', () => {
    test('level3 max', () => {
        expect(formatVolumeIconPath(101)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('level3 min', () => {
        expect(formatVolumeIconPath(67)).toBe(`./assets/media/icons/volume-level-3.svg`);
    });

    test('level2 max', () => {
        expect(formatVolumeIconPath(66)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('level2 min', () => {
        expect(formatVolumeIconPath(34)).toBe(`./assets/media/icons/volume-level-2.svg`);
    });

    test('level1 max', () => {
        expect(formatVolumeIconPath(33)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('level1 min', () => {
        expect(formatVolumeIconPath(1)).toBe(`./assets/media/icons/volume-level-1.svg`);
    });

    test('level0', () => {
        expect(formatVolumeIconPath(0)).toBe(`./assets/media/icons/volume-level-0.svg`);
    });

});