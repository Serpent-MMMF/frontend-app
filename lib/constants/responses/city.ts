import { BaseResponse } from "./base";

export interface City {
  id: string;
  name: string;
}

export type GetCityData = City[];
export type GetCityResponse = BaseResponse<GetCityData>;

export type GetCityDetailData = City;
export type GetCityDetailResponse = BaseResponse<GetCityDetailData>;
