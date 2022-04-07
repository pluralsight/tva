const sanitize = (name) =>
  name
    .replace(/\*/g, 'all-children')
    .replace(/#/g, '$')
    .replace(/\s\s+/g, ' ')
    .replace(/[^a-zA-Z0-9$]/g, '_')
    .replace(/^_+/g, '')
    .replace(/_+$/g, '')

export default sanitize
