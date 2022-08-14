import { Album, AlbumsResponse } from "@ziphr-task/albums/common";

export const ALBUMS_RESPONSE_STUB: AlbumsResponse = [
  {
    id: 1,
    userId: 1,
    title: "quidem molestiae enim"
  }
];

export const ALBUM_STUB: Album = {
  id: 1,
  userId: 1,
  title: "quidem molestiae enim"
}

export const  ALBUMS_STUB: Album[] = [ALBUM_STUB];
