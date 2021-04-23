import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  titleIsShow = true;
  faTitleIsShow = true;
  descriptionIsShow = true;
  countIsShow = true;
  priceIsShow = true;
  discountIsShow = true;
  isSpecialIsShow = true;
  isActiveIsShow = true;

  constructor(
    public dialog: MatDialog,
    private ngxUiLoaderService: NgxUiLoaderService
  ) {
  }

  ngOnInit(): void {
    this.initForm();
    this.titleIsShow = this.formData.title.is_show;
    this.faTitleIsShow = this.formData.fa_title.is_show;
    this.descriptionIsShow = this.formData.description.is_show;
    this.countIsShow = this.formData.count.is_show;
    this.priceIsShow = this.formData.price.is_show;
    this.discountIsShow = this.formData.discount.is_show;
    this.isSpecialIsShow = this.formData.is_special.is_show;
    this.isActiveIsShow = this.formData.is_active.is_show;
    this.handleControls();
  }

  initForm() {
    this.form = new FormGroup({});
  }

  handleControls(): void {
    if (this.titleIsShow) {
      this.form.addControl('title', new FormControl());
      this.form.controls.title.patchValue(this.formData.title.value);
      this.handleValidity('title', this.formData.title.is_required);
    }
    if (this.faTitleIsShow) {
      this.form.addControl('fa_title', new FormControl());
      this.form.controls.fa_title.patchValue(this.formData.fa_title.value);
      this.handleValidity('fa_title', this.formData.fa_title.is_required);
    }
    if (this.descriptionIsShow) {
      this.form.addControl('description', new FormControl());
      this.form.controls.description.patchValue(this.formData.description.value);
      this.handleValidity('description', this.formData.description.is_required);
    }
    if (this.countIsShow) {
      this.form.addControl('count', new FormControl());
      this.form.controls.count.patchValue(this.formData.count.value);
      this.handleValidity('count', this.formData.count.is_required);
    }
    if (this.priceIsShow) {
      this.form.addControl('price', new FormControl());
      this.form.controls.price.patchValue(this.formData.price.value);
      this.handleValidity('price', this.formData.price.is_required);
    }
    if (this.discountIsShow) {
      this.form.addControl('discount', new FormControl());
      this.form.controls.discount.patchValue(this.formData.price.value);
      this.handleValidity('discount', this.formData.discount.is_required);
    }
    if (this.isSpecialIsShow) {
      this.form.addControl('is_special', new FormControl());
      this.form.controls.is_special.patchValue(this.formData.is_special.value);
      this.handleValidity('is_special', this.formData.is_special.is_required);
    }
    if (this.isActiveIsShow) {
      this.form.addControl('is_active', new FormControl());
      this.form.controls.is_active.patchValue(this.formData.is_active.value);
      this.handleValidity('is_active', this.formData.is_active.is_required);
    }
  }

  submitForm(): void {
    if (this.form.valid) {
      this.ngxUiLoaderService.start();
      this.dialog.open(ProductModalComponent, {
        disableClose: true,
        data: {form: this.form.value}
      });
    }
  }

  handleValidity(control: string, condition: boolean): void {
    this.form.get(control).setValidators(condition ? [Validators.required] : null);
    this.form.get(control).updateValueAndValidity();
  }

  errorHandling(control: string, error: string): boolean {
    return this.form.get(control).hasError(error);
  }
}
