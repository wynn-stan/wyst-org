export interface EventsModel {
  name: string;
  date: string;
  logo: string;
  tags: string[];
  socials: {
    twitter?: string;
    linkedin?: string;
    youtube?: string;
    website?: string;
  };
  location: string;
  description: string;
  event_images: string[];
  event_cover_image: string;
}
