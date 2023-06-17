import WebSocket from "ws";
import * as fs from 'fs';
import * as colorette from 'colorette';
import { Data } from "./types.js";

const ws = new WebSocket('wss://coderadio-admin.freecodecamp.org/api/live/nowplaying/coderadio')

ws.on('error', (err) => console.log(`${colorette.green('×')} Something went wrong. ${err}`));

ws.on('message', (data) => {
    const stringifiedData = JSON.parse(data.toString()) as Data
    const song = stringifiedData.now_playing.song.text
    fs.writeFileSync('./data.txt', `Now playing: ${song}`, {
        encoding: 'utf-8'
    })
    console.log(`${colorette.green('✓')} New song detected: ${song}`)
})