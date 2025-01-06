


function createElement(reactElement, actualdiv) {

    const type = document.createElement(reactElement.type);

    type.innerHTML = reactElement.Text;

    for (const prop in reactElement.props) {

            type.setAttribute(prop, reactElement.props[prop]);
            
        }

        actualdiv.appendChild(type);
    }



const reactElement = {

    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    Text: "Go to google from here"
    
}

const roott = document.querySelector("#root");

createElement(reactElement,roott);