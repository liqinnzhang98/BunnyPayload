import { CollectionConfig } from 'payload/types';

const Slideshow: CollectionConfig = {
  slug: 'slideshow',
  labels: {
    singular: 'Slideshow',
    plural: 'Slideshows',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Categories',
      type: 'relationship',
      relationTo: 'categories', // Assuming your categories collection slug is "categories"
      hasMany: true,
      required: true,
    },
    {
        name: 'active', 
        type: 'checkbox',
        defaultValue: true,
      }
  ],
};

export default Slideshow;


