import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HeaderTitleService } from "../../header/header.service";

@Component({
  selector: 'app-edit-page-form',
  templateUrl: './edit-page-form.component.html',
  styleUrls: ['./edit-page-form.component.scss']
})
export class EditPageFormComponent implements OnInit {

  private editMode: boolean = false;

  constructor(private route: ActivatedRoute, private headerService: HeaderTitleService) { }

  ngOnInit() {
    if (this.route.snapshot.params.id) this.editMode = true;
    this.headerService.setTitle(`${this.editMode ? 'Edit' : 'Add'} article`);
    if (this.editMode) {
     
    } else {

    }
  }

}
