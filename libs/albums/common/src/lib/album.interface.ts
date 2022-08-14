export enum AlbumKeys {
  Albums = 'albums'
}

export interface Album extends Record<string, string | number | object>{
  userId: number;
  id: number;
  title: string;
}

export type AlbumsResponse = Album[];

export type AlbumResponse = Album;
