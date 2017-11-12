import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <auth-form (submitted)="loginUser($event)">
            <h1>Login</h1>
            <a routerLink="/auth/register">Not register?</a>
            <button type="submit">
                Login
            </button>
        </auth-form>
    `
})
export class LoginComponent {

    loginUser(event: FormGroup) {
        console.log(event.value)
    }
}