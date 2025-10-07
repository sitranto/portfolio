export type Language = 'en' | 'ru';

export type Project = {
    id: string;
    title: string;
    description: string;
    technologies: [];
    github: string;
    isLive?: boolean;
    live?: string;
    featured: boolean;
    imageId: string;
}