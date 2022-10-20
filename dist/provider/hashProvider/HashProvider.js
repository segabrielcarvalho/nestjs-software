"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = require("bcryptjs");
class HashProvider {
    async generateHash(payload) {
        return (0, bcryptjs_1.hash)(payload, 10);
    }
    async compareHash(payload, hashed) {
        return (0, bcryptjs_1.compare)(payload, hashed);
    }
}
exports.default = HashProvider;
//# sourceMappingURL=HashProvider.js.map