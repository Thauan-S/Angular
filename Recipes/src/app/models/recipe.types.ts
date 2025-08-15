// Tipos relacionados a receitas

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  cookingTime: number; // em minutos
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  category: RecipeCategory;
  tags: string[];
  image?: string;
  authorId: string;
  authorName: string;
  createdAt: Date;
  updatedAt: Date;
  rating?: number;
  reviews?: Review[];
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  notes?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface RecipeCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
}

export interface CreateRecipeRequest {
  title: string;
  description: string;
  ingredients: Omit<Ingredient, 'id'>[];
  instructions: string[];
  cookingTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  categoryId: string;
  tags: string[];
  image?: File;
}

export interface UpdateRecipeRequest extends Partial<CreateRecipeRequest> {
  id: string;
}

export interface RecipeFilters {
  category?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  maxCookingTime?: number;
  tags?: string[];
  search?: string;
}

export interface RecipeSearchParams {
  page: number;
  limit: number;
  filters?: RecipeFilters;
  sortBy?: 'title' | 'createdAt' | 'rating' | 'cookingTime';
  sortOrder?: 'asc' | 'desc';
}

