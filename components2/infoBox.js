export class InfoBox {
  // private el: HTMLDivElement;
  // private contentWrapper: HTMLDivElement;
  // private closeButton: HTMLElement;
  // private onClose?: () => void;

  constructor() {
    this.el = this.createBoxWrapper();
    // this.closeButton = this.createCloseButton();
    this.contentWrapper = this.createContentWrapper();
    this.el.appendChild(this.contentWrapper);
  }

  render() {
    return this.el;
  }

  show() {
    this.el.classList.remove('hide');
    this.el.classList.add('show');
  }

  hide() {
    if (this.el.classList.contains('show')) this.el.classList.add('hide');
    this.el.classList.remove('show');
  }

  setContent(content) {
    if (typeof content === 'string') {
      this.contentWrapper.innerHTML = content;
    } else {
      this.contentWrapper.innerHTML = '';
      this.contentWrapper.appendChild(content);
    }
  }

  createBoxWrapper() {
    const sidebarWrapper = document.createElement('div');
    sidebarWrapper.classList.add('ol-infoBox');
    return sidebarWrapper;
  }

  createContentWrapper() {
    const contentWrapper = document.createElement('table');
    contentWrapper.classList.add('ol-infoBoxContent');
    contentWrapper.innerHTML = `<tr>
      <th>Name</th>
      <th>Speed</th>
      <th>Distance</th>
      <th>AQI</th>
    </tr>`
    return contentWrapper;
  }

  addRow(row) {
    this.contentWrapper.appendChild(row);
  }
}
