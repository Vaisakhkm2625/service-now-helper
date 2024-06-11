
console.log("main")

greet()

const { input, div, p, label, button, h1, h2, span, option, select, a } = van.tags;

const TodoItem = ({ text }) => div({ class: "background-color-vkm-template" },
    input({
        type: "checkbox", onchange: e =>
            e.target.closest("div").querySelector("span").style["text-decoration"] =
            e.target.checked ? "line-through" : ""
    }),
    span(text),
    a({ onclick: e => e.target.closest("div").remove() }, "❌"),
)

const TodoList = () => {
    const inputDom = input({ type: "text" })
    const dom = div(
        inputDom,
        button({ onclick: () => van.add(dom, TodoItem({ text: inputDom.value })) }, "Add"),
    )
    return dom
}

const nameSpace = (cssClass) => {
    return cssClass + "-vkm-template"
}


const ContainerWindow = () => {
    const posX = van.state(0);
    const posY = van.state(0);
    const offsetX = van.state(0);
    const offsetY = van.state(0);
    const isDragging = van.state(false);

    const handleMouseDown = (e) => {
        offsetX.val = e.clientX - posX.val;
        offsetY.val = e.clientY - posY.val;
        isDragging.val = true;
    };

    const handleMouseMove = (e) => {
        if (isDragging.val) {
            posX.val = e.clientX - offsetX.val;
            posY.val = e.clientY - offsetY.val;
        }
    };

    const handleMouseUp = () => {
        isDragging.val = false;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return [
        h1("Draggable DIV Element"),
        p("Click and hold the mouse button down while moving the DIV element"),
        div({
            class: nameSpace("mydiv"),
            style: () => `left: ${posX.val}px; top: ${posY.val}px;`,
        },
            div({
                class: nameSpace("mydivheader"),
                onmousedown: handleMouseDown,
            }, "Click here to move"),
            p("Move"),
            p("this"),
            p("DIV")
        )
    ];
};



van.add(document.body, ContainerWindow())



