"use strict";
class Button {
    constructor(label) {
        this.label = label;
    }
    handleEvent() {
        console.log(`Click on ${this.label} button`);
    }
}
class Link {
    constructor(text) {
        this.text = text;
    }
    handleEvent() {
        console.log(`Navigating to ${this.text} page`);
    }
}
class Handler {
    constructor() {
        this.children = [];
    }
    add(item) {
        this.children.push(item);
    }
    handleEvent() {
        this.children.forEach(item => {
            item.handleEvent();
        });
    }
}
let headerHandler = new Handler();
let loginButton = new Button('Login');
headerHandler.add(loginButton);
let pageHandler = new Handler();
let closeButton = new Button('Close');
let homeLink = new Link('Home');
pageHandler.add(headerHandler);
pageHandler.add(closeButton);
pageHandler.add(homeLink);
pageHandler.handleEvent();
