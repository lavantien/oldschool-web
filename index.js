var count = 0

function inc() {
    count += 1
    document.getElementById('count').textContent = count
}

var $h1 = createElement('h1', 'count', '0')

var $button = createElement('button', null, 'Increment', {
    click: () => {
        inc()
    }
})
