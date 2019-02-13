export interface SourceInterface {
    category: string;
    name: string;
    country: string;
    description: string;
    id: string;
    language: string;
    url: string;
}

export interface ArticleInterface {
    title: string;
    id: string;
    publishedAt: string;
    url: string;
    urlToImage: string;
    author: string;
}