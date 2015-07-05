function importTest(name, path) {
    describe(name, require(path));
}

describe("top", function () {
    importTest("Configuration", './configuration/configuration_tests');
    importTest("Font", './font/font_tests');
});