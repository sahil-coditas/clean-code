// models/Book.ts
export class Book {
    public title: string;
    public author: string;
    public publicationYear: number;
  
    constructor(title: string, author: string, publicationYear: number) {
      this.title = title;
      this.author = author;
      this.publicationYear = publicationYear;
    }
  
    // Getters
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    getPublicationYear(): number {
      return this.publicationYear;
    }
  
    // Setters
    setTitle(title: string): void {
      this.title = title;
    }
  
    setAuthor(author: string): void {
      this.author = author;
    }
  
    setPublicationYear(publicationYear: number): void {
      this.publicationYear = publicationYear;
    }
    
  }
  