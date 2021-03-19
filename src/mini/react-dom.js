const render = (vnode, container) => {
    container.appendChild(createElement(vnode))
}

const createElement = vnode => {
    const { vtype } = vnode
    switch (vtype) {
        case 1:
            return createDomNode(vnode)
        case 2:
            return createFuncComp(vnode)
        case 3:
            return createClassComp(vnode)
        default:
            return document.createTextNode(vnode)
    }
}

const createDomNode = vnode => {
    const { type, props } = vnode
    const { children, ...attrs } = props
    const node = document.createElement(type)
    Object.keys(attrs).forEach(key => {
        node[key] = attrs[key]
    })

    children.forEach(child => {
        console.log(child);
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

export default { render }