const createElement = (type, props, ...children) => {
    delete props.__self
    delete props.__source
    props.children = children
    let vtype = null
    switch (typeof type) {
        case 'string':
            // DOM节点
            vtype = 1
            break
        case 'function':
            if (!type.isClassCompnent) {
                // 函数组件
                vtype = 2
            } else {
                // 类组件
                vtype = 3
            }
            break
    
        default:
            vtype = null
            break
    }
    return { vtype, type, props }
}

class Component {
    static isClassCompnent = true
    constructor(props) {
        this.props = props
    }
}
export default { createElement, Component }
