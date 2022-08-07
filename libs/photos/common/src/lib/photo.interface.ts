export enum PhotoKeys {
  Photos = 'photos'
}

export interface Photo extends Record<string, string | number | object> {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string
}

export type PhotosResponse = Photo[];

