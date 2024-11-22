import { IDua } from "./dua.interface";

export interface ICategory {
    id: number;
    cat_name_bn?: string;
    cat_name_en?: string;
    no_of_subcat?: number;
    no_of_dua?: number;
    cat_icon?: string;
    subCategory?: ISubCategory[];
  }
  
  export interface ISubCategory {
    id: number;
    subcat_name_bn?: string;
    subcat_name_en?: string;
    no_of_dua?: number;
    category?: ICategory; 
    duas?: IDua[];
  }