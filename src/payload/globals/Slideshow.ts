import { GlobalConfig } from 'payload/types';

const Slideshow: GlobalConfig = {
  slug: 'slideshow',
  label: 'Home Page Slideshow',
  admin: {
    description: 'Configure the slideshow that appears on the home page. You can select multiple categories to display.',
    group: 'Content',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'A descriptive title for this slideshow configuration',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional description of what this slideshow is used for',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      required: true,
      admin: {
        description: 'Select the categories to display in the slideshow. Each category\'s image will be shown.',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Toggle whether this slideshow is currently active on the home page',
      },
    },
  ],
};

export default Slideshow; 