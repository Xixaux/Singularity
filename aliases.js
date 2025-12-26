/**
 * Create aliases for the paths
 */
const aliases = (prefix = `src`) => ({
  '@auth': `${prefix}/@auth`,
  '@i18n': `${prefix}/@i18n`,
  '@singularity': `${prefix}/@singularity`,
  '@history': `${prefix}/@history`,
  "@mock-utils": `${prefix}/@mock-utils`,
  '@schema': `${prefix}/@schema`,
  '@': `${prefix}`
});

export default aliases;
