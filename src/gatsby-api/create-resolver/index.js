const resolvers = {
  AWSAppSync_Product: {
    imageFile: {
      type: "File",
      resolve: async (source, args, context, info) => {
        const node = await context.nodeModel.runQuery({
          query: {
            filter: {
              Key: { eq: source.image1 },
            },
          },
          type: "S3Object",
          firstOnly: true,
        })

        if (node && node.imageFile) return node.imageFile
      },
    },
  },
}

module.exports = {
  resolvers,
}
