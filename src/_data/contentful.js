require('dotenv').config();
const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

module.exports = async function () {
  const brandConfig = await client.getEntries({ content_type: 'brandConfig' });
  const person = await client.getEntries({ content_type: 'person' });
  const images = await client.getEntries({ content_type: 'professionalImage', order: 'sys.createdAt' });

  return {
    brand: brandConfig.items[0]?.fields || {},
    info: person.items[0]?.fields || {},
    portfolio: images.items.map(item => ({
      ...item.fields,
      id: item.sys.id,
      url: item.fields.image?.fields?.file?.url ? `https:${item.fields.image.fields.file.url}` : null
    }))
  };
};
