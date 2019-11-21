import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mileage-estimate-form',
  templateUrl: './mileage-estimate-form.container.html',
  styleUrls: ['./mileage-estimate-form.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MileageEstimateFormContainer implements OnInit {
  @Input()
  public defaultEstimateValue: number;

  @Output()
  public update = new EventEmitter<number>();

  public form: FormGroup;

  constructor(
    private _builder: FormBuilder,
  ) { }

  public ngOnInit() {
    this.initForm();
  }

  public submit() {
    if (this.form.invalid) {
      return;
    }

    this.update.emit(this.form.value.estimate);
    this.form.markAsPristine();
  }

  private initForm() {
    this.form = this._builder.group({
      estimate: [this.defaultEstimateValue, Validators.required],
    });
  }

}
