import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
    selector: 'auth-form',
    template: `
    <div>
        AuthForm!
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            
            <ng-content select="h1"></ng-content>

            <label>
                <input 
                    type="email"
                    placeholder="email addres"
                    formControlName="email"
                />
            </label>
            <br>
            <label>
                <input 
                    type="password"
                    placeholder="password addres"
                    formControlName="password"
                />
            </label>

            <div class="error" *ngIf="emailFormat">
                Invalid email format
            </div>

            <div class="error" *ngIf="passwordInvalid">
                Password is required
            </div>

            <br>
            
            <ng-content select=".error"></ng-content>
            <br>
            
            <ng-content select="button"></ng-content>
            <br>
            
            <ng-content select="a"></ng-content>
        </form>
    </div>
    `
})
export class AuthFormComponent {

    @Output('submitted')
    submitted = new EventEmitter<FormGroup>();

    constructor(
        private fb: FormBuilder
    ) {}

    form = this.fb.group({
        email: ['', [Validators.email]],
        password: ['', [Validators.required]]
    });

    onSubmit() {
        if(this.form.valid) {
            this.submitted.emit(this.form);
        }
    }

    get passwordInvalid() {
        const control = this.form.get('password')

        return control.hasError('required') && control.touched;
    }

    get emailFormat() {
        const control = this.form.get('email')
        
        return control.hasError('email') && control.touched;
    }
}