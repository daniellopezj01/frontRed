import { HomeComponent } from './../home/home.component';
import { Component, OnInit, Inject,  } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Publication } from '../../logic/Publication';
import { PublicationsService } from 'src/app/services/PublicationsService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-insert-publication',
  templateUrl: './insert-publication.component.html',
  styleUrls: ['./insert-publication.component.scss']
})
export class InsertPublicationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  publication: Publication;
  name: any;
  sendpublication: any;
  
  constructor(private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<InsertPublicationComponent>,
    @Inject(MAT_DIALOG_DATA) public homeComponent: HomeComponent, private publicationSservice: PublicationsService) {
    this.publication = new Publication();
  }

  get f() { return this.registerForm.controls; }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.required]],
    });
  }

  insertPublication() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log("Entre en el boton de publicar");
    this.publication.id_publication = this.randomInt(100, 200);
    
    //this.publicationSservice.insertpublication(this.publication).subscribe(res => {
      
    //})
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
