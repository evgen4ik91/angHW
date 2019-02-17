import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'moreArticles'})
@Injectable()
export class ArticlesMorePipe implements PipeTransform {
  transform(newsList, currentCount: number): any {
    return newsList.slice(0, currentCount);
  }
}

@Pipe({name: 'articlesFilter'})
@Injectable()
export class ArticlesFilterPipe implements PipeTransform {
  transform(newsList, filterStr: string): any {
    return newsList.filter(article => article.title.toLowerCase().includes(filterStr.toLowerCase()));
  }
}

@Pipe({name: 'articlesLocal'})
@Injectable()
export class ArticlesLocalPipe implements PipeTransform {
  transform(newsList, usePipe: boolean): any {
    if (usePipe) return newsList.filter(article => article.isLocal !== undefined);
    else return newsList;
  }
}