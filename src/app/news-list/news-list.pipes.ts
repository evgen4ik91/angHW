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
    
  }
}

@Pipe({name: 'articlesLocal'})
@Injectable()
export class ArticlesLocalPipe implements PipeTransform {
  transform(value: string, args: string[]): any {
    if (!value) return value;

    return value.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
}