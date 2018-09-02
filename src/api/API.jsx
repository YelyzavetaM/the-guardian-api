export class API {
  static get() {
    return fetch(
      "https://content.guardianapis.com/search?api-key=39e248c1-51b1-48ba-8245-15625d163800&show-blocks=body"
    );
  }
}
