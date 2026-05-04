const mainContainer = document.querySelector("#root")

const reactElement = {
    type: 'a',
    parameter: {
        href: 'https://google.com',
        target : '_blank'
    },
    content : 'click on me to Navigate Google page'
}

function customRender(reactElement, mainContainer){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.content
    // domElement.setAttribute('href', reactElement.parameter.href)
    // domElement.setAttribute('target', reactElement.parameter.target)

    // mainContainer.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.content
    for (const property in reactElement.parameter) {
        if(property === 'content') continue;
        domElement.setAttribute(property, reactElement.parameter[property])
    }

    mainContainer.appendChild(domElement)
}

customRender(reactElement, mainContainer)
