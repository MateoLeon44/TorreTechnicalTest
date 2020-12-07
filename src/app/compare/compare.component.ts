import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { LocalService } from '../services/localstorage/local.service';
import { map, startWith } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  job: any;
  skills: any;
  selectable: boolean;
  removable: boolean;
  filteredSkills: Observable<String[]>
  skillCtrl = new FormControl();
  separatorKeysCodes: number[];
  addOnBlur = false;
  allSkills: any[];

  @ViewChild('compareInput') compareInput: ElementRef;

  constructor(private local: LocalService) {
    this.selectable = true;
    this.removable = true;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.skills = [];
    this.allSkills = []
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
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(
      (skill: any) => skill.toLowerCase().indexOf(filterValue) === 0
    );
  }

  add(event: MatChipInputEvent): void {
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
    this.skills.push(event.option.viewValue);
    this.compareInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);
  }

}
