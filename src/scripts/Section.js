export default class Section {
    constructor({ data, renderer }, containerSelector) {
      this._renderedItems = data;
      this._renderer = renderer;
      this._container = containerSelector;
    }
  
    addItem(element) {
      this._container.prepend(element);
    }
  
    renderItems(item) {  
      //this._renderedItems.forEach(item => {
        this._renderer(item);
    
    //  });
    }
  }