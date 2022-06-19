export default () => {
  const { supabase } = useRuntimeConfig().public

  return {
    getImage(image: string) {
      return `${supabase.url}/storage/v1/object/public/images/${image}`
    },
  }
}
