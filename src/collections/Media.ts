import type { CollectionConfig } from "payload/types";

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        mimeTypes: ['image/*'],
        focalPoint: false,
    },
    fields: [],
}
