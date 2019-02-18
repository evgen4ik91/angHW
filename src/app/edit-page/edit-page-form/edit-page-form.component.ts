import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderTitleService } from "../../header/header.service";
import { NewsListService } from "../../news-list/news-list.service";
import { ArticleInterface } from "../../interface";
import { EditService } from "./edit-page.service";
import { NewsSourceService } from "../../src-list/src-list.service";

@Component({
  selector: 'app-edit-page-form',
  templateUrl: './edit-page-form.component.html',
  styleUrls: ['./edit-page-form.component.scss']
})
export class EditPageFormComponent implements OnInit {

  private editMode: boolean = false;

  private localNewsLength: number;

  private articleObj: ArticleInterface;
  private updatedObject: ArticleInterface;
  localNewsLengthSubscription: Subscription;
  newsListSubscription: Subscription;

  public headingControl: FormControl = new FormControl('', Validators.required);
  public descriptionControl: FormControl = new FormControl('', Validators.required);
  public contentControl: FormControl = new FormControl('', Validators.required);
  public imgControl: FormControl = new FormControl('', Validators.required);
  public dateControl: FormControl = new FormControl('', Validators.required);
  public authorControl: FormControl = new FormControl('', Validators.required);
  public sourceUrlControl: FormControl = new FormControl('', Validators.required);

  public articleFormGroup: FormGroup = new FormGroup({
    title: this.headingControl,
    description: this.descriptionControl,
    content: this.contentControl,
    urlToImage: this.imgControl,
    publishedAt: this.dateControl,
    author: this.authorControl,
    url: this.sourceUrlControl,
  });

  constructor(
    private router: Router,
    private route: ActivatedRoute, 
    private headerService: HeaderTitleService,
    private listService: NewsListService,
    private srcService: NewsSourceService,
    private editService: EditService) { }

  submitForm($event) :void {
    if (this.editMode) {
      this.editService.updateArticle(this.updatedObject).subscribe(status => {
        if (status) {
          alert('article updated');
          this.srcService.setShouldReloadNews(true);
          this.router.navigate(['/']);
        }
        else alert('Something went wrong');
      });
    } else {
      this.editService.saveArticle(this.updatedObject).subscribe(status => {
        if (status) {
          alert('article saved');
          this.srcService.setShouldReloadNews(true);
          this.router.navigate(['/']);
        }
        else alert('Something went wrong');
      });
    }
    
  }

  ngOnInit() {
    if (this.route.snapshot.params.id) this.editMode = true;
    this.headerService.setTitle(`${this.editMode ? 'Edit' : 'Add'} article`);
    this.localNewsLengthSubscription = this.listService.localNewsLength.subscribe(cnt => this.localNewsLength = cnt);

    if (this.editMode) {
      this.newsListSubscription = this.listService.currentList.subscribe(list => {
        this.articleObj = list.find(article => parseInt(article.id) === parseInt(this.route.snapshot.params['id']));
        if (this.articleObj) {
          this.headingControl.setValue(this.articleObj.title);
          this.descriptionControl.setValue(this.articleObj.description);
          this.contentControl.setValue(this.articleObj.content);
          this.imgControl.setValue(this.articleObj.urlToImage);
          this.dateControl.setValue(this.articleObj.publishedAt);
          this.authorControl.setValue(this.articleObj.author);
          this.sourceUrlControl.setValue(this.articleObj.url);
        } else console.log('article not found');
      });
     
    }
    this.updatedObject = {...this.articleObj};
    this.articleFormGroup.valueChanges.subscribe(data => {
      this.updatedObject = {...this.articleObj, ...data};
      if (!this.editMode) this.updatedObject.id = this.localNewsLength + 1;
      this.updatedObject.isLocal = true;
    })
  }

  ngOnDestroy() {
    this.localNewsLengthSubscription.unsubscribe();
    if (this.editMode) this.newsListSubscription.unsubscribe();
  }

}
