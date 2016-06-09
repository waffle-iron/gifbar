import { Injectable } from '@angular/core';

// `electron` var is declared publicly in index.html
declare var electron:any;
declare var dirname:any;

@Injectable()
export class ElectronWindowService {

    BrowserWindow = electron.remote.BrowserWindow;

    constructor() { }

    openModal(url: string, width: number = 200, height: number = 200) {
        let webPreferences = {
            zoomFactor: 1.0
        };
        let options = {
            width: width,
            height: height,
            resizable: false,
            title: "Image",
            webPreferences: webPreferences
        };
        let win = new this.BrowserWindow(options);
        win.on('closed', () => {
            win = null;
        });
        let fileUrl = `file://${dirname}/modal.html?url=${url}&width=${width}&height=${height}`;
        win.loadURL(fileUrl);
        win.show();
    }
}