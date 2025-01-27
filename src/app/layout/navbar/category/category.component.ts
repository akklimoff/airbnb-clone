import {Component, inject} from '@angular/core';
import {CategoryService} from './category.service';
import {Category} from './category.model';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-category',
  imports: [
    FaIconComponent
  ],
  templateUrl: './category.component.html',
  standalone: true,
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  categoryService = inject(CategoryService);

  categories: Category[] | undefined;

  currentActivateCategory = this.categoryService.getCategoryByDefault();

  ngOnInit(): void {
    this.fetchCategories();
  }

  private fetchCategories() {
    this.categories = this.categoryService.getCategories();
  }
}
