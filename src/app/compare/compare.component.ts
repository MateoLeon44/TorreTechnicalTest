import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FacadeService } from '../services/service-facade.service';
import { TorreService } from '../services/torre/torre.service';
import { FilterService } from '../services/filter/filter.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  providers: [FacadeService, TorreService, FilterService]
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

  subject = new Subject<any>();
  results$: Observable<any>;
  bestFit$: any;

  subjectFits = new Subject<any>();
  resultsFits$: Observable<any>;
  fits$: any;

  minBoundFilter: number;
  maxBoundFilter: number
  fitsByPage: Array<any>;

  constructor(private facadeService: FacadeService) {
    this.selectable = true;
    this.removable = true;
    this.separatorKeysCodes = [ENTER, COMMA];
    this.skills = [];
    this.allSkills = []
    this.fits = [];
    this.fitsByPage = [];
    this.minBoundFilter = 0;
    this.maxBoundFilter = 6;
    this.results$ = this.subject.asObservable();
    this.resultsFits$ = this.subjectFits.asObservable();
    this.showInstructions = true;
    this.loadingBestFit = true;
    this.loadingFits = true;
    this.instructions = [
      'Search for the skills and find people who fit the job',
      'See the best fit for the job regarding their rank, compensation, skills and where the employee lives',
      'Look at other alternatives who match the skills'
    ],
      this.skillCtrl.valueChanges.
        pipe(
          debounceTime(400),
          distinctUntilChanged()
        )
        .subscribe(search => {
          this.filteredSkills = of(this.allSkills.filter((item: any) => {
            return item.name.toLowerCase().includes(search)
          }
          ));
        });
  }

  ngOnInit(): void {
    this.job = this.facadeService.getJsonValue('job');
    this.allSkills = this.job.skills;
    this.bestFit$ = this.results$.pipe(
      switchMap((name: string) => {
        return this.facadeService.getBestFit(this.job, this.skills)
      })
    )

    this.bestFit$
      .subscribe((bestFit: any) => {
        this.bestFit = bestFit;
        this.loadingBestFit = false;
      });

    this.fits$ = this.resultsFits$.pipe(
      switchMap((name: string) => {
        return this.facadeService.getResults(this.job, this.skills)
      })
    )

    this.fits$.subscribe((fits: any) => {
      this.fits = fits;
      this.addFitsToPage();
      this.loadingFits = false;
    })
  }

  remove(skill: string): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }

    this.allSkills.push({ name: skill, experience: '' })
    this.skillCtrl.setValue(null);

    this.subject.next('bestFit');
    this.subjectFits.next('fits');

    if (this.skills.length === 0) {
      this.showInstructions = true;
    }
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
    this.loadingFits = true;
    this.loadingBestFit = true;
    const selectedSkill = event.option.viewValue
    this.allSkills.splice(this.allSkills.findIndex((skill: any) => skill.name === selectedSkill), 1);
    this.skills.push(selectedSkill);
    this.compareInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);

    this.subject.next('bestFit');
    this.subjectFits.next('fits');
  }


  modifyOffset(number: number): void {
    this.fitsByPage = []
    this.minBoundFilter += number;
    this.maxBoundFilter += number;
    this.addFitsToPage();
  }

  addFitsToPage(): void {
    for (let index = this.minBoundFilter; index < this.maxBoundFilter; index++) {
      this.fitsByPage.push(this.fits[index]);
    }
  }

  ngOnDestroy() {
    this.subject.unsubscribe();
    this.subjectFits.unsubscribe();
  }

}
