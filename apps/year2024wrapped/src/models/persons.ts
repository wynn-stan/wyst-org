export interface PersonsModel {
  name: string;
  tags: string[];
  socials: {
    twitter?: string;
    linkedin?: string;
    portfolio?: string;
    youtube?: string;
  };
  cover_photo: string;
  description: string;
  preview_links: string[];
  profile_photo: string;
  twitter_handle: string;
}
