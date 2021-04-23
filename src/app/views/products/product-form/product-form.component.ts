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
    this.setValidators();
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

  setValidators(): void {
    this.titleControl.setValidators(this.formData.title.is_required ? [Validators.required] : null);
    this.titleControl.updateValueAndValidity();

    this.faTitleControl.setValidators(this.formData.fa_title.is_required ? [Validators.required] : null);
    this.faTitleControl.updateValueAndValidity();

    this.descriptionControl.setValidators(this.formData.description.is_required ? [Validators.required] : null);
    this.descriptionControl.updateValueAndValidity();

    this.countControl.setValidators(this.formData.count.is_required ? [Validators.required] : null);
    this.countControl.updateValueAndValidity();

    this.priceControl.setValidators(this.formData.price.is_required ? [Validators.required] : null);
    this.priceControl.updateValueAndValidity();

    this.discountControl.setValidators(this.formData.discount.is_required ? [Validators.required] : null);
    this.discountControl.updateValueAndValidity();

    this.isSpecialControl.setValidators(this.formData.is_special.is_required ? [Validators.required] : null);
    this.isSpecialControl.updateValueAndValidity();

    this.isActiveControl.setValidators(this.formData.is_active.is_required ? [Validators.required] : null);
    this.isActiveControl.updateValueAndValidity();

  }

  get titleControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  get faTitleControl(): FormControl {
    return this.form.get('fa_title') as FormControl;
  }

  get descriptionControl(): FormControl {
    return this.form.get('description') as FormControl;
  }

  get countControl(): FormControl {
    return this.form.get('count') as FormControl;
  }

  get priceControl(): FormControl {
    return this.form.get('price') as FormControl;
  }

  get discountControl(): FormControl {
    return this.form.get('discount') as FormControl;
  }

  get isSpecialControl(): FormControl {
    return this.form.get('is_special') as FormControl;
  }

  get isActiveControl(): FormControl {
    return this.form.get('is_active') as FormControl;
  }

  submitForm(): void {
    if (this.form.valid) {
      this.ngxUiLoaderService.start();
      this.dialog.open(ProductModalComponent, {
        disableClose: false,
        data: {form: this.form.value}
      });
    }
  }
}
