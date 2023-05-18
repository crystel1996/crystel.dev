export type GalleryItem = { src: string; alt: string };


export interface GalleryComponentInterface {
    classGalleryContent?: string;
    classGalleryItem?: string;
    listGalleries: GalleryItem[];
}