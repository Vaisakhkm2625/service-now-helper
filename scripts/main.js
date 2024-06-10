
console.log("main")

greet()

const { input, div, label, button, h1, h2, span, option, select } = van.tags;

const ContainerWindow = () => {
    return h1("hello")
}

van.add(document.body, ContainerWindow())
