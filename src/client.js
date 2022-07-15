import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: 'szd8m264',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skAodCRbJq5JpXSZehOcOiP8Exb8E1IlFbwwT38HYNb7qSIaFKkRQYqPsRRBboZEO9nlXvjlsXHaR6bQgXn8R1wIUqZlmcS9SPOKxMf2WfvoSwNJKwPnaZ0XmFos3zb8fsvXlONh0j3Bzl563MJWOBUEvM3XDGl00kVrhcL5wdEMwHMoo0sK',
});


const builder= imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);