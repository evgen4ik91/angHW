import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HeaderTitleService } from "../../header/header.service";
import { NewsListService } from "../../news-list/news-list.service";
import { ArticleInterface } from "../../interface";

@Component({
  selector: 'app-edit-page-form',
  templateUrl: './edit-page-form.component.html',
  styleUrls: ['./edit-page-form.component.scss']
})
export class EditPageFormComponent implements OnInit {

  private editMode: boolean = false;

  private articleObj: ArticleInterface;
  private updatedObject: ArticleInterface;
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
    private route: ActivatedRoute, 
    private headerService: HeaderTitleService,
    private listService: NewsListService) { }

  submitForm() :void {

  }

  ngOnInit() {
    if (this.route.snapshot.params.id) this.editMode = true;
    this.headerService.setTitle(`${this.editMode ? 'Edit' : 'Add'} article`);
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
    this.articleFormGroup.valueChanges.subscribe(data => {
      this.updatedObject = {...this.articleObj, ...data};
    })
  }

}
