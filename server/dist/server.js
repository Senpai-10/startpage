"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3333;
const cors_1 = __importDefault(require("cors"));
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.get('/api', (req, res) => {
    res.json({ name: 'senpai' });
});
app.listen(port, () => {
    console.log(`[Server]: I am running at https://localhost:${port}`);
});
