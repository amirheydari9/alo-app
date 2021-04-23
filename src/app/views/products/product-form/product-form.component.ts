import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ProductModalComponent} from '../product-modal/product-modal.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  @Input() formData;
  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private ngxUiLoaderService: NgxUiLoaderService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.form.setValue({
      title: this.formData.title.value,
      fa_title: this.formData.fa_title.value,
      description: this.formData.description.value,
      count: this.formData.count.value,
      price: this.formData.price.value,
      discount: this.formData.discount.value,
      is_special: this.formData.is_special.value,
      is_active: this.formData.is_active.value,
    });
  }

  initForm() {
    this.form = new FormGroup({
      title: new FormControl(),
      fa_title: new FormControl(),
      description: new FormControl(),
      count: new FormControl(),
      price: new FormControl(),
      discount: new FormControl(),
      is_special: new FormControl(),
      is_active: new FormControl(),
    });
  }

  submitForm(): void {
    this.ngxUiLoaderService.start();
    const dialogRef = this.dialog.open(ProductModalComponent, {
      disableClose: false,
      data: {name: 'amir'}
    });
    dialogRef.afterClosed().subscribe(res => {

    });
  }
}
