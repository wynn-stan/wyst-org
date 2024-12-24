export interface ToolsModel {
  logo: string;
  name: string;
  tags: string[];
  socials: {
    twitter?: string;
    product_page?: string;
    youtube?: string;
    linkedin?: string;
  };
  creators: {
    url: string;
    logo: string;
    name: string;
  }[];
  cover_photo: string;
  description_long?: string;
  description_short?: string;
}
