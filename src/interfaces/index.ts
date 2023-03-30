export interface Song {
  album: {
    title: string;
    cover: string;
    cover_xl: string;
  };
  artist: {
    name: string;
  };
  id: number;
  preview: string;
  title: string;
}
