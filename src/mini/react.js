const createElement = (type, props, ...children) => {
    delete props.__self
    delete props.__source
    props.children = children
    let vtype = 0
    switch (typeof type) {
        case 'string':
            // dom
            vtype = 1
            break
        case 'function':
            if (type.isClassComp) {
                // class
                vtype = 3
            } else {
                // function
                vtype = 2
            }
            break
    
        default:
            break
    }
    return { type, vtype, props }
}

class Component {
    static isClassComp = true
    constructor(props) {
        this.props = props
    }
}
export default { createElement, Component }