import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CompanyService } from './services/company.service';
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'front';

  constructor(private service: CompanyService, public dialog: MatDialog) {}

  companies: Company[] = [];

  ngOnInit() {
    setTimeout(() => {
      this.service.getCompanies().subscribe((companies) => {
        this.companies = companies;
        console.log(companies);
      });
    });
  }

  showVacancies(id: number): void {
    this.dialog.open(DialogVacancies, {
      width: '800px',
      data: {
        id,
      },
    });
  }
}

@Component({
  selector: 'dialog-vacancies',
  template: `<div style="display: flex; flex-wrap: wrap; justify-content: center;">
    <h2 *ngIf="vacancies.length == 0">Empty</h2>
    <div *ngFor="let vac of vacancies" class="card">
    <h2>{{vac.name}}</h2>
    <p>{{vac.description}}</p>
    <h4>({{vac.salary}}$)</h4>
  </div>
  </div>`,
})
export class DialogVacancies implements OnInit {
  constructor(
    private service: VacancyService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DialogVacancies>
  ) {}

  vacancies: Vacancy[] = []

  ngOnInit() {
    setTimeout(() => {
      this.service.getVacanciesByCompany(this.data!.id).subscribe((vacancies) => {
        this.vacancies = vacancies;
        console.log(vacancies, this.data!.id);
      });
    });
  }
}
