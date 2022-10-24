export default function handler(request, response) {
    const { method } = request;

    if (method === "GET") {
        const { tag } = request.query;

        const results = fetch(`https://alt.edge.mile-two.com/api/tag/${tag}/text`);

        if (!results) {
            return response.status(400).json("Results not found");
        }

        return response.status(200).json(results);
  }
}