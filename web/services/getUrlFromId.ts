const getUrlFromId = (ref: string) => {
  // TODO: Change dataset to be production
  if (ref != null) {
    
    const [_file, id, extension] = ref.split('-')
    console.log(ref, `https://cdn.sanity.io/files/0l2udf3d/production/${id}.${extension}`);
    
    return `https://cdn.sanity.io/files/0l2udf3d/production/${id}.${extension}`
  }
}

export default getUrlFromId
