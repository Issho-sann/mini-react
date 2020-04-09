const render = (vnode, container) => {
    container.appendChild(createElement(vnode))
}

export default { render }

const createElement = vnode => {
    const { vtype } = vnode

    switch (vtype) {
        case 1:
            // DOM节点
            return createDomNode(vnode)
        case 2:
            // 函数组件
            return createFuncComp(vnode)
        case 3:
            // 类组件
            return createClassComp(vnode)
    
        default:
            // 文本节点
            return document.createTextNode(vnode)
    }
}

const createDomNode = vnode => {
    const { type, props } = vnode
    const { children, ...rest } = props

    const node = document.createElement(type)

    Object.keys(rest).forEach(item => {
        if (item === 'className') {
            node.setAttribute('class', rest[item])
        } else {
            node.setAttribute(item, rest[item])
        }
    })

    children.forEach(child => {
        if (Array.isArray(child)) {
            child.forEach(c => {
                node.appendChild(createElement(c))
            })
        } else {
            node.appendChild(createElement(child))
        }
    })
    
    return node
}

const createFuncComp = vnode => {
    const { type, props } = vnode
    const node = type(props)
    return createElement(node)
}

const createClassComp = vnode => {
    const { type, props } = vnode
    const node = new type(props).render()
    return createElement(node)
}