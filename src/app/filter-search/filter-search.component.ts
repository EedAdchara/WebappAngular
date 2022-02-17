import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { startWith, Subscription } from 'rxjs';
import { CategoryService } from '../category.service';
import { CategoryResponse } from '../category.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-filter-search',
  templateUrl: './filter-search.component.html',
  styleUrls: ['./filter-search.component.scss'],
})
export class FilterSearchComponent implements OnInit, OnDestroy {
  private subscription?: Subscription;
  private categoriesSubscription?: Subscription;
  keyword = new FormControl(null);
  categories: string[] = [];
  filterCategory: string[] = [];

  get total(): number {
    return this.filterCategory.length;
  }

  constructor(private CategoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoriesSubscription = this.CategoryService.getCategory().subscribe(
      (response) => {
        this.categories = response.categories;
        this.filterCategory = response.categories;
      }
    );

    this.subscription = this.keyword.valueChanges.subscribe((value: string) => {
      this.filterCategory = this.categories.filter((category) => {
        return category.toLowerCase().includes(value.toLowerCase());
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.categoriesSubscription?.unsubscribe();
  }
}
