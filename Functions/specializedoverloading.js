"use strict";
class MyElement {
}
class DivElement extends MyElement {
}
class SpanElement extends MyElement {
}
class CanvasElement extends MyElement {
}
class MyBestDocument {
    createElement(tagName) {
        switch (tagName) {
            case "div":
                return new DivElement();
            case "span":
                return new SpanElement();
            default:
                console.log("some error");
                return null;
        }
    }
}
//# sourceMappingURL=specializedoverloading.js.map