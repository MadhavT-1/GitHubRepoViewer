export class repos {
  id: string;
  name: string;
  description: string;
  html_url: string;
  constructor(id: string, name: string, description: string, html_url: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.html_url = html_url;
  }
}
