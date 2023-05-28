function createElement(type, id, content, events = {}) {
    const el = document.createElement(type)
    el.id = id
    el.textContent = content
    for (const [fn, handle] of Object.entries(events)) {
        el.addEventListener(fn, handle)
    }
    document.body.appendChild(el)
    return el
}
