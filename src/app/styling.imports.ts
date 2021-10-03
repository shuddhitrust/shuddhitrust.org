import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const imports = [MatSnackBarModule, MatFormFieldModule, MatInputModule, MatButtonModule];

@NgModule({
    imports,
    exports: imports
})
export class StylingImports { }