require("../index")();
require("../lib/logger")("demo");

describe("should log ", function() {
    it("messages", function() {
        global.Logger.errorRequest("failedRequest");
        global.Logger.error("failed");
        global.Logger.info("test run");
        global.Logger.crash("test crash");
        global.Logger.web("test web");
    });
});
