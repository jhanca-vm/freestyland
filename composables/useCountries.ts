const countries = new Map([
  ['spain', ['España', '🇪🇸']],
  ['argentina', ['Argentina', '🇦🇷']],
  ['peru', ['Perú', '🇵🇪']],
  ['colombia', ['Colombia', '🇨🇴']],
  ['mexico', ['México', '🇲🇽']],
  ['chile', ['Chile', '🇨🇱']],
])

export default () => useState('countries', () => countries)
