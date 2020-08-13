export interface ILanguages {
    id: number;
    language_name: string;
    created_at: Date;
};

export interface IProjects {
    id: number;
    language_id: number;
    project_name: string;
    project_description: string;
    image_url?: string;
    created_at: Date;
}