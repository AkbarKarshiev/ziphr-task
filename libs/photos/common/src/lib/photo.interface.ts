export enum PhotoKeys {
  Photos = 'photos'
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string
}

export type PhotosResponse = Photo[];

