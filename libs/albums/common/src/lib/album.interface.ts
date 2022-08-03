export enum AlbumKeys {
  Albums = 'albums'
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export type AlbumsResponse = Album[];

