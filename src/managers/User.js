export default class User {

  static current = User.current || new User();

  constructor() {
    this.profile = {};
  }

  initialize(profile) {
    this.profile = profile;
  }

  /* setters */
  set(key, value) {
    if( !this.profile ) { return; }
    this.profile[key] = value;
  }

  unset(key) {
    if( !this.profile ) { return; }
    delete this.profile[key];
  }

  /* getters */
  get(key) {
    if( !this.profile ) { return null; }
    return this.profile[key];
  }

  getPhoto() {
    if( !this.profile ) { return null; }
    return this.profile.photo;
  }

  isAuthenticated() {
    return this.get('token') != null;
  }

}
