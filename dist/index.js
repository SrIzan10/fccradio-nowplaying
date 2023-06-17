"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const fs = __importStar(require("fs"));
const colorette = __importStar(require("colorette"));
const ws = new ws_1.default('wss://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio');
ws.on('error', (err) => console.log(`${colorette.green('×')} Something went wrong. ${err}`));
ws.on('message', (data) => {
    const stringifiedData = JSON.parse(data.toString());
    const song = stringifiedData.now_playing.song.text;
    fs.writeFileSync('./data.txt', `Now playing: ${song}`, {
        encoding: 'utf-8'
    });
    console.log(`${colorette.green('✓')} New song detected: ${song}`);
});
