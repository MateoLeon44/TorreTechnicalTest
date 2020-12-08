import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LocalService } from '../services/localstorage/local.service';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FilterService } from '../services/filter/filter.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  providers: [FilterService]
})
export class CompareComponent implements OnInit {

  job: any;
  skills: Array<any>;
  selectable: boolean;
  removable: boolean;
  filteredSkills!: Observable<any[]>
  skillCtrl = new FormControl();
  separatorKeysCodes: number[];
  addOnBlur = false;
  allSkills: any[];
  showInstructions: boolean;
  instructions: Array<string>;

  @ViewChild('compareInput') compareInput!: ElementRef;

  loadingBestFit: boolean;
  loadingFits: boolean;

  bestFit: any;
  fits: Array<any>;

  constructor(private local: LocalService, private filterService: FilterService) {
    this.selectable = true;
    this.removable = true;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.skills = [];
    this.allSkills = []
    this.fits = [];
    this.showInstructions = true;
    this.loadingBestFit = true;
    this.loadingFits = true;
    this.instructions = [
      'Search for the skills and find people who fit the job',
      'See the best fit for the job regarding their rank, compensation, skills and where the employee lives',
      'Look at other alternatives who match the skills'
    ],

      this.skillCtrl.valueChanges.subscribe(search => {
        this.filteredSkills = of(this.allSkills.filter((item: any) => {
          return item.name.toLowerCase().includes(search)
        }
        ));
      });
  }

  ngOnInit(): void {
    this.job = this.local.getJsonValue('job')
    this.allSkills = this.job.skills;
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }

    this.allSkills.push({ name: skill, experience: '' })
    this.skillCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(
      (skill: any) => skill.toLowerCase().indexOf(filterValue) === 0
    );
  }

  add(event: MatChipInputEvent): void {
    this.showInstructions = false;
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    if (input) {
      input.value = '';
    }

    this.skillCtrl.setValue(null);
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.showInstructions = false;
    const selectedSkill = event.option.viewValue
    this.allSkills.splice(this.allSkills.findIndex((skill: any) => skill.name === selectedSkill), 1);
    this.skills.push(selectedSkill);
    this.compareInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
    /* I don't mind that one result comes before another, so there's no need of using a forkJoin or nesting the service calls */
    this.filterService.getResults(this.job, this.skills).subscribe(fits => {
      this.fits = fits;
      this.loadingFits = false;
    });

    this.filterService.getBestFit(this.job, this.skills).subscribe(bestFit => {
      this.bestFit = bestFit;
      this.loadingBestFit = false;
    });


  }

}
