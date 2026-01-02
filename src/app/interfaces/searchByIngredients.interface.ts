export interface ApiByIngredients {
  results: RecipesByIngredients[];
  offset: number;
  number: number;
  totalResults: number;
}

export interface RecipesByIngredients {
  id: number;
  title: string;
  image: string;
  imageType: 'jpg' | 'png' | 'gif' | string;
}
