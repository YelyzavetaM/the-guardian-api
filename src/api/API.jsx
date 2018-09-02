export class API {
  static get(params) {
    const ACCESS_KEY = "39e248c1-51b1-48ba-8245-15625d163800";
    return fetch(
      `https://content.guardianapis.com/search?api-key=${ACCESS_KEY}&page=${params}&show-blocks=body`
    );
  }
}
