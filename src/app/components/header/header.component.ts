import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  searchForm!: FormGroup;

  constructor(private sharedDataService: SharedDataService) {
    this.searchForm = new FormGroup({
      name: new FormControl('', []),
    });
  }

  getData(): void {
    this.sharedDataService.sendData(this.searchForm.value.name);
  }
}
