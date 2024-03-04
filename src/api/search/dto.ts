/** @format */

export interface Cate {
  cate_code: string;
  cate_id: string;
  cate_name: string;
  cate_name_cn: string;
  crop_code: string;
  img_url: string;
  latin_name: string;
  level: string;
  parent_id: string;
  plant_cate_id: string;
  sort_order: string;
  species: string;
}

export interface Collection {
  base_id: string;
  cate1: string;
  cate_name_cn: string;
  collect_id: string;
  collecting_date: string;
  collecting_person: string;
  enumber: string;
  family: string;
  genus: string;
  germ_name: string;
  scientific_name: string;
  user_id: string;
}

export interface CommonOption {
  value: string;
  label: string;
}
