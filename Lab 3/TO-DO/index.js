//

const $ = (s) => document.querySelector(s)

const createHTML = (tag, options = {}) => {
  const el = document.createElement(tag);
  for (const key in options) {
    if (key === 'children') {
      options.children.forEach((x) => el.appendChild(x));
      continue;
    }

    if (key === 'onClick') {
      el.addEventListener('click', options[key])
    }

    el[key] = options[key];
  }
  return el;
};

const TODOCollection = function(array) {
    this.children = array
}
TODOCollection.prototype.renderAll = function() {
    this.children.forEach(x => x.render(false))
}
TODOCollection.prototype.add = function (todo) {

}

const TODO = function (title, status) {
  this.title = title;
  this.status = status;
};
TODO.prototype.delete = function () {
  this.html.remove()
}
TODO.prototype.render = function (rerender = true) {
  let iconClass = 'fa-regular fa-circle';
  if (this.status === 'complete') iconClass = 'fa-solid fa-circle-check';

  const div = createHTML('div', {
    className: `todo__item todo__item--${this.status || 'idle'}`,
    children: [
      createHTML('div', {
        className: 'todo__item-title',
        children: [
          createHTML('div', {
            className: 'todo__item-status',
            children: [
              createHTML('i', {
                className: iconClass,
              }),
            ],
            onClick: () => {
              if (this.status === 'complete') this.status = 'idle'
              else this.status = 'complete'
              this.render()
            }
          }),
          createHTML('div',{
            className: 'todo__item-input',
            children: [
              createHTML('input', {
                value: this.title,
                disabled: this.status === 'complete',
                placeholder: 'New TODO',
                onchange: (e) => {
                  this.title = e.target.value
                }
              }),
            ]
          })
        ],
      }),
      createHTML('button', {
        className: 'btn-icon btn--delete',
        children: [
          createHTML('i', {
            className: 'fa-solid fa-trash',
          }),
        ],
        onClick: () => {
          this.delete()
        }
      }),
    ],
  });

  const parent = document.querySelector('.list')
  if (rerender) {
    parent.insertBefore(div, this.html)
    this.html.remove()
  }
  else {
    parent.appendChild(div);
  }
  this.html = div
};
TODO.prototype.focus = function () {
  this.html.querySelector('input').focus()
}


  // Render todos
  
  $('.toolbar-add').onclick = () => {
    const todo = new TODO('', 'idle')
    todo.render(false)
    todo.focus()
  }


