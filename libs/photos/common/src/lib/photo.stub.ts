import { Photo, PhotosResponse } from "@ziphr-task/photos/common";

export const PHOTOS_RESPONSE_STUB: PhotosResponse = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  }
];

export const PHOTO_STUB: Photo = {
  albumId: 1,
  id: 1,
  title: "accusamus beatae ad facilis cum similique qui sunt",
  url: "https://via.placeholder.com/600/92c952",
  thumbnailUrl: "https://via.placeholder.com/150/92c952"
}

export const PHOTOS_STUB: Photo[] = [PHOTO_STUB];
