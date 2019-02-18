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
    description: string;
    content: string;
    id ?: number;
    publishedAt: string;
    url: string;
    urlToImage: string;
    author: string;
    isLocal ?: boolean;
    
}