Oz Bundle
=========

The [Oz templating library](http://github.com/treygriffith/oz) with the most common tags already included.

Installation
------------

Using [component](http://github.com/component):

    $ component install treygriffith/oz-bundle

As a standalone (using the scripts in `dist/`):

    <script src="oz-bundle.min.js"></script>

Which is made available via UMD on the global scope as `Oz`.

Usage
-----

```javascript

var template = Oz('<div oz-scope="person">' +
  '<input type="text" oz-val="name">' +
  '<button oz-evt="click:save">Save</button>' +
  '</div>');

document.body.appendChild(template.render({ person: { name: 'Brian' } });

// outputs:
// <div oz-scope="person">
//  <input type="text" oz-val="name" value="Brian">
//  <button oz-evt="click:save">Save</button>
// </div>

template.update({ person: { name: 'Tobi' } });

// changes DOM to:
// <div oz-scope="person">
//  <input type="text" oz-val="name" value="Tobi">
//  <button oz-evt="click:save">Save</button>
// </div>

template.on('save', function () {
  console.log("Save was clicked!"); // logs when <button> is clicked.
});

template.on('change:person.name', function (val) {
  console.log("Name was changed to "+val); // logs when the user changes the <input>
});
```

See [Oz](http://github.com/treygriffith/oz) for general usage information, and the individual tag components for tag specific information. The tags included in this bundle are:

* [oz-attr](http://github.com/treygriffith/oz-attr) Bind an attribute value to a property
* [oz-each](http://github.com/treygriffith/oz-each) Render each element for each member of an Array
* [oz-evt](http://github.com/treygriffith/oz-evt) Propagate events from the DOM to the template
* [oz-if](http://github.com/treygriffith/oz-if) Boolean show/hide
* [oz-scope](http://github.com/treygriffith/oz-scope) Scope child nodes to a property
* [oz-text](http://github.com/treygriffith/oz-text) Render a text node
* [oz-val](http://github.com/treygriffith/oz-val) Add a form value, and get notified when they change


License
-------
MIT
