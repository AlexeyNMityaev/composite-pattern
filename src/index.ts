interface ContorlItem {
    handleEvent: () => void;
}

class Button implements ContorlItem {
    private label: string;

    constructor(label: string) {
        this.label = label;
    }

    handleEvent() {
        console.log(`Click on ${this.label} button`);
    }
}

class Link implements ContorlItem {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    handleEvent() {
        console.log(`Navigating to ${this.text} page`);
    }
}

class Handler implements ContorlItem {
    private children: ContorlItem[] = [];

    add(item: ContorlItem) {
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
