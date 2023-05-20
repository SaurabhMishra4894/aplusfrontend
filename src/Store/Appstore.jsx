import { makeAutoObservable } from 'mobx';
class AppStore {
  isTesting =
    window.location.href.includes('Testing') ||
    window.location.href.includes('localhost')
      ? true
      : false;
  isLocalhost = window.location.href.includes('localhost');
  device = 0;
  footer = false;
  device2 = 0;
  mode = 'dark';
  apilink='http://localhost:3000'
  imageLink='http://www.aplusaudios.com/assets/uploads/showcase/medium'
  bgImage = 3;
  constructor() {
    makeAutoObservable(this);
  }

  setMode = data => (this.mode = data);
  setBgImage = data => (this.bgImage = data);
  setDevice = data => (this.device = data);
  setDevice2 = data => (this.device2 = data);
  setFooter = data => (this.footer = data);
}

export default new AppStore();
