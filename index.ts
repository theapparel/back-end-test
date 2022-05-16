import api from './api'

async function main() {
  const data = await api.messages()
  console.log(`Received ${data.nodes.length} messages:`, JSON.stringify(data, null, 2))
}

main()