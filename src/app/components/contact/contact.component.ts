import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VisitorInfoInterface} from '../../interfaces/interfaces';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.setForm();
  }

  private setForm(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.required]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      notes: new FormControl(null)
    });
  }

  public submit(): void {
    if (this.form.valid) {
      const visitorInfo: VisitorInfoInterface = this.form.value;
      this.form.reset();
    }
  }
}
