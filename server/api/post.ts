export default defineEventHandler(async () => {
  const sanity = useSanity()
  const query = groq`*[_type == "post"]`
  const slicedQuery = groq`*[_type == "post"][0..2]`
  return await sanity.fetch(query)
})